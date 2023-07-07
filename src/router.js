import { createRouter, createWebHistory } from 'vue-router';

import CandoDetail from './pages/Candos/CandoDetail.vue';
import CandoList from './pages/Candos/CandoList.vue';
import AddCando from './pages/Candos/AddCando.vue';

import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/cando' },
    { path: '/cando', component: CandoList },
    {
      path: '/cando/:id',
      component: CandoDetail,
      props:true
    },
    { path: '/add', component: AddCando },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
