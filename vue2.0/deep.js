/**
 * 收集 watcher
 * 用于管理dep依赖以及dep通知
 * Deep的target属性即是 Wacther
 */
class Deep {
    constructor() {
        //存放依赖
        this.subs = [] //Watcher
    }
    //添加观察
    addSub(sub) {
        sub&&sub.update&&this.subs.push(sub)
    }
      //通知
    notify() {
        // console.log(this.subs);
      
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}