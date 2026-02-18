<script setup>
definePageMeta({ middleware: "auth" });

const open = ref(false);

const rows = ref([
  { id: 1, title: "Artikel 1", status: "Publish" },
  { id: 2, title: "Artikel 2", status: "Draft" },
]);

const columns = [
  { id: "id", key: "id", label: "ID" },
  { id: "title", key: "title", label: "Title" },
  { id: "status", key: "status", label: "Status" },
  { id: "action", key: "action", label: "Action" },
];

const remove = (id) => {
  rows.value = rows.value.filter((r) => r.id !== id);
};
</script>

<template>
  <div class="space-y-4">
    <div class="flex justify-between">
      <h1 class="text-xl font-bold">Articles</h1>

      <UButton color="emerald" @click="open = true"> + Add Article </UButton>
    </div>

    <UTable :rows="rows" :columns="columns">
      <template #action-data="{ row }">
        <div class="flex gap-2">
          <UButton size="xs" color="blue" variant="soft"> Edit </UButton>
          <UButton size="xs" color="red" variant="soft" @click="remove(row.id)">
            Delete
          </UButton>
        </div>
      </template>
    </UTable>

    <UModal v-model="open">
      <ArticleForm @close="open = false" />
    </UModal>
  </div>
</template>
