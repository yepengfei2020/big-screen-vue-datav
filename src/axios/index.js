import axios from 'axios'

let request = axios.create({
  baseURL: 'adminapi',
  headers: {
    'Access-Control-Allow-Origin':'*',
    'access-control-allow-headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS',
    'X-Powered-By':'3.2.1',
    'Content-Type':'application/json;charset=utf-8'
          },
  timeout: 30000
})

// http request 拦截器
request.interceptors.request.use(config => {
  const UC_TOKEN = sessionStorage.getItem('uc-token')
  if (UC_TOKEN && !config.url.includes('login')) {
    config.headers.common['uc-token'] = UC_TOKEN
  }
  return config
}, error => {
  return Promise.reject(error)
})

// http response 拦截器
request.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error)
  return Promise.reject(error)
})

// eslint-disable-next-line no-undef
export default request
