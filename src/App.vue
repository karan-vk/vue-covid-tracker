<template>
  <Header />
  <div class="container">
    <transition name="fade"><router-view /></transition>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>