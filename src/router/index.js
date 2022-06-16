import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

import PageHome from '@/pages/PageHome'
import PageThreadShow from '@/pages/PageThreadShow'
import PageNotFound from '@/pages/PageNotFound'



const routes = [
    {
        path: '/',
        component: PageHome,
        name: 'Home'
    },
    {
        path: '/thread/:id',
        component: PageThreadShow,
        name: 'ThreadShow',
        props: true,
        beforeEnter: (to, from, next) => {
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            if(threadExists) {
                return next()
            } else {
                return next({ 
                    name: 'NotFound',
                    params: {pathMatch: to.path.substring(1).split('/')},
                    query: to.query,
                    hash: to.hash

                })
            }
        }
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: PageNotFound 
    },

]

export default createRouter({
    history: createWebHistory(),
    routes, 
  })