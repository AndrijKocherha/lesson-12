import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkersPage from '../views/WorkersPage.vue'
import WorkerEditor from '../views/WorkerEditor.vue'
import CandidatesPage from '../views/CandidatesPage.vue'
import InterviewsPage from '../views/InterviewsPage.vue'
const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
   },
   {
      path: '/workers',
      name: 'workers',
      component: WorkersPage,
   },
   {
      path: '/worker-edit/:id',
      name: 'worker-edit',
      component: WorkerEditor,
   },
   {
      path: '/candidates',
      name: 'candidates',
      component: CandidatesPage,
   },
   {
      path: '/interviews',
      name: 'interviews',
      component: InterviewsPage,
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
})

export default router
