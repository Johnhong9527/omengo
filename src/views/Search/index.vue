<template>
  <div class="search-wrappper">
    <div class="search-bar">
      <div class="arrow"><img src="/img/arrow.png" alt=""></div>
      <div class="input">
        <input type="search" placeholder="请输入商品、品牌名称进行搜索">
      </div>
      <div class="btn">
        搜索
      </div>
    </div>
    <div class="history-hot-wrapper">
      <div class="hot-title"><img src="/img/hot.png" alt=""><span>热门搜索</span></div>
      <ul class="hot-list">
        <li v-for="(item, index) in datum.hotSearch" :key='index'>
          {{item}}
        </li>
      </ul>
      <div class="history-title"><img src="/img/history.png" alt=""><span>搜索历史</span></div>
      <ul class="history-list">
      </ul>

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
    align-items center
    height 50px
    background-color #fff
    .arrow
      width 50px
      height 20px
      font-size 0
      img
        width 10px
        height 100%
        margin 0 auto
    .input
      flex 1
      input
        font-size 14px
        display block
        width 100%
        height 40px
        padding 5px
        text-align left
        border 1px solid #eee
    .btn
      flex 0 0 50px
      font-size 14px
      line-height 50px
  .history-hot-wrapper
    position absolute
    top 50px
    right 0
    padding-top 20px
    left 0
    bottom 0
    z-index 3
    color #797979
    background-color #f7f7f7
    & > div
      padding 0 10px
      text-align left
      font-size 0
      height 25px
      line-height 25px
      img
        width 16px
        height 16px
        display inline
      span
        margin-left 14px
        font-size 14px
    & > ul
      padding 5px 10px 0 10px
      li
        display inline-block
</style>
