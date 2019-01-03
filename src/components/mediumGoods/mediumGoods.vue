<template>
  <div class="medium-goods-wrapper">
    <img
      :src="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+goods.image"
      alt=""
    >
    <div
      class="promotion"
      v-if="goods.promotions && goods.promotions.length > 0"
    >
      {{goods.promotions[0].title}}
    </div>
    <div
      v-else
      class="promotion"
      style="visibility:hidden"
    >hidden</div>
    <div class="name van-ellipsis">
      {{goods.brand}}
      {{goods.name}}
    </div>
    <div
      class="original-price"
      v-if="goods.promotions && goods.promotions.length > 0"
    >原价:{{Number(goods.price).toFixed(2)}}</div>
    <div class="price">￥{{price}}<span class="unit">/{{goods.unit}}</span></div>
    <div
      class="btn-add"
      @click.stop="add($event)"
    >
      <img
        src="/img/cat.png"
        alt=""
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goods: Object
  },
  computed: {
    price() {
      let p = "";
      if (this.goods.promotions && this.goods.promotions.length > 0) {
        p = this.goods.discountPrice;
      } else {
        p = Number(this.goods.price).toFixed(2);
      }
      return p;
    }
  },
  created() {
    console.log(this.goods);
  },
  methods: {
    add(event) {
      const $event = event;
      this.$emit("add", $event.target.parentNode.parentNode.children[0]);
    }
  }
};
</script>
<style lang="stylus" scoped>
.medium-goods-wrapper
  position relative
  flex 0 0 calc(50% - 2.5px)
  width calc(50% - 2.5px)
  background-color #fff
  // height 45vh
  // line-height 45vh
  font-size 15px
  margin-bottom 5px
  border-radius 5px
  padding 10px
  box-sizing border-box
  text-align left
  &:nth-child(even)
    margin-left 5px
  img
    width 100%
  .promotion
    display inline-block
    margin-top 9px
    padding 3px
    border-radius 3px
    font-size 12px
    color #fff
    background #bc2e3f
  .name
    width 100%
    font-size 14px
    height 25px
    line-height 25px
  .original-price
    font-style oblique
    color #999
    font-size 12px
    text-decoration line-through
  .price
    height 25px
    line-height 25px
    font-size 16px
    color #e50012
    .unit
      display inline-block
      vertical-align middle
      width 60px
      font-size 12px
      margin-left 5px
      text-overflow ellipsis
      white-space nowrap
      overflow hidden
      color #999
  .btn-add
    position absolute
    bottom 10px
    right 16px
    width 30px
    height 30px
    img
      width 100%
      height 100%
      display block
</style>
