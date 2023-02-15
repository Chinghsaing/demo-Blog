<template>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="default">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { authorized } from '@/api/api'
import { useStore } from '@/store/ArticleState'
import { useStore as userStore } from '@/store/UserInfoState'
const store = useStore()
const userstore = userStore()
function init() {
    store.getArticleList()
    if (localStorage.getItem('token')) {
        authorized().then((res: any) => {
            if (res.code === 0) {
                userstore.clearLocalInfo()
            } else {
                userstore.getLocalInfo()
            }
        }).catch(err => {
            userstore.clearLocalInfo()
        })
    }
}
init()
</script>

<style lang="less">
//全局更改loading样式
.el-loading-spinner .path {
    stroke: @defaultFont !important;
}

.el-loading-spinner .el-loading-text {
    color: @defaultFont !important;
    font-weight: bold;
}

//success消息提示框
.el-message--success {
    background-color: #FDF6EC !important;
}

.el-message .el-message-icon--success {
    color: @defaultFont !important;
}

.el-message--success .el-message__content {
    color: @defaultFont !important;
}

//error
.el-message--error {
    background-color: #FDF6EC !important;
}

.el-message .el-message-icon--error {
    color: @defaultError !important;
}

.el-message--error .el-message__content {
    color: @defaultError !important;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
