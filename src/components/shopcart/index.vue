<template>
  <div class="shopcart-wrapper">
    <div class="badge" v-if="quantity > 0">
      {{quantity}}
    </div>
    <div class="shopcart">
      <img src="/img/cat_btn.png" alt="">
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'shopcart',
  props: ['commodity'],
  computed: {
    ...mapState({
      quantity: state => state.cat.quantity,
    }),
  },
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
    font-size 8px
    border-radius 100%
    padding 3px 5px
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
