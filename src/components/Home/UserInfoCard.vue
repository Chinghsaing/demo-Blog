<template>
    <div class="userinfocard" v-Emerge>
        <el-card shadow="always" :body-style="{ padding: '20px', height: '100%' }" style="border-radius: 10px;">
            <div class="main-container">
                <div class="avatar-box">
                    <el-avatar icon="el-icon-user-solid" size="large" shape="circle" :src="store.$state.userAvatar"
                        fit="fill"></el-avatar>
                    <el-upload v-if="signstore.$state.isLogin" style="width:0;height:0" name="avatar" 
                        :auto-upload="true" :multiple="false" :limit="1" :show-file-list="false" list-type="picture"
                        :http-request="avatarUpload" :before-upload="beforeAvatarUpload">
                        <div class="border"></div>
                        <div class="mask-box">
                            <div class="mask"></div>
                            <div class="edit"><el-icon size="28" color="#3c3c3c">
                                    <Edit />
                                </el-icon>
                            </div>
                        </div>
                    </el-upload>
                </div>
                <span class="name">{{ store.$state.userName }}</span>
                <p class="name-tag">{{ store.$state.userNameTag }}</p>
                <div v-if="signstore.$state.showUserCradInfo" style="display:flex;margin-top: 20px;">
                    <div class="select">
                        <el-badge :value="10" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" size="default" @click=""
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">文章</el-button>
                        </el-badge>

                        <p class="select-num">{{ store.$state.userArticle }}</p>
                    </div>
                    <div class="select">
                        <el-badge :value="3" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" size="default" @click=""
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">关注</el-button>
                        </el-badge>

                        <p class="select-num">{{ store.$state.userFollows }}</p>
                    </div>
                    <div class="select">
                        <el-badge :value="5" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" size="default" @click=""
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">喜欢</el-button>
                        </el-badge>

                        <p class="select-num">{{ store.$state.userLike }}</p>
                    </div>
                </div>
                <div v-if="!signstore.$state.showUserCradInfo" class="button-box"
                    @click="signstore.$state.showSignView = true">
                    <el-link :underline="false" href="javascript:;">
                        <div>
                            <h2>登录 / 注册</h2>
                        </div>
                    </el-link>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
//导入模块
import axios from '@/api/axios';
import { ElMessage } from 'element-plus'
import { useStore } from '@/store/UserInfoState'
import { useStore as useSignStore } from "@/store/SignState"
import { ref } from 'vue';
//声明仓库
const store = useStore()
const signstore = useSignStore()

//用户头像上传
function avatarUpload(upload: any) {
    const formData = new FormData() //封装成formdata格式上传
    formData.append('avatar', upload.file)
    formData.append('uid', store.$state.uid)
    formData.append('username', store.$state.userName)

    axios.post('/api/avatar/upload', formData)
        .then(res => {
            if (res.data.res_code === 400) {
                ElMessage.success('头像上传成功!')
            } else {
                ElMessage.warning('头像上传出错!错误原因:' + res.data.res_code)
            }
        })
        .catch(err => {
            ElMessage.error('与服务器的通信出现了未知错误!')
        })

}
//头像上传大小格式验证
function beforeAvatarUpload(rawFile: any) {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.warning('头像必须为JPG格式!')
    } else if (rawFile.size / 1024 / 1024 / 1024 / 1024 / 1024 > 5) {
        ElMessage.warning('头像大小不能超过5MB!')
    }
}
</script>

<style scoped lang="less">
.el-card {
    .publicWH(300px, 350px);

    .main-container {
        .publicFlex(center, none, none);
        flex-direction: column;

        .avatar-box {
            position: relative;

            .el-avatar {
                .publicMP(20px 0 0 0, 0px);
                .publicWH(100px, 100px);
            }

            .border {
                .publicWH(97px, 97px);
                .publicPos(18px, -4px, 9);
                border: 4px solid #f56c6c;
                box-shadow: 0 0px 35px rgba(251, 20, 20, 0.4);
                border-radius: 50%;

                &:hover+.mask-box {
                    display: block;
                }
            }

            .mask-box {
                display: none;

                .mask {
                    .publicWH(100px, 100px);
                    .publicPos(20px, -1px, 8);
                    background-color: rgba(0, 0, 0, 0.5);
                    border-radius: 50%;
                }

                .edit {
                    .el-icon {
                        .publicPos(75%, 100%, 10);
                    }
                }
            }

        }

        .name {
            .publicMP(10px 0 0 0, 0px);
            .publicFont(28px, 600, @pfontColor, 0px)
        }

        .name-tag {
            .publicMP(5px, 0px);
            .publicFont(14px, 0, @sfontColor, 1px);
        }

        .select {
            .publicFlex(center, none, none);
            flex-direction: column;
            .publicMP(10px 10px, 0px);

            .el-button {
                color: @pfontColor;
                border: none;
                transition: all .2s ease;

                &:hover {
                    background-color: @defaultHv;
                }

                &:active {
                    background-color: @defaultAct;
                }
            }

            .select-num {
                .publicMP(5px 0, 0px);
                font-weight: bold;
            }
        }
    }

    .button-box {
        margin: 45px 0px;
        .publicFlex(none, none, center);
        .publicWH(100%, 100%);
        background-color: rgb(241, 129, 219);
        border-radius: 20px;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);

        &:hover {
            background-color: @defaultTitle;
        }

        h2 {
            margin: 5px 0;
            color: @defaultFont2;
            font-size: 18px;
            font-weight: 800;
        }
    }
}
</style>