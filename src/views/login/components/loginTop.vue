<!-- 登录页顶部 -->
<template>
  <div class="loginTop">
      <div class="goback" @click="back()"><i class="iconfont icon-cheng"></i></div>
      <div class="loginTopText">手机号登录</div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang='scss' scoped>
    .loginTop{
        width: 100vw;
        height: 50px;
        background: #fff;
        display: flex;
        align-items: center;
        .goback{
            width: 50px;
            height: 50px;
            // background: pink;
            transform: translateX(0px);
            line-height: 50px;
            padding: 0;
            margin: 0;
            // text-align: center;
            i{
                font-size: 46px;
                color: rgb(49, 48, 48);
            }
        }
        .loginTopText{
            width: auto;
            overflow: hidden;
            height: 50px;
            line-height: 50px;
            transform: translateX(0px);
            font-size: 18px;
        }
    }
</style>