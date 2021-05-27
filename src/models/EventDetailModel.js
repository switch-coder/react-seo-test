import request from "./request";

export default{
    async getEventDetail(id) {
        const data = await request("get",`http://localhost:3001/api/eventDetail?id=${id}`);
        console.log(data)
        return data;
    }
}