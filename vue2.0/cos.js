class Cos {
    constructor(options) {
        this.$options = options || {}
        this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
        this.$data = options.data || {};
        this._init(this.$data)
        new Observer(this.$data)
        new Compiler(this)
    }
    _init(data) {
        let keys = Object.keys(data)
        keys.forEach(key => {
            Object.defineProperty(this, key, {
                //设置为true,表示可以被遍历
                enumerable: true,
                //可以删除属性,或者修改其特性(writable,configurable,enumerable)
                configurable: true,
                //获取值的时候触发
                get() {
                    //获取到的值返回出去
                    // console.log(data[key]);
                    return data[key]
                },
                //修改值的时候触发
                set(value) {
                    if (value == data[key]) {
                        return
                    }
                    //改变值的时候,给获取到的值赋值新值value
                    data[key] = value

                }

            })
        })
    }
}