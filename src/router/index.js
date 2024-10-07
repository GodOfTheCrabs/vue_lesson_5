// 1 Налаштуйте базові маршрути для декількох компонентів у вашому додатку.

import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../components/Posts.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Form from '@/components/Form.vue'
import PostInfo from '@/components/PostInfo.vue';
import NotFoundPage from '@/components/NotFoundPage.vue';
import AdminPanel from '@/components/AdminPanel.vue';

function isAuthenticated() {
    return !!localStorage.getItem('authToken');
}

function isAdmin() {
    return !!localStorage.getItem('adminToken');
}

const routes = [
    {
        path: '/posts',
        component: Posts,
        meta: {
            sharedData: 'Info from posts',
            requiresAuth: true
        }
    },
    {
        // 2 Створіть маршрут, який використовує динамічний параметр, і виводьте його в компоненті.
        path: '/hello-world/:id',
        name: 'hello',
        component: HelloWorld,
        meta: {
            sharedData: 'Info from hello world',
            requiredAuth: false
        }
    },
    {
        path: '/',
        name: 'login',
        component: Form
    },
    {
        path: '/post-info/:id',
        component: PostInfo,
        props: true
    },
    // 8 Реалізуйте "404 Not Found" маршрут і сторінку, яка відображається, коли користувач переходить на неіснуючий маршрут.   
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundPage
    },
    {
        path: '/admin-page',
        component: AdminPanel,
        meta: {
            requiresAuth: true,
            isAdmin: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

// 5 Додайте navigation guards для захисту маршрутів від неавторизованих користувачів.

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth){
        if(!isAuthenticated()) {
            next({name: 'not-found'})
        } else if(to.meta.isAdmin && !isAdmin()) {
            next({name: 'not-found'})
        }
        else (
            next()
        )
    }
    else {
        next()
    }
})

export default router