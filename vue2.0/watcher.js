/**
 * 监视类
 * 用于更新
 * 每一个依赖不仅针对于一个单个的属性，每个依赖当中还有可能会有多个watcher，key出现几次就会有几个watcher。
 */
class Watcher {
    constructor(vm, key, callback) {
        //将当前watcher实例指定到Deep类的静态属性target里 //用于与Deep类通信
        this.vm = vm
        this.key = key //data中属性名
        this.callback = callback //回调 触发视图更新
        Deep.target  = this
        this.oldValue =vm[key] //触发 get =>addSub
        Deep.target  = null
        // console.log("进入观察者",key);
    }

    update() {
        const newValue = this.vm[this.key]
        if (this.oldValue===newValue) {
            return
        }
        //更新视图回调逻辑
        this.callback(newValue)
    }
}