/** When your routing table is too long, you can split it into small modules**/

import Layout from "@/views/layout/Layout";

const userRouter = {
  path: "/user",
  component: Layout,
  redirect: "/user/list",
  name: "user",
  meta: {
    title: "user",
    icon: "table"
  },
  children: [
    {
      path: "list",
      component: () => import("@/views/user/list"),
      name: "list",
      meta: { title: "list" }
    }
  ]
};
export default userRouter;
