<template>
  <div class="category-wrapper">
    <div class="category">
      <!-- {{product}} -->
      <img :src="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+product.image"
        v-lazy="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+product.image">
      <div class="list" ref='list'>
        <div>
          <smallGoods ref="small" @add='add' v-for="(item, index) in product.children"
            :key='index' :goods='item' />
        </div>
      </div>
    </div>
    <addCat ref='addCat' />
  </div>
</template>
<script>
import Bscroll from 'better-scroll';
import smallGoods from '@/components/smallGoods/small-goods.vue';
import addCat from '@/components/addCat/index.vue';

export default {
  name: 'category',
  props: {
    product: Object,
  },
  components: {
    smallGoods,
    addCat,
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll() {
      console.log();
      this.$nextTick(() => {
        // eslint-disable-next-line
        this.$refs['list'].childNodes[0].style.width = `${this.$refs.small[0]
          .$el.offsetWidth * this.$refs.small.length}px`;
      });
      console.log();
      if (!this.listScroll) {
        this.listScroll = new Bscroll(this.$refs.list, {
          click: true,
          scrollX: true,
          eventPassthrough: 'vertical',
        });
        // this.scroll.on('scroll', pos => {
        //   console.log(pos);
        //   this.point.show = false;
        // });
      } else {
        this.listScroll.refresh();
      }
    },
    add(target) {
      console.log(this.$refs.addCat);
      this.$refs.addCat.target = target;
      this.$refs.addCat.isShow = true;
      this.$refs.addCat.imageSrc = target.getAttribute('src');
    },
  },
};
</script>
<style lang="stylus" scoped>
.category-wrapper
  margin-top 5px
  overflow hidden
  .category
    width 100%
    & > img
      max-height 120px
    img
      display block
      width 100%
      height 100%
  .list
    background-color #fff
    & > div
      width 625px
      white-space nowrap
</style>
