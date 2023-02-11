<template>
    <div>
        <el-dialog v-model="store.$state.showSignView" width="50%" :lock-scroll="false" :show-close="false">
            <div class="img-box">
                <el-image :src="img" fit="cover" :lazy="false"
                    style="width: 100%;height: 100%;border-top-left-radius: 10px;border-bottom-left-radius: 10px;"></el-image>
            </div>
            <el-tabs v-model="actname" tab-position="top" @tab-click="">
                <el-tab-pane label="登录" name="SignIn">
                    <div class="tab">
                        <div class="tab-form">
                            <el-form :model="signInData" ref="signInFormRef" :rules="signInRule" prules=""
                                label-width="0px" :inline="false">
                                <el-form-item>
                                    <div>
                                        <h1>登录</h1>
                                    </div>
                                </el-form-item>
                                <el-form-item prop="username">
                                    <el-col :span="15">
                                        <el-input v-model.trim="signInData.username" class="input" placeholder="用户名"
                                            size="large" prefix-icon="User" minlength="6" maxlength="12"
                                            autocomplete="off"
                                            style="--el-input-focus-border-color:rgb(236,159,221)"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item prop="password">
                                    <el-col :span="15">
                                        <el-input v-model.trim="signInData.password" class="input" placeholder="密码"
                                            type="password" :show-password="true" size="large" prefix-icon="Lock"
                                            minlength="8" maxlength="12" autocomplete="off"
                                            style="--el-input-focus-border-color:rgb(236,159,221)"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item>
                                    <el-col :span="10" :offset="0">
                                        <el-link class="signin-box" :underline="false" href="javascript:;"
                                            @click="submitSignInForm(signInFormRef)">
                                            <div>
                                                <h2>登录</h2>
                                            </div>
                                        </el-link>
                                    </el-col>
                                </el-form-item>
                                <el-form-item>
                                    <div>
                                        <el-button style="width:32px" type="primary" size="default" @click="" circle>
                                            <svg t="1673785497731" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="2527" width="20" height="20">
                                                <path
                                                    d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                                                    p-id="2528" fill="#ffffff"></path>
                                            </svg>
                                        </el-button>
                                        <el-button style="width:32px" type="success" size="default" @click="" circle>
                                            <svg t="1673785926866" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg" p-id="3524" width="20" height="20">
                                                <path
                                                    d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
                                                    fill="#ffffff" p-id="3525"></path>
                                            </svg>
                                        </el-button>
                                    </div>
                                </el-form-item>

                            </el-form>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="注册" name="SignUp">
                    <div class="tab">
                        <div class="tab-form">
                            <el-form :model="signUpData" ref="signUpFormRef" :rules="signUpRule" prules=""
                                label-width="0px" :inline="false">
                                <el-form-item>
                                    <div>
                                        <h1>注册</h1>
                                    </div>
                                </el-form-item>
                                <el-form-item prop="username">
                                    <el-col :span="15">
                                        <el-input required v-model.trim="signUpData.username" class="input"
                                            placeholder="用户名" size="large" prefix-icon="User" minlength="6"
                                            maxlength="12" autocomplete="off"
                                            style="--el-input-focus-border-color:rgb(236,159,221)">
                                        </el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item prop="password">
                                    <el-col :span="15">
                                        <el-input v-model.trim="signUpData.password" class="input" placeholder="密码"
                                            type="password" :show-password="true" size="large" prefix-icon="Lock"
                                            minlength="8" maxlength="12" autocomplete="off"
                                            style="--el-input-focus-border-color:rgb(236,159,221)"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item prop="checkPassword">
                                    <el-col :span="15">
                                        <el-input v-model.trim="signUpData.checkPassword" class="input"
                                            placeholder="确认密码" type="password" :show-password="true" size="large"
                                            prefix-icon="Lock" minlength="8" maxlength="12" autocomplete="off"
                                            style="--el-input-focus-border-color:rgb(236,159,221)"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item>
                                    <el-col :span="10" :offset="0">
                                        <el-link class="signin-box" :underline="false" href="javascript:;"
                                            @click="submitSignUpForm(signUpFormRef)">
                                            <div>
                                                <h2>注册</h2>
                                            </div>
                                        </el-link>
                                    </el-col>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store/SignState"
import { ref, reactive } from 'vue'
import { signIn, signUp } from '@/api/api'
import { useStore as useSignStore } from "@/store/SignState"
import { useStore as useUserInfoStore } from "@/store/UserInfoState";
const store = useStore()
const signStore = useSignStore()
const userInfoStore = useUserInfoStore()
const actname = ref('SignIn')
const img = new URL(`@/assets/images/background4.png`, import.meta.url).href

const signUpFormRef = ref()
const signInFormRef = ref()
const signInData = reactive({
    username: '',
    password: ''
})

const signUpData = reactive({
    username: '',
    password: '',
    checkPassword: '',
})
const validateSignInUsername = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入用户名!'))
    }
    else {
        callback()
    }
}
const validateSignInPassword = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码!'))
    }
    else {
        callback()
    }
}
const validateSignUpUsername = (rule: any, value: any, callback: any) => {
    let userReg = /^[a-zA-Z0-9]{6,12}$/
    if (value === '') {
        callback(new Error('请输入用户名!'))
    }
    else {
        if (!userReg.test(value)) {
            callback(new Error('不能包含中文和特殊字符!'))
        } else {
            callback()
        }
        callback()
    }
}
const validateSignUpPassword = (rule: any, value: any, callback: any) => {
    let pwsReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,12}$/
    if (value === '') {
        callback(new Error('请输入密码!'))
    }
    else {
        if (!pwsReg.test(value)) {
            callback(new Error('必须由字母和数字组成！'))
        } else {
            callback()
        }
        callback()
    }
}

