import utils from './utils'
import _default from './default'
import request from './request'


class Axios {
    constructor() {
        let _this = this;
        return new Proxy(request, {
            apply(fn, thisArg, args) {
                let options = _this._preprocessArgs("get", args);
                _this._request(options)
            },
            set(data, name, value) {
                _this[name] = value
                return true;
            },
            get(data, name) {
                return _this[name];
            },
        });
    }
    _preprocessArgs(method, ...args) {
        let options;
        console.log("请求方式", method);
        if (args.length == 1 && typeof args[0] == 'object') {
            options = {
                ...args[0][0],
                method,
            };
        } else {
            return undefined;
        }

        // console.log(options);
        return options;
    }
    _request(options) {
        // console.log(options, '请求参数');
        let _headers = this.default.headers //保留this.default.headers
        delete this.default.headers //删除 this.default.headers
        this.default.method = options.method
        utils.merge(options, this.default); //融合 设置得headers 
        this.default.headers = _headers //恢复this.default.headers
        //  baseUrl 合并
        options.url = options.baseUrl + options.url
        delete options.baseUrl
        // 发起真正XML请求
        //调用request.js暴露函数
        return new Promise((resolve, reject) => {
            return request(options).then(
                xhr => {
                    resolve({
                        status: xhr.status,
                        data: JSON.parse(xhr.response)
                    })
                }
            ).catch(xhr => {
                reject({
                    status: xhr.status,
                    data: JSON.parse(xhr.response)
                })
            })
        })
    }

    get(...args) {
        let options = this._preprocessArgs('get', args);
        options.method = "get"

        if (!options) {
            if (args.length == 2) {
                utils.assert(typeof args[0] == 'string', 'args[0] must is string');
                utils.assert(
                    typeof args[1] == 'object' &&
                    args[1] &&
                    args[1].constructor == Object,
                    'args[1] must is JSON',
                );

                options = {
                    ...args[1],
                    url: args[0],
                    method: 'get',
                };
                console.log(options);
            } else {
                utils.assert(false, 'invaild args');
            }
        }
        return this._request(options);
    }
    post(...args) {
        // console.log("POST");
        let options = this._preprocessArgs('post', args);
        options.method = "post"
        return this._request(options);
        if (!options) {}
    }

    delete(...args) {
        let options = this._preprocessArgs('delete', args);

        if (!options) {}
    }
}

Axios.create = Axios.prototype.create = (params = {}) => {
    let axios = new Axios()

    let res = {
        ...JSON.parse(JSON.stringify(_default))
    }
    utils.merge(res, params)
    axios.default = res;
    return axios
}




export default Axios.create()