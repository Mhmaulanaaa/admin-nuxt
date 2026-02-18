<script setup>
definePageMeta({
  middleware: "auth",
  layout: "default",
});
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <BaseCard title="Total Articles">12</BaseCard>
    <BaseCard title="Published">8</BaseCard>
    <BaseCard title="Draft">4</BaseCard>
  </div>
</template>
