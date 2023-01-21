import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: "SignState",
    state: () => ({
        view:false,
    })
})