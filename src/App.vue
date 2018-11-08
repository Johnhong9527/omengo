<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item @click='tabbar' v-for="(item, index) in icons" :key='index'
        :info="index===2?badge:''">
        <span>{{item.name}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      badge: '2',
      icons: [
        {
          name: '首页',
          normal: '/img/home.png',
          active: '/img/home-active.png',
        },
        {
          name: '分类',
          normal: '/img/category.png',
          active: '/img/category-active.png',
        },
        {
          name: '购物车',
          normal: '/img/shopcart.png',
          active: '/img/shopcart-active.png',
        },
        {
          name: '我的',
          normal: '/img/personal.png',
          active: '/img/personal-active.png',
        },
      ],
    };
  },
  created() {},
  methods: {
    tabbar() {
      const ROUTES = this.$router.options.routes;
      this.$router.push({ path: ROUTES[this.active].path });
    },
  },
};
</script>

<style lang="stylus">
*
  padding 0
  margin 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
.van-tabbar
  height 40px
.van-tabbar-item__icon
  img
    width 20px
    height 20px
  .van-info
    z-index 2
.van-tabbar-item__text
  font-size 12px
  margin-top 1px
.van-tabbar-item--active
  color #f29600
</style>
