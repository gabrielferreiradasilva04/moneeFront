<template>
  <v-app id="inspire">
    <AppBar :menuItems="['Visão Geral', 'Lançamentos', 'Limite de Gastos', 'Metas Financeiras']" />
    <!-- Conteúdo principal centralizado -->
    <v-main class="bg-grey-lighten-3">
      <v-container class="py-6" max-width="1000">
        <v-sheet
          min-height="70vh"
          rounded="lg"
          elevation="1"
          class="pa-6 bg-white"
        >
          <RouterView />
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>

  <AppFooter />
</template>

<script setup>
import AppBar from "@/components/AppBar.vue";
import AppFooter from "@/components/AppFooter.vue";
import { RouterView } from "vue-router";

const links = ["Dashboard", "Messages", "Profile", "Updates"];
</script>
