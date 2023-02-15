<template>
    <div class="footer-container">
        <span>©2023 By Mishuroki</span>
    </div>
  </template>

<script setup lang="ts">
  
</script>

<style scoped lang="less">
.footer-container{
    .publicFlex(center,none,center);
    background-color: @defaultTitle;
    .publicWH(100%,38px);
    span{
        font-size: 14px;
        font-weight: bold;
        color: @defaultFont2;
    }
}
</style>