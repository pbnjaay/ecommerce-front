<template>
  <Layout>
    <router-view :key="$route.path" />
  </Layout>
</template>

<script>
import Layout from "@/layouts/Default.vue";
export default {
  components: {
    Layout
  }
};
</script>
