import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3008',
  timeout: 5000
})

instance.interceptors.response.use(res =>{
  return res.data
})

// get传递参数一般是直接在地址栏  ?  后面拼上参数
// 比如   /books?pageNum=2&pageSize=10
// 请求的时候params就会自动在地址栏拼接
export const getAction = (url,data) =>instance({
  method: 'GET',
  url,
  params:data,
// headers
})
export const postAction = (url,data) => instance({
  method:'POST',
  url,
  data,
// headers
})

export const deleteAction = (url,data) => instance({
  method:'DELETE',
  url,
  data,
// headers
})

export const patchAction = (url,data) => instance({
  method:'PATCH',
   url,
   data,
// headers
})

export default instance
