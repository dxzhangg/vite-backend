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
                meta:{title: '首页'},
                component: () => import('../../views/home/index.vue'),
                beforeEnter: [Middlewares.auth],
            },
            {
                path: '/user_manage',
                name: 'user_manage',
                meta:{title: '后台用户管理'},
                component: () => import('../../views/userManage/index.vue'),
                beforeEnter: [Middlewares.auth],
            },
            {
                path: '/role_manage',
                name: 'role_manage',
                meta:{title: '后台角色管理'},
                component: () => import('../../views/roleManage/index.vue'),
                beforeEnter: [Middlewares.auth],
            }
        ],
    },
    {
        path: '/login',
        name: 'login',
        meta:{title: '登录'},
        component: () => import('../../views/login/index.vue'),
        beforeEnter: [Middlewares.guest]
    },
]