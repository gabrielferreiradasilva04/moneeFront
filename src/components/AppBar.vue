<template>
  <v-app-bar density="compact" color="secondary">
    <v-container max-width="1000" class="d-flex align-center">
      <v-img max-height="120" src="/src/assets/Logo escrita.png"></v-img>

      <v-btn
        v-for="item in menuItems"
        :key="item"
        :text="item"
        variant="text"
        class="text-none font-weight-bold"
        
        color="white"
      ></v-btn>

      <v-spacer></v-spacer>
      <v-btn icon="mdi-controller-classic" color="white"></v-btn>
      <v-btn icon="mdi-bell" color="white"></v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  menuItems: Array,
});
</script>
