<template>
    <div class="userinfocard" v-Emerge>
        <el-card shadow="always" :body-style="{ padding: '20px', height: '100%' }" style="border-radius: 10px;">
            <div class="main-container">
                <div class="avatar-box">
                    <el-avatar icon="el-icon-user-solid" size="large" shape="circle" :src="store.$state.userAvatar"
                        :key="store.$state.userAvatar" fit="fill"></el-avatar>
                    <div v-if="!signstore.$state.isLogin" class="border"></div>
                    <el-upload v-if="signstore.$state.isLogin" style="width:0;height:0" name="avatar" :auto-upload="true"
                        :show-file-list="false" list-type="picture" :http-request="avatarUpdate"
                        :before-upload="beforeavatarUpdate" :on-change="onChangeHandler">
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
                <div class="nickname-edit-box" style="display: flex;align-items: center;position: relative;">
                    <span v-if="!nicknameEdit" class="nickname" @click="clickNicknameEdit()"
                        :class="signstore.$state.isLogin ? 'nicknamehover' : ''">{{ store.$state.userNickname }}</span>
                    <div class="icon" v-show="!nicknameEdit">
                        <el-icon size="28">
                            <EditPen />
                        </el-icon>
                    </div>
                    <el-input v-if="nicknameEdit" v-model="store.$state.userNickname"
                        :placeholder="store.$state.userNickname" v-focus @blur="nicknameblurUpdate()"></el-input>
                </div>
                <div v-if="signstore.$state.isLogin" class="name-box">
                    <p class="name">{{ '@' + store.$state.userName }}</p>
                </div>
                <div class="tag-edit-box" style="display: flex;align-items: center;position: relative;">
                    <p v-if="!tagEdit" class="name-tag" @click="clickTagEdit()"
                        :class="signstore.$state.isLogin ? 'nametaghover' : ''">{{ store.$state.userNameTag }}</p>
                    <div class="icon" v-show="!tagEdit">
                        <el-icon>
                            <EditPen />
                        </el-icon>
                    </div>
                    <el-input v-if="tagEdit" v-model="store.$state.userNameTag" :placeholder="store.$state.userNameTag"
                        v-focus @blur="tagblurUpdate()" suffix-icon="EditPen"></el-input>
                </div>
                <div v-if="signstore.$state.isLogin" style="display:flex;margin-top: 20px;">
                    <div class="select">
                        <el-badge :value="10" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" @click="$router.push('/platform/myarticle')"
                                style="--el-button-hover-bg-color:transparent;" round color="transparent">文章</el-button>
                        </el-badge>

                        <p class="select-num">{{ store.$state.userArticle }}</p>
                    </div>
                    <div class="select">
                        <el-badge :value="3" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" @click="" style="--el-button-hover-bg-color:transparent;" round
                                color="transparent">关注</el-button>
                        </el-badge>

                        <p class="select-num">{{ store.$state.userFollows }}</p>
                    </div>
                    <div class="select">
                        <el-badge :value="5" :max="99" :is-dot="false" :hidden="false">
                            <el-button type="primary" @click="" style="--el-button-hover-bg-color:transparent;" round
                                color="transparent">喜欢</el-button>
                        </el-badge>

                        <p class="select-num">{{ store.$state.userLike }}</p>
                    </div>
                </div>
                <div v-else class="button-box" @click="signstore.$state.showSignView = true">
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
import { userAvatarUpdate, userNicknameUpdate, userNameTagUpdate } from '@/api/api'
import { ElMessage } from 'element-plus'
import { useStore } from '@/store/UserInfoState'
import { useStore as useSignStore } from "@/store/SignState"
import { getNowTime } from '@/hooks/hooks'
import { ref } from 'vue'
import * as imageConversion from 'image-conversion'
//声明仓库
const store = useStore()
const signstore = useSignStore()
//定义编辑开关
let tagEdit = ref(false)
let nicknameEdit = ref(false)
//头像数组
let checkFile: any = []
//定义原nickname和tag
let oriNickname = ''
let oriTag = ''
//实现请求
function avatarUpdate(upload: any) {
    const formData = new FormData() //封装成formdata格式上传
    imageConversion.compressAccurately(upload.file, 200).then(com => {
        formData.append('avatar', com)
        userAvatarUpdate(formData).then((res: any) => {
            if (res.code === 400) {
                return store.$state.userAvatar = res.data + '?' + (new Date().getTime() / 1000)
            }
        })
    })
}
//头像上传大小格式验证
function beforeavatarUpdate(rawFile: any) {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.warning('头像必须为JPG格式!')
        return false
    } else if (rawFile.size / 1024 / 1024 / 1024 / 1024 / 1024 > 5) {
        ElMessage.warning('头像大小不能超过5MB!')
        return false
    }
    return true
}
//多次上传头像覆盖
function onChangeHandler(file: any, fileList: any) {
    checkFile.push({ name: "none", url: "none" })
    if (fileList.length > 1) {
        fileList.splice(0, 1)
    }
}
//点击编辑事件
function clickTagEdit() {
    if (signstore.$state.isLogin) {
        tagEdit.value = true
        oriTag = store.$state.userNameTag
    } else {
        return false
    }
}
function clickNicknameEdit() {
    if (signstore.$state.isLogin) {
        nicknameEdit.value = true
        oriNickname = store.$state.userNickname
    } else {
        return false
    }
}
//
function nicknameblurUpdate() {
    nicknameEdit.value = !nicknameEdit.value
    let newNickname = store.$state.userNickname
    const nickReg = /^[\u4E00-\u9FA5A-Za-z0-9_]{1,12}$/
    if (oriNickname !== newNickname) {
        if (!nickReg.test(newNickname)) {
            ElMessage.error('昵称不能包括特殊符号，且长度须在1至12位!')
            store.$state.userNickname = oriNickname
        } else {
            userNicknameUpdate({
                newNickname: newNickname
            }).then((res: any) => {
                if (res.code === 500) {
                    localStorage.setItem('nickname', newNickname)
                }
            })
        }
    } else {
        return
    }
}
function tagblurUpdate() {
    tagEdit.value = !tagEdit.value
    let newTag = store.$state.userNameTag
    const tagLengthReg = /^.{1,16}$/
    if (oriTag !== newTag) {
        if (!tagLengthReg.test(newTag)) {
            ElMessage.error('签名长度须在1到16个字符!')
            store.$state.userNameTag = oriTag
        } else {
            userNameTagUpdate({
                newTag: newTag
            }).then((res: any) => {
                if (res.code === 600) {
                    localStorage.setItem('nametag', newTag)
                }
            })
        }
    } else {
        return
    }
}
</script>

