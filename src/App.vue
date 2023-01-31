<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { useStore } from '@/store/ArtState';
const store = useStore()

function init(){
    store.getArticleList()
}
init()
</script>

<style lang="less">
//全局更改loading样式
.el-loading-spinner .path{
    stroke:@defaultFont !important;
}
.el-loading-spinner .el-loading-text{
    color: @defaultFont !important;
    font-weight: bold;
}
//success消息提示框
.el-message--success {
    background-color: #FDF6EC !important;
}
.el-message .el-message-icon--success{
    color: @defaultFont !important;
}
.el-message--success .el-message__content{
    color: @defaultFont !important;
}
//error
.el-message--error {
    background-color: #FDF6EC !important;
}
.el-message .el-message-icon--error{
    color: @defaultError !important;
}
.el-message--error .el-message__content{
    color: @defaultError !important;
}
</style>
