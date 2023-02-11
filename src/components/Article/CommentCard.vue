<template>
    <TransitionGroup name="fade">
        <div class="commentcard-container" v-for="item in store.$state.comments" :key="item.cmtId">
            <div class="avatar-box">
                <el-avatar shape="square" :size="50" :src="item.user.avatar" />
            </div>
            <div class="main-box">
                <div class="author-box">
                    <div style="display: flex;align-items: center">
                        <span>{{ item.user.nickname }}</span>
                        <p>@{{ item.user.username }}</p>
                    </div>
                    <div class="date">
                        <p>{{ item.date }}</p>
                    </div>
                </div>
                <div class="content-box">
                    <span>{{ item.content }}</span>
                </div>
            </div>
        </div>
    </TransitionGroup>
</template>

<script setup lang="ts">
import { useStore } from '@/store/CommentState'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()
const id = Number(route.params.id)

store.getCommentList(id)
</script>

<style scoped lang="less">
.commentcard-container {
    margin-top: 20px;
    .publicFlex(center, none, center);
    position: relative;
    .publicWH(700px, auto);
    background-color: @buttonWhite;

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

            .date {
                p {
                    margin-right: 25px;
                    color: @defaultTextHv;
                    font-size: 12px;
                }
            }
        }

        .content-box {
            border-radius: 10px;
            margin: 0 0 25px 0;
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