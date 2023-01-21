<template>
    <div>
        {{ articleInfo.artTitle }}
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store/ArtState';

const store = useStore()
const route =useRoute()

const id = Number(route.params.id)

const articleInfo = {
    artTitle:store.$state.ArtData[id-1].artTitle
}


</script>
