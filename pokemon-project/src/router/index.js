import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Pokemon from '../views/Pokemon.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'pokemon',
        component: Pokemon
    }, {
        path: '/pokemon',
        name: 'pokemon',
        component: Pokemon
    }, {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: { requiresAuth: true }
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = firebase.auth().currentUser;

    if (requiresAuth && !isAuthenticated) {
        next("/login");
    } else {
        next();
    }
});

export default router;
