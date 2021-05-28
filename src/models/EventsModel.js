import request from "./request";

export default{
    async list() {
        const data = await request("get","http://ec2-54-180-118-162.ap-northeast-2.compute.amazonaws.com:3001/api/getEvents");
        console.log(data)
        return data;
    }
}