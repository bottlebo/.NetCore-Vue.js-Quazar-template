<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="../assets/logo.png" />
  </q-page>
</template>

<style>
</style>

<script>
import { personsService } from "../services/persons.service";

export default {
  name: "HelloWorld",
  data() {
    return {
      persons: []
    };
  },
  async created() {
    this.persons = await  personsService.all();
    console.log(this.persons)
  }
};
</script>
