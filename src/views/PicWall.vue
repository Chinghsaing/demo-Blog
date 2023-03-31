<template>
    <div class="waterfall-container">
        <div>
            <NavBar TextColor="color:#fff" BackColor="background-color:rgb(236, 159, 221)"></NavBar>
        </div>
        <div v-masonry fit-width="true" gutter="10" origin-left="false" class="pic-container" style="width: 100%;">
            <div v-masonry-tile v-for="(item, index) in demoList" :key="index" v-Emerge>
                <img :src="item.pic" loading="lazy">
            </div>
            <el-upload v-masonry-tile ref="uploadRef" name="upload" class="avatar-uploader" :show-file-list="false"
                :auto-upload="false" :http-request="picUpload" list-type="picture" multiple :on-change="handleChange">
                <template #trigger>
                    <el-icon class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </template>
            </el-upload>
        </div>
        <div class="copyright">
            <Copyright></Copyright>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Copyright from '@/components/Copyright.vue'
import { picPost, picList } from '@/api/api'
import { ElLoading, ElMessage } from "element-plus"
import * as imageConversion from 'image-conversion'
const picFileList = []
const uploadRef = ref()
const fileTotal = ref()
const formData = new FormData()

const demoList = ref([] as any[])
let loading: any

function openLoading(text: string) {
    loading = ElLoading.service({
        fullscreen: true,
        background: 'rgba(244, 231, 210, .4)',
        text: text,
    })
}
function closeLoading() {
    loading.close()
}

function picUpload(upload: any) {
    const file = upload.file
    imageConversion.compressAccurately(file, 200).then(res => {
        const compressFile = new window.File([res], 'pics', { type: 'image/jpeg' })
        formData.append('pics', compressFile)
        if (formData.getAll('pics').length === fileTotal.value) {
            picPost(formData).then(res => closeLoading())
                .catch(err => closeLoading())
        }
    })
}
function handleChange(file: any, fileList: any) {
    console.log(file.raw.type);
    if (file.raw.type === 'image/jpeg') {
        (file.status == 'ready') && picFileList.push(file.raw)
        fileTotal.value = (document.getElementsByName('upload') as NodeListOf<HTMLInputElement>)[0].files?.length
        if (picFileList.length === fileTotal.value) {
            openLoading('上传中')
            uploadRef.value.submit()
        }
    } else {
        ElMessage.warning('图片必须为JPG格式!')
    }
}

function init() {
    openLoading('加载中')
    picList().then((res) => {
        demoList.value = res as any[]
        closeLoading()
    })
}

init()
</script>

<style scoped lang="less">
:deep(.avatar-uploader .el-upload) {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
    background-color: transparent;
    flex-direction: column;
}

:deep(.avatar-uploader .el-upload:hover) {
    border-color: @defaultTitle;
}

:deep(.el-icon.avatar-uploader-icon) {
    .publicWH(250px, 200px);
    font-size: 28px;
    color: @pfontColor;
    text-align: center;
}

.waterfall-container {
    background-color: rgba(244, 231, 210, .1);
    backdrop-filter: blur(8px);
    min-height: 100vh;

    .pic-container {
        margin: 0 auto;
        padding: 20px 0;

        img {
            border-radius: 10px;
            width: 250px;
            transition: all .5s ease;
            margin-bottom: 30px;

            &:hover {
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                transform: translateY(-5px);
            }
        }

        .avatar-uploader {
            border-radius: 10px;
            border: 1px dashed @buttonWhite;

            .avatar {
                .publicWH(200px, 200px);
                display: block;
                object-fit: cover;
            }

            p {
                user-select: none;
                color: @defaultTextHv;
                text-align: center;
                .publicWH(100%, auto);
                .publicMP(0, 0);
                background-color: transparent;
                transition: all .5s ease;
                border-radius: 0 0 10px 10px;

                &:hover {
                    color: @buttonHV;
                    transform: translateY(-10px);
                }
            }
        }
    }

    .copyright {
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: 999;
    }
}
</style>