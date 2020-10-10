import request from '@/axios/index'

export function getTitle () {
  return request({
    url: '/api/getTitle',
    method: 'get'
  })
}
