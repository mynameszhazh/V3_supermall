import axios from 'axios'
import showStatus from '@/utils/errcode.js'

export function request(config) {
  const instance = axios.create({
    // 这个里面还可以配置一些请求头之类的东西，就像是一些不同源的东西
    // baseURL: 'http://152.136.185.210:7878/api/m5',
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000,
    // 跨域的时候需要使用凭证，默认是可以跨域的？
    // withCredentials: true,

  })
  // 请求拦截器
  instance.interceptors.request.use(config => {
    // 里面可以做我要处理的一些操作
    return config
  }, err => {
    err.data = {}
    err.data.msg = '服务器异常，请联系管理员！'
    return Promise.resolve(err)
  })
  // 响应拦截器
  instance.interceptors.response.use((response) => {
    // 通常会得到一些东西
    const status = response.status
    let msg = ''
    if (status < 200 || status >= 300) {
      // 处理http错误，抛到业务代码
      msg = showStatus(status)
      if (typeof response.data === 'string') {
        // 这里就是做了一个兼容的操作而已没有什么别的东西在里面
        response.data = {msg}
      } else {
        response.data.msg = msg
      }
    }
    return response.data
  }, (error) => {
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
    return Promise.resolve(error)
  })
  // 这个才是真正的发送一个我的请求 这个instance就是一个promise的实例这个样子的
  return instance(config)
}




