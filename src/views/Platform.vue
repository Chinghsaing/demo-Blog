<template>
    <div class="platform-container">
        <div>
            <NavBar TextColor="color:#fff" BackColor="background-color:rgb(236, 159, 221)"></NavBar>
        </div>
        <el-container>
            <el-aside width="200px">
                <el-menu router active-text-color="#ffd04b" background-color="rgb(236, 159, 221)" text-color="#fff"
                    :default-active="store.$state.menuActive">
                    <el-menu-item index="/platform/account">
                        <div style="width: 100%;height: 100%;padding: 0 20px;border-radius: 10px;" ref="account">
                            <el-icon>
                                <Tools />
                            </el-icon>
                            <span>个人中心</span>
                        </div>
                    </el-menu-item>
                    <el-menu-item index="/platform/myarticle">
                        <div style="width: 100%;height: 100%;padding: 0 20px;border-radius: 10px;" ref="myarticle">
                            <el-icon>
                                <Reading />
                            </el-icon>
                            <span>我的文章</span>
                        </div>
                    </el-menu-item>
                    <el-menu-item index="/platform/mymessage">
                        <div style="width: 100%;height: 100%;padding: 0 20px;border-radius: 10px;" ref="mymessage">
                            <el-icon>
                                <Comment />
                            </el-icon>
                            <span>我的留言</span>
                        </div>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        <Copyright class="copyright"></Copyright>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStore } from '@/store/PlatformState'
import NavBar from '@/components/NavBar.vue'
import Copyright from '@/components/Copyright.vue'
const store = useStore()
const myarticle = ref()
const account = ref()
const mymessage = ref()
onMounted(() => {
    const sub = store.$subscribe((mutation, state) => {
        if (state.menuActive === '/platform/myarticle') {
            myarticle.value.style.backgroundColor = 'rgb(232, 115, 209)'
            account.value.style.backgroundColor = ''
            mymessage.value.style.backgroundColor = ''
        } else if (state.menuActive === '/platform/account') {
            account.value.style.backgroundColor = 'rgb(232, 115, 209)'
            mymessage.value.style.backgroundColor = ''
            myarticle.value.style.backgroundColor = ''
        } else if (state.menuActive === '/platform/mymessage') {
            mymessage.value.style.backgroundColor = 'rgb(232, 115, 209)'
            myarticle.value.style.backgroundColor = ''
            account.value.style.backgroundColor = ''
        }
    })
})
</script>

<style scoped lang="less">
:deep(.el-menu-item.is-active){
    background-color: @buttonHV;
}
.platform-container {
    .publicWH(100%, calc(100vh));
    background-color: rgba(244, 231, 210, .1);
    backdrop-filter: blur(8px);
    overflow: hidden;
    position: relative;

    .el-container {
        .opacityAmt(2s, ease);
        .publicWH(80%, 80%);
        margin: 20px auto 20px auto;

        .el-aside {
            background-color: @defaultTitle;
            border-radius: 10px 0 0 10px;

            .el-menu {

                .el-menu-item {
                    border-radius: 10px;
                    padding: 0;

                    span {
                        font-weight: bold;
                        font-size: 16px;
                    }

                    &:hover {
                        background-color: @buttonHV;
                    }
                    &:focus{
                        background-color: @buttonHV;
                    }
                }
            }
        }

        .el-main {
            border-radius: 0 10px 10px 0;
            background-color: @defaultFont2;
        }
    }

    .copyright {
        position: absolute;
        bottom: 0;
    }
}
</style>