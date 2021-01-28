function request(options) {
    let xhr = new XMLHttpRequest()
    xhr.open(options.method, options.url, true)
    for (let key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key])
    }
    xhr.send(options.data);
    let promise= new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr);
                } else {
                    reject(xhr);
                } // console.log(result, "gggg");
            }
        };
    });
    return promise
}

export default request