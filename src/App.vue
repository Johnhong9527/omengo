<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
  created() {
    if (window.localStorage) {
      // 主逻辑业务
      const storage = window.localStorage;
      // 写入a字段
      storage.a = 1;
      // 写入b字段
      storage.b = 1;
      // 写入c字段
      storage.setItem('b', 2);
      storage.setItem('c', 3);
      console.log(typeof storage.a);
      console.log(typeof storage.b);
      console.log(typeof storage.c);
      this.http
        .get('http://www.sonyo.com/api/index/store_select_group_area?lat=&lng=')
        .then((data) => {
          console.log(data);
        });
    }
  },
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
  height 117.26px
.van-tabbar-item__icon
  img
    width 58.63px
    height 58.63px
.van-tabbar-item__text
  font-size 28.14px
  margin-top 6px
.van-tabbar-item--active
  color #f29600
</style>
