<template>
  <div class="input-wrapper">
    <img v-if="icon" :src="icons[icon]" alt="">
    <input :type="type" :placeholder='placeholder'>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'inputText',
  data() {
    return {
      icons: {
        user: '/img/user.png',
        lock: '/img/lock.png',
        hand: '/img/hand-shake.png',
      },
    };
  },
  props: {
    icon: String,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
  },
};
</script>

<style lang="stylus" scoped>
.input-wrapper
  display flex
  align-items center
  position relative
  & > img
    flex 0 0 16px
    width 16px
    height 19px
    margin 0 10px
  input
    flex 1
    height 40px
    line-height 40px
    font-size 14px
    box-sizing border-box
  slot
    flex 0 0 90px
    position absolute
    width 90px
    height 30px
</style>
