const HomeRouter = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/app/home/view/home.vue')
  },
];

export default HomeRouter;
