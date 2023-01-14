<template>
    <el-card v-for="item in 4" shadow="always" :body-style="{ padding: '20px' }">
            <div>
                <span>card title</span>
            </div>
        card body
    </el-card>

</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
    .el-card {
        .publicWH(100%,250px);
        color: lightsalmon;
        border-radius: 20px;
        margin-bottom: 20px;
    }
</style>