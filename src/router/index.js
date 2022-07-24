import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

import PageHome from '@/pages/PageHome'
import PageThreadShow from '@/pages/PageThreadShow'
import ThreadCreate from '@/pages/ThreadCreate'
import ThreadEdit from '@/pages/ThreadEdit'
import PageNotFound from '@/pages/PageNotFound'
import PageForum from '@/pages/PageForum'
import PageCategory from '@/pages/PageCategory'
import PageProfile from '@/pages/PageProfile'


const routes = [
    {
        path: '/',
        component: PageHome,
        name: 'Home'
    },
    {
        path: '/forum/:id',
        component: PageForum,
        name: 'Forum',
        props: true,
    },
    {
        path: '/category/:id',
        component: PageCategory,
        name: 'Category',
        props: true,
    },
    {
        path: '/me',
        component: PageProfile,
        name: 'Profile',
        meta: { toTop: true, smoothScroll: true}
    },
    {
        path: '/me/edit',
        component: PageProfile,
        name: 'ProfileEdit',
        props: { edit: true }
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
        path: '/forum/:forumId/thread/create',
        name: 'ThreadCreate',
        component: ThreadCreate,
        props: true
    },
    {
        path: '/thread/:id/edit',
        name: 'ThreadEdit',
        component: ThreadEdit,
        props: true
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
    scrollBehavior(to) {
        const scroll =  {}
        if(to.meta.toTop) scroll.top = 0
        if(to.meta.smoothScroll) scroll.behavior = 'smooth'
        return scroll
    }
  })