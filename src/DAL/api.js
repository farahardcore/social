import * as axios from "axios";

const instance =  axios.create({
    withCredentials : true,
    baseURL : ("https://social-network.samuraijs.com/api/1.0/"),
    headers : {
        "API-KEY":"10a0b773-bc02-42ab-8faa-a84175b9a08b"
    }
});


export const usersAPI = {
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
               return response.data;
            });
    },
    pageChanged(pageNumber,pageSize){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    setFollow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            })
    },
    setUnfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            })
    }
};