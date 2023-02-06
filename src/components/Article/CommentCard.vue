<template>
    <div class="commentcard-container">
        <div class="avatar-box">
            <el-avatar shape="square" :size="50" :src="store.$state.userAvatar" />
        </div>
        <div class="main-box">
            <div class="author-box">
                <div style="display: flex;align-items: center">
                    <span>Mishuroki</span>
                    <p>@mishuroki</p>
                </div>
                <div>
                    <date>2023/2/6</date>
                </div>
            </div>
            <div class="content-box">
                <span>写的真好!😘😘😘</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/UserInfoState';

const store = useStore()
</script>

<style scoped lang="less">
.commentcard-container {
    margin-top: 20px;
    .publicFlex(center, none, center);
    position: relative;
    .publicWH(700px, auto);
    background-color: #fff;
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
                color: @defalutTextHv;
                font-size: 14px;
            }

            date {
                margin-right: 25px;
                color: @defalutTextHv;
                font-size: 12px;
            }
        }

        .content-box {
            border-radius: 10px;
            margin: 0 0 25px 0;
            .publicFlex(center, none, center);
            .publicWH(93%, auto);
            background-color: rgb(240,240,240);
            min-width: 93%;

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
</style>