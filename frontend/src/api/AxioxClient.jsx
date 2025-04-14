import axios from 'axios'
export const myaxiox= axios.create({
    baseURL:'http://localhost:8000/api'
})
myaxiox.interceptors.request.use((req)=>{
const token=localStorage.getItem('token');
req.headers.Authorization=`Bearer ${token}` 
return req;
})

