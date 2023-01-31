import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: "SignState",
    state: () => ({
        showSignView:false,
        showUserName:false,
        showUserCradInfo:false,
        username: '',
        isLogin:false,
    })
})