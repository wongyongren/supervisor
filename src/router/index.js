import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Supervisor from '../views/Supervisor.vue'
import Report from '../views/Report.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Supervisor',
    component: Supervisor
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
