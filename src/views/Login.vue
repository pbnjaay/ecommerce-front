<template>
  <div id="login">
    <v-button :style="{ color: '#fff' }" @click="login">Login</v-button>
  </div>
</template>

<script>
import VButton from "@/components/VButton";
export default {
  components: {
    VButton
  },
  methods: {
    login() {
      let returnUrl = this.$route.query.redirect ?? "/";
      this.$store.dispatch("login", returnUrl);
    }
  }
};
</script>

<style lang="scss">
#id {
  display: flex;
  align-items: center;
}
</style>
