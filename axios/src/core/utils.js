class Utils {
    merge(target,source) {
        for (let  key in source) {
           if( typeof source[key] === 'object'){//是object 说明有嵌套属性
                if(!target[key]){ //目标没有这属性
                    target[key]={}
                }   
                this.merge(target[key],source[key])
           }else{
               //
               target[key]=source[key]
           }            
        }
    }
    assert(exp, msg = 'assert faild') {
        if (!exp) {
          throw new Error(msg);
        }
      }
}

export default new Utils()