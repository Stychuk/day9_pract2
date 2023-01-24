import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    plugins: [createPersistedState()],
    state: {
       count: 0,
       theme:"",
       user: null
    },
    mutations: {
        setCount: (state, count) => state.count = count,
        setTheme: (state, theme) => state.theme = theme,
        setUser: (state, user) => state.user = user,
        deleteUser: (state) => state.user = null,
    },
    getters: {
        getCount: (state) =>
        {
            return state.count;
        },
        getTheme: (state) =>
        {
           return state.theme
        },
        getUser: (state) =>
        {
            return state.user
        }
    }  
})
export default store;