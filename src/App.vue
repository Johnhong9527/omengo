<template>
  <div id="app">
    <other />
    <nprogress :isSpinner='isSpinner' />
    <div @click='onClick' class="onClick">onClick</div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import other from '@/components/other.vue'; // @ is an alias to /src
import nprogress from '@/components/nprogress.vue'; // @ is an alias to /src

@Component({
  components: {
    other,
    nprogress,
  },
})
export default class Home extends Vue {
  isSpinner: boolean = true;

  onClick(): void {
    this.isSpinner = !this.isSpinner;
  }
}
</script>

<style lang="stylus">
*
  padding 0
  margin 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
.onClick
  margin 20px
  padding 20px
  background-color green
</style>
