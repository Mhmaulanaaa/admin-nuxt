<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "#app";

const route = useRoute();

const collapsed = ref(false);
const open = ref<string | null>(null);

const menu = [
  { label: "Dashboard", icon: "bi bi-grid", to: "/dashboard" },
  {
    label: "Content",
    icon: "bi bi-folder",
    children: [
      { label: "Articles", to: "/dashboard/articles" },
      { label: "Categories", to: "/dashboard/categories" },
    ],
  },
  {
    label: "System",
    icon: "bi bi-gear",
    children: [
      { label: "Users", to: "/dashboard/users" },
      { label: "Settings", to: "/dashboard/settings" },
    ],
  },
];

const isActive = (path?: string) =>
  path && (route.path === path || route.path.startsWith(path + "/"));

const hasActiveChild = (children?: any[]) => children?.some((c) => isActive(c.to));
</script>

<template>
  <aside
    :class="[
      'h-screen bg-slate-900 text-slate-200 flex flex-col transition-all duration-300',
      'bg-base text-base',
      collapsed ? 'w-20' : 'w-64',
    ]"
  >
    <!-- HEADER -->
    <div class="h-16 flex items-center justify-between px-4 border-b border-base">
      <div class="flex items-center gap-3">
        <div
          class="h-9 w-9 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white"
        >
          A
        </div>
        <span
          v-if="!collapsed"
          class="text-muted hover:text-base text-lg transition-colors duration-200"
          >Admin</span
        >
      </div>

      <!-- TOGGLE BUTTON -->
      <button
        class="text-slate-400 hover:text-white text-lg transition-colors duration-200"
        @click="collapsed = !collapsed"
      >
        <!-- Ganti ikon sesuai state -->
        <i :class="collapsed ? 'bi bi-chevron-right' : 'bi bi-chevron-left'"></i>
      </button>
    </div>

    <!-- MENU -->
    <nav class="flex-1 px-3 py-4 space-y-2">
      <div v-for="item in menu" :key="item.label">
        <!-- PARENT -->
        <button
          v-if="item.children"
          @click="open = open === item.label ? null : item.label"
          class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition"
          :class="
            open === item.label || hasActiveChild(item.children)
              ? 'bg-surface'
              : 'hover:bg-hover'
          "
        >
          <i :class="[item.icon, 'text-lg']" />
          <span v-if="!collapsed" class="flex-1 text-left text-sm">
            {{ item.label }}
          </span>
          <i
            v-if="!collapsed"
            class="bi bi-chevron-down text-xs transition-transform"
            :class="open === item.label && 'rotate-180'"
          />
        </button>

        <!-- SINGLE -->
        <NuxtLink
          v-else
          :to="item.to"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg transition"
          :class="isActive(item.to) ? 'bg-surface' : 'hover:bg-hover'"
        >
          <i :class="[item.icon, 'text-lg']" />
          <span v-if="!collapsed" class="text-sm">{{ item.label }}</span>
        </NuxtLink>

        <!-- CHILD -->
        <div
          v-if="item.children && !collapsed"
          class="ml-8 mt-1 space-y-1 overflow-hidden transition-all"
          :class="
            open === item.label || hasActiveChild(item.children)
              ? 'max-h-40 opacity-100'
              : 'max-h-0 opacity-0'
          "
        >
          <NuxtLink
            v-for="child in item.children"
            :key="child.label"
            :to="child.to"
            class="block px-3 py-2 rounded-md text-sm transition"
            :class="
              isActive(child.to)
                ? 'bg-surface text-emerald-500'
                : 'text-muted hover:text-base hover:bg-hover'
            "
          >
            {{ child.label }}
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- FOOTER -->
    <div class="h-12 border-t border-base flex items-center bg-base px-4">
      <span v-if="!collapsed" class="text-xs text-muted"> © Admin Website 2026 </span>
    </div>
  </aside>
</template>
