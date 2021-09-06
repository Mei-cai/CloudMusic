<template>
  <div class="search">{{placeholder}}</div>
</template>

<script>
export default {
  data() {
    return {
      placeholder: "", //默认搜索关键词
    };
  },
  created() {
    this.getDefault(); //获取默认搜索关键词
  },
  methods: {
    //获取默认搜索关键词
    getDefault() {
      this.api.defaultSearch().then((res) => {
        this.placeholder = res.data.data.showKeyword;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
</style>