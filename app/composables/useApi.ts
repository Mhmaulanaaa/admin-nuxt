export const useApi = () => {
    const config = useRuntimeConfig()

    return $fetch.create({
        baseURL: config.public.apiBase,
        onRequest({ options }) {
            const token = useCookie("token").value
            if (token) {
                options.headers = {
                    Authorization: `Bearer ${token}`,
                }
            }
        },
    })
}
