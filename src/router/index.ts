import {createWebHashHistory, createRouter} from 'vue-router'

import routes from './routes'

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

router.beforeEach(async (to, from, next) => {
    // 设置页面标题
    if (to.meta.title) {
        document.title = <string>to.meta.title
    }
    next()
})

router.afterEach(async (to, from, next) => {

})

export default router