import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductListPageView from '../views/ProductListPageView.vue'
import ProducDetailPageView from '../views/ProducDetailPageView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import DashboardView from '../views/backOffice/DashBoardView.vue'
import OrdersListView from '@/views/backOffice/OrdersListView.vue'
import OrderDetailView from '@/views/backOffice/OrderDetailView.vue'
import SignInView from '@/views/SignInView.vue'
import CreateProduct from '@/views/backOffice/CreateProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProductListPage',
      component: ProductListPageView
    },
    {
      path: '/product/:articleNumber',
      name: 'ProductDetailPage',
      component: ProducDetailPageView
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
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignInView
    },
    // BackOffice routes
    {
      path: '/BO/Dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: {
        backOffice: true
      }
    },
    {
      path: '/BO/CreateProduct',
      name: 'CreateProduct',
      component: CreateProduct,
      meta: {
        backOffice: true
      }
    },
    {
      path: '/BO/OrderList',
      name: 'OrderList',
      component: OrdersListView,
      meta: {
        backOffice: true
      }
    },
    {
      path: '/BO/OrderDetail/:orderId',
      name: 'OrderDetailView',
      component: OrderDetailView,
      meta: {
        backOffice: true
      }
    }

  ]
})

export default router
