export class HttpService {
    getData() {
        let resp = fetch("http://localhost:6007/api/products", {
            method: 'GET'
        });
        return resp;
    }
    postData(prd) {
        let resp = fetch("http://localhost:6007/api/products", {
            method: 'POST',
            body: JSON.stringify(prd),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp;
    }
}

// export default HttpService;