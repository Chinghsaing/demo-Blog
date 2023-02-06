<template>
    <ul>
        <li class="emojiList" v-for="(item, index) in img " :key="index" @click="handleEmoji(item)">
            {{ item.text }}
        </li>
    </ul>
</template>

<script setup lang="ts">
const emojis = [
    '😀', '😄', '😅', '🤣', '😂', '😉', '😊', '😍', '😘', '😜',
    '😝', '😏', '😒', '🙄', '😔', '😴', '😷', '🤮', '🥵', '😎',
    '😮', '😰', '😭', '😱', '😩', '😡', '💀', '👽', '🤓', '🥳',
    '😺', '😹', '😻', '🤚', '💩', '👍', '👎', '👏', '🙏', '💪'
]
let img = emojis.map(emoji => ({ text: emoji }))

function handleEmoji(item: any) {
    console.log(item);

}
</script>

<style scoped lang="less">
ul {
    .publicWH(200px, 200px);

    li {
        list-style: none;
        display: inline-block;
        transition: all 0.5s ease;
        &:hover {
            background-color: pink;
        }
    }
}
</style>

