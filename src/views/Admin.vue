<template>
    <div class="main">
        <div>
            <el-form :model="artData" ref="form" rules="sd" label-width="80px" :inline="false" size="normal">
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
        <div>
            <el-form :model="form" ref="form" rules="rules" label-width="80px" :inline="false" size="normal" enctype="multipart/form-data">
                <el-form-item label="">
                    <el-upload name="img" ref="uploader" class="avatar-uploader" action="http://127.0.0.1/api/upload"
                        :show-file-list="false" :limit="1" :auto-upload="false" list-type="picture">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from '@/api/axios';
import { ref, reactive } from 'vue';

const uploader = ref()
const form = ref()
const imageUrl = ref('')
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
    flex-direction: column;
}

.avatar-uploader .el-upload {
    border: 1px dashed black;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 1s ease;
}

.avatar-uploader .el-upload:hover {
    border-color: black;
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>