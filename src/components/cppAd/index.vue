<template>
  <div class="cpp-ad-wrapper" v-if="cppAdShow">
    <div class="cpp-ad">
      <img :src="'https://fsomengo.oss-cn-shenzhen.aliyuncs.com' + cpp[0].image"
        alt="">
      <!-- eslint-disable-next-line -->
      <img @click="cppAdShow = false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsSAAALEgHS3X78AAADUElEQVRo3u2b0Y2cMBCG/yN5XzoIqSB0EFJB6CA0EIkKor0GIjq4TQcbpQHSAakgbAdsASfnZYh8czZgPHbYcJbmYVfG9oc9eGY8vlNKIXBJAeQkqaXOAKAjGUIO5nUgwJIkB/DG8fkrgBbAmUT0BdwJznBFkB+FX+B3Aj9tBbgCcFwwk1dasqaSAzjMPH+hfvzAlVJrpVRK9cpeWqXUUSlVOLRZ0DPtRLs99b1q3GseSpVS54nB1FQHnpJSW7aXel7Tj+sgCqXUYJnNQgByql/TrA+u/bp0Wls6rAKCcqksL7yWBj5JLSmhpW5SqZMUsAm2+gegptl2hp5r9OirM4HF9E05rgWuDLD5hmBHyQ3QlSswb2SrsM7jtTXQbVBnXXW6WwrM9ba5AdhRmjl95g9kbGl0NwRrWp0DMVmB+RZU3CBwMbVV8dl13sg3KnziMhNwY6u0QFrhjxz/6raOz2e275BeafCY3VbQGjPtq63nLA/j/wm5xSVzwCWiCw8UHHApOYV3DgL96wwHYnwCrEcWWsfGBwFoSVhQWxftd6lHPAbPfTc1GCsuyzu3uH2+Vl7DghMwKfjarWgtdChY0xaVjbEpvfj6qi7QIWFH0UuZkO6M5Zen3gwAiol2dJ2e0tkrtdMJ6LI+lpwD9wIdLIH+EgmWM+UJO/6Q6mQO+j4SLGdKk4DHOHPQMWCflZDALtBRYGMAj9CfATxO1PkaAzYWcA7gB4BXE3XuV5ihmwR2MRcfYkAnzA7OI8E+RoTWmYaE6U4WAfYK4MNC40SiZE+2KGHT0sVc9HU4VpmWks7DGts4NLTReQA7g20iwcaANrqHPBzSR4QNDd3zsJWevuCzrFsBF28KuhVYzqUe0zrT11NPVPEtruaiq+29JNlGH8uZGx560OuT5xa11jaWgs6I4RmbnraUAfitVfrmMNMN2+BrT9s4pUGmmotXO0YsdeC3f/3iPR+17OIwLTGEQxrt9zv2e+uloTHrv/slmXi7OhC/1ZSHRfv/S1LLntOWtp6YVodITNtl6uEuk0t3mT78XySI+9x5KMmSsd11+EmBvBbLrueM130KkvcTdx/q0d17ueQRAVgH38U1HtPS9LmodaGVsPmLWnO6uYmreH8AXEDltJZ02PEAAAAASUVORK5CYII="
        alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'cpp',
  data() {
    return {
      cppAdShow: true,
    };
  },
  created() {
    console.log(this.cpp);
  },
  props: {
    cpp: Array,
  },
};
</script>
<style lang="stylus" scoped>
.cpp-ad-wrapper
  position fixed
  z-index 4
  top 0
  bottom 0
  right 0
  left 0
  background-color rgba(0, 0, 0, 0.5)
  .cpp-ad
    position absolute
    top 50%
    left 50%
    transform translate3d(-50%, -50%, 0)
    img:nth-child(1)
      width 300px
      height 300px
      display block
    img:nth-child(2)
      position absolute
      left 50%
      bottom -40px
      transform translateX(-50%)
      width 30px
      height 30px
      line-height 30px
      text-align center
      border-radius 50%
      opacity 0.6
      font-size 14px
      color #fff
</style>
