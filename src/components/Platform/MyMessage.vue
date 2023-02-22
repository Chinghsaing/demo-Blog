<template>
    <div class="-container"></div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useStore } from '@/store/PlatformState'
const store = useStore()
const route = useRoute()
store.$state.menuActive = route.path
</script>

<style scoped lang="less">

</style>