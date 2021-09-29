import { request } from '../request'

export function detailData (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods {
  // 注意了这个constructor  是不能写错的  这个玩意要是写错了就会执行不了这个玩意了 就变得没有那么有用了
  constructor (itemInfo, columns, services) {
    // 标题
    this.title = itemInfo.title
    // 描述
    this.desc = itemInfo.desc
    // 新价格
    this.newPrice = itemInfo.price
    // 旧价格
    this.oldPrice = itemInfo.oldPrice
    // 折扣
    this.discount = itemInfo.discountDesc
    // 折后价格
    this.realPrice = itemInfo.loeNowPrice
    // 书面上的一个栏目
    this.columns = columns
    // 服务
    this.services = services
  }
}
