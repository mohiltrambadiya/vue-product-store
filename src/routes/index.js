import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "ProductList",
        component: () => import("../views/ProductList.vue")
    },
    {
        path: "/detail/:id",
        name: "ProductDetail",
        component: () => import("../views/ProductDetail.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolved) =>  {
            setTimeout(() => resolved({top: 0, behavior:"smooth"}), 300)
        })
    }
})

export default router