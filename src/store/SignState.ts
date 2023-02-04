import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: "SignState",
    state: () => ({
        showSignView: false,
        // showUserName:false,
        // username: '',
        isLogin: false,
        token: localStorage.getItem('token')
    }),
    actions: {
    }
})