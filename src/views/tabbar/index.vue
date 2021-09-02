<template>
  <div>
    <router-view></router-view>
    <div class="leftopen">打开</div>
    <ul class="tabbar">
      <li
        v-for="item in tabbarIcon"
        :key="item.index"
        @click="index === item.index ? refresh() : tab(item)"
      >
        <div :class="index === item.index ? 'iconboxnow' : 'iconbox'">
          <i :class="item.icon"></i>
        </div>
        <div :class="index === item.index ? 'pathnamenow' : 'pathname'">
          {{ item.text }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { tabbarIcon } from "@/geticon/icon.js";
export default {
  data() {
    return {
      tabbarIcon,
    };
  },
  created() {
    //默认导航高亮,与当前路由相匹配，刷新之后不会错误
    this.index = this.tabbarIcon.find(
      (item) => item.path === this.$route.path
    ).index;
  },
  methods: {
    //路由切换，导航高亮
    tab(data) {
      this.$router.push(data.path);
      this.index = data.index;
    },
    //点击本页面
    refresh() {
      // this.$forceUpdate()
      console.log("还是本路由，我不做任何操作，或者可以加个forceupdate()");
    },
  },
};
</script>

<style lang='scss' scoped>
.leftopen {
  // 遮罩层
  width: 50px;
  height: 30px;
  background: red;
  position: fixed;
  top: 0;
  left: 10px;
}
.tabbar {
  width: 100vw;
  height: 50px;
  font-size: 14px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-content: center;
  a {
    color: black;
  }
  li {
    width: 20vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .iconbox {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      i {
        font-size: 20px;
      }
    }
    .iconboxnow {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      background: linear-gradient(to top right, red, pink);
      color: #fff;
      i {
        font-size: 17px;
      }
    }
    .pathname {
      width: 100%;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      color: #5f5d5d;
    }
    .pathnamenow {
      width: 100%;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      color: red;
    }
  }
}
</style>