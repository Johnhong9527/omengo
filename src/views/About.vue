<template>
  <div class="about">
    <!-- 左对齐 -->
    <van-row type="flex">
      <van-col span="6">span:
        6</van-col>
      <van-col span="6">span:
        6</van-col>
      <van-col span="6">span:
        6</van-col>
    </van-row>

    <!-- 居中 -->
    <van-row type="flex" justify="center">
      <van-col span="6">span:
        6</van-col>
      <van-col span="6">span:
        6</van-col>
      <van-col span="6">span:
        6</van-col>
    </van-row>

    <!-- 右对齐 -->
    <van-row type="flex" justify="end">
      <van-col span="6">span:
        6</van-col>
      <van-col span="6">span:
        6</van-col>
      <van-col span="6">span:
        6</van-col>
    </van-row>

    <!-- 两端对齐 -->
    <van-row type="flex" justify="space-between">
      <van-col span="6">span:
        6</van-col>
      <van-col span="6">span:
        6</van-col>
      <van-col span="6">span:
        6</van-col>
    </van-row>

    <!-- 每个元素的两侧间隔相等 -->
    <van-row type="flex" justify="space-around">
      <van-col span="6">span:
        6</van-col>
      <van-col span="6">span:
        6</van-col>
      <van-col span="6">span:
        6</van-col>
    </van-row>
    <br>
    <br>
    <br>
    <button @click='nprogress'>触发函数show</button>
    <br>
    <br>
    <br>
    <button @click='hide'>触发函数hide</button>
    <br>
    <br>
    <br>
  </div>
</template>
<script>
export default {
  methods: {
    nprogress() {
      this.$progress.show();
    },
    hide() {
      this.$progress.hide();
    },
  },
};
</script>

<style lang="stylus" scoped>
.van-col
  &:nth-child(odd)
    background-color #39a9ed
  &:nth-child(even)
    background-color #66c6f2
</style>
