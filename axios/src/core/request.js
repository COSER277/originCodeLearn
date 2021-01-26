function request(options) {

    let xhr=new XMLHttpRequest()
    xhr.open(options.method,options.url,true)
    for (let key in options.headers) {
        xhr.setRequestHeader(key,options.headers[key])
    }
    xhr.send(options.data);
}

export default request