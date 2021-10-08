<template>
  <div>
    <h1>sample site</h1>
    <hr />
    <!-- <Nuxt keep-alive /> -->
    <Nuxt />
    <hr />
    <div>footer</div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
declare const window: any;

export default Vue.extend({
  created: () => {}
});
</script>
