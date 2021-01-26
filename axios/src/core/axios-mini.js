

import utils from './utils'
import _default from './default'
import request from './request'


class Axios {
    constructor(config) {
        let _this = this;
        return new Proxy(request, {
            apply(fn, thisArg, args) {
                console.log(fn, thisArg, args);
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
    get() {

    }
    post() {

    }

    delete() {

    }
}

Axios.create = Axios.prototype.create = (params) => {
    let axios = new Axios()

    let res = {
        ...JSON.parse(JSON.stringify(_default))
    }
    utils.merge(res,params)
    axios.default = res;
    return axios
}




export default Axios.create()




