<template>
    <div class="main">
        <CateLog></CateLog>
    </div>
</template>

<script setup lang="ts">
import CateLog from '@/components/Article/CateLog.vue'
const str = '/ws/location/v1/ip' + '?key=CPOBZ-UUGEF-DJBJP-JMNIH-5Q2L6-Y2BVE' + 'DaGgcoLDvYDxOeIYs1a4EiIadaRFzbc'
const b = 'https://apis.map.qq.com/ws/location/v1/ip' + '?key=CPOBZ-UUGEF-DJBJP-JMNIH-5Q2L6-Y2BVE' + '&sig=689c3ab1a368c416d4c954d8256760e9'
console.log(b);

</script>

<style scoped lang="less">
</style>