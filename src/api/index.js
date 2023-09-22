import { postAction ,getAction} from "@/utils/resquest";

//登录
export const login = (accesstoken) => postAction('/accesstoken', {accesstoken})

// 文章列表
// 参数  page  limit  tab
export const getTopics = (params) => getAction('/topics', params)


// 详情页
export const getTopicsDetail= (id) => getAction('topic/'+ id)

//用户信息详情
export const getUserInfo = loginname => getAction('user/' + loginname) 