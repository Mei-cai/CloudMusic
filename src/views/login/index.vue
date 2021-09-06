<template>
  <div class="login">
    <!-- 选择登录页 -->
    <div class="loginHome">
        <div class="logo">
          <i class="iconfont icon-wangyiyunyinle"></i>
        </div>
        <div class="gophone" @click="$router.push('/phoneLogin')">手机号登陆</div>
    </div>
    <!-- 手机号登录页 -->
    <!-- <div class="loginInfo" v-if="flag">
      <Phone></Phone>
    </div> -->
  </div>
</template>

<script>
// import Phone from "./components/phone.vue";
export default {
  components: {
    // Phone,
  },
  data() {
    return {
      // flag: false, //手机号登陆
    };
  },
};
</script>

<style lang='scss' scoped>
.login{
  width: 100vw;
  height: 100vh;
}
.loginHome {
  width: 100vw;
  height: 100vh;
  background: #e4463b;
  .logo {
    width: 70px;
    height: 70px;
    background: white;
    border-radius: 50%;
    text-align: center;
    line-height: 70px;
    position: fixed;
    top: 120px;
    left: calc(50vw - 35px);
    i {
      font-size: 46px;
      color: red;
    }
  }
  .gophone {
    width: 280px;
    height: 44px;
    background: #fff;
    border-radius: 22px;
    position: fixed;
    bottom: 120px;
    left: calc(50vw - 140px);
    color: #f03022;
    text-align: center;
    line-height: 44px;
  }
}
</style>