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
</style>
