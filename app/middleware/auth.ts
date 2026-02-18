export default defineNuxtRouteMiddleware((to) => {
    const isLoggedIn = useCookie("isLoggedIn");

    const publicPages = ["/"];

    if (!isLoggedIn.value && !publicPages.includes(to.path)) {
        return navigateTo("/");
    }

    if (isLoggedIn.value && to.path === "/") {
        return navigateTo("/dashboard");
    }
});
