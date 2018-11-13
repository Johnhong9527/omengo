<template>
  <div class="shopcart-wrapper">
    <div class="badge">
      4
    </div>
    <div class="shopcart">
      <img src="/img/cat_btn.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'shopcart',
  props: ['commodity'],
};
</script>
<style lang="stylus" scoped>
.shopcart-wrapper
  position fixed
  z-index 4
  bottom 40px
  right 10px
  .badge
    position absolute
    top 0
    right 0
    font-size 5px
    border-radius 100%
    padding 3px 5px
    // width 15px
    // height 15px
    // line-height 15px
    // text-align center
    color #fff
    background-color red
  .shopcart
    width 50px
    height 50px
    img
      display block
      width 100%
      height 100%
</style>
