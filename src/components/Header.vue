<template>
  <header class="text-center bg-blue-800 text-white p-4 mb-10">
    <div class="text-3xl md:text-5xl font-bold mb-3">
      <!-- <i class="fa fa-viruses"></i>  -->
      <FontAwesomeIcon icon="viruses" />
      Covid-19 tracker
    </div>
    <p>
      by K
      <a href="https://github.com/karan-vk" rel="noreferrer" target="_blank">
        github</a
      >
    </p>
  </header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "Header",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
