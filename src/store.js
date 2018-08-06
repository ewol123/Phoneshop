/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

let url = "https://floating-oasis-11919.herokuapp.com"

let initialState = {
    showloader: false,
    status: false,
    products: [{
            id: 1,
            manId: 3,
            name: "S7 Edge",
            price: 659,
            image: "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/s7-edge/black/device-front.png.transform/pdpCarousel/image.jpg",
            description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
            manufacturer: {
                id: 3,
                name: "Samsung"
            }
        },
        {
            id: 2,
            manId: 1,
            name: "iPhone 7",
            price: 769,
            image: "https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-7/matte-black/Apple-iPhone7-MatBlack-1-3x.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 1,
                name: "Apple"
            }
        },
        {
            id: 3,
            name: "Xperia XZ",
            manId: 2,
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 4,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 5,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 6,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 7,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 8,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 9,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 10,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 11,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 12,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 13,
            manId: 3,
            name: "S7 Edge",
            price: 659,
            image: "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/s7-edge/black/device-front.png.transform/pdpCarousel/image.jpg",
            description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
            manufacturer: {
                id: 3,
                name: "Samsung"
            }
        },
        {
            id: 14,
            manId: 3,
            name: "S7 Edge",
            price: 659,
            image: "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/s7-edge/black/device-front.png.transform/pdpCarousel/image.jpg",
            description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
            manufacturer: {
                id: 3,
                name: "Samsung"
            }
        },
        {
            id: 15,
            manId: 3,
            name: "S7 Edge",
            price: 659,
            image: "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/s7-edge/black/device-front.png.transform/pdpCarousel/image.jpg",
            description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
            manufacturer: {
                id: 3,
                name: "Samsung"
            }
        },
        {
            id: 16,
            manId: 3,
            name: "S7 Edge",
            price: 659,
            image: "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/s7-edge/black/device-front.png.transform/pdpCarousel/image.jpg",
            description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
            manufacturer: {
                id: 3,
                name: "Samsung"
            }
        }
    ] /**product is used for storing a single item */ ,
    product: "",
    cart: [],
    user: ""
}

const state = {
    showloader: false,
    status: false,
    message: "",
    products: [{
            id: 1,
            manId: 3,
            name: "S7 Edge",
            price: 659,
            image: "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/s7-edge/black/device-front.png.transform/pdpCarousel/image.jpg",
            description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
            manufacturer: {
                id: 3,
                name: "Samsung"
            }
        },
        {
            id: 2,
            manId: 1,
            name: "iPhone 7",
            price: 769,
            image: "https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-7/matte-black/Apple-iPhone7-MatBlack-1-3x.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 1,
                name: "Apple"
            }
        },
        {
            id: 3,
            name: "Xperia XZ",
            manId: 2,
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 4,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 5,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 6,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 7,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 8,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 9,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 10,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 11,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 12,
            name: "Xperia XZ",
            price: 649,
            image: "https://notebookspecialista.hu/files/pix-product/xperia-xz-premium-silver-front.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore enim eveniet fuga placeat velit. Dolorem minima nemo nulla perspiciatis totam. Consequuntur debitis dolorem eveniet illo magni nobis perspiciatis quidem quisquam.",
            manufacturer: {
                id: 2,
                name: "Sony"
            }
        },
        {
            id: 13,
            manId: 3,
            name: "S7 Edge",
            price: 659,
            image: "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/s7-edge/black/device-front.png.transform/pdpCarousel/image.jpg",
            description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
            manufacturer: {
                id: 3,
                name: "Samsung"
            }
        },
        {
            id: 14,
            manId: 3,
            name: "S7 Edge",
            price: 659,
            image: "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/s7-edge/black/device-front.png.transform/pdpCarousel/image.jpg",
            description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
            manufacturer: {
                id: 3,
                name: "Samsung"
            }
        },
        {
            id: 15,
            manId: 3,
            name: "S7 Edge",
            price: 659,
            image: "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/s7-edge/black/device-front.png.transform/pdpCarousel/image.jpg",
            description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
            manufacturer: {
                id: 3,
                name: "Samsung"
            }
        },
        {
            id: 16,
            manId: 3,
            name: "S7 Edge",
            price: 659,
            image: "https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/samsung/s7-edge/black/device-front.png.transform/pdpCarousel/image.jpg",
            description: '5.5" Quad HD Super AMOLED | 12 MP Phase Detection Autofocus Rear Camera / 5 MP Front Facing Camera | Android Marshmallow 6.0 | Wi-Fi 802.11 a/b/g/n/ac, Dual-Band, Wi-Fi Direct, Hotspot | Water-Resistant Features an IP68 Rating (30 Min. In 1m Of Water) | Low-Light Camera | Expandable Storage Up To 200 GB | Samsung Pay',
            manufacturer: {
                id: 3,
                name: "Samsung"
            }
        }
    ] /**product is used for storing a single item */ ,
    product: "",
    cart: [],
    user: ""
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
        register: "register"
    },
    mutations: {
        allProducts: "allProducts",
        setProducts: "setProducts",
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
        resetState: "resetState"
    },
    getters: {
        isLoggedIn: "isLoggedIn"
    }
};

const actions = {
    [TYPES.actions.allProducts]({ commit }) {
        console.log("Fetch data here");
        commit(TYPES.mutations.allProducts);
    },
    [TYPES.actions.productById]({ commit }, { id }) {
        console.log("Fetch single data here");
        console.log("id: ", id);
        commit(TYPES.mutations.productById, id);
    },
    [TYPES.actions.login]({ commit }) {
        //send request to server here
        commit(TYPES.mutations.setUser, payload);
    },
    [TYPES.actions.register]({ commit }, { model }) {

        commit(TYPES.mutations.showLoading);
        commit(TYPES.mutations.deleteMessage);
        const formData = new FormData();
        formData.append("name", model.name);
        formData.append("email", model.email);
        formData.append("password", model.password);

        return Axios.post(`${url}/users/register`, formData).then(res => {
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
        return Axios.post(`${url}/users/login`, formData, ).then(res => {
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
    [TYPES.getters.isLoggedIn]: state => Boolean(state.user.id)

};

const mutations = {
    [TYPES.mutations.allProducts]({ state }) {
        console.log("Set data here");
    },
    [TYPES.mutations.setProducts](state, value) {
        state.products = state.products.concat(value);
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
        Vue.set(payload, "current_price", payload.price);

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
            state.cart.find(x => x.id === payload.id).quantity *
            state.cart.find(x => x.id === payload.id).price
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