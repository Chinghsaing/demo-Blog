<template>
    <div>
        <el-card shadow="never" :body-style="{ padding: '0', }">
            <div ref="article" v-html="detail.artContent">
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/ArticleState'
import { useRoute } from 'vue-router'
import { getTitle } from '@/hooks/hooks'
import { ref } from 'vue'
interface detail{
    artId: number;
    artImages: string;
    artTitle: string;
    artContent: string;
    author: {
        avatar: string;
        follows: number;
        like: number;
        nametag: string;
        uid: number;
        username: string;
        nickname: string;
        article: [];
    };
    date: string;
}
const store = useStore()
const route = useRoute()
const article = ref()
const id: number = Number(route.params.id)
const detail = store.$state.ArtData.find(array => array.artId == id) as detail
getTitle(article)
</script>

<style scoped lang="less">
.el-card {
    .publicWH(100%, auto);
    border: none;
    border-radius: 10px;

    p {
        color: @pfontColor;
        font-size: 18px;
    }
}
</style>