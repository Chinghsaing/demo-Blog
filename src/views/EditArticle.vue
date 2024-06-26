<template>
    <div class="edit-container">
        <div>
            <NavBar TextColor="color:#fff" BackColor="background-color:rgb(236, 159, 221)"></NavBar>
        </div>
        <div class="editor-box">
            <Editor />
            <div class="submit-box">
                <el-input v-model.trim="title" class="input" placeholder="文章标题" type="text" size="large" minlength="1"
                    autocomplete="off" style="--el-input-focus-border-color:rgb(236,159,221)"></el-input>
                <el-upload ref="uploadRef" class="avatar-uploader" :show-file-list="false" :http-request="articleUpload"
                    :auto-upload="false" list-type="picture" :on-change="onChangeHandler" :before-upload="beforeCoverUpload"
                    :file-list="checkFile">
                    <template #trigger>
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                        <p>上传文章封面</p>
                    </template>
                    <div class="button-box" @click="submit">
                        <el-link :underline="false" href="javascript:;">
                            <div>
                                <h2>发布</h2>
                            </div>
                        </el-link>
                    </div>
                    <div class="button-box">
                        <el-link :underline="false" href="javascript:;" @click="">
                            <div>
                                <h2>清空</h2>
                            </div>
                        </el-link>
                    </div>
                </el-upload>
            </div>
        </div>
        <Copyright class="copyright"></Copyright>
    </div>
</template>

<script setup lang="ts">
import { articlePost } from "@/api/api"
import Editor from "@/components/Editor.vue"
import NavBar from "@/components/NavBar.vue"
import { ref } from 'vue'
import { useStore } from '@/store/ArticleState'
import { useStore as userStore } from '@/store/UserInfoState'
import { getNowTime } from '@/hooks/hooks'
import { ElMessage, ElLoading } from "element-plus"
import Copyright from '@/components/Copyright.vue'
import * as imageConversion from 'image-conversion'

const imageUrl = ref('')
const store = useStore()
const userstore = userStore()
const uploadRef = ref()
const title = ref()
let checkFile: any = []
let loading: any
function openLoading() {
    loading = ElLoading.service({
        fullscreen: true,
        background: 'rgba(244, 231, 210, .4)',
        text: '发布中...',
    })
}
function closeLoading() {
    loading.close()
}
//实现请求
function articleUpload(upload: any) {
    const formData = new FormData() //封装成formdata格式上传
    const content = store.$state.EditTemp //获取文章内容
    const articleTitle = title.value
    const file = upload.file
    const time = getNowTime()

    imageConversion.compressAccurately(file, 200).then(res => {
        const compressFile = new window.File([res], 'articleCover', { type: 'image/jpeg' })
        formData.append('articleCover', compressFile)
        formData.append('articleTitle', articleTitle)
        formData.append('articleContent', content)
        formData.append('articleDate', time)
        articlePost(formData).then(res => {
            closeLoading()
        }).catch(err => {
            closeLoading()
        })
    })
}
//图片上传验证
function beforeCoverUpload(rawFile: any) {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.warning('图片必须为JPG格式!')
        closeLoading()
        return false
    } else if (rawFile.size / 1024 / 1024 / 1024 / 1024 / 1024 > 5) {
        ElMessage.warning('图片大小不能超过5MB!')
        closeLoading()
        return false
    }
    return true
}
//上传图片覆盖
function onChangeHandler(file: any, fileList: any) {
    checkFile.push({ name: "none", url: "none" })
    if (fileList.length > 1) {
        fileList.splice(0, 1)
    }
    imageUrl.value = file.url
}
//手动上传
function submit() {
    const content = store.$state.EditTemp //获取文章内容
    const articleTitle = title.value
    if (checkFile.length === 0) {
        return ElMessage.warning('请上传文章封面!')
    } else if (!articleTitle) {
        return ElMessage.warning('文章标题不能为空!')
    } else if (content === '') {
        return ElMessage.warning('文章内容不能为空!')
    } else {
        openLoading()
        uploadRef.value.submit()
    }
}
</script>

<style scoped lang="less">
:deep(.avatar-uploader .el-upload) {
    border: 1px dashed @buttonWhite;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
    background-color: @buttonWhite;
    flex-direction: column;
}

:deep(.avatar-uploader .el-upload:hover) {
    border-color: @defaultTitle;
}

:deep(.el-icon.avatar-uploader-icon) {
    .publicWH(200px, 200px);
    font-size: 28px;
    color: @pfontColor;
    text-align: center;
}

:deep(.el-input__wrapper) {
    border-radius: 10px;
    margin: 0;
}

:deep(.el-input__inner) {
    font-size: 16px;
    font-weight: bold;
}

.edit-container {
    position: relative;
    .publicWH(100%, calc(100vh));
    background-color: rgba(244, 231, 210, .1);
    backdrop-filter: blur(8px);

    .editor-box {
        .publicMP(20px auto 20px auto, 0);
        .publicFlex(none, none, center);
        .publicWH(80%, 80%);
        .opacityAmt(2s, ease);

        .submit-box {
            .publicMP(0 0 0 20px, 0);

            .input {
                .publicMP(0 0 20px 0, 0);
            }

            .avatar-uploader {
                .avatar {
                    .publicWH(200px, 200px);
                    display: block;
                    object-fit: cover;
                }

                p {
                    color: @defaultTextHv;
                    text-align: center;
                    .publicWH(100%, auto);
                    .publicMP(0, 0);
                    border-top: 1px dashed @defaultTextHv;
                    background-color: @buttonWhite;
                }
            }

            .button-box {
                margin-top: 20px;
                .publicFlex(none, none, center);
                .publicWH(100%, 34px);
                background-color: @buttonColor;
                border-radius: 20px;
                box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);

                &:hover {
                    background-color: @buttonHV;
                }

                h2 {
                    .publicMP(5px 0, 0);
                    color: @defaultFont2;
                    font-size: 18px;
                    font-weight: 800;
                }
            }
        }
    }

    .copyright {
        position: absolute;
        bottom: 0;
        z-index: 999;
    }
}

@media only screen and(max-width: 850px) {
    .editor-box{
        flex-direction: column;
        .submit-box{
            .publicMP(10px 0 0 0,0) !important;
            .avatar-uploader{
                .publicFlex(center,none,center);
                flex-direction: column;
            }
        }
    }
}
</style>