<template>
    <div class="colum">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
            <h2>目录</h2>
            <ul class="catalog">
                <li v-for="(item, index) in store.$state.CataLog" :key="index"
                    :style="{ paddingLeft: item.level * 30 - 44 + 'px' }" :class="{ 'cc': item.read == true }">
                    <!---设置href，用于目录的跳转；动态绑定id，判断当前正在阅读的是哪一个小标题的内容--->
                    <a :href="'#' + item.id" :id="item.id">{{ item.title }}</a>
                </li>
            </ul>
        </el-card>

    </div>
</template>
  
<script setup lang="ts">
import { useStore } from '@/store/ArticleState'
const store = useStore()
</script>

<style scoped lang="less">
.el-card{
    .publicWH(300px, 360px);
    ul{
        list-style: none;
        a{
            text-decoration: none;
            color: pink;
        }
    }
}
.cc {
    background-color: rgb(254, 242, 235);
}
</style>
 
 
