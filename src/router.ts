import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

function findAllRouter() {
  const context: __WebpackModuleApi.RequireContext = require.context('@/', true, /\.router\.ts$/);
  const allRouter: RouteConfig[] = [];

  context.keys().forEach((fileName: string) => context(fileName).default.forEach((routerItem: RouteConfig) => allRouter.push(routerItem)));

  return allRouter;
}

const routes: Array<RouteConfig> = findAllRouter();

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
