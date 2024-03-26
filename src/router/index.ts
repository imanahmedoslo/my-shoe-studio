import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductListPageView from '../views/ProductListPageView.vue'
import ProducDetailPageView from '../views/ProducDetailPageView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:articleNumber',
      name: 'ProductDetailPage',
      component: ProducDetailPageView
    },
    {
      path: '/productList',
      name: 'ProductListPage',
      component: ProductListPageView
    },
    {
      path: '/Checkout',
      name: 'Checkout',
      component: CheckoutView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
