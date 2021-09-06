<!-- 提示框 -->
<template>
  <div class="prompt">这是一个提示框</div>
</template>

<script>
// import { Toast } from "vant";
export default {
  created() {
    this.$toast({
      message: "底部展示",
      position: "bottom",
    });
  },
};
</script>

<style >
.prompt {
  width: 200px;
  height: 40px;
  border-radius: 20px;
  background: white;
  box-shadow: 0px 0px 6px #ccc;
  margin: 0 auto;
  /* position: absolute;
        top: calc(50vh - 100px);
        left: calc(50vw - 100px); */
}
</style>