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
                    :auto-upload="false" list-type="picture" :on-change="onChangeHandler"
                    :before-upload="beforeCoverUpload" :file-list="checkFile">
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
    </div>
</template>

<script setup lang="ts">
import axios from "@/api/axios";
import Editor from "@/components/Editor.vue"
import NavBar from "@/components/NavBar.vue";
import { ref } from 'vue'
import { useStore } from '@/store/ArticleState';
import { useStore as userStore } from '@/store/UserInfoState';
import { getNowTime } from '@/hooks/hooks'
import { ElMessage } from "element-plus";
const imageUrl = ref('')
const store = useStore()
const userstore = userStore()
const uploadRef = ref()
const title = ref()
let checkFile: any = []
//实现请求
function articleUpload(upload: any) {
    const formData = new FormData() //封装成formdata格式上传
    const content = store.$state.EditTemp //获取文章内容
    const articleTitle = title.value
    const file = upload.file
    const time = getNowTime()
    formData.append('articleCover', file)
    formData.append('articleTitle', articleTitle)
    formData.append('articleContent', content)
    formData.append('articleDate', time)
    axios.post('/user/artPost', formData)
        .then(res => {})
        .catch(err => {})
}
//图片上传验证
function beforeCoverUpload(rawFile: any) {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.warning('头像必须为JPG格式!')
    } else if (rawFile.size / 1024 / 1024 / 1024 / 1024 / 1024 > 5) {
        ElMessage.warning('头像大小不能超过5MB!')
    }
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
        uploadRef.value.submit()
    }
}
</script>

<style scoped lang="less">
:deep(.avatar-uploader .el-upload) {
    border: 1px dashed #fff;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
    background-color: #fff;
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
    .publicWH(100%, 100vh);
    background-color: @defaultBG;

    .editor-box {
        .publicMP(40px auto 0 auto, 0);
        .publicFlex(none, none, center);
        .publicWH(80%, 80%);

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
                    color: @defalutTextHv;
                    text-align: center;
                    .publicWH(100%, auto);
                    .publicMP(0, 0);
                    border-top: 1px dashed @defalutTextHv;
                    background-color: #fff;
                }
            }

            .button-box {
                margin-top: 20px;
                .publicFlex(none, none, center);
                .publicWH(100%, 34px);
                background-color: rgb(241, 129, 219);
                border-radius: 20px;
                box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);

                &:hover {
                    background-color: @defaultTitle;
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
}
</style>