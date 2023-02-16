<template>
    <div class="colum">
        <el-card shadow="always" :body-style="{ padding: '0px', width: '300px', height: '360px' }">
            <h2>目录</h2>
            <div v-if="store.$state.CataLog.length === 0" class="no-catalog">
                <span>该文章没有设置标题</span>
            </div>
            <ul v-else class="catalog">
                <li v-for="(item, index) in store.$state.CataLog" :key="index"
                    :style="{ '--BG': item.read ? 'rgb(232, 93, 204)' : '' }">
                    <div class="a-container" :style="{ paddingLeft: item.level * 30 - 10 + 'px' }">
                        <a href="javascript:;" @click="clickSilder(item.id, index)"
                            :class="{ 'active': item.read == true }">{{ item.title }}</a>
                    </div>
                </li>
            </ul>
        </el-card>
    </div>
</template>
  
<script setup lang="ts">
import { useStore } from '@/store/ArticleState'
import { getReading } from '@/hooks/hooks'
const store = useStore()
function clickSilder(id: any, index: number) {
    let el: any = document.querySelector('#' + id)
    // chrome
    document.body.scrollTop = el.offsetTop
    // firefox
    document.documentElement.scrollTop = el.offsetTop

    store.$state.CataLog[index].read = true
    for (let j = 0; j < store.$state.CataLog.length; j++) {
        if (j != index) {
            store.$state.CataLog[j].read = false
        }
    }
}
window.addEventListener('scroll', getReading)
</script>

<style scoped lang="less">
.el-card {
    .publicMP(0, 0);
    .publicWH(300px, auto);
    border-radius: 10px;
    min-height: 360px;

    h2 {
        .publicMP(0 20px, 15px 0);
        border-bottom: 1px solid #e4e6eb;
    }

    .no-catalog {
        .publicWH(100%, 70%);
        .publicFlex(center, none, center);

        span {
            color: @sfontColor;
        }
    }
    .catalog {
        .publicMP(15px 0 0 0, 0);
        list-style: none;

        li {
            .publicWH(100%, 44px);
            position: relative;

            &::before {
                position: absolute;
                content: '';
                display: block;
                .publicWH(4px, 16px);
                top: 10px;
                background: var(--BG);
                border-radius: 0 4px 4px 0;
            }

            .a-container {
                .publicWH(100%, 100%);
                box-sizing: border-box;

                a {
                    display: block;
                    .publicWH(90%, auto);
                    .publicMP(0, 8px);
                    text-decoration: none;
                    color: @pfontColor;
                    .onelineEllipsis(16px);
                    box-sizing: border-box;
                    font-weight: bold;
                    border-radius: 10px;

                    &:hover {
                        background-color: rgb(245, 245, 245);
                    }
                }

                .active {
                    color: @defaultTitle;
                }
            }
        }
    }
}
</style>
 
 
