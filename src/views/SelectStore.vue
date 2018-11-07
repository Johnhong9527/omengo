<template>
  <div class="select-store">
    <van-nav-bar title="选择店铺" left-arrow @click-left="onClickLeft" />
    <!-- <h3>select-store</h3> -->
    <div class="wrapper" ref="wrappers">
      <div class="content">
        <div class="shop-item" v-for="item in storeSelectGroupArea" :key="item.id">
          <div class="name">
            <img src="/img/shop.png">
            <span>{{item.name}}</span>
          </div>
          <div>
            {{item.address}}
          </div>
          <div>
            <span>配送区域：</span><span>{{item.areaName}}</span>
          </div>
        </div>
      </div>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll';

export default {
  data() {
    return {
      storeSelectGroupArea: '',
    };
  },
  created() {
    this.$http
      .get('http://www.sonyo.com/api/index/store_select_group_area?lat=&lng=')
      .then((data) => {
        console.log(data);
        this.storeSelectGroupArea = data.datum;
      });
  },
  mounted() {
    if (!this.scroll) {
      this.scroll = new Bscroll(this.$refs.wrappers, {});
    } else {
      this.scroll.refresh();
    }
  },
  updated() {
    // this.scroll.refresh();
  },
  methods: {
    onClickLeft() {
      // history.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.select-store {
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
}

.van-nav-bar {
  position: fixed;
  z-index: 3;
  left: 0;
  right: 0;
  height: 93.76px;

  line-height: 93.76px;
}
.van-nav-bar__title {
  font-size: 137.5px;
}
.wrapper {
  margin-top: 117.1970px;
  height: calc(100vh - 93.76px);
  overflow: hidden;
  background-color: #f0f0f0;
}
.shop-item {
  text-align: left;
  margin: 23.4394px;
  padding: 23.4394px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px #e0e0e0;
  .name {
    img {
      vertical-align: middle;
      width: 70.3182px;
      height: 70.3182px;
    }
  }
}
</style>
