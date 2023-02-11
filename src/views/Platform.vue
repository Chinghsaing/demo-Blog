<template>
    <div class="platform-container">
        <div>
            <NavBar TextColor="color:#fff" BackColor="background-color:rgb(236, 159, 221)"></NavBar>
        </div>
        <el-container>
            <el-aside width="200px">
                <el-menu router active-text-color="#ffd04b" background-color="rgb(236, 159, 221)" text-color="#fff" :default-active="store.$state.menuActive">
                    <el-menu-item index="/platform/account">
                        <span>个人中心</span>
                    </el-menu-item>
                    <el-menu-item index="/platform/myarticle">
                        <span>我的文章</span>
                    </el-menu-item>
                    <el-menu-item index="/platform/mymessage">
                        <span>我的留言</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/PlatformState'
import NavBar from '@/components/NavBar.vue'

const store = useStore()
</script>

<style scoped lang="less">
.platform-container {
    .publicWH(100%, 100vh);
    background-color: @defaultBG;

    .el-container {
        .publicWH(80%, 80%);
        margin: 40px auto 0 auto;

        .el-aside {
            background-color: @defaultTitle;
            border-radius: 10px 0 0 10px;

            .el-menu {

                .el-menu-item {
                    border-radius: 10px;
                    span {
                        font-weight: bold;
                        font-size: 16px;
                    }

                    &:hover {
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
}
</style>