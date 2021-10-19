import { request } from '../request'

export function detailData (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommend () {
  return request({
    url: '/recommend'
  })
}
