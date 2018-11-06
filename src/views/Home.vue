<template>
  <div class="home">
    <van-swipe :autoplay="3000" @change="onChange">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <div class="custom-indicator" slot="indicator" style="color:red;">
        <!-- {{ current + 1 }}/4 -->
        <div v-for="(item, index) in [0,1,2,3]" :key="index" v-bind:class="{active:index==current}">
          <!-- {{item+1}} -->
        </div>
      </div>
    </van-swipe>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <van-loading />
    <van-loading color="red" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
  components: {
    HelloWorld,
  },
};
</script>
<style lang="stylus" scoped>
vSwipeHeight = 500px;
vanSwipeIndicator = 90px;

.van-swipe {
  height: vSwipeHeight;

  .van-swipe-item {
    line-height: vSwipeHeight;
  }
}

.van-swipe__indicators {
  .van-swipe__indicator {
    width: vanSwipeIndicator;
    height: vanSwipeIndicator;
  }
}

.custom-indicator {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 30%;
  left: 35%;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);

  &>div {
    flex: 0 0 40px;
    margin: 0 auto;
    text-align: center;
    height: 4px;
    background-color: #ccc;
  }

  .active {
    background-color: #fc9153;
  }
}
</style>
