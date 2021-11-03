<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./views/NavBar.vue";
export default {
  components: { Navbar },
};
</script>

<style></style>
