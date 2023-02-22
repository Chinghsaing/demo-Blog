<template>
    <TransitionGroup name="fade">
        <div class="commentcard-container" v-for=" item, index in store.$state.comments" :key="item.cmtId" v-Emerge>
            <div class="avatar-box">
                <el-avatar shape="square" :size="50" :src="item.user.avatar" />
            </div>
            <div class="main-box">
                <div class="author-box">
                    <div style="display: flex;align-items: center">
                        <span>{{ item.user.nickname }}</span>
                        <p>@{{ item.user.username }}</p>
                    </div>
                    <div class="left-box">
                        <div class="date">
                            <p>{{ item.date }}</p>
                        </div>
                        <div>
                            <el-popover placement="bottom" width="300" trigger="click" popper-class="comment-reply">
                                <template #reference>
                                    <el-tag type="warning" effect="dark" size="small">回复</el-tag>
                                </template>
                                <div v-ShowEmoji>
                                    <p>@{{ item.user.nickname }} : {{ item.content }}</p>
                                    <span ref="text" contenteditable="true" class="reply-input"></span>
                                    <div class="reply-option">
                                        <svg style="width: 32px;height: 32px;" t="1675685525244" class="icon"
                                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            p-id="3084" width="200" height="200">
                                            <path
                                                d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667z m48.384 532.928A234.538667 234.538667 0 0 1 520.405333 768a234.538667 234.538667 0 0 1-203.264-117.333333 21.333333 21.333333 0 0 0-36.949333 21.333333 277.184 277.184 0 0 0 240.213333 138.666667c100.16 0 190.997333-53.546667 240.213334-138.666667a21.333333 21.333333 0 0 0-36.906667-21.333333zM341.333333 426.624c0-23.552 18.944-42.624 42.666667-42.624 23.573333 0 42.666667 19.157333 42.666667 42.624v42.752A42.538667 42.538667 0 0 1 384 512c-23.573333 0-42.666667-19.157333-42.666667-42.624v-42.752z m256 0c0-23.552 18.944-42.624 42.666667-42.624 23.573333 0 42.666667 19.157333 42.666667 42.624v42.752A42.538667 42.538667 0 0 1 640 512c-23.573333 0-42.666667-19.157333-42.666667-42.624v-42.752z"
                                                fill="#3D3D3D" p-id="3085"></path>
                                        </svg>
                                        <div class="button-box"
                                            @click="replyUpload(index, item.user.uid, item.cmtId, item.user.nickname, item.user.username, item.user.avatar)">
                                            <el-link :underline="false" href="javascript:;">
                                                <div>
                                                    <h2>回复</h2>
                                                </div>
                                            </el-link>
                                        </div>
                                    </div>
                                    <div>
                                        <ul style="list-style: none;padding: 0;">
                                            <li v-for="(item, indexs) in emoji " :key="indexs"
                                                @click="getEmoji(item.text, index)">
                                                {{ item.text }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </el-popover>
                        </div>
                    </div>
                </div>
                <div class="content-box">
                    <span>{{ item.content }}</span>
                </div>
            </div>
            <div>
                <Replycard :replycmt="item.replycmt" :cmtId="item.cmtId"></Replycard>
            </div>
        </div>
    </TransitionGroup>
</template>

<script setup lang="ts">
import { commentReply } from '@/api/api'
import { useStore } from '@/store/CommentState'
import { useStore as userStore } from '@/store/UserInfoState'
import { useRoute } from 'vue-router'
import { emojis, getNowTime } from '@/hooks/hooks'
import { ref } from 'vue'
import Replycard from '@/components/Article/ReplyCard.vue'
import { ElMessage } from 'element-plus'
const store = useStore()
const userstore = userStore()
const route = useRoute()
const id = Number(route.params.id)
const emoji = emojis()
const text = ref()
function getEmoji(emoji: any, spanId: any) {
    text.value[Number(spanId)].innerText = text.value[Number(spanId)].innerText + emoji
}
function replyUpload(index: number, toUserId: string, cmtId: number, nickname: string, username: string, avatar: string) {
    const replyContent = text.value[Number(index)].innerText
    const date = getNowTime()
    if (replyContent === '') {
        return ElMessage.warning('评论内容不能为空!')
    } else {
        commentReply({ toUserId, replyContent, date, cmtId }).then((res: any) => {
            if (res.code === 700) {
                const replyComment = {
                    user: {
                        uid: '0',
                        avatar: userstore.$state.userAvatar,
                        nickname: userstore.$state.userNickname,
                        username: userstore.$state.userName,
                    },
                    toUser: {
                        uid: '0',
                        avatar: avatar,
                        nickname: nickname,
                        username: username,
                    },
                    replyContent: replyContent,
                    date: date,
                }
                store.$state.comments[index].replycmt.unshift(replyComment)
            }
        })
    }

}
store.getCommentList(id)

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

.commentcard-container {
    margin: 20px 0;
    .publicFlex(center, none, center);
    position: relative;
    .publicWH(700px, auto);
    background-color: transparent;
    flex-direction: column;

    .avatar-box {
        .publicPos(0, 0, 1);
    }

    .main-box {
        .publicFlex(center, none, center);
        flex-direction: column;
        .publicWH(100%, auto);

        .author-box {
            .publicMP(0, 0 0 0 60px);
            .publicWH(100%, 25px);
            box-sizing: border-box;
            .publicFlex(center, none, space-between);

            span {
                color: @pfontColor;
                font-weight: bold;
                font-size: 16px;
            }

            p {
                margin-left: 5px;
                color: @defaultTextHv;
                font-size: 14px;
            }

            .left-box {
                .publicFlex(baseline, none, none);
                margin-right: 25px;

                .date {
                    p {
                        margin-right: 5px;
                        color: @defaultTextHv;
                        font-size: 12px;
                    }
                }

                .el-tag {
                    user-select: none;
                    background-color: rgb(253, 198, 90);
                    border: none;
                    font-size: 12px;
                    color: @defaultFont2;
                }
            }
        }

        .content-box {
            border-radius: 10px;
            margin: 0;
            .publicFlex(center, none, center);
            .publicWH(93%, auto);
            background-color: rgb(245, 245, 245);
            min-width: 93%;
            flex-direction: column;

            span {
                padding: 5px 0;
                text-align: center;
                .publicWH(90%, auto);
                .publicFlex(center, none, center);
                min-height: 50px;
                word-wrap: break-word;
                white-space: normal;

            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
<style lang="less">
.comment-reply {
    border-radius: 10px !important;
    text-align: left !important;
    .publicWH(100%, 137px);
    overflow: hidden;
    transition: 1s all ease;

    p {
        box-sizing: border-box;
        .publicMP(0, 5px);
        display: inline-block;
        font-size: 14px;
        .publicWH(100%, auto);
        background-color: #f5f5f5;
        border-radius: 10px;
        margin-bottom: 10px;
        .onelineEllipsis(14px);
    }

    .reply-input {
        border-radius: 10px !important;
        border: 1px solid @defaultTextHv;
        box-sizing: border-box;
        .publicWH(100%, auto);
        color: @pfontColor;
        padding: 5px 10px;
        font-size: 16px;
        display: block;
        min-height: 24px;
        outline: none;
    }

    .reply-option {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;

        .el-only-child__content {
            .publicWH(32px, 32px);
        }

        .button-box {
            .publicMP(5px 0 0 0, 0);
            margin-top: 5px;
            .publicFlex(none, none, center);
            .publicWH(60px, 25px);
            background-color: @buttonColor;
            border-radius: 120px;
            box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);

            &:hover {
                background-color: @buttonHV;
            }

            h2 {
                .publicMP(5px 0, 0);
                color: @defaultFont2;
                font-size: 14px;
                font-weight: 800;
            }
        }
    }
}
</style>