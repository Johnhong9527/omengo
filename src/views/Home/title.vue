<template>
  <div class="title-wrapper">
    <h3>{{title}}</h3>
    <span class="text"><i class="top-line"></i>{{text}}</span>
  </div>
</template>
<script>

export default {
  name: 'home-title',
  props: {
    title: String,
    text: String,
  },
};
</script>

<style lang="stylus" scoped>
.title-wrapper
  display flex
  flex-direction row
  align-items center
  font-size 0
  margin 2px 0 6px
  h3
    font-size 18px
    color #333
    font-weight bold
  .text
    display flex
    position relative
    top -3px
    flex-direction column
    margin-left 5px
    .top-line
      display inline-block
      margin 4px 0
      width 16px
      height 3px
      background-color red
    font-size 14px
    color #999
</style>
