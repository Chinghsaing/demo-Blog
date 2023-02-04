<template>
    <div class="tinymce-boxz">
        <Editor v-model="store.$state.EditTemp" :init="init" />
    </div>
</template>

<script setup lang="ts">
//导入模块
import tinymce from 'tinymce';
import Editor from '@tinymce/tinymce-vue';
import { reactive, ref, onMounted } from "vue";
import { useStore } from '@/store/ArtState';
//导入插件
import 'tinymce/models/dom'
import 'tinymce/themes/silver'
import 'tinymce/icons/default'
import 'tinymce/plugins/advlist' // 高级列表
import 'tinymce/plugins/autosave' // 自动存稿
import 'tinymce/plugins/codesample' // 代码示例
import 'tinymce/plugins/emoticons' // 表情
import 'tinymce/plugins/insertdatetime' // 插入日期时间
import 'tinymce/plugins/lists' // 列表插件
import 'tinymce/plugins/nonbreaking' // 插入不间断空格
import 'tinymce/plugins/save' // 保存
import 'tinymce/plugins/table' // 表格
import 'tinymce/plugins/codesample'
const store = useStore()
const init = reactive({
    language: "zh-Hans",
    placeholder: "开始创作你的第一篇文章!",
    height: 500,
    width: 1200,
    resize: false,
    statusbar: false,
    skin_url: '/tinymce/skins/ui/oxide',
    emoticons_database_url: '/tinymce/emojis.js',
    branding: false,
    nonbreaking_force_tab: true,

    font_formats:
        "微软雅黑=Microsoft YaHei", //字体样式
    plugins:
        "codesample table insertdatetime advlist lists autosave emoticons nonbreaking",
    toolbar: [
        "forecolor bold italic underline strikethrough | alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | blockquote codesample ",
        "formatselect fontsizeselect | table emoticons|",
    ], //工具栏配置，设为false则隐藏
    menubar: true,
    paste_data_images: true,
});
onMounted(() => {
    tinymce.init({})
})

</script>

<style scoped lang="less">
:deep(.tox-tinymce) {
    .publicWH(100%, 100%) !important;
    border-radius: 10px !important;
}

:deep(.tox .tox-tbtn) {
    color: @pfontColor;

    &:hover {
        background: rgb(249, 215, 242);
    }
}

:deep(.tox .tox-tbtn--enabled, .tox .tox-tbtn--enabled:hover) {
    background: rgb(249, 215, 242);
}

:deep(.tox .tox-tbtn svg) {
    fill: @pfontColor;
}

.tinymce-boxz {
    .publicWH(100%, 100%) !important;
}

.tinymce-boxz>textarea {
    display: none;
}
</style>
<style lang="less">
.tox-notifications-container .tox-notification--warning {
    display: none !important;
}
</style>


