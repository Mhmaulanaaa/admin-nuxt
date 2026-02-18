<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div class="card card-shadow rounded-2xl shadow p-5">
    <h3 class="text-sm text-base mb-2">{{ title }}</h3>
    <div class="text-2xl font-bold text-base">
      <slot />
    </div>
  </div>
</template>
