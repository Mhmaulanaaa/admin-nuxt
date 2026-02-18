<script setup>
import { ref } from "vue";

const openUser = ref(false);
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const logOut = () => {
  localStorage.removeItem("token");
  navigateTo("/");
};
</script>

<template>
  <header
    class="h-16 bg-base border-b border-slate-200 dark:border-slate-800 transition-colors duration-300"
  >
    <div class="h-full px-8 flex items-center justify-between">
      <!-- LEFT -->
      <div class="flex items-center gap-10">
        <h1
          class="text-base font-semibold text-slate-800 dark:text-slate-100 tracking-tight transition-colors"
        >
          Dashboard
        </h1>

        <!-- Search -->
        <div class="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            class="w-64 pl-9 pr-4 py-2 text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-400 transition"
          />
          <i class="fa-solid fa-search absolute left-3 text-slate-400 text-sm"></i>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="flex items-center gap-6">
        <!-- Notification -->
        <button
          class="relative text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
        >
          <i class="fa-regular fa-bell text-lg"></i>
          <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <!-- Dark Mode -->
        <button
          @click="toggleTheme"
          class="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
        >
          <i
            class="fa-solid text-lg transition-transform duration-300"
            :class="colorMode.value === 'dark' ? 'fa-sun rotate-180' : 'fa-moon'"
          />
        </button>

        <!-- Divider -->
        <div class="h-6 w-px bg-slate-300 dark:bg-slate-700"></div>

        <!-- User -->
        <div class="relative">
          <button
            @click="openUser = !openUser"
            class="flex items-center gap-3 focus:outline-none"
          >
            <img
              src="https://i.pravatar.cc/100"
              class="w-9 h-9 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700"
            />

            <div class="hidden md:block text-left">
              <p
                class="text-sm font-medium text-slate-800 dark:text-slate-100 leading-tight"
              >
                Administrator
              </p>
              <p class="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
            </div>

            <i class="fa-solid fa-chevron-down text-xs text-slate-400"></i>
          </button>

          <!-- Dropdown -->
          <div
            v-if="openUser"
            class="absolute right-0 mt-3 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg transition-colors"
          >
            <NuxtLink
              to="/profile"
              class="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Profile
            </NuxtLink>

            <NuxtLink
              to="/settings"
              class="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Settings
            </NuxtLink>

            <div class="border-t border-slate-200 dark:border-slate-700"></div>

            <button
              class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
              @click="logOut"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
