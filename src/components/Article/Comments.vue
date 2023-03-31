<template>
    <div class="comments-container">
        <div class="main-box">
            <div style="display: flex;">
                <el-row style="width: 100%;">
                    <el-col :span="2">
                        <div style="margin-right: 10px;">
                            <el-avatar shape="square" :size="50" :src="store.$state.ArtData[id - 1].author.avatar" />
                        </div>
                    </el-col>
                    <el-col :span="22">
                        <div class="content-box">
                            <div style="padding: 5px;">
                                <div class="edit-placeholder">
                                    <div ref="placeholder">发一条友善评论~</div>
                                </div>
                                <div class="edit-box">
                                    <span contenteditable="true" ref="text" @input="inputHidePlaceHolder"
                                        @blur="blurShowPlaceHolder"></span>
                                </div>
                            </div>
                            <div class="add-box" ref="add">
                                <div style="width: 25px;height: 25px;">
                                    <el-popover placement="bottom" title="表情" trigger="click" :width="300"
                                        :hide-after="0" :show-after="0">
                                        <template #reference>
                                            <svg style="width: 100%;height: 100%;" t="1675685525244" class="icon"
                                                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                p-id="3084" width="200" height="200">
                                                <path
                                                    d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667z m48.384 532.928A234.538667 234.538667 0 0 1 520.405333 768a234.538667 234.538667 0 0 1-203.264-117.333333 21.333333 21.333333 0 0 0-36.949333 21.333333 277.184 277.184 0 0 0 240.213333 138.666667c100.16 0 190.997333-53.546667 240.213334-138.666667a21.333333 21.333333 0 0 0-36.906667-21.333333zM341.333333 426.624c0-23.552 18.944-42.624 42.666667-42.624 23.573333 0 42.666667 19.157333 42.666667 42.624v42.752A42.538667 42.538667 0 0 1 384 512c-23.573333 0-42.666667-19.157333-42.666667-42.624v-42.752z m256 0c0-23.552 18.944-42.624 42.666667-42.624 23.573333 0 42.666667 19.157333 42.666667 42.624v42.752A42.538667 42.538667 0 0 1 640 512c-23.573333 0-42.666667-19.157333-42.666667-42.624v-42.752z"
                                                    fill="#3D3D3D" p-id="3085"></path>
                                            </svg>
                                        </template>
                                        <div>
                                            <ul style="list-style: none;padding: 0;">
                                                <li v-for="(item, index) in emoji " :key="index"
                                                    @click="getEmoji(item.text)">
                                                    {{ item.text }}
                                                </li>
                                            </ul>
                                        </div>
                                    </el-popover>
                                </div>
                                <div class="button-box" @click="commentUpload()">
                                    <el-link :underline="false" href="javascript:;">
                                        <div>
                                            <h2>发布</h2>
                                        </div>
                                    </el-link>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { commentPost } from '@/api/api'
import { useStore } from '@/store/ArticleState'
import { useStore as cmtStore } from '@/store/CommentState'
import { useStore as userStore } from '@/store/UserInfoState'
import { useRoute } from 'vue-router'
import { getNowTime,emojis } from '@/hooks/hooks'
import { ElMessage } from 'element-plus'
const store = useStore()
const cmtstore = cmtStore()
const userstore = userStore()
const route = useRoute()
const text = ref()
const placeholder = ref()
const add = ref()
const logoUrl = new URL(`@/assets/images/logo.png`, import.meta.url).href
const id = Number(route.params.id)
const emoji = emojis()

function inputHidePlaceHolder() {
    placeholder.value.style.display = 'none'
}
function blurShowPlaceHolder() {
    if (text.value.innerText == '') {
        placeholder.value.style.display = 'block'
    }
}
function getEmoji(emoji: any) {
    placeholder.value.style.display = 'none'
    text.value.innerText = text.value.innerText + emoji
}
function commentUpload() {
    const content = text.value.innerText
    const date = getNowTime()
    const artId = id
    if (text.value.innerText === '') {
        ElMessage.warning('评论内容不能为空!')
    } else {
        commentPost({
            content: content,
            date: date,
            artId: artId,
        }).then((res: any) => {
            if (res.code === 700) {
                const comment = {
                    artId: id,
                    article: '',
                    cmtId: 0,
                    content: content,
                    date: date,
                    user: {
                        uid:'',
                        avatar: userstore.$state.userAvatar,
                        nickname: userstore.$state.userNickname,
                        username: userstore.$state.userName,
                    },
                    replycmt:[]
                }
                cmtstore.$state.comments.unshift(comment)
            }
        })
    }
}
</script>

<style scoped lang="less">
:deep(li) {
    display: inline-block;
    .publicWH(32px, 32px);
    line-height: 32px;
    text-align: center;
    user-select: none;

    &:hover {
        background-color: @editorBG;
    }
}

.comments-container {
    .publicMP(0 auto, 20px);
    width: 85%;
    .main-box {
        .title-box {
            .publicMP(0 0 20px 0, 0);
            .publicFlex(center, none, space-between);

            span {
                font-weight: bold;
                color: @pfontColor;
                font-size: 20px;
            }

            .title-icon {
                .publicWH(32px, 32px);
            }
        }

        .content-box {
            width: 100%;
            border: 1px solid @defaultTextHv;
            border-radius: 10px;
            position: relative;
            padding: 0 10px;
            .publicMP(0, 0 10px);
            box-sizing: border-box;

            .edit-placeholder {
                pointer-events: none;
                position: absolute;
                min-height: 32px;
                min-width: 100%;
                color: @defaultTextHv;
                .publicFlex(center, none, none);

                div {
                    display: block;
                    min-height: 20.8px;
                    min-width: 100%;
                }
            }

            .edit-box {
                .publicFlex(center, none, none);
                cursor: text;
                min-height: 32px;
                color: @pfontColor;

                span {
                    display: block;
                    outline: none;
                    min-height: 20.8px;
                    min-width: 100%;
                    word-wrap: break-word;
                    white-space: normal;
                }
            }

            .add-box {
                .publicMP(0, 5px);
                .publicFlex(center, none, space-between);

                .button-box {
                    .publicMP(5px 0 0 0, 0);
                    margin-top: 5px;
                    .publicFlex(none, none, center);
                    .publicWH(70px, 30px);
                    background-color: @buttonColor;
                    border-radius: 120px;
                    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);

                    &:hover {
                        background-color: @buttonHV;
                    }

                    h2 {
                        .publicMP(5px 0, 0);
                        color: @defaultFont2;
                        font-size: 18px;
                        font-weight: 800;
                    }
                }
            }
        }
    }
}
</style>