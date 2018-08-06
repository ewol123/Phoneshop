import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Shop from '@/components/pages/Shop'
import Details from '@/components/pages/Details'
import Cart from '@/components/pages/Cart'
import Checkout from '@/components/pages/Checkout'
import SignIn from '@/components/pages/SignIn'
import Profile from '@/components/pages/Profile'

Vue.use(Router)

import store, { TYPES } from "../store";

function Authenticated(to, from, next) {

    if (window.$cookies.get("token")) {
        next();
    } else {
        next({ name: "Home" });
    }
}

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/shop',
            name: 'Shop',
            component: Shop
        },
        {
            path: '/details/:id',
            name: 'Details',
            component: Details
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/checkout',
            name: 'Checkout',
            component: Checkout
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            beforeEnter: Authenticated
        },
    ]
})