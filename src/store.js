/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

//let url = "https://thawing-wave-66675.herokuapp.com/"

let initialState = {
    showloader: false,
    status: false,
    products: [],
    /**product is used for storing a single item */
    product: "",
    cart: [],
    user: ""
}

const state = {
    showloader: false,
    status: false,
    message: "",
    products: [],
    /**product is used for storing a single item */
    product: "",
    cart: [],
    user: "",
    filter: ""
};

const emptyUserObject = {
    id: "",
    name: "",
    email: "",
    birthdate: "",
    city: "",
    addredd: "",
    gender: "",
    state: "",
    zip: ""
};

export const TYPES = {
    actions: {
        allProducts: "allProducts",
        productById: "productById",
        login: "login",
        register: "register",

    },
    mutations: {
        allProducts: "allProducts",
        productById: "productById",
        ADD_TO_CART: "ADD_TO_CART",
        REMOVE_FROM_CART: "REMOVE_FROM_CART",
        changeQuantity: "changeQuantity",
        emptyCart: "emptyCart",
        setUser: "setUser",
        deleteUser: "deleteUser",
        deleteMessage: "deleteMessage",
        setMessage: "setMessage",
        showLoading: "showLoading",
        hideLoading: "hideLoading",
        resetState: "resetState",
        deleteProducts: "deleteProducts",
    },
    getters: {
        isLoggedIn: "isLoggedIn"
    }
};

const actions = {

    [TYPES.actions.allProducts]({ commit }) {
        commit(TYPES.mutations.deleteMessage);

        commit(TYPES.mutations.deleteProducts);


        return Axios.get(`http://localhost:3000/products/getAllProducts`).then(res => {
            if (res.data.status === true) {
                console.log("products service:", res.data.products);
                commit(TYPES.mutations.setMessage, res.data.message);
                console.log("message:", res.data.message);

                commit(TYPES.mutations.allProducts, res.data.products);
                localStorage.setItem("products", JSON.stringify(res.data.products));
                return res;
            } else {
                commit(TYPES.mutations.setMessage, res.data.message);
                console.log("status not true");
                console.log(res.data.message);
                console.log(res.data.status);
                return res;
            }
        }).catch(err => {
            console.log("catch", err);
            commit(TYPES.mutations.setMessage, "Error");
            return Promise.reject(err);

        })
    },
    [TYPES.actions.productById]({ commit }, { id }) {
        console.log("Fetch single data here");
        console.log("id: ", id);
        commit(TYPES.mutations.productById, id);
    },
    [TYPES.actions.register]({ commit }, { model }) {

        commit(TYPES.mutations.showLoading);
        commit(TYPES.mutations.deleteMessage);
        const formData = new FormData();
        formData.append("name", model.name);
        formData.append("email", model.email);
        formData.append("password", model.password);

        return Axios.post(`http://localhost:3000/users/register`, formData).then(res => {
            console.log(res);
            commit(TYPES.mutations.hideLoading);
            console.log(state.showloader);
            console.log("everydone");
            if (res.data.status === true) {
                commit(TYPES.mutations.setUser, res.data.user);
                localStorage.setItem("user", JSON.stringify(res.data.user));



                console.log(res.data.user);
                return res;
            } else {
                commit(TYPES.mutations.setMessage, res.data.message);
                return res;
            }
        }).catch(err => {
            commit(TYPES.mutations.deleteUser);
            commit(TYPES.mutations.setMessage, "Error");
            return Promise.reject(err)
        });
    },
    [TYPES.actions.login]({ commit }, { model }) {

        commit(TYPES.mutations.showLoading);
        commit(TYPES.mutations.deleteMessage);
        console.log(state.showloader);
        const formData = new FormData();
        formData.append("email", model.email);
        formData.append("password", model.password);
        console.log(formData);
        console.log(model.email, ":", model.password);
        return Axios.post(`http://localhost:3000/users/login`, formData, ).then(res => {
            commit(TYPES.mutations.hideLoading);
            if (res.data.status == true) {
                commit(TYPES.mutations.setUser, res.data.user);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                return res;

            } else {
                commit(TYPES.mutations.setMessage, res.data.message);
                return res;

            }

        }).catch(err => {
            commit(TYPES.mutations.deleteUser);
            commit(TYPES.mutations.setMessage, "Error");
            return Promise.reject(err);
        });
    },
};

