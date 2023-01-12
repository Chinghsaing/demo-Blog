<template>
    <div class="smallcard-container">
        <el-row :gutter="20" type="flex" style="flex-wrap: wrap;">
            <el-col v-for="item in news" :key="item.id" :span="6" :offset="0">
                <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <div>
                        <span>Tilte</span>
                    </div>
                    <p>context</p>
                </el-card>
            </el-col>
            <el-col v-for="item in news" :key="item.id" :span="6" :offset="0">
                <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <div>
                        <span>Tilte</span>
                    </div>
                    <p>context</p>
                </el-card>
            </el-col>
            <el-col v-for="item in news" :key="item.id" :span="6" :offset="0">
                <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <div>
                        <span>Tilte</span>
                    </div>
                    <p>context</p>
                </el-card>
            </el-col>
            <el-col v-for="item in news" :key="item.id" :span="6" :offset="0">
                <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <div>
                        <span>Tilte</span>
                    </div>
                    <p>context</p>
                </el-card>
            </el-col>
            <el-col v-for="item in news" :key="item.id" :span="6" :offset="0">
                <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <div>
                        <span>Tilte</span>
                    </div>
                    <p>context</p>
                </el-card>
            </el-col>
            <el-col v-for="item in news" :key="item.id" :span="6" :offset="0">
                <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <div>
                        <span>Tilte</span>
                    </div>
                    <p>context</p>
                </el-card>
            </el-col>
        </el-row>
    </div>


</template>

<script setup lang="ts">
const news = [
    {
        id: 1,
        text: 666,
    },
    {
        id: 2,
        text: 777,
    },
    {
        id: 3,
        text: 777,
    },
    {
        id: 4,
        text: 777,
    },
]
</script>

<style scoped lang="less">
.smallcard-container{
    .publicWH(55%,auto);

    .el-card {
    .publicWH(150px, 150px)
}
}

</style>