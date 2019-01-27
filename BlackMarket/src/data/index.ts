import {fly} from './api';

// 获取顶部tab分类
export let getCategories = ()=>{
  return fly.request('api/shop/categories')
}
