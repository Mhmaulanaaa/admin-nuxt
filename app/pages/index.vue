<script setup>
const isLoggedIn = useCookie("isLoggedIn", {
  sameSite: "lax",
  path: "/",
});

const login = () => {
  isLoggedIn.value = "true";
  return navigateTo("/dashboard");
};

definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-base px-4 overflow-hidden">
    <div class="w-full max-w-md z-10">
      <!-- LOGO -->
      <div class="flex flex-col items-center mb-8">
        <div
          class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg ring-4 transition text-emerald-600"
          :style="{
            backgroundColor: 'rgb(var(--color-primary))',
            color: 'rgb(var(--color-surface))',
            ringColor: 'rgba(var(--color-primary), 0.3)',
          }"
        >
          <label class="text-4xl text-emerald-400">A</label>
        </div>
        <h1 class="mt-4 text-2xl font-bold text-base text-center">Admin System</h1>
        <p class="text-sm text-muted text-center">Secure administration panel</p>
      </div>

      <!-- CARD -->
      <div class="card relative overflow-hidden">
        <!-- Gradient accent line top -->
        <div
          class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-indigo-500"
        ></div>

        <div class="p-10 space-y-5">
          <h2 class="text-2xl font-bold text-base text-center">Sign In</h2>
          <p class="text-sm text-muted text-center">Enter your credentials to access</p>

          <form class="space-y-5">
            <!-- USERNAME -->
            <div>
              <label class="block text-sm font-medium text-base">Username / Email</label>
              <input
                type="text"
                placeholder="admin@company.com"
                class="input shadow-sm focus:ring-[rgb(var(--color-primary))] focus:ring-2 focus:border-[rgb(var(--color-primary))]"
              />
            </div>

            <!-- PASSWORD -->
            <div>
              <label class="block text-sm font-medium text-base">Password</label>
              <input type="password" placeholder="••••••••" class="input shadow-sm" />
            </div>

            <!-- BUTTON -->
            <button
              type="button"
              class="btn w-full transform transition duration-200 hover:scale-105 hover:shadow-lg shadow-sm btn-outline"
              @click="login"
            >
              <label class="text-base">Sign In</label>
            </button>
          </form>
        </div>
      </div>

      <!-- FOOTER -->
      <p class="mt-6 text-center text-xs text-muted">Authorized access only</p>
    </div>
  </div>
</template>
