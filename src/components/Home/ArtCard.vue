<template>
    <div v-for="item in store.$state.ArtData" :key="item.artId" v-Emerge>
        <el-card shadow="always" :body-style="{ padding: '0px' }">
            <div class="card-container" :style="item.artId % 2 ? '' : 'flex-direction:row-reverse'">
                <div>
                    <el-image :src="item.artImages" fit="cover" :lazy="true"
                        style="width: 250px;height: 220px;"></el-image>
                </div>
                <div class="right-content-container">
                    <div class="right-content-top-container">
                        <span @click="goDetail(item.artId)">{{ item.artTitle }}</span>
                        <p>{{ delHtmlTag(item.artContent) }}</p>
                    </div>
                    <div class="right-content-bottom-container">
                        <div class="athuor-container">
                            <el-avatar icon="el-icon-user-solid" shape="circle" :src="item.author.avatar"
                                fit="cover"></el-avatar>
                            <div class="athuor-name-container">
                                <div style="margin-left: 10px;">
                                    <el-link :underline="false" href="" target="_blank">
                                        <span class="maintitle">{{ item.author.nickname }}</span>
                                    </el-link>
                                    <span class="subtitle">@{{ item.author.username }}</span>
                                    <p>{{ item.date }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="share-container">
                            <el-button type="info" @click="" icon="Share" color="#fff"
                                circle></el-button>
                            <el-button type="primary" @click="" circle>
                                <svg t="1673785497731" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2527" width="20" height="20">
                                    <path
                                        d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                                        p-id="2528" fill="#ffffff"></path>
                                </svg>
                            </el-button>
                            <el-button type="success" @click="" circle>
                                <svg t="1673785926866" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="3524" width="20" height="20">
                                    <path
                                        d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
                                        fill="#ffffff" p-id="3525"></path>
                                </svg>
                            </el-button>
                            <el-button type="warning" @click="" icon="Link" circle></el-button>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/ArticleState'
import { useRouter } from 'vue-router'
import { delHtmlTag } from '@/hooks/hooks'
const store = useStore()
const router = useRouter()
function goDetail(id: number) {
    router.push({ name: 'article', params: { id } })
}
</script>

<style scoped lang="less">
.el-card {
    user-select: none;
    .publicWH(100%, 220px);
    border-radius: 10px;
    margin-bottom: 20px;

    .card-container {
        .publicWH(100%, 100%);
        display: flex;

        .right-content-container {
            .publicFlex(none, none, space-between);
            .publicMP(0, 30px);
            .publicWH(100%, auto);
            box-sizing: content-box;
            flex-direction: column;

            .right-content-top-container {
                .publicWH(100%, 75%);
                display: flex;
                flex-direction: column;

                span {  
                    .publicMP(10px 0, 0px);
                    .publicWH(100%, auto);
                    .onelineEllipsis(20px);
                    color: @pfontColor;
                    font-weight: bold;
                    transition: all .2s ease;

                    &:hover {
                        color: @defaultTextHv;
                    }

                    &:active {
                        color: @defaultAct;
                    }
                }

                p {
                    .publicMP(5px 0px, 0px);
                    .publicWH(100%, 45%);
                    color: @sfontColor;
                    .morelinesEllipsis(14px, 3);
                }
            }

            .right-content-bottom-container {
                .publicFlex(center, none, space-between);
                .publicWH(100%, 20%);

                .athuor-container {
                    .publicFlex(center, none, space-between);

                    .athuor-name-container {
                        .maintitle {
                            .publicMP(0px, 0px);
                            font-weight: bold;
                            color: @pfontColor;
                            font-size: 14px;
                            transition: all .2s ease;

                            &:hover {
                                color: @defaultTextHv;
                            }

                            &:active {
                                color: @defaultAct;
                            }
                        }

                        .subtitle {
                            .publicMP(0 0 0 5px, 0px);
                            font-size: 12px;
                            color: @defaultTextHv;
                        }

                        p {
                            .publicMP(0px, 0px);
                            color: @sfontColor;
                            font-size: 12px;
                        }
                    }
                }

                .share-container {
                    .publicFlex(center, none, none);
                    .publicWH(25px, 25px);
                    border-radius: 50px;
                    transition: all .2s ease;
                    background-color: @defaultHv;
                    flex-direction: row-reverse;
                    overflow: hidden;

                    &:hover {
                        .publicWH(138px, 32px);
                        overflow: visible;

                    }

                    &:hover .el-button {
                        .publicWH(25px, 25px);
                        margin: 0 5px;
                    }

                    .el-button {
                        margin: 0px;
                        .publicWH(25px, 25px);
                    }
                }
            }
        }
    }
}

@media only screen and(max-width: 770px) {
    .el-card {
        width: 100% !important;
        height: 100% !important;

        .card-container {
            flex-direction: column !important;

            .el-image {
                width: 100% !important;
            }

            .right-content-container {
                padding: 20px !important;
                box-sizing: border-box;
            }
        }
    }
}

@media only screen and(max-width: 450px) {
    .el-card {
        width: 100% !important;
        height: 100% !important;

        .card-container {
            flex-direction: column !important;

            .el-image {
                width: 100% !important;
            }

            .right-content-container {
                padding: 20px !important;
                box-sizing: border-box;
            }
        }
    }
}
</style>