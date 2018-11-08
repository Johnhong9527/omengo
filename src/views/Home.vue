<template>
  <div class="home">
    <van-swipe v-if='getDatum && getDatum.datum' :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(item, index) in datum.datum.storeAdImages" :key='index'>
        <img :src="item.image" alt="">
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator" style="color:red;">
        <!-- {{ current + 1 }}/4 -->
        <div v-for="(item, index) in [0,1,2,3]" :key="index" v-bind:class="{active:index==current}">
          <!-- {{item+1}} -->
        </div>
      </div>
    </van-swipe>
    <div style="font-size:14px;" @click='removeItem'>
      localStorage.removeItem("key");
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <van-loading />
    <van-loading color="red" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// eslint-disable-next-line
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      current: 0,
      storeId: -1,
      datum: {},
    };
  },
  created() {
    if (window.localStorage) {
      // 主逻辑业务
      const storage = window.localStorage;
      // eslint-disable-next-line
      if (storage.__H5__store__ === undefined) {
        this.$router.push({ path: '/SelectStore' });
      } else {
        // eslint-disable-next-line
        this.storeId = JSON.parse(storage.__H5__store__).id;
        this.getDatum(this.storeId);
        console.log(this.$store.state.datum);
      }
    }
  },
  mounted() {
    console.log(this.$store.state);
    this.$nextTick(() => {
      this.datum = Object.assign({}, this.$store.state.datum);
      console.log(this.datum);
    });
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    removeItem() {
      localStorage.removeItem('__H5__store__');
    },
    ...mapMutations(['getDatum']),
  },
};
</script>
<style lang="stylus" scoped>
vSwipeHeight = 205px
vanSwipeIndicator = 90px
.van-swipe
  height vSwipeHeight
  .van-swipe-item
    line-height vSwipeHeight
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
