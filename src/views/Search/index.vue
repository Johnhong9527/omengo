<template>
  <div class="search-wrappper">
    <div class="search-bar">
      <div class="arrow"><img src="/img/arrow.png" alt=""></div>
      <div class="input">
      </div>
      <div class="btn">
        搜索
      </div>
    </div>

    <div>
      <div v-for="(item, index) in datum.hotSearch" :key='index'>
        {{item}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datum: '',
    };
  },
  created() {
    this.datum = this.$store.state.datum;
  },
};
</script>

<style lang="stylus" scoped>
.search-wrappper
  position fixed
  top 0
  bottom 0
  right 0
  left 0
  z-index 2
  background-color #fff
  .search-bar
    display flex
    height 50px
    .arrow
      width 50px
      line-height 50px
      text-align center
      img
        width 10px
        margin 0 auto
    .input
      flex 1
    .btn
      flex 0 0 50px
      font-size 14px
      line-height 50px
</style>
