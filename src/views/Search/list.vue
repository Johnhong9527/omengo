<template>
  <div class="search-list-wrapper" ref="wrappers">
    <ul>
      <li class="m-goods-wrapper" v-for="(item, index) in list.list" :key="index">
        <div class="goods-image">
          <!-- <img v-lazy="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+item.image"> -->
          <img :src="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+item.image">
        </div>
        <div class="promotion" style="visibility: hidden;">hidden</div>
        <div class="name van-ellipsis">
          <span>{{item.brand}}</span> {{item.name}}
        </div>
        <div class="price">
          ￥{{item.price |priceF}}<span class="unit">{{item.unit}}</span><img
            src="/img/cat.png" alt="">
        </div>
        {{item.promotions}}
      </li>
    </ul>
  </div>
</template>
<script>
import Bscroll from 'better-scroll';

export default {
  name: 'search-list',
  props: ['list'],
  created() {},
  mounted() {
    this.initScroll();
  },
  filters: {
    priceF(price) {
      return price.toFixed(2);
    },
  },
  methods: {
    initScroll() {
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.wrappers, {
          click: true,
        });
      } else {
        this.scroll.refresh();
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.search-list-wrapper
  overflow hidden
  position fixed
  bottom 0
  right 0
  left 0
  top 50px
  padding 0 10px
  z-index 4
  background-color #f0f0f0
  ul
    display flex
    width 100%
    flex-wrap wrap
  .m-goods-wrapper
    flex 0 0 46.4vw
    width 46.4vw
    padding 10px
    box-sizing border-box
    background-color #fff
    margin-bottom 4px
    border-radius 5px
    position relative
    &:nth-child(1), &:nth-child(2)
      margin-top 4px
    &:nth-last-child(1), &:nth-last-child(2)
      margin-bottom 10px
    &:nth-child(odd)
      margin-right 2px
    &:nth-child(even)
      margin-left 4px
    .goods-image
      width 160px
      height 160px
      img
        width 100%
        height 100%
        display block
    .promotion
      color #fff
      background #bc2e3f
      border-radius 3px
      font-size 12px
      margin-top 8px
      padding 3px
    .name
      font-size 14px
      text-align left
    .price
      text-align left
      font-size 16px
      color #e50012
      .unit
        color #999
        white-space nowrap
        font-size 12px
        margin-left 4px
      img
        position absolute
        right 15px
        bottom 10px
        width 28px
        height 28px
</style>