<style scoped lang="less">
//更改input样式
:deep(.el-input__inner) {
    text-align: center;
    color: @sfontColor;
    letter-spacing: 1px;
}

:deep(.el-input__wrapper) {
    border-radius: 10px;
    box-shadow: none;

    &:hover {
        box-shadow: none;
    }

    &:focus-within {
        box-shadow: none;
    }
}

//
.el-card {
    .publicWH(300px, 360px);

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

        .nickname-edit-box {
            .nickname {
                .publicMP(10px 0 0 0, 0px);
                .publicFont(28px, 600, @pfontColor, 0px)
            }

            .nicknamehover {
                &:hover+.icon {
                    display: block;
                }
            }

            .icon {
                position: absolute;
                left: 100%;
                top: 14px;
                display: none;
                color: @pfontColor;
            }

            .el-input {
                margin-top: 10px;
                height: 36.8px;
                font-size: 28px;
            }
        }

        .name-box {
            .name {
                margin: 0;
                padding: 0;
                color: @defaultTextHv;
                font-size: 12px;
            }
        }

        .tag-edit-box {
            margin-top: 5px;

            .name-tag {
                .publicMP(5px, 0px);
                .publicFont(14px, 0, @sfontColor, 1px);

            }

            .nametaghover {
                &:hover+.icon {
                    display: block;
                }
            }

            .icon {
                position: absolute;
                left: 100%;
                top: 6px;
                display: none;
                color: @sfontColor;
            }

            .el-input {
                height: 29.2px;
                font-size: 16px;
            }
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
        background-color: @buttonColor;
        border-radius: 20px;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
        transition: all .2s ease;

        &:hover {
            background-color: @buttonHV;
        }

        h2 {
            margin: 5px 0;
            color: @defaultFont2;
            font-size: 18px;
            font-weight: 800;
        }
    }
}

//动态样式组
</style>