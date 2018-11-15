<template>
  <div class="mid-service-wrapper">
    <div class="mid-service" v-for="(item, index) in list"
      @click='loginShow = true' :key='index'>
      <img :src="item.imgSrc">
      <div class="title">{{item.title}}</div>
    </div>
    <LoginComponents @isShow='loginIsShow' :show='loginShow' />
  </div>
</template>
<script>
import LoginComponents from '@/components/Login/login.vue';

export default {
  data() {
    return {
      list: [
        {
          title: '积分商城',
          imgSrc: '/img/integral.png',
        },
        {
          title: '上门服务',
          imgSrc: '/img/home-server.png',
        },
        {
          title: '领券中心',
          imgSrc: '/img/coupon.png',
        },
        {
          title: '联系客服',
          imgSrc: '/img/GM.png',
        },
      ],
      loginShow: false,
    };
  },
  components: {
    LoginComponents,
  },
  methods: {
    loginIsShow(isShow) {
      this.loginShow = isShow;
    },
  },
};
</script>
<style lang="stylus" scoped>
midHeight = 80px
.mid-service-wrapper
  position relative
  display flex
  align-items center
  height midHeight
  width 95%
  margin 0 auto
  border-radius 8px
  margin-top -10px
  background-color #fff
  .mid-service
    flex 1
    img
      width 35px
      height 35px
      margin 0 auto
      display block
    .title
      margin-top 5px
      font-size 12px
</style>
