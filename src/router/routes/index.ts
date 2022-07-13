import LayoutDefault from '../../layouts/default/index.vue'
import Middlewares from '../middlewares'
export default [
    {
        path: '/',
        component: LayoutDefault,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../../views/home/index.vue'),
                beforeEnter: [Middlewares.auth],
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../../views/about/index.vue'),
                beforeEnter: [Middlewares.auth],
            }
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../../views/login/index.vue'),
        beforeEnter: [Middlewares.guest]
    },
]