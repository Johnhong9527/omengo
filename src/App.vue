<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar v-model="active">
      <van-tabbar-item @click='tabbar' v-for="(item, index) in icons"
        ref='vanTabbarItem' :key='index' :info="index === 2 && quantity > 0 ? quantity : ''">
        <span>{{item.name}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

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
  computed: {
    ...mapState({
      quantity: state => state.cat.quantity,
    }),
  },
  created() {
    this.$store.dispatch('getDatum');
    this.$store.dispatch('getQuantity');
  },
  mounted() {
    this.getCatRect(
      this.$refs.vanTabbarItem[2].$el.childNodes[0].getBoundingClientRect(),
    );
  },
  methods: {
    ...mapActions(['getCatRect']),
    tabbar() {
      const ROUTES = this.$router.options.routes;
      this.$router.push({ path: ROUTES[this.active].path });
    },
  },
};
</script>

<style lang="stylus">
@import './assets/style.styl'
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
  height 50px
  .van-tabbar-item
    color #333
.van-tabbar-item__icon
  img
    width 25px
    height 25px
  .van-info
    z-index 2
.van-tabbar-item__text
  font-size 12px
  margin-top 1px
.van-tabbar-item--active
  color #f29600
</style>
