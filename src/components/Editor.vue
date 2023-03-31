<template>
    <div class="tinymce-boxz">
        <Editor id="tinymcebox" v-model="store.$state.EditTemp" :init="init" />
    </div>
</template>

<script setup lang="ts">
//导入模块
import axios from '@/api/axios'
import tinymce from 'tinymce'
import Editor from '@tinymce/tinymce-vue';
import { reactive, ref, onMounted } from "vue"
import { useStore } from '@/store/ArticleState'
import * as imageConversion from 'image-conversion'
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
        "codesample table insertdatetime advlist lists autosave emoticons nonbreaking save image",
    toolbar: [
        "undo redo forecolor bold italic underline strikethrough autosave| alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | blockquote codesample ",
        "blocks fontfamily fontsize| table emoticons|image",
    ], //工具栏配置，设为false则隐藏
    menubar: false,
    paste_data_images: true,

    //图片上传
    images_upload_handler: (blobInfo: any, progress: any) => new Promise((resolve, reject) => {
        imageConversion.compress(blobInfo.blob(), 200).then(res => {
            const formData = new FormData()
            const compressFile = new window.File([res], 'images', { type: 'image/jpeg' })
            formData.append('images', compressFile)
            axios.post('/user/artimg', formData)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    })
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


