<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <img :src="imgSrc" alt="">
    <van-uploader :after-read="onRead">
      <van-icon name="photograph" />
    </van-uploader>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: '',
    };
  },
  methods: {
    onRead(file) {
      this.imgSrc = file.content;
      console.log(file.content);
    },
  },
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
