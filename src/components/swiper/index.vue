<!-- 轮播图组件 -->
<template>
  <div class="swiper">
    <!-- <div v-if="list.length < 1">hahah</div> -->
    <div class="swiperbox">
      <swiper :options="swiperOption" ref="mySwiper" v-if="list.length>0">
        <swiper-slide v-for="(item, index) in list" :key="index">
          <img :src="item.pic" alt="" @click="click(index)"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
// import { Toast } from "vant";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    //图片数据
    list: Array,
  },
  data() {
    return {
      swiperOption: {
        paginationClickable: true,
        loop: true,
        autoplay: {
          delay: 3000,
          // stopOnLastSlide: false,
          disableOnInteraction: false,
        },

        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  methods: {
    click(index){
      console.log(index);
    }
  },
};
</script>

<style lang='scss' scoped>
.swiper {
  width: 100%;
  height: 100%;
  .swiperbox {
    width: 100%;
    height: 100%;
    display: flex;
    touch-action: none;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>