<template>
  <div class="header-wrapper">
    <div class="address-wrapper">
      <div class="icon">
        <img src="/img/position.png" alt="">
      </div>
      <div class="text">
        text
      </div>
    </div>
    <div class="search-wrapper">
      <div class="icon">
        <img src="/img/search.png" alt="">
      </div>
      <div class="text">
        text
      </div>
    </div>
  </div>
</template>
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
    .icon
      width 25px
      img
        display block
        width 100%
        height auto
  .search-wrapper
    flex 1
</style>
