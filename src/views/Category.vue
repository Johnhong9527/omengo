<template>
  <div class="category">
    <h3 @click="selectStore">category</h3>
  </div>
</template>
<script>
export default {
  methods: {
    selectStore() {
      this.$router.push({ path: '/SelectStore' });
    },
  },
};
</script>
