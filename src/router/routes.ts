import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path:'/',
    component: () => import('src/layouts/main_layout/index.vue'),
    children: [
      { path: '', component: () => import('src/pages/home/index.vue'), name:'Home' }
    ]
  },
  {
    path: '*',
    component: () => import('pages/not_found/index.vue')
  }
];

export default routes;
