<template>
  <div class="discover">
    <div class="top">
      <!-- 插槽 -->
      <Top>
        <!-- 搜索框 -->
        <template v-slot:center>
          <div class="centersearch" @click="$router.push('/search')">
            <div class="centersearchone">
              <i class="iconfont icon-fangdajing"></i>
            </div>
            <div>{{ defaultsearch }}</div>
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
    <!-- 轮播图 -->
    <div class="swiper">
      <Swiper :list="bannerList"></Swiper>
    </div>
    <!-- 小导航 -->
    <div class="iconnav">
      <IconNav></IconNav>
    </div>
  </div>
</template>

<script>
import Top from "../../components/tabbarTop";
import Swiper from "@/components/swiper";
import IconNav from './components/iconNav.vue'
export default {
  components: {
    Top,
    Swiper,IconNav
  },
  data() {
    return {
      defaultsearch: "", //默认搜索关键词
      bannerList: [], //轮播图数据
    };
  },
  created() {
    this.getDefault(); //获取默认搜索关键词
    this.getBanner(); //轮播图数据
  },
  methods: {
    //获取默认搜索关键词
    getDefault() {
      this.api.defaultSearch().then((res) => {
        this.defaultsearch = res.data.data.realkeyword;
      });
    },
    //轮播图数据
    async getBanner() {
      await this.api.discoverBanner().then((res) => {
        console.log(res.data.banners);
        this.bannerList = res.data.banners;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.discover {
  overflow: hidden;
  .swiper {
    width: 355px;
    height: 135px;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 auto;
  }
  .iconnav{
    width: 100vw;
    height: 100px;
    overflow: hidden;
  }
}
</style>