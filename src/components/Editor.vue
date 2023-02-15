<template>
    <div class="tinymce-boxz">
        <Editor id="tinymcebox" v-model="store.$state.EditTemp" :init="init" />
    </div>
</template>

<script setup lang="ts">
//导入模块
import tinymce from 'tinymce';
import Editor from '@tinymce/tinymce-vue';
import { reactive, ref, onMounted } from "vue";
import { useStore } from '@/store/ArticleState';
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
import 'tinymce/plugins/image'
import { fa } from 'element-plus/es/locale';
const store = useStore()
const init = reactive({
    selector: '#tinymcebox',
    language: "zh-Hans",
    placeholder: "开始创作你的第一篇文章!",
    height: 500,
    width: 1200,
    resize: false,
    statusbar: false,
    skin_url: 'tinymce/skins/ui/oxide',
    emoticons_database_url: 'tinymce/emojis.js',
    branding: false,

    fontsize_formats: "8pt 10pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 36pt",
    font_family_formats: "微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;",
    plugins:
        "codesample table insertdatetime advlist lists autosave emoticons nonbreaking save",
    toolbar: [
        "undo redo forecolor bold italic underline strikethrough autosave| alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | blockquote codesample ",
        "blocks fontfamily fontsize| table emoticons|",
    ], //工具栏配置，设为false则隐藏
    menubar: false,
    paste_data_images: true,

    //图片上传
    images_upload_handler: (blobInfo: any, success: any, failure: any) => {
        // 这里用base64的图片形式上传图片,
        let reader = new FileReader(); //本地预览
        reader.readAsDataURL(blobInfo.blob());
        console.log(reader);
    }
})
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
        background: @editorBG;
    }
}

:deep(.tox .tox-tbtn--enabled, .tox .tox-tbtn--enabled:hover) {
    background: @editorBG;
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


