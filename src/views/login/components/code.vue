<template>
  <div class="code">
    <div class="top">
      <div class="hint">
        <div class="hinttext">请输入验证码</div>
        <div class="hintinfo">
          <div class="left">
            <p>已发送至+86&nbsp;{{ $route.query.phone }}</p>
            <i
              class="iconfont icon-bianji"
              @click="$router.push('/phoneLogin/writePhone')"
            ></i>
          </div>
          <div class="returnCode">
            <p v-show="flag">{{ time }}s</p>
            <div v-show="!flag" @click="returnGet()">重新获取</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 密码输入框 -->
    <Code></Code>
  </div>
</template>

<script>
import Code from "./codeVerify.vue";
export default {
  components: {
    Code,
  },
  data() {
    return {
      timer: null,
      flag: false, //重新获取按钮开关
      time: 60, //倒计时
    };
  },
  created() {
    //必须填写手机号后再进来
    if (!this.$route.query.phone) {
      this.$router.push("/phoneLogin/writePhone");
    }
    //进入此路由时开始60s倒计时
    this.count();
  },
  methods: {
    //倒计时
    count() {
      this.flag = true;
      this.timer = setInterval(() => {
        this.time--;
        if (this.time === 0) {
          this.flag = false;
          clearInterval(this.timer);
        }
      }, 1000);
    },
    //重新获取
    returnGet() {
      this.time = 60; //恢复倒计时为60s
      this.count(); //开始倒计时
      //发送验证码
      this.api
        .sendCaptcha(Number(this.$route.query.phone))
        .then((res) => {
          if (res.data.code === 200) {
            console.log("发送成功");
          }
          if (res.data.code === 400) {
            console.log(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeDestroy() {
    //清除定时器
    clearInterval(this.timer);
    //清除定时器
    this.timer = null;
  },
};
</script>

<style  lang='scss' scoped>
.code {
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
      .hinttext {
        width: 100%;
        font-size: 18px;
      }
      .hintinfo {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        .left {
          padding-top: 6px;
          display: flex;
          align-items: center;
          p {
            // padding-top: 6px;
            font-size: 16px;
            color: #aaaaab;
          }
          i {
            font-size: 18px;
            color: #aaaaab;
            padding-left: 6px;
          }
          .codeNum {
            text-align: right;
          }
        }
        .returnCode {
          padding-top: 6px;
          p {
            font-size: 16px;
            color: #aaaaab;
          }
          div {
            color: blue;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>