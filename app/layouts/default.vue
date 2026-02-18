<template>
  <div class="min-h-screen flex bg-base">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Header />

      <main class="flex-1 p-6">
        <slot />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "~/components/layout/Sidebar.vue";
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>
