import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: () => import('@/views/coaches/CoachesList.vue') },
        {
            path: '/coaches/:id',
            component: () => import('@/views/coaches/CoachDetail.vue'),
            props: true,
            children: [
                { path: 'contact', component: () => import('@/views/requests/ContactCoach.vue') }
            ]
        },
        { path: '/register', component: () => import('@/views/coaches/CoachRegistration.vue'), meta: {requiresAuth: true} },
        { path: '/requests', component: () => import('@/views/requests/RequestsReceived.vue'), meta: {requiresAuth: true} },
        { path: '/auth', component: () => import('@/views/auth/UserAuth.vue'), meta: {requiresUnauth: true} },
        { path: '/:notFound(.*)', component: () => import('@/views/NotFound.vue') }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth');
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/coaches');
    } else {
        next();
    }
});

export default router
