<template>
  <div class="big-category">
    <mediumGoods
      v-for="(item, index) in extra"
      :key="index"
      @add='add'
      :goods='item'
    />
    <addCat
      v-if="cat.show"
      :cat='cat'
    />
  </div>
</template>
<script>
import mediumGoods from "@/components/mediumGoods/mediumGoods.vue";
import addCat from "@/components/addCat/index.vue";

export default {
  data() {
    return {
      cat: {
        show: false,
        target: "",
        imageSrc: ""
      }
    };
  },
  props: {
    extra: Array
  },
  components: {
    mediumGoods,
    addCat
  },
  methods: {
    add(target) {
      this.cat.target = target;
      this.cat.show = true;
      this.cat.imageSrc = target.getAttribute("src");
    }
  }
};
</script>
<style lang="less" scoped>
.big-category {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
