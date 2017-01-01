/* 路由配置全写这里 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/* 开启debug模式 */
Vue.config.debug = true;
Vue.use(VueRouter);

import index from '../content/index.vue'
import home from '../content/home.vue'


export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/index',
            component: index
        },
        {
            path: '/home',
            component: home
        }
    ]
})
