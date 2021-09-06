<!-- 输入手机号 -->
<template>
  <div class="writePhone">
    <!--  -->
    <div class="top">
      <div class="hint">
        <div>登录体验更多精彩</div>
        <p>未注册手机号登陆后将自动创建账号</p>
      </div>
    </div>
    <!-- 手机号输入 -->
    <div class="phoneInt">
      <!-- 区号 -->
      <div class="left">+86</div>
      <!-- 手机号输入框 type=number,只允许输入数字-->
      <input type="number" placeholder="请输入手机号" v-model="phone" />
      <!-- 清除图标 -->
      <div class="right" v-show="flag">
        <i class="iconfont icon-cheng" @click="del()"></i>
      </div>
    </div>
    <!-- 下一步按钮 -->
    <div class="next" @click="next()">下一步</div>
    <!-- <Prompt></Prompt> -->
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      phone: "", //手机号
      flag: false, //清楚图标显示
    };
  },
  watch: {
    phone(val) {
      //没有值不显示清除按钮
      val.length > 0 ? (this.flag = true) : (this.flag = false);
      //手机号最多输11位
      val.length > 11 ? (this.phone = val.slice(0, 11)) : null;
    },
  },
  created() {},
  methods: {
    del() {
      this.phone = "";
    },
    //下一步
    next() {
      //手机号正则校验
      let Phone =
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;

      if (Phone.test(this.phone)) {
        //发送验证码
        this.sendCode()
        //然后路由传参，把接收验证码的手机号传给验证码路由
        this.$router.push({path:'/phoneLogin/code',query:{phone:this.phone}})
        
      } else {
        this.$toast({
          message: "手机号格式错误",
          position: "bottom",
        });
      }
    },
    //发送验证码
    sendCode(){
      this.api.sendCaptcha(this.phone).then(res=>{
        if(res.data.code === 200){
          console.log('发送成功');
        }
        if(res.data.code === 400){
          console.log(res.data);
        }
      }).catch(error=>{
        console.log(error);
      })
    },
  },
};
</script>

<style lang='scss' scoped>
.writePhone {
  width: 100vw;
  height: calc(100vh - 50px); //减去顶部标题高度
  // background: pink;
  .top {
    width: 340px;
    height: 120px;
    margin: 0 auto;
    .hint {
      width: 340px;
      height: auto;
      transform: translateY(calc(60px - 50%));
      div {
        width: 100%;
        font-size: 18px;
      }
      p {
        // transform: translateY(10px);
        padding-top: 6px;
        font-size: 14px;
        color: #aaaaab;
      }
    }
  }
  .phoneInt {
    width: 340px;
    height: 40px;
    // background: pink;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #aaaaab;
    .left {
      width: 40px;
      height: 40px;
      line-height: 40px;
    }
    input {
      outline: none;
      border: none;
      font-size: 16px;
      color: black;
      height: 40px;
      flex: 1;
      caret-color: red;
    }
    input::-webkit-input-placeholder {
      color: #adadad;
    }
    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #adadad;
    }
    input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #adadad;
    }
    input:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #adadad;
    }
    .right {
      width: auto;
      height: 40px;
      line-height: 40px;
      i {
        font-size: 30px;
      }
    }
  }
  .next {
    width: 340px;
    height: 40px;
    background: #f85044;
    border-radius: 20px;
    margin: 40px auto 0 auto;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #fff;
  }
}
</style>