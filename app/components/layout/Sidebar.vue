<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "#app";

const route = useRoute();

const collapsed = ref(false);
const open = ref<string | null>(null);

const menu = [
  { label: "Dashboard", icon: "bi bi-grid", to: "/dashboard" },
  { label: "Login", icon: "bi bi-lock", to: "/dashboard/media" },
  {
    label: "Laporan",
    icon: "bi bi-file-earmark-bar-graph",
    to: "/dashboard/media",
  },
  {
    label: "Daftar Dokter",
    icon: "bi bi-person-badge",
    to: "/dashboard/media",
  },
  {
    label: "Daftar Poli",
    icon: "bi bi-people",
    to: "/dashboard/media",
  },
  {
    label: "Layanan Unggulan",
    icon: "bi bi-star-fill",
    to: "/dashboard/media",
  },
  {
    label: "Daftar Unit Kerja",
    icon: "bi bi-building",
    to: "/dashboard/media",
  },
  {
    label: "Content",
    icon: "bi bi-folder",
    children: [
      { label: "Slider", to: "/dashboard/articles" },
      { label: "Berita", to: "/dashboard/categories" },
      { label: "Konten Instagram", to: "/dashboard/categories" },
      { label: "Podkies", to: "/dashboard/categories" },
      { label: "Inovasi", to: "/dashboard/categories" },
      { label: "Hari Peringatan", to: "/dashboard/categories" },
      { label: "Pengaduan Layanan Publik", to: "/dashboard/categories" },
      { label: "Pemohonan Informasi", to: "/dashboard/categories" },
      { label: "Keberatan Atas Permohonan Informasi", to: "/dashboard/categories" },
      { label: "Kerjasama Pembiayaan", to: "/dashboard/categories" },
    ],
  },
  {
    label: "Profile",
    icon: "bi bi-image",
    children: [
      { label: "Sumber Daya Manusia", to: "/dashboard/galleries" },
      { label: "HAKI", to: "/dashboard/videos" },
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
      'h-screen bg-slate-900 text-slate-200 flex flex-col transition-all duration-300 bg-base text-base',
      collapsed ? 'w-20' : 'w-64',
    ]"
  >
    <!-- ================= HEADER ================= -->
    <div
      class="h-16 shrink-0 flex items-center justify-between px-4 border-b border-base"
    >
      <div class="flex items-center gap-3">
        <div
          class="h-9 w-9 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white"
        >
          A
        </div>

        <span
          v-if="!collapsed"
          class="text-muted hover:text-base text-lg transition-colors duration-200"
        >
          Admin
        </span>
      </div>

      <button
        class="text-slate-400 hover:text-white text-lg transition"
        @click="collapsed = !collapsed"
      >
        <i :class="collapsed ? 'bi bi-chevron-right' : 'bi bi-chevron-left'" />
      </button>
    </div>

    <!-- ================= MENU (SCROLL AREA) ================= -->
    <div class="flex-1 overflow-y-auto">
      <nav class="px-3 py-4 space-y-2">
        <div v-for="item in menu" :key="item.label">
          <!-- ===== Parent Menu ===== -->
          <button
            v-if="item.children"
            @click="open = open === item.label ? null : item.label"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200"
            :class="
              open === item.label || hasActiveChild(item.children)
                ? 'bg-surface text-emerald-600'
                : 'hover:bg-hover'
            "
          >
            <i :class="[item.icon, 'text-lg']" />

            <span v-if="!collapsed" class="flex-1 text-left text-sm font-medium">
              {{ item.label }}
            </span>

            <i
              v-if="!collapsed"
              class="bi bi-chevron-down text-xs transition-transform duration-300"
              :class="open === item.label && 'rotate-180'"
            />
          </button>

          <!-- ===== Single Menu ===== -->
          <NuxtLink
            v-else
            :to="item.to"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200"
            :class="isActive(item.to) ? 'bg-surface text-emerald-600' : 'hover:bg-hover'"
          >
            <i :class="[item.icon, 'text-lg']" />
            <span v-if="!collapsed" class="text-sm font-medium">
              {{ item.label }}
            </span>
          </NuxtLink>

          <!-- ===== Children ===== -->
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div
              v-if="
                item.children &&
                !collapsed &&
                (open === item.label || hasActiveChild(item.children))
              "
              class="ml-8 mt-1 space-y-1 overflow-hidden"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="block px-3 py-2 rounded-md text-sm transition-all duration-200"
                :class="
                  isActive(child.to)
                    ? 'bg-surface text-emerald-500'
                    : 'text-muted hover:text-base hover:bg-hover'
                "
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </transition>
        </div>
      </nav>
    </div>

    <!-- ================= FOOTER ================= -->
    <div class="h-12 shrink-0 border-t border-base bg-baseflex items-center px-4">
      <span v-if="!collapsed" class="text-xs text-muted"> © Admin Website 2026 </span>
    </div>
  </aside>
</template>
