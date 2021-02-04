const MxMessage={
    '中国':'China',
}
const EsMessage={
    '中国':'Hello，China'
}
class I18n{
    constructor(options){
        this.locale=options.locale
        this.messages=options.messages
        this.lang=null
        this.setLocale(options.locale)
        this.$t=this.translate
    }
    translate(key){
        let el=this.lang[key]
        return key&&el;     
    }
    setLocale(lang){
        this.locale=lang
        this.lang=this.messages[this.locale]
    }
}

const i18n=new I18n({
    locale:"mx",
    messages:{
        'mx':MxMessage,
        'en':EsMessage
    }
})
console.log("初始化语言",i18n.locale);
var i1=i18n.translate('中国')
console.log(i1);

i18n.setLocale('en')
console.log("设置语言",i18n.locale,i18n.lang);

var i2=i18n.translate('中国')
console.log(i2);

var i3=i18n.$t('中国')
console.log(i3);