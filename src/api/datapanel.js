import request from '@/axios/index'
// 汇总数据
export function getSummaryData (type, comCode) {
  return request({
    url: '/home/summary?comCode=' + comCode + '&type=' + type,
    method: 'get'
  })
}
// 排行榜
export function getRankingData (type, comCode, field, comLevel) {
  return request({
    url: '/home/ranking?comCode=' + comCode + '&field=' + field + '&type=' + type + '&comLevel=' + comLevel,
    method: 'get'
  })
}
// 登录
export function login (username, password) {
  return request({
    url: '/auth/login',
    method: 'post',
    params: {
      'username': username,
      'password': password,
      'type': '1'
    }
  })
}
// noauth登录
export function noauthlogin (code) {
  return request({
    url: '/noauth/loginWX',
    method: 'post',
    params: {
      'code': code
    }
  })
}

// 汇总数据2
export function querySummaryData (data) {
  return request({
    url: '/index/count',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 排行榜2
export function queryRankingData (data) {
  return request({
    url: '/index/rank',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 增员页面上半部分查询
export function queryIndexUp (data) {
  return request({
    url: '/reinforcement/indexUp',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 增员页下半部分查询---下辖
export function queryRankUnder (data) {
  return request({
    url: '/reinforcement/ranks',
    method: 'post',
    data: data,
    headers: {
      'content-Type': 'application/json'
    }
  })
}
// 首页上半部分列表
export function queryMainIndexUp (data) {
  return request({
    url: '/index/indexUp',
    method: 'post',
    data: data,
    headers: {
      'content-Type': 'application/json'
    }
  })
}
// 首页下半部分列表--机构
export function queryOrggRank (data) {
  return request({
    url: '/index/orggRank',
    method: 'post',
    data: data,
    headers: {
      'content-Type': 'application/json'
    }
  })
}
// 首页下半部分列表--产品
export function queryOrgCpRank (data) {
  return request({
    url: '/index/orgCpRank',
    method: 'post',
    data: data,
    headers: {
      'content-Type': 'application/json'
    }
  })
}
