import { get, post, getWithoutParams, postWithoutParams } from '@/api/axios'
//验证token
export const authorized = () => postWithoutParams('/user/authorized')
//注册
export const signUp = (params: any) => post('/api/reg', params)
//登录
export const signIn = (params: any) => post('/api/log', params)
//上传头像
export const userAvatarUpdate = (params: any) => post('/user/avatar', params)
//上传昵称
export const userNicknameUpdate = (params: any) => post('/user/nickname', params)
//上传个签
export const userNameTagUpdate = (params: any) => post('/user/usertag', params)
//发布文章
export const articlePost = (params: any) => post('/user/artPost', params)
//发布评论
export const commentPost = (params: any) => post('/user/cmtpost', params)
//获取评论
export const commentList = (params: any) => get('/api/cmtlist', params)
//获取文章
export const articleList = () => getWithoutParams('/api/artlist')
//更新用户信息
export const getUser = () => getWithoutParams('/user/getuser')
//获取用户个人文章
export const userArticle = () => getWithoutParams('/user/userarticle')