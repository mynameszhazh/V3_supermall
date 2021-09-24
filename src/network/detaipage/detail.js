import { request } from '/network/request'

export function detailData (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
