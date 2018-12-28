<template>
  <div>
    <button @click="change('+')">+</button>
    <span>{{ num}}</span>
    <button @click="change('-')">-</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState({
      num: state => state.app.num
    })
  },
  mounted() {
    // console.log("app....", this.$store);
  },
  data() {
    return {};
  },
  methods: {
    // change(type) {
    //   this.$store.commit({
    //     type: "app/change",
    //     payload: type
    //   });
    //   // this.$store.dispatch({
    //   //   type: "app/changes",
    //   //   payload: type
    //   // });
    // }
    ...mapMutations({
      change: "app/change"
    })
  }
};
</script>

<style>
</style>
