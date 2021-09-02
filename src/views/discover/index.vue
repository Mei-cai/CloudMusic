<template>
  <div class="discover">
    <div class="top">
      <div class="topinfo">
        <div class="topleft"></div>
        <div class="centersearch">
          <input type="text" placeholder="薛之谦" />
        </div>
        <div class="topright">
          <i class="iconfont iconfont icon-Kge"></i>
        </div>
      </div>
    </div>
    <div>发现</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.topinfo {
  width: 355px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  .topleft{
    width: 10vw;
  }
  .topright{
    width: 10vw;
    
  }
  .centersearch{
    width: 60vw;
    height: 30px;
    background: red;
    input{
      width: 100%;
      height: 100%;
      border-radius: 14px;
      border: none;
      background: #eaeaea;
    }
  }
}
</style>