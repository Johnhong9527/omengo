<template>
  <div class="home">
    <headerComponents />
    <van-swipe v-if='datum' :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(item, index) in datum.storeAdImages"
        :key='index'>
        <img :src="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+item.image"
          v-lazy="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com'+item.image">
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator" style="color:red;">
        <div v-for="(item, index) in datum.storeAdImages"
          :key="index" v-bind:class="{active:index==current}">
        </div>
      </div>
    </van-swipe>
    <midServiceComponents />
    <cppAdComponents v-if='datum && datum.cppStoreAdImages && datum.cppStoreAdImages.length > 0'
      :cpp='datum.cppStoreAdImages' />
    <homeList :datum='datum' />
    <!-- <van-loading /> -->
    <!-- <van-loading color="red" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// eslint-disable-next-line
import { mapState } from 'vuex';
import headerComponents from '@/components/header/header.vue';
import cppAdComponents from '@/components/cppAd/index.vue';
import midServiceComponents from '@/components/midService/mid-service.vue';
import homeList from './list.vue';

export default {
  name: 'home',
  data() {
    return {
      current: 0,
      storeId: -1,
    };
  },
  created() {
    try {
      // 主逻辑业务
      const storage = window.localStorage;
      // eslint-disable-next-line
      if (storage.__H5__store__ === undefined) {
        this.$router.push({ path: '/SelectStore' });
      } else {
        // eslint-disable-next-line
        // this.storeId = JSON.parse(storage.__H5__store__).id;
        // this.getDatum(this.storeId);
      }
    } catch (err) {
      console.log(err);
    }
  },
  components: {
    headerComponents,
    cppAdComponents,
    midServiceComponents,
    homeList,
  },
  computed: {
    ...mapState({
      datum: state => state.datum,
    }),
  },
  mounted() {},
  methods: {
    onChange(index) {
      this.current = index;
    },
    removeItem() {
      localStorage.removeItem('__H5__store__');
    },
  },
};
</script>
<style lang="stylus" scoped>
vSwipeHeight = 205px
vanSwipeIndicator = 90px
.home
  // &:after
  // content ''
  // position fixed
  // z-index 1
  // top 0
  // bottom 0
  // right 0
  // left 0
  background-color #e5e5e5
.van-swipe
  height vSwipeHeight
  .van-swipe-item
    line-height vSwipeHeight
    img
      display block
      width 100%
      max-height 210px
.van-swipe__indicators
  .van-swipe__indicator
    width vanSwipeIndicator
    height vanSwipeIndicator
.custom-indicator
  position absolute
  display flex
  justify-content space-between
  width 20%
  left 40%
  right 5px
  bottom 5px
  padding 2px 5px
  font-size 12px
  color #fff
  // background rgba(0, 0, 0, 0.1)
  & > div
    flex 0 0 10px
    margin 0 auto
    text-align center
    height 2px
    background-color #ccc
  .active
    background-color #fc9153
</style>
