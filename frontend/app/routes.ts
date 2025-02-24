const routes = {
  home: "/",
  login: "/auth/login",
  register: "/auth/register",
  resetPassword: "/auth/reset",
  adminDashboard: "/admin/dashboard",
  cart: "/cart",
  checkout: "/checkout",
  payment: "/payment",
  orderConfirm: "/order/confirm",
  productList: "/product/list",
  productDetail: (id: string) => `/product/${id}`,
  profile: "/profile",
  search: "/search",
  wishlist: "/wishlist",
};

export default routes;
