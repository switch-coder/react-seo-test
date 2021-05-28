import request from "./request";

export default{
    async getEventDetail(id) {
        const data = await request("get",`http://ec2-54-180-118-162.ap-northeast-2.compute.amazonaws.com/api/eventDetail?id=${id}`);
        console.log(data)
        return data;
    }
}