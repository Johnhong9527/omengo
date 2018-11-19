<template>
  <transition name="add-cat" v-on:before-enter="beforeEnter"
    v-on:enter="enter" v-on:after-enter="afterEnter">
    <div v-if="isShow" class="add-cat">
      <img :src="imageSrc">
    </div>
  </transition>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'addCat',
  data() {
    return {
      isShow: false,
      target: '',
      imageSrc: '',
    };
  },
  updated() {
    console.log(this.target);
    console.log(this.target.offsetWidth);
    console.log(this.target.offsetHeight);
    console.log(this.catRect);
  },
  computed: {
    ...mapState({
      catRect: state => state.catRect,
    }),
    // image
  },
  methods: {
    // eslint-disable-next-line
    beforeEnter(el) {
      const $el = el;
      // 设置动画的起始状态
      const rect = this.target.getBoundingClientRect();
      console.log(39);
      $el.style.width = `${this.target.offsetWidth}px`;
      $el.style.height = `${this.target.offsetHeight}px`;
      $el.style.top = `${rect.top}px`;
      $el.style.left = `${rect.left}px`;
    },
    // eslint-disable-next-line
    enter(el, done) {
      console.log(47);
      const $el = el;
      // const rect = this.$refs.shopCart.$el.getBoundingClientRect();
      $el.style.webkitTransform = 'translate3d(0,0,0)';
      $el.style.transform = 'translate3d(0,0,0)';
      $el.style.top = `${this.catRect.top}px`;
      $el.style.left = `${this.catRect.left}px`;
      $el.style.transform = 'scale(0)';
      $el.style.opacity = 0;
      $el.addEventListener('transitionend', done);
    },
    // eslint-disable-next-line
    afterEnter(el, done) {
      const $el = el;
      this.$nextTick(() => {
        this.isShow = false;
        $el.style.display = 'none';
        this.target = '';
        this.imageSrc = '';
        console.log(65);
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.add-cat
  position fixed
  z-index 4
  width 160px
  height 160px
  transition all 0.7s cubic-bezier(0.49, -0.29, 0.75, 0.41)
  img
    width 100%
    height 100%
    display block
</style>
