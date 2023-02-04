<template>
    <div>
        <el-card shadow="always" :body-style="{ padding: '20px' }">
            <div v-html="store.$state.ArtData[id-1].artContent">
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/ArtState';
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()

const id: number = Number(route.params.id)

</script>

<style scoped lang="less">
.el-card {
    .publicWH(100%, auto);
    border-radius: 10px;
    p {
        color: @pfontColor;
        font-size: 18px;
    }
}
</style>