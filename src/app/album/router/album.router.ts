const AlbumRouter = [
  {
    path     : '/album',
    name     : 'Album',
    component: () => import(/* webpackChunkName: "album" */ '@/app/album/view/album-list.vue')
  },
  {
    path: '/album/:id',
    component: () => import(/* webpackChunkName: "album-detail" */ '@/app/album/view/album-detail.vue')
  }
];

export default AlbumRouter;
