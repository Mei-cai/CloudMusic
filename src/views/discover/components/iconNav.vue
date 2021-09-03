<!-- 发现页小导航 -->
<template>
  <ul class="iconbox">
    <li v-for="item in list" :key="item.index">
      <div class="background">
        <i :class="item.icon"></i>
      </div>
      <div class="iconname">{{ item.text }}</div>
    </li>
  </ul>
</template>

<script>
import { discoverIcon } from "@/geticon/icon.js";
export default {
  name: "discoverNavIcon",
  data() {
    return {
      list: discoverIcon,
    };
  },
};
</script>

<style lang='scss' scoped>
.iconbox::-webkit-scrollbar {
  display: none;
}
.iconbox {
  width: 375px;
  height: 90px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  li {
    // background: #eaeaea;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: center;
    // align-items: center;
    margin:0 10px;
    .background {
      width: 50px;
      height: 50px;
      background: rgba(255, 240, 245, 1);
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      i {
        // 文字渐变
        background: linear-gradient(to top right, red, rgb(252, 175, 189));
        -webkit-background-clip: text;
        color: transparent;
        font-size: 24px;
      }
      
    }
    .iconname{
        width: 100%;
        text-align: center;
        font-size: 12px;
        margin-top: 2px;
    }
  }
}
</style>