<!-- 五个导航路由页面的top -->
<template>
  <div class="tabtop">
      <div class="left">
        <i class="iconfont icon-sangangy"></i>
      </div>
      <div class="center">
        <slot name='center'></slot>
      </div>
      <div class="right">
        <slot name='right'></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  .tabtop{
    width: 355px;
    height: 100%;
    margin: 0 auto;
    background: pink;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    .left{
      width: 30px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      i{
        font-size: 24px;
        color: rgb(36, 33, 33);
      }
    }
    .center{
      width: 264px;
    }
    .right{
      width: 30px;
    }
  }
</style>