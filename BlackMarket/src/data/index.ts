import { fly } from "./api";

// 获取顶部tab分类
export let getCategories = () => {
  return fly.request("api/shop/categories");
};

// 获取tab详情
export let getCategoryProduct = id => {
  return fly.request(`api/shop/sub-category-products/${id}`);
};

// 搜索接口
export let search = q => {
  return fly.request("api/shop/search-product", { q });
};
