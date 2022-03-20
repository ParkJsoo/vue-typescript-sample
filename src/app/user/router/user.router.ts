const UserRouter = [
  {
    path     : '/user',
    component: () => import(/* webpackChunkName: "user-list" */ '@/app/user/view/user-list.vue')
  },
  {
    path: '/user/:id',
    component: () => import(/* webpackChunkName: "user-detail" */ '@/app/user/view/user-detail.vue')
  }
];

export default UserRouter;
