import {request} from "/network/request";

export function getHomeMuiltidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods (type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}