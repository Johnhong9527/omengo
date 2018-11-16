<template>
  <div class="small-goods-wrapper">
    <div class="img">
      <img :src="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+goods.image"
        alt="">
    </div>
    <div class="promotion-text" v-if='goods.promotions.length > 0'>特价</div>
    <div class="name van-ellipsis">{{goods.brand}}{{goods.name}}</div>
    <div class="original-price" v-if="goods.promotions.length > 0">原价{{goods.price}}</div>
    <div class="price-wrapper">
      <span class="price">￥{{goods.discountPrice === "0.00"
        ? goods.price : goods.discountPrice}}</span><span
        class="unit van-ellipsis">/{{goods.unit}}</span>
    </div>
    <div class="btn-add" @click="add">
      <img src="/img/cat.png" alt="">
    </div>
    <transition name="point" v-on:before-enter=" beforeEnter"
      v-on:enter="enter" v-on:after-enter="afterEnter">
      <!-- <div v-show="point.show" class="point" :style="{left:point.x,top:point.y}"> -->
      <div v-if="point.show" class="point">
        <!-- <span>{{point.x}}</span><br /><span>{{point.y}}</span> -->
        <img class="goods-img" :src="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+point.image"
          alt="">
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'small-goods',
  props: {
    goods: Object,
  },
  computed: {
    ...mapState({
      catRect: state => state.catRect,
    }),
  },
  mounted() {
    // console.log(this.goods);
  },
  methods: {
    add() {
      console.log(this.goods);
    },
  },
};
</script>
<style lang="stylus" scoped>
.small-goods-wrapper
  width 33vw
  height 130px
  padding 10px 0
  display inline-block
  font-size 0
  position relative
  .img
    width 75px
    height 75px
    margin 0 auto
    img
      display block
      width 100%
      height 100%
  .original-price
    box-sizing border-box
    font-style oblique
    font-size 10px
    text-decoration line-through
    color #999
  .promotion-text
    padding 2px
    width 20px
    height 10px
    top 5px
    left 5px
    position absolute
    font-size 10px
    color #fff
    background-color #bc2e3f
  .name
    width 80px
    height 25px
    margin 0 auto
    line-height 25px
    font-size 12px
    color #333
  .price-wrapper
    color #e50012
    line-height 30px
    .price
      display inline-block
      vertical-align middle
      height 30px
      font-size 14px
    .unit
      display inline-block
      vertical-align middle
      width 30px
      height 30px
      font-size 12px
      color #999
  .btn-add
    position absolute
    bottom 15px
    right 0px
    width 20px
    height 20px
    img
      width 100%
      height 100%
      display block
  .point
    position fixed
    z-index 4
    width 160px
    height 160px
    transition all 0.7s cubic-bezier(0.49, -0.29, 0.75, 0.41)
    img
      width 100%
      height 100%
      display block
</style>
