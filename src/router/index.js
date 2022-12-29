import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'



const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/videos',
			component: () => import('../views/Videos.vue')
		},
		{
			path: '/travel',
			component: () => import('../views/Travel.vue')
		}
	],
})

export default router