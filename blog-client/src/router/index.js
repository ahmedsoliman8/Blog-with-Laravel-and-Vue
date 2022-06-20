import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue';
import Post from '../pages/Post.vue';
import Login from '../pages/Login.vue';
import Posts from '../pages/admin/posts.vue';
import Edit from "../pages/admin/Edit.vue";
import store from "../store";


const routes = [
        {
            path: '/admin/login',
            name: 'admin.login',
            component: Login,

        },
        {
            path: '/admin/posts',
            name: 'admin.posts',
            component: Posts,
            beforeEnter: (to, from, next) => {
                if (!store.getters.authenticated) {
                    return next({name: 'admin.login'})
                }
                return next()
            }

        },
        {
            path: '/admin/posts/:slug/edit',
            name: 'admin.posts.edit',
            component: Edit,
            beforeEnter: (to, from, next) => {
                if (!store.getters.authenticated) {
                    return next({name: 'admin.login'})
                }
                return next()
            },
            props: true

        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/posts/:slug',
            name: 'post',
            component: Post,
            props: true
        }
    ]
;
export default createRouter({
    history: createWebHistory(),
    routes
})