const validateSignUpCheckPassword = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请再次输入密码!'))
    } else if (value !== signUpData.password) {
        callback(new Error('两次输入的密码不一致!'))
    } else {
        callback()
    }
}
const signUpRule = reactive({
    username: [{ required: true, validator: validateSignUpUsername, trigger: 'blur' },
    { min: 6, max: 12, message: '用户名需要 6 到 12 个字符!', trigger: 'blur' }],
    password: [{ required: true, validator: validateSignUpPassword, trigger: 'blur' },
    { min: 8, max: 12, message: '密码需要 8 到 12 个字符!', trigger: 'blur' }],
    checkPassword: [{ required: true, validator: validateSignUpCheckPassword, trigger: 'blur' }]
})
const signInRule = reactive({
    username: [{ required: true, validator: validateSignInUsername, trigger: 'blur' },
    { min: 6, max: 12, message: '用户名需要 6 到 12 个字符!', trigger: 'blur' }],
    password: [{ required: true, validator: validateSignInPassword, trigger: 'blur' },
    { min: 8, max: 12, message: '密码需要 8 到 12 个字符!', trigger: 'blur' }],
})

const submitSignUpForm = (formEl: any) => {
    if (!formEl) return
    formEl.validate((valid: any) => {
        if (valid) {
            signUp({
                username: signUpData.username,
                password: signUpData.password,
                checkpassword: signUpData.checkPassword,
            }).then((res: any) => {
                if (res.code === 100) {
                    formEl.resetFields()
                }
            })
        } else {
            return false
        }
    })
}

const submitSignInForm = (formEl: any) => {
    if (!formEl) return
    formEl.validate((valid: any) => {
        if (valid) {
            signIn({
                username: signInData.username,
                password: signInData.password
            }).then((res: any) => {
                if (res.code === 200) {
                    signStore.$state.showSignView = false
                    signStore.$state.isLogin = true
                    userInfoStore.getUserInfo(res.data[0])
                    localStorage.setItem('token', res.token)
                    formEl.resetFields()
                }
            })
        } else {
            return false
        }
    })
}
</script>

<style scoped lang="less">
//tab选项居中
:deep(.el-tabs__nav) {
    float: none;
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin: 0 auto;
}

//tab条隐藏
:deep(.el-tabs__nav-wrap::after) {
    display: none;
}

//tab滑动条颜色
:deep(.el-tabs__active-bar) {
    background-color: @defaultTitle;
    .publicWH(auto, 4px)
}

//tab文字样式
:deep(.el-tabs__item) {
    font-size: 16px;
    font-weight: bold;
    color: @defaultFont;
}

//tab文字样式
:deep(.el-tabs__item.is-active),
:deep(.el-tabs__item:hover) {
    color: @defaultFont;
}

//tab文字
:deep(.el-tabs--top .el-tabs__item.is-top:last-child) {
    padding: 0 20px;
}

//tab文字
:deep(.el-tabs--top .el-tabs__item.is-top:nth-child(2)) {
    padding: 0 20px;
}

//tab头
:deep(.el-tabs__header) {
    margin: 5px 0 0 0;
}

//模态框
:deep(.el-dialog) {
    background-color: @defaultBG;
    box-shadow: none;
    border-radius: 10px;
    z-index: 200;
}

// //样式穿透需要拥有根节点才可以生效
//模态框头
:deep(.el-dialog__header) {
    padding: 0;
    margin: 0;
}

//模态框主体
:deep(.el-dialog__body) {
    padding: 0;
    border-radius: 10px;
    display: flex;
}

//输入框圆角
:deep(.el-input__wrapper) {
    border-radius: 20px;
    margin: 0;
}

:deep(.el-input--large) {
    font-size: 16px;
}

:deep(.el-form-item__content) {
    justify-content: center
}

//错误提示边框颜色
:deep(.el-form-item.is-error .el-input__wrapper) {
    box-shadow: 0 0 0 1px @defaultErrorBorder inset;
}

//错误提示框颜色
:deep(.el-form-item__error) {
    left: 20%;
    color: @defaultError;
}

.el-dialog {

    .img-box {
        .publicWH(40%, 400px);
    }

    .el-tabs {
        .publicWH(60%, 400px);

        .el-form {
            display: flex;
            flex-direction: column;

            h1 {
                font-size: 32px;
                margin-top: 25px;
            }

            .signin-box {
                .publicWH(100%, 100%);
                background-color: @defaultTitle;
                border-radius: 20px;
                box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);

                &:hover {
                    background-color: rgb(241, 129, 219);
                }

                h2 {
                    margin: 5px 0;
                    color: @defaultFont2;
                }
            }
        }
    }
}

@media only screen and(min-width: 670px) and(max-width: 1200px) {
    .img-box {
        display: none !important;
    }

    .el-tabs {
        .publicWH(100%, 100%) !important;
    }
}

@media only screen and(max-width: 670px) {
    .img-box {
        display: none !important;
    }

    .el-tabs {
        .publicWH(100%, 100%) !important;
    }
}
</style>