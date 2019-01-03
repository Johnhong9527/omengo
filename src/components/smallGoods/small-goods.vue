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
    <div class="btn-add" @click="add($event)">
      <img src="/img/cat.png" alt="">
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'small-goods',
  data() {
    return {
      point: {
        show: false,
        image: '',
      },
    };
  },
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
    add(event) {
      const $event = event;
      // eslint-disable-next-line
      if (!$event._constructed) {
        return;
      }
      this.$emit(
        'add',
        $event.target.parentNode.parentNode.children[0].children[0],
      );
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
    position relative
    bottom 25px
    left 100px
    width 20px
    height 20px
    img
      width 100%
      height 100%
      display block
</style>
