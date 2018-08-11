import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Shop from '@/components/pages/Shop'
import Details from '@/components/pages/Details'
import Cart from '@/components/pages/Cart'
import Checkout from '@/components/pages/Checkout'
import SignIn from '@/components/pages/SignIn'
import Profile from '@/components/pages/Profile'
import Admin from '@/components/pages/Admin'
import New from '@/components/admin/new';
import Products from '@/components/admin/products';
import Edit from '@/components/admin/edit';



Vue.use(Router)

import store, { TYPES } from "../store";

function Authenticated(to, from, next) {

    if (window.$cookies.get("token")) {
        next();
    } else {
        next({ name: "Home" });
    }
}

function isEmpty(to, from, next) {
    if (store.getters.cart.length > 0) {
        next()
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
            path: '/shop/:filter/:message',
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
            component: Checkout,
            beforeEnter: isEmpty
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
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            children: [{
                    path: 'new',
                    name: 'New',
                    component: New
                },
                {
                    path: '',
                    name: 'Products',
                    component: Products
                },
                {
                    path: 'edit/:id',
                    name: 'Edit',
                    component: Edit
                }
            ]
        }
    ]
})