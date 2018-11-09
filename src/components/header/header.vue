<template>
  <div class="header-wrapper">
    <div class="address-wrapper">
      <div class="icon icon-address" @click="selectStore">
      </div>
      <div class="tip" v-if="isTipShow">
        <div class="text">{{shopName}}</div>
        <div class="close icon-close" @click='isTipShow = false'></div>
      </div>
    </div>
    <div class="search-wrapper" @click='serch'>
      <div class="icon icon-search">
      </div>
      <div class="text">
        请点击搜索商品
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isTipShow: false,
    };
  },
  created() {
    // eslint-disable-next-line
    if (window.localStorage.__H5__store__ === undefined) {
      this.isTipShow = false;
    } else {
      this.isTipShow = true;
    }
    setTimeout(() => {
      this.isTipShow = false;
    }, 5000);
  },
  computed: {
    shopName() {
      // eslint-disable-next-line
      return JSON.parse(window.localStorage.__H5__store__).name;
    },
  },
  methods: {
    selectStore() {
      this.$router.push({ path: '/SelectStore' });
    },
    serch() {
      this.$router.push({ path: '/search' });
    },
  },
};
</script>

<style lang="stylus" scoped>
.header-wrapper
  display flex
  position fixed
  top 0
  right 0
  left 0
  padding 10px 10px 0 0
  height 40px
  z-index 2
  .address-wrapper
    width 50px
    height 25px
    position relative
    .icon
      color #fff
      width 25px
      height 25px
      margin 0 auto
      img
        display block
        width 100%
        height auto
    .tip
      position absolute
      display flex
      top 35px
      left 10px
      font-size 12px
      padding 10px 38px 10px 16px
      color #fff
      background-color #4a4c5bcc
      &:before
        arrowUp = 8px
        content ''
        position absolute
        top -8px
        width 0
        height 0
        border-left arrowUp solid transparent
        border-right arrowUp solid transparent
        border-bottom arrowUp solid #4a4c5bcc
      .close
        position absolute
        right 14px
        top 12px
        font-size 12px
      .text
        display inline-block
        width fit-content
        white-space nowrap
  .search-wrapper
    flex 1
    height 30px
    line-height 30px
    background rgba(255, 255, 255, 0.4)
    border-radius 20px
    font-size 0
    .icon
      font-size 19px
      margin-right 5px
    & > div
      display inline-block
      font-size 16px
      color #949697
      vertical-align middle
</style>
