import {request} from './request.js'
//将home中所有要请求到的url在这里封装，避免耦合
export function  getHomeMultiData(){
    return request({
        url:'/home/multidata'
    });
}

export function  getHomegoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    });
}
