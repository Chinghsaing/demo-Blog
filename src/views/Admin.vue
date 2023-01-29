<template>
    <div class="main">
        <el-form :model="artData" ref="form" rules="" label-width="80px" :inline="false" size="normal">
            <el-form-item>
                <el-form-item label="">
                    <el-input v-model="artData.artTitle" placeholder="文章标题"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="artData.artContent" placeholder="文章内容"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="artData.artImages" placeholder="文章配图"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="artData.author" placeholder="作者名称"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input v-model="artData.date" placeholder="日期"></el-input>
                </el-form-item>
                <el-button type="primary" @click="sub()">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script setup lang="ts">
import axios from '@/api/axios';
import { ref, reactive } from 'vue';
const form = ref()
const artData = reactive({
    artImages: '',
    artTitle: '',
    artContent: '',
    author: '',
    date: '',
})

function sub() {
    axios.post('/api/artpost', {
        artImages: artData.artImages,
        artTitle: artData.artTitle,
        artContent: artData.artContent,
        author: artData.author,
        date: artData.date,
    })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err);
        })
}
</script>

<style scoped lang="less">
.main {
    .publicFlex(center, none, center);
    .publicWH(100%, 100vh);
    background-color: #fff;
}
</style>