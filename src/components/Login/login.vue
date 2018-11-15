<template>
  <div class="login-wrapper" v-if="show">
    <div class="login">
      <div class="close icon-close" @click="isShow">
      </div>
      <div class="from van-hairline--surround">
        <inputText icon='user' class="van-hairline--bottom"
          type='number' placeholder='请输入11位手机号码'>
          <div class="user-btn">获取验证码</div>
        </inputText>
        <inputText class="van-hairline--bottom" icon='lock'
          placeholder='请输入验证码'>
        </inputText>
        <inputText icon='hand' placeholder='请输入邀请码(非必填)'>
        </inputText>
      </div>
      <button class="btn">登录</button>
    </div>
  </div>
</template>
<script>
import inputText from '@/components/inputText/text.vue';

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isShow() {
      this.show = false;
      this.$emit('isShow', this.show);
    },
  },
  components: {
    inputText,
  },
};
</script>

<style lang="stylus" scoped>
.login-wrapper
  position fixed
  z-index 2
  top 0
  bottom 0
  right 0
  left 0
  background-color rgba(0, 0, 0, 0.4)
  .login
    background-color #fff
    border-radius 5px
    position absolute
    width 90%
    padding 35px 20px 20px 20px
    box-sizing border-box
    height 220px
    top 40%
    left 50%
    transform translate(-50%, -50%)
    .close
      position absolute
      right 10px
      top 10px
      // width 10px
      // height 10px
      font-size 15px
    .from
      .user-btn
        position absolute
        // top 50%
        right 5px
        // transform translate(0, -50%)
        flex 0 0 90px
        width 90px
        line-height 30px
        height 30px
        font-size 12px
        background-color #c5c5c5
        color #fff
        border-radius 3px
    .btn
      margin-top 10px
      width 100%
      height 40px
      line-height 40px
      border-radius 5px
      background-color #c5c5c5
      color #fff
      font-size 16px
</style>
