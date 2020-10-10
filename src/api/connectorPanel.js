import request from '@/axios/index'
// 首页当日当月当年接口
export function getHomeAddData (data) {
  return request({
    url: '/index/indexUp',
    method: 'post',
    data: data,
    headers: {
      'content-Type': 'application/json'
    }
  })
}

export function getTimeAndAchievement (data) {
  return request({
    url: '/index/targetRate',
    method: 'post',
    data: data,
    headers: {
      'content-Type': 'application/json'
    }
  })
}
