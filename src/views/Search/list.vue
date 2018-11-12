<template>
  <div class="search-list-wrapper" ref="wrappers">
    <ul>
      <li class="m-goods-wrapper" v-for="(item, index) in list.list" :key="index"
        ref='goods'>
        <div class="goods-image">
          <!-- <img v-lazy="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+item.image"> -->
          <img :src="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+item.image">
        </div>
        <div class="promotion" style="visibility: hidden;">hidden</div>
        <div class="name van-ellipsis">
          <span>{{item.brand}}</span> {{item.name}}
        </div>
        <div class="price">
          ￥{{item.price |priceF}}<span class="unit">{{item.unit}}</span><img
            @click="add(item)" src="/img/cat.png" alt="">
        </div>
        {{item.promotions}}
      </li>
    </ul>
    <transition name="point" v-on:before-enter="beforeEnter" v-on:enter="enter"
      v-on:leave="leave">
      <div v-if="point.show" class="point" :style="{left:point.x,top:point.y}">
        <!-- <span>{{point.x}}</span><br /><span>{{point.y}}</span> -->
        <img :src="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+point.image"
          alt="">
      </div>
    </transition>
  </div>
</template>
<script>
/* eslint-disable */
import Bscroll from 'better-scroll';
import Velocity from 'velocity-animate';

export default {
  name: 'search-list',
  data() {
    return {
      point: {
        x: null,
        y: null,
        image: '',
        show: false,
      },
    };
  },
  props: ['list'],
  created() {},
  mounted() {
    this.initScroll();
  },
  filters: {
    priceF(price) {
      return price.toFixed(2);
    },
  },
  methods: {
    initScroll() {
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.wrappers, {
          click: true,
        });
        this.scroll.on('scroll', pos => {
          console.log(pos);
          this.point.show = false;
        });
      } else {
        this.scroll.refresh();
      }
    },
    add(item) {
      this.$nextTick(() => {
        const wrapperWidth = this.scroll.wrapperWidth / 2;
        this.point.show = true;
        this.point.image = item.image;
        // eslint-disable-next-line
        this.point.x =
          this.scroll.pointX < wrapperWidth
            ? `${16 / 37.5}rem`
            : `${(wrapperWidth + 8) / 37.5}rem`;
        this.point.y = `${this.scroll.pointY - 160 - 60}px`;
        console.log(this.point.x);
        // console.log(this.point.y);
      });
    },
    beforeEnter(el) {
      // console.log('beforeEnter');
      // Velocity(
      //   el,
      //   { left: this.point.x, top: this.point.y },
      //   // { duration: 300 },
      // );
      // el.style.right = '10px';
      // el.style.bottom = '40px';
    },
    enter(el, done) {
      // console.log('enter');
      // // :style="{left:point.x,top:point.y}"
      // console.log(this.point.x);
      // console.log(this.point.y);
      // this.$nextTick(() => {
      //   el.style.left = this.point.x;
      //   el.style.top = this.point.y;
      // });
      // done();
      // Velocity(
      //   el,
      //   // { left: this.point.x, top: this.point.y },
      //   { duration: 300 },
      // );
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 });
      Velocity(el, { fontSize: '1em' }, { complete: done });
      // Velocity(el, { fontSize: '1em' }, { complete: done });
      // this.point.show = false;
      // Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave(el, done) {
      // console.log('leave');
      // Velocity(
      //   el,
      //   {
      //     left: '10px',
      //     bottom: '40px',
      //   },
      //   { complete: done },
      // );
      // this.point.show = false;
      // done();
      // Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
      // Velocity(el, { rotateZ: '100deg' }, { loop: 2 });
      // Velocity(
      //   el,
      //   {
      //     right: '10px',
      //     bottom: '40px',
      //   },
      //   { duration: 600 },
      // );
    },
  },
};
</script>

<style lang="stylus" scoped>
.search-list-wrapper
  overflow hidden
  position fixed
  bottom 0
  right 0
  left 0
  top 50px
  padding 0 10px
  z-index 4
  background-color #f0f0f0
  ul
    display flex
    width 100%
    flex-wrap wrap
  .m-goods-wrapper
    flex 0 0 46.4vw
    width 46.4vw
    padding 10px
    box-sizing border-box
    background-color #fff
    margin-bottom 4px
    border-radius 5px
    position relative
    &:nth-child(1), &:nth-child(2)
      margin-top 4px
    &:nth-last-child(1), &:nth-last-child(2)
      margin-bottom 10px
    &:nth-child(odd)
      margin-right 2px
    &:nth-child(even)
      margin-left 4px
    .goods-image
      width 160px
      height 160px
      img
        width 100%
        height 100%
        display block
    .promotion
      color #fff
      background #bc2e3f
      border-radius 3px
      font-size 12px
      margin-top 8px
      padding 3px
    .name
      font-size 14px
      line-height 25px
      height 25px
      text-align left
    .price
      text-align left
      line-height 25px
      height 25px
      font-size 16px
      color #e50012
      .unit
        color #999
        white-space nowrap
        font-size 12px
        margin-left 4px
      img
        position absolute
        right 15px
        bottom 8px
        width 28px
        height 28px
  .point
    position fixed
    z-index 2
    // background-color red
    width 160px
    height 160px
    img
      width 100%
      height 100%
      display block
      // border 1px solid #000
</style>
