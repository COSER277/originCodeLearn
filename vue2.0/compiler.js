/**
 *核心 编译器
 *
 * @class Compiler
 */
class Compiler {
    constructor(vm) {
        //el可能是个选择器、一个字段串、dom
        this.vm = vm
        this.$el = vm.$el
        this.compile(this.$el)
        // this.node2Fragment(this.$el)
        // console.log("进入编译者");
    }
    /**
     *转换模板内容为代码片段
     *
     * @param {*} el
     * @return {*} 
     * @memberof Compiler
     */
    node2Fragment(el) {
        const fragment = document.createDocumentFragment(); //创建代码片段
        //将el中的所有子元素搬家到 创建代码片段的fragment中
        let child;
        while (child = el.firstChild) {
            fragment.appendChild(child)
        }
        //返回 代码片段
        return fragment
    }

    /**
     *执行编译过程实现
     *遍历代码片断，判断是元素对象还是插值对象，对应做的相应的操作，
     *这个时候由于遍历对象中也可能会包含子节点，
     *所以要通过判断el.childNodes节点是否存在来做递归判断
     * @param {*} el
     * @memberof Compiler
     */
    compile(el) {
        const childNodes = el.childNodes;
        // console.log(el);
        Array.from(childNodes).forEach(child => {
            //判断元素类型
            if (this.isElement(child)) {
                //元素
                this.compileElement(child)
            } else if (this.isText(child)) {
                //插值
                // 调用方法编译
                this.compileText(child);
            }
            if (child.childNodes && child.childNodes.length > 0) {
                //递归子节点
                this.compile(child)
            }
        })
    }
    //编译文本
    compileText(el) {
        // 定义表达式正则验证规则
        let textReg = /\{\{(.+?)\}\}/;
        // 表达式解析
        let value = el.textContent;
        // 按照规则验证内容
        if (textReg.test(value)) {
            // 获取分组内容
            let key = RegExp.$1.trim();
            el.textContent = value.replace(textReg, this.vm[key])
            // 创建 Watcher对象
            //当数据改变时更新视图
            new Watcher(this.vm, key, (newValue) => {
                el.textContent = newValue
            })
        }

    }
    //编译模板  
    compileElement(el) {
        let attrs = el.attributes
        Array.from(attrs).forEach(attr => {
            let attrName = attr.name
            if (this.isDirective(attrName)) {
                // 4. 收集
                let type = attrName.substr(2); // c-text
                // 指令的值就是表达式
                let expr = attr.value;
                // 解析指令
                this.update(el, expr, type);
            }
        })
    }
    update(node, key, attrName) {
        // 1. 找到更新方法
        let updaterFn = this[attrName + "Updater"];
        // 执行方法
        updaterFn && updaterFn.call(this,node, this.vm[key], key);
    }

    //工具类--指令更新方法
    textUpdater(node, value, key) {
        node.textContent = value
        // console.log(this);
        // console.log(key,value);
        //创建Watcher对象 当数据更新时更新视图
        new Watcher(this.vm, key, (newValue) => {
            node.textContent = newValue
        })
    }
    // 解析model指令
    modelUpdater(node, value, key) {
        node.value = value
    
        //创建Watcher对象 当数据更新时更新视图
        new Watcher(this.vm, key, (newValue) => {
            node.value = newValue
        })

        //双向绑定
        node.addEventListener('input', (e) => {
            // console.log(this);
            this.vm[key] = node.value
        })
    }
    /****
     * 辅助函数
     * 
     */
    //判断是否文档元素
    isElement(el) {
        // console.log(el);
        return el.nodeType === 1
    }
    //判断是否插值元素
    isText(el) {
        // console.log(el);
        return el.nodeType === 3

    }
    //是否有指令
    isDirective(attrName) {
        // 判断属性是否是指令
        return attrName.indexOf('c-') >= 0;
    }
}