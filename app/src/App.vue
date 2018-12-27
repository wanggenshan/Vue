<template>
  <div>
    <button @click="change('+')">+</button>
    <span>{{this.$store.state.app.num}}</span>
    <button @click="change('-')">-</button>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log("app....", this.$store);
  },
  data() {
    return {};
  },
  methods: {
    change(type) {
      this.$store.commit({
        type: "app/change",
        payload: type
      });
    }
  }
};
</script>

<style>
</style>
