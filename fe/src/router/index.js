import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/Login.vue'

const Home = () =>
    import ('@/views/pages/admin/Home.vue')
const Records = () =>
    import ('@/views/pages/admin/Records.vue')
const Scholar = () =>
    import ('@/views/pages/admin/Scholars.vue')

const Updates = () =>
    import ('@/views/pages/admin/Updates.vue')
const CreateUpdate = () =>
    import ('@/views/pages/admin/Updates/NewUpdate.vue')
const EditUpdate = () =>
    import ('@/views/pages/admin/Updates/EditUpdate.vue')

const Settings = () =>
    import ('@/views/pages/admin/Settings.vue')
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "index" */ '../views/pages/admin/Index.vue'),
        children: [{
                path: 'dashboard',
                name: 'Dashboard',
                components: {
                    dashboard: Home
                },
            },
            {
                path: 'records',
                name: 'Records',
                components: {
                    records: Records
                },
            },
            {
                path: 'scholars',
                name: 'Scholar',
                components: {
                    scholar: Scholar
                },
            },
            {
                path: 'updates',
                name: 'Updates',
                components: {
                    updates: Updates
                },
            },
            {
                path: 'updates/create',
                name: 'CreateUpdate',
                components: {
                    createupdate: CreateUpdate
                },
            },
            {
                path: 'updates/edit/:slug',
                name: 'editupdate',
                components: {
                    editupdate: EditUpdate
                }
            },
            {
                path: 'settings',
                name: 'Settings',
                components: {
                    settings: Settings
                },
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router