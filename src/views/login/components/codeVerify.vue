<template>
  <div class="passCode">
    <!-- 密码输入框 -->
    <van-password-input
      :length="4"
      :gutter="20"
      :value="code"
      :mask="false"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <!-- 数字键盘 -->
    <van-number-keyboard
      v-model="code"
      :show="showKeyboard"
      @blur="showKeyboard = false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: "", //验证码
      showKeyboard: true, //数字键盘调起开关
    };
  },
  watch: {
    code(val) {
      this.code = val.slice(0, 4); //长度4位
      if (this.code.length > 3) {
        this.goLogin()
        this.code = "";
      }
    },
  },
  created() {},
  methods: {
    async goLogin(){
        try{
          let res = await this.api.phoneLogin({phone:this.$route.query.phone,captcha:this.code})
          if(res.data.code === 200){
            console.log(res)
          }
        }catch(error){
          console.log(error);
          this.$toast('登录失败')
        }
    },
    //判断验证码正确与否
    async verify() {
      try {
          let { data } = await this.api.verifyFn(this.$route.query.phone, this.code)
          if (data.code === 200) {
            console.log(data)
          }
        } catch (error) {
          if (error) {
            this.$toast('验证失败')
            this.value = ''
          }
        }
    },
  },
};
</script>

<style lang='scss' scoped>
.passCode {
  .van-password-input .van-password-input__security li {
    border-bottom: 1px solid #aaa;
  }
}
</style>