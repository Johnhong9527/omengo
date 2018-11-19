<template>
  <transition name="add-cat" v-on:before-enter="beforeEnter"
    v-on:enter="enter" v-on:after-enter="afterEnter">
    <div v-if="cat && cat.show" class="add-cat">
      <img :src="cat.imageSrc">
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
  props: {
    cat: Object,
  },
  computed: {
    ...mapState({
      catRect: state => state.catRect,
    }),
  },
  methods: {
    // eslint-disable-next-line
    beforeEnter(el) {
      const $el = el;
      // 设置动画的起始状态
      const rect = this.cat.target.getBoundingClientRect();
      $el.style.top = `${rect.top}px`; // 设置动画开始的纵轴位置
      $el.style.left = `${rect.left}px`; // 设置动画开始的横轴位置
    },
    // eslint-disable-next-line
    enter(el, done) {
      const $el = el;
      $el.style.webkitTransform = 'translate3d(0,0,0)'; // 开启GPU加速
      $el.style.transform = 'translate3d(0,0,0)'; // 开启GPU加速
      $el.style.width = `${this.cat.target.offsetWidth}px`; // 设置图片初始宽度
      $el.style.height = `${this.cat.target.offsetHeight}px`; // 设置图片初始高度
      $el.style.top = `${this.catRect.top - 20}px`; // 设置图片最后落点的纵轴位置
      $el.style.left = `${this.catRect.left - 25}px`; // 设置图片最后落点的横轴位置
      $el.style.transform = 'scale(0.3)'; // 设置落点时缩放比例
      $el.style.opacity = 0.3; //  设置落点时的透明百分比
      $el.addEventListener('transitionend', done); // 监听过渡事件终止,触发`done`函数
    },
    // eslint-disable-next-line
    afterEnter(el, done) {
      // 动画结束,初始化数据
      const $el = el;
      this.$nextTick(() => {
        $el.style.display = 'none';
        this.$parent.cat.show = false;
        this.$parent.cat.target = '';
        this.$parent.cat.imageSrc = '';
        // $el.addEventListener('transitionend', );
        done();
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.add-cat
  position fixed
  z-index 1000
  transition all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41)
  // transition all 0.6s ease-out
  img
    width 100%
    height 100%
    display block
</style>
