<template>
  <div class="discover">
    <div class="top">
      <!-- 插槽 -->
      <Top>
        <!-- 搜索框 -->
        <template v-slot:center>
          <div class="centersearch" @click="$router.push('/search')">
            <div class="centersearchone"><i class="iconfont icon-fangdajing"></i></div>
            <div>薛之谦</div>
          </div>
        </template>
        <!-- 听歌识曲icon -->
        <template v-slot:right>
          <div class="listen">
            <i class="iconfont icon-tinggeshiqu"></i>
          </div>
        </template>
      </Top>
    </div>
    <div>发现</div>
  </div>
</template>

<script>
import Top from "../../components/leftopen";
export default {
  components: {
    Top,
  },
};
</script>

<style lang='scss' scoped>

</style>