const {
    Collects
} = require("./mongo")

class Conmon {
    constructor() {

    }
   /**
    * 根据条件对象查询条件列表数据
    * @param {*} model 模型
    * @param {*} options 条件
    * @param {*} Pager 分页
    */
    async selectByOpts(model, options, Pager = {
        PageNumber: 1,
        PageSize: 0
    }) {
        let _this = this
        if (typeof options == 'object' && typeof Pager == 'object') {
            return new Promise(async (resolve, reject) => {
                try {
                    console.log(Pager);
                    const result = await Collects[model].find().where(options)
                        .skip((Pager.PageNumber - 1) * (Pager.PageSize))
                        .limit(Pager.PageSize == 0 ? false : Pager.PageSize).populate()
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
            })
        } else {
            throw new Error('options argument must be is a object!');
        }
    }
    /**
     * 根据模型的主键 _id 值查询某一文档数据
     * @param {*} model 
     * @param {*} key 
     */
    async selectById(model, key) {
        if (typeof key == 'string' || 'number') {
            return new Promise(async (resolve, reject) => {
                try {
                    const result = await db[model].findById(key)
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
            })
        } else {
            throw new Error('options argument must be is a string or number!');
        }
    }
    /**
     * 插入文档
     * @param {*} model 模型
     * @param {*} doc 文档
     */
    async insertOne(model, doc) {
        if (typeof doc == 'object') {
            return new Promise(async (resolve, reject) => {
                try {
                    const result = await Collects[model].insertMany(doc)
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
            })
        } else {
            throw new Error('doc argument must be is a object!');
        }
    }
    /**
     * 根据条件删除文档
     * @param {*} model 模型
     * @param {*} options  条件对象
     */
    async deleteByOpt(model, options) {
        if (typeof options == 'object') {
            return new Promise(async (resolve, reject) => {
                try {
                    const result = await Collects[model].deleteOne(options)
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
            })
        } else {
            throw new Error('options argument must be is a object!');
        }
    }
    /**
     * 根据主键 _id 删除文档
     * @param {*} model 模型
     * @param {*} key _id
     */
    async deleteById(model, key) {
        if (typeof key == 'string' || 'number') {
            return new Promise(async (resolve, reject) => {
                try {
                    const result = await Collects[model].findByIdAndRemove(key)
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
            })
        } else {
            throw new Error('options argument must be is a string or number!');
        }
    }
    /**
     * 根据条件修改文档
     * @param {*} model 模型
     * @param {*} options 条件对象
     * @param {*} doc 更新的文档（可单一属性，可全部属性）
     */
    async updateByOpt(model, options, doc) {
        if (typeof options == 'object') {
            return new Promise(async (resolve, reject) => {
                try {
                    const result = await Collects[model].findOneAndUpdate(options, doc)
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
            })
        } else {
            throw new Error('options argument must be is a object!');
        }
    }
}


let opertor = new Conmon()
module.exports = opertor