const getters = {
    allProducts: state => {
        return state.products;
    },
    productById: state => {
        return state.product;
    },
    cart: state => {
        return state.cart;
    },
    getPrice: state => {
        console.log("price", state.cart.current_price);
        return state.cart.current_price;
    },
    getUser: state => {
        return state.user;
    },

    status: state => {
        return state.status;
    },
    loading: state => {
        return state.showloader;
    },
    message: state => {
        return state.message;
    },
    [TYPES.getters.isLoggedIn]: state => Boolean(state.user.id),

    filterProduct: state => {
        return state.filter;
    }

};

const mutations = {
    [TYPES.mutations.setFilter](state, payload) {
        state.filter = payload;
        console.log(state.filter);
    },
    [TYPES.mutations.deleteProducts](state) {
        state.products = [];
    },
    [TYPES.mutations.allProducts](state, payload) {
        state.products = payload;
    },

    [TYPES.mutations.productById](state, id) {
        console.log("mutation id: ", id);
        //set single data here
        state.product = "";
        console.log("product before: ", state.product);
        state.product = state.products.find(x => x.id === parseInt(id));

        console.log("product after:", state.product);
    },
    [TYPES.mutations.ADD_TO_CART](state, payload) {
        console.log("payload", payload);
        //payload['quantity'] = 1 ;
        Vue.set(payload, "quantity", 1);
        //payload['current_price'] = payload.price;
        Vue.set(payload, "current_price",
            Math.round(100 / (payload.discount + 100) *
                payload.price)
        );

        console.log("payload after:", payload);
        state.cart.push(payload);

        console.log("cart", state.cart);
    },
    [TYPES.mutations.REMOVE_FROM_CART]: (state, payload) => {
        const index = state.cart.findIndex(p => p.id === payload);
        state.cart.splice(index, 1);
        console.log(state.cart, state.cart.length, index);
    },
    [TYPES.mutations.changeQuantity](state, payload) {
        console.log("payloadd:", payload);
        console.log(state.cart);
        Vue.set(
            state.cart.find(x => x.id === payload.id),
            "quantity",
            payload.quant
        );


        Vue.set(
            state.cart.find(x => x.id === payload.id),
            "current_price",
            Math.round(state.cart.find(x => x.id === payload.id).quantity *
                100 / (state.cart.find(x => x.id === payload.id).discount + 100) *
                state.cart.find(x => x.id === payload.id).price)
        );

        console.log(state.cart.find(x => x.id === payload.id).quantity);
        console.log(state.cart.find(x => x.id === payload.id).current_price);
        console.log(state.cart.find(x => x.id === payload.id));
    },
    [TYPES.mutations.emptyCart](state) {
        state.cart = [];
    },
    [TYPES.mutations.setUser](state, payload) {

        state.user = payload;
    },
    [TYPES.mutations.deleteUser](state) {
        state.user = {...emptyUserObject };
    },
    [TYPES.mutations.showLoading](state) {
        state.showloader = true
    },
    [TYPES.mutations.setMessage](state, payload) {
        state.message = payload;
    },
    [TYPES.mutations.hideLoading](state) {
        state.showloader = false
    },
    [TYPES.mutations.deleteMessage](state) {
        state.message = "";
    },
    [TYPES.mutations.resetState](state) {
        for (let f in state) {
            Vue.set(state, f, initialState[f])
        }
    },
};

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state,
    actions,
    getters,
    mutations
});