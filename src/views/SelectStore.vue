<template>
  <div class="select-store">
    <div class="nav-bar">
      <div @click='onClickLeft' class="arrow">
        <img src="/img/arrow.png" alt="">
      </div>
      <div class="title">选择店铺</div>
    </div>
    <div class="wrapper" ref="wrappers">
      <div class="content">
        <div class="top"></div>
        <div class="shop-item" v-for="item in storeSelectGroupArea" :key="item.id"
          @click="select(item)">
          <div class="name">
            <img src="/img/shop.png">
            <span>{{item.name}}</span>
          </div>
          <div class="address van-hairline--bottom">
            {{item.address}}
          </div>
          <div class="area-name">
            <span class="title">配送区域：</span><span>{{item.areaName}}</span>
          </div>
        </div>
        <div class="top"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll';

export default {
  data() {
    return {
      storeSelectGroupArea: '',
    };
  },
  created() {
    const toast = this.$toast.loading({
      mask: true,
      message: '加载中...',
    });
    this.$http
      .get('http://www.sonyo.com/api/index/store_select_group_area?lat=&lng=')
      .then(data => {
        console.log(data);
        this.storeSelectGroupArea = data.datum;
        this.initScroll();
        toast.clear();
      });
  },
  updated() {
    this.$nextTick(() => {
      this.scroll.refresh();
    });
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: '/' });
    },
    initScroll() {
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.wrappers, {
          click: true,
        });
      } else {
        this.scroll.refresh();
      }
    },
    select(item) {
      console.log(item);
      // 主逻辑业务
      const storage = window.localStorage;
      // eslint-disable-next-line
      storage.__H5__store__ = JSON.stringify(item);
      // eslint-disable-next-line
      if (JSON.stringify(item) === storage.__H5__store__) {
        this.$router.push({
          path: '/',
        });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.select-store
  position fixed
  z-index 2
  top 0
  bottom 0
  left 0
  right 0
  background-color #f0f0f0
  .nav-bar
    position fixed
    left 0
    right 0
    top 0
    z-index 2
    height 40px
    line-height 40px
    background-color #fff
    .arrow
      position absolute
      width 40px
      height 40px
      top 0
      left 0
      img
        width 10px
        height 20px
    .title
      font-size 16px
.wrapper
  margin-top 40px
  height calc(100vh - 40px)
  overflow hidden
  background-color #f0f0f0
  .content
    .top
      height 1px
      width 100%
  .shop-item
    font-size 14px
    text-align left
    margin 10px
    padding 10px
    background-color #fff
    border-radius 10px
    box-shadow 0px 0px 10px 2px #e0e0e0
    .name
      line-height 40px
      img
        width 30px
        height 30px
        vertical-align middle
        margin-right 5px
      span
        font-size 16px
        vertical-align middle
    .address
      line-height 31px
      // border-bottom 1px solid #e0e0f4
    .area-name
      color #929292
      line-height 30px
      .title
        color #333
</style>
