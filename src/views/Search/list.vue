<template>
  <div class="search-list-wrapper" ref="wrappers">
    <ul>
      <li class="m-goods-wrapper" v-for="(item, index) in list.list"
        :key="index" ref='goods'>
        <div class="goods-image">
          <img :src="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+item.image"
            v-lazy="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+item.image">
        </div>
        <div class="promotion" style="visibility: hidden;">hidden</div>
        <div class="name van-ellipsis">
          <span>{{item.brand}}</span> {{item.name}}
        </div>
        <div class="price">
          ￥{{item.price |priceF}}<span class="unit">{{item.unit}}</span><img
            @click="add($event,item,index)" src="/img/cat.png">
        </div>
        {{item.promotions}}
      </li>
      <div></div>
    </ul>
    <Shopcart ref='shopCart' />
    <transition name="point" v-on:before-enter=" beforeEnter"
      v-on:enter="enter" v-on:after-enter="afterEnter">
      <!-- <div v-show="point.show" class="point" :style="{left:point.x,top:point.y}"> -->
      <div v-if="point.show" class="point">
        <!-- <span>{{point.x}}</span><br /><span>{{point.y}}</span> -->
        <img class="goods-img" :src="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+point.image"
          alt="">
      </div>
    </transition>
  </div>
</template>
<script>
/* eslint-disable */
import Bscroll from 'better-scroll';
import Velocity from 'velocity-animate';
import Shopcart from '@/components/shopcart/index.vue';

export default {
  name: 'search-list',
  data() {
    return {
      point: {
        x: null,
        y: null,
        image: '',
        show: false,
        el: '',
      },
      isAdd: true,
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
  components: {
    Shopcart,
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
    add(event, item, index) {
      if (!this.isAdd) return;
      this.isAdd = false;
      const seft = this;
      if (!event._constructed) {
        return;
      }
      const storage = window.localStorage;
      const toast1 = seft.$toast.loading({
        // mask: true,
        message: '添加中...',
      });
      seft.$http
        .post('/api/cart/add', {
          skuId: item.sid,
          quantity: 1,
          cartKey:
            storage.getItem('__H5__cart__') === null
              ? ''
              : storage.getItem('__H5__cart__'),
        })
        .then(res => {
          if (!res.code) {
            toast1.clear();
            // 设置 本地缓存
            if (storage.getItem('__H5__cart__') === null) {
              storage.setItem('__H5__cart__', res.cartKey);
            }
            seft.$nextTick(() => {
              seft.point.el = seft.$refs.goods[index].childNodes[0];
              seft.point.show = true;
              seft.point.image = item.image;
            });
            this.$store.dispatch('setQuantity');
          }

          if (res.code === 2) {
            seft.$toast(res.message);
          }
          this.isAdd = true;
        });
    },
    beforeEnter(el) {
      // 设置动画的起始状态
      let rect = this.point.el.getBoundingClientRect();
      el.style.top = `${rect.top}px`;
      el.style.left = `${rect.left}px`;
      // el.style.transformScale = 1;
    },
    enter(el, done) {
      let rect = this.$refs.shopCart.$el.getBoundingClientRect();
      // Velocity(
      //   el,
      //   {
      //     top: `${rect.top - 50}px`,
      //     left: `${rect.left - 50}px`,
      //     scale: 0,
      //     opacity: 0,
      //   },
      //   {
      //     duration: 500,
      //     complete: done,
      //   },
      // );
      el.style.webkitTransform = 'translate3d(0,0,0)';
      el.style.transform = 'translate3d(0,0,0)';
      el.style.top = `${rect.top - 50}px`;
      el.style.left = `${rect.left - 50}px`;
      el.style.transform = 'scale(0)';
      el.style.opacity = 0;
      el.addEventListener('transitionend', done);
    },
    afterEnter(el, done) {
      this.$nextTick(() => {
        this.point.show = false;
        el.style.display = 'none';
        this.point.el = '';
      });
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
    margin-bottom 6px
    & > div
      width 100%
      height 1px
      margin-bottom 5px
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
    // &:nth-last-child(1), &:nth-last-child(2)
    // margin-bottom 10px
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
    z-index 4
    width 160px
    height 160px
    transition all 0.7s cubic-bezier(0.49, -0.29, 0.75, 0.41)
    img
      width 100%
      height 100%
      display block
</style>
