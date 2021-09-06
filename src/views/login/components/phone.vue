<!-- 手机号登录 -->
<template>
  <div class="phone">
    <!-- 顶部组件 -->
    <loginTop></loginTop>
    <!-- 内容 -->
    <!-- 缓存输入的手机号 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import loginTop from "./loginTop.vue"; //顶部组件
export default {
  components: {
    loginTop,
  },
  data() {
    return {
    };
  },
  methods: {
    
  },
};
</script>

<style lang='scss' scoped>
.phone {
  width: 100vw;
  height: 100vh;
  background: #fff;
}
</style>