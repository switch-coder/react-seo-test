import request from "./request";

export default{
    async list() {
        const data = await request("get","http://localhost:3001/api/getEvents");
        console.log(data)
        return data;
    }
}