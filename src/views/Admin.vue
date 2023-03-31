<template>
    <div v-masonry fit-width="true" gutter="10" class="waterfall-container" style="width: 100%;">
        <div v-masonry-tile v-for="(item, index) in demoList" :key="index">
            <img :src="item" style="width: 350px;">
        </div>
    </div>
</template>

<script setup lang="ts">
const demoList = [
    new URL(`@/assets/images/news/5.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/1.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/3.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/2.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/5.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/5.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/1.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/3.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/2.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/5.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/5.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/1.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/3.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/2.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/5.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/5.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/4.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/1.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/3.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/2.jpg`, import.meta.url).href,
    new URL(`@/assets/images/news/5.jpg`, import.meta.url).href,
]
</script>

<style scoped lang="less">
.waterfall-container{
    margin: 0 auto;
    padding-top: 20px;
}
</style>