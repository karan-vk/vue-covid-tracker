<template>
  <div class="text-center">
    <h2 class="text-3xl font-bold">{{ text }}</h2>
    <div class="text-2xl mt-4 mb-10">{{ timestamp }}</div>
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  name: "DataTitle",
  props: ["text", "dataDate"],
  computed: {
    timestamp: function () {
      return format(new Date(this.dataDate), "MMMM do yyyy , H:mm:ss a");
    },
  },
};
</script>

<style>
</style>