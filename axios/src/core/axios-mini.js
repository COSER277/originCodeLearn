import utils from './utils'
import _default from './default'
import request from './request'


class Axios {
    constructor() {
        let _this = this;
        return new Proxy(request, {
            apply(fn, thisArg, args) {
                let options = _this._preprocessArgs(undefined, args);
                if (!options) {
                    if (args.length == 2) {
                        assert(typeof args[0] == 'string', 'args[0] must is string');
                        assert(
                            typeof args[1] == 'object' &&
                            args[1] &&
                            args[1].constructor == Object,
                            'args[1] must is JSON',
                        );

                        options = {
                            ...args[1],
                            url: args[0],
                        };
                        console.log(options);
                    } else {
                        assert(false, 'invaild args');
                    }
                }
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
        console.log(`参数长度${args.length},${typeof args[0]}`);

        if (args.length == 1 && typeof args[0] == 'string') {
            options = {
                method,
                url: args[0]
            };
            console.log("参数是String");

        } else if (args.length == 1 && typeof args[0] == 'object') {
            options = {
                ...args[0],
                method,
            };
            console.log("参数是对象");
        } else {
            return undefined;
        }

        return options;
    }

    get(...args) {
        console.log("GET");
        let options = this._preprocessArgs('get', args);
        console.log(options);

        if (!options) {
            console.log(args);
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
    }
    post(...args) {
        console.log("POST");
        let options = this._preprocessArgs('post', args);

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