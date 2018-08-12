/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

let url = "https://desolate-brushlands-61330.herokuapp.com"

//let url = "http://localhost:3000" <- use this for local testing


let initialState = {
    showloader: false,
    status: false,
    message: "",
    products: [],
    /**product is used for storing a single item */
    product: "",
    cart: [],
    user: "",
    filter: "",
    shipAddress: []
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
    filter: "",
    shipAddress: []
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
        changeUser: "changeUser",
        setOrder: "setOrder",
        getOrders: "getOrders",
        addProduct: "addProduct",
        deleteProduct: "deleteProduct",
        updateProduct: "updateProduct"

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
        setShippingAddress: "setShippingAddress",
        deleteShippingAddress: "deleteShippingAddress",
        addProduct: "addProduct",
        addProductSuccess: "addProductSuccess",
        addProductFailed: "addProductFailed",
        deleteProduct: "deleteProduct",
        deleteProductFailed: "deleteProductFailed",
        deleteProductSuccess: "deleteProductSuccess",
        updateProduct: "updateProduct",
        updateProductSuccess: "updateProductSuccess",
        updateProductFailed: "updateProductFailed"
    },
    getters: {
        isLoggedIn: "isLoggedIn"
    }
};

const actions = {
    [TYPES.actions.updateProduct]({ commit }, { payload, token, id }) {
        commit(TYPES.mutations.deleteMessage);

        const formData = new FormData();
        formData.append("name", payload.name);
        formData.append("price", payload.price);
        formData.append("manufacturer", payload.manufacturer);
        formData.append("image", payload.image);
        formData.append("discount", payload.discount);
        formData.append("description", payload.description);
        formData.append("id", id);

        return Axios.put(`${url}/products/updateProduct`, formData, {
            headers: { "x-access-token": token },
        }).then(res => {

            if (res.data.status === true) {
                commit(TYPES.mutations.setMessage, res.data.message);
                commit(TYPES.mutations.updateProductSuccess);
                return res;
            } else {
                commit(TYPES.mutations.setMessage, res.data.message);
                commit(TYPES.mutations.updateProductFailed);
                return res;
            }

        }).catch(err => {
            commit(TYPES.mutations.updateProductFailed);
            return Promise.reject(err);
        });
    },
    [TYPES.actions.deleteProduct]({ commit }, { id, token, index }) {
        commit(TYPES.mutations.deleteMessage);

        return Axios.delete(`${url}/products/deleteProduct/${id}`, {
            headers: { "x-access-token": token },
        }).then(res => {
            if (res.data.status === true) {
                commit(TYPES.mutations.setMessage, res.data.message);
                commit(TYPES.mutations.deleteProduct, index);
                commit(TYPES.mutations.deleteProductSuccess);
                return res;
            } else {
                commit(TYPES.mutations.setMessage, res.data.message);
                commit(TYPES.mutations.deleteProductFailed);
                return res;
            }
        }).catch(err => {
            return Promise.reject(err);
        })
    },
    [TYPES.actions.addProduct]({ commit }, { payload, token }) {
        commit(TYPES.mutations.showLoading);
        commit(TYPES.mutations.deleteMessage);
        const formData = new FormData();
        formData.append("name", payload.name);
        formData.append("price", payload.price);
        formData.append("manufacturer", payload.manufacturer);
        formData.append("image", payload.image);
        formData.append("discount", payload.discount);
        formData.append("description", payload.description);

        return Axios.post(`${url}/products/addProduct`, formData, {
            headers: { "x-access-token": token },
        }).then(res => {
            if (res.data.status === true) {
                commit(TYPES.mutations.hideLoading);
                commit(TYPES.mutations.setMessage, res.data.message);
                commit(TYPES.mutations.addProductSuccess);

            } else if (res.data.status === false) {
                commit(TYPES.mutations.setMessage, res.data.message);
                commit(TYPES.mutations.addProductFailed);

            }
            return res;
        }).catch(err => {
            commit(TYPES.mutations.addProductFailed);
            return Promise.reject(err);
        });

    },
    [TYPES.actions.getOrders]({ commit }, { id, token }) {
        commit(TYPES.mutations.showLoading);
        commit(TYPES.mutations.deleteMessage);
        return Axios.get(`${url}/orders/getOrders/${id}`, {
            headers: {
                "x-access-token": token
            },
        }).then(res => {
            if (res.data.status === true) {
                commit(TYPES.mutations.setMessage, res.data.message);

                if (localStorage.getItem("orders")) {
                    localStorage.removeItem("orders");
                }
                localStorage.setItem("orders", JSON.stringify(res.data.orders));
                commit(TYPES.mutations.hideLoading);
                return res;
            } else {
                commit(TYPES.mutations.hideLoading);
                commit(TYPES.mutations.setMessage, res.data.message);
                return res;
            }
        }).catch(err => {
            commit(TYPES.mutations.hideLoading);
            commit(TYPES.mutations.setMessage, "Error");
            return Promise.reject(err);
        })
    },
    [TYPES.actions.setOrder]({ commit }, { cart, address, user }) {
        commit(TYPES.mutations.deleteMessage);
        commit(TYPES.mutations.showLoading);
        const formData = new FormData();
        formData.append("cart", JSON.stringify(cart));
        formData.append("address", JSON.stringify(address));
        formData.append("user", JSON.stringify(user));

        return Axios.post(`${url}/orders/setOrder`, formData).then(res => {

            if (res.data.status === true) {
                commit(TYPES.mutations.hideLoading);
                commit(TYPES.mutations.setMessage, res.data.message);

            } else {
                commit(TYPES.mutations.hideLoading);
            }
        }).catch(err => {
            commit(TYPES.mutations.hideLoading);
            commit(TYPES.mutations.setMessage, "Error");
            return Promise.reject(err);
        });


    },
    [TYPES.actions.changeUser]({ commit }, { user, pw, token }) {
        commit(TYPES.mutations.deleteMessage);
        commit(TYPES.mutations.showLoading);

        const formData = new FormData();
        formData.append("id", user.id);
        formData.append("city", user.city);
        formData.append("address", user.address);
        formData.append("state", user.state);
        formData.append("zip", user.zip);
        formData.append("birthdate", user.birthdate);
        formData.append("gender", user.gender);
        formData.append("name", user.name);
        formData.append("email", user.email);
        formData.append("password", pw);
        return Axios.put(`${url}/users/changeProfile`, formData, {
            headers: {
                "x-access-token": token
            },
        }).then(res => {
            if (res.data.status == true) {
                commit(TYPES.mutations.hideLoading);

                if (localStorage.getItem("user")) {
                    localStorage.removeItem("user");
                }


                localStorage.setItem("user", JSON.stringify(res.data.user));
                commit(TYPES.mutations.setMessage, res.data.message);
                commit(TYPES.mutations.setUser, res.data.user);
                return res;
            } else {
                commit(TYPES.mutations.hideLoading);
                commit(TYPES.mutations.setMessage, res.data.message);
                return res;
            }

        }).catch(err => {
            commit(TYPES.mutations.hideLoading);
            commit(TYPES.mutations.setMessage, "Error");
            return Promise.reject(err);
        });
    },

    [TYPES.actions.allProducts]({ commit }) {
        commit(TYPES.mutations.showLoading);
        commit(TYPES.mutations.deleteMessage);
        commit(TYPES.mutations.deleteProducts);


        return Axios.get(`${url}/products/getAllProducts`).then(res => {
            if (res.data.status === true) {
                commit(TYPES.mutations.hideLoading);


                commit(TYPES.mutations.setMessage, res.data.message);

                commit(TYPES.mutations.allProducts, res.data.products);

                if (localStorage.getItem("products")) {
                    localStorage.removeItem("products");
                }
                localStorage.setItem("products", JSON.stringify(res.data.products));
                return res;
            } else {
                commit(TYPES.mutations.hideLoading);
                commit(TYPES.mutations.setMessage, res.data.message);
                return res;
            }
        }).catch(err => {
            commit(TYPES.mutations.hideLoading);
            commit(TYPES.mutations.setMessage, "Error");
            return Promise.reject(err);

        })
    },
    [TYPES.actions.productById]({ commit }, { id }) {
        commit(TYPES.mutations.productById, id);
    },
    [TYPES.actions.register]({ commit }, { model }) {

        commit(TYPES.mutations.showLoading);
        commit(TYPES.mutations.deleteMessage);
        const formData = new FormData();
        formData.append("name", model.name);
        formData.append("email", model.email);
        formData.append("password", model.password);

        return Axios.post(`${url}/users/register`, formData).then(res => {
            commit(TYPES.mutations.hideLoading);
            if (res.data.status === true) {
                commit(TYPES.mutations.setUser, res.data.user);

                if (localStorage.getItem("user")) {
                    localStorage.removeItem("user");
                }
                localStorage.setItem("user", JSON.stringify(res.data.user));



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
        const formData = new FormData();
        formData.append("email", model.email);
        formData.append("password", model.password);
        return Axios.post(`${url}/users/login`, formData, ).then(res => {
            commit(TYPES.mutations.hideLoading);
            if (res.data.status == true) {
                commit(TYPES.mutations.setUser, res.data.user);


                if (localStorage.getItem("user")) {
                    localStorage.removeItem("user");
                }
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
    },
    shipAddress: state => {
        return state.shipAddress;
    }

};

const mutations = {
    [TYPES.mutations.updateProduct](state, payload) {},
    [TYPES.mutations.updateProductSuccess](state) {
        console.log("success");
    },
    [TYPES.mutations.updateProductFailed](state) {
        console.log("failed");

    },
    [TYPES.mutations.deleteProduct](state, payload) {
        state.products.splice(payload, 1)

    },
    [TYPES.mutations.deleteProductSuccess](state) {
        console.log("success");
    },
    [TYPES.mutations.deleteProductFailed](state) {
        console.log("failed");
    },
    [TYPES.mutations.addProductSuccess](state) {
        console.log("success");
    },
    [TYPES.mutations.addProductFailed](state) {
        console.log("failed");
    },
    [TYPES.mutations.setShippingAddress](state, payload) {
        state.shipAddress = payload;
    },
    [TYPES.mutations.deleteShippingAddress](state) {
        state.shipAddress = [];
    },
    [TYPES.mutations.setFilter](state, payload) {
        state.filter = payload;
    },
    [TYPES.mutations.deleteProducts](state) {
        state.products = [];
    },
    [TYPES.mutations.allProducts](state, payload) {
        state.products = payload;
    },

    [TYPES.mutations.productById](state, id) {
        //set single data here
        state.product = "";
        state.product = state.products.find(x => x.id === parseInt(id));

    },
    [TYPES.mutations.ADD_TO_CART](state, payload) {
        //payload['quantity'] = 1 ;
        Vue.set(payload, "quantity", 1);
        //payload['current_price'] = payload.price;
        Vue.set(payload, "current_price",
            Math.round(((100 - payload.discount) / 100) * payload.price)
        );

        state.cart.push(payload);

    },
    [TYPES.mutations.REMOVE_FROM_CART]: (state, payload) => {
        const index = state.cart.findIndex(p => p.id === payload);
        state.cart.splice(index, 1);
    },
    [TYPES.mutations.changeQuantity](state, payload) {
        Vue.set(
            state.cart.find(x => x.id === payload.id),
            "quantity",
            payload.quant
        );

        let quantity = state.cart.find(x => x.id === payload.id).quantity
        let discount = state.cart.find(x => x.id === payload.id).discount
        let price = state.cart.find(x => x.id === payload.id).price

        Vue.set(
            state.cart.find(x => x.id === payload.id),
            "current_price",
            Math.round(((100 - discount) / 100 * price) * quantity)
        );

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
        setTimeout(function() {
            state.message = "";
        }, 3000);
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