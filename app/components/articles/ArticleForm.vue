<script setup>
const emit = defineEmits(["close"]);

const title = ref("");
const status = ref("Draft");

const submit = () => {
  // nanti ganti API POST
  emit("close");
};
</script>

<template>
  <div class="p-6 bg-white rounded-2xl">
    <h2 class="text-lg font-bold mb-4">Create Article</h2>

    <UInput v-model="title" placeholder="Title" class="mb-3" />

    <USelect v-model="status" :options="['Publish', 'Draft']" class="mb-4" />

    <div class="flex justify-end gap-2">
      <UButton variant="soft" @click="$emit('close')"> Cancel </UButton>
      <UButton color="emerald" @click="submit"> Save </UButton>
    </div>
  </div>
</template>
