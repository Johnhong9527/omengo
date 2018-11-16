<template>
  <div class="list-wrapper">
    <homeTitle title="特色互动" text='好品质当然要特色' />
    <div class="activity-wraper">
      <div class="activity" v-for="(item, index) in datum.interactionImages"
        :key='index' @click='toCat(item)'>
        <img :src="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+item.image"
          v-lazy="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+item.image">
      </div>
    </div>
    <homeTitle title="小店精选" text='精选每天不重样' />
    <div class="store-product-category" v-for="(item, index) in datum.storeProductCategory"
      :key='index'>
      <homeCategory :product='item' />
    </div>
    <homeTitle title="猜你喜欢" text='每天不重样' />
    <div class="home-bottom"></div>
  </div>
</template>
<script>
import homeTitle from './title.vue';
import homeCategory from './category.vue';

export default {
  name: 'home-list',
  components: {
    homeTitle,
    homeCategory,
  },
  props: {
    datum: Object,
  },
  created() {},
  mounted() {
    console.log(this.datum);
  },
  methods: {
    log() {
      console.log(this.datum);
    },
  },
};
</script>

<style lang="stylus" scoped>
.list-wrapper
  width 95%
  margin 10px auto 0
  min-height 100vh
  .activity-wraper
    // display flex
    font-size 0
    .activity
      display inline-block
      width 50%
      height 105px
      box-sizing border-box
      margin-bottom 5px
      &:nth-child(odd)
        padding-right 2px
      &:nth-child(even)
        padding-left 2px
      img
        width 100%
        height 100%
        display block
  .home-bottom
    width 100%
    height 50px
</style>
