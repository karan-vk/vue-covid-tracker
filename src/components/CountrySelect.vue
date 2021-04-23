<template>
  <select
    @change="onChange()"
    v-model="selected"
    class="form-select rounded block w-full border p-3 mt-10"
  >
    <option value="0">Select country</option>
    <option v-for="country in countries" :key="country.ID" :value="country.ID">
      {{ country.Country }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CountrySelect",
  props: {
    countries: Array,
  },
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    onChange() {
      const country = this.countries.find((item) => item.ID === this.selected);
      this.$emit("get-country", country);
    },
  },
};
</script>

<style>
</style>