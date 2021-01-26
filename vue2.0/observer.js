class Observer {
    constructor(data) {
        this.walk(data)
    }
    walk(data) {
        if (!data || typeof data !== 'object') {
            return
        }
        //遍历该对象
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }
    //响应式数据
    defineReactive(object, key, value) {
        let dep = new Deep()
        if (typeof value == 'object') {
            this.walk(value)
            //递归解决数据嵌套问题
        }
        let that=this
        Object.defineProperty(object, key, {
            get() {
                // 收集依赖
                Deep.target && dep.addSub(Deep.target)
                return value
            },
            set(newValue) {
                if (newValue == value) {
                    return
                }
                value = newValue
                that.walk(newValue)
                dep.notify()
                console.log(`${key}属性的值改变为${newValue}了`);
            }
        })
    }
}