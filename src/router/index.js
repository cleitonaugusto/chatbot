import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/chat'
    },
    { 
        path: '/chat', 
        component: () => import('./../views/chat/Chat.vue'),
        props: true
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router