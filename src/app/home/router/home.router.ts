const HomeRouter = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/app/home/view/Home.vue')
  },
];

export default HomeRouter;
