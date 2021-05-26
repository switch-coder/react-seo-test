import axios from "axios";

export default async function request(method, url, data, headers) {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const result = await axios({method,url,data,headers});

    return result.data
}