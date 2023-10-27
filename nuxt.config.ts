// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
             api_url: process.env.SPORTLAUD_API_LINK
        }
    },
    modules: ['nuxt-icon', '@nuxt/image', '@pinia/nuxt'],
    devtools: {enabled: true},
    css: [
        '~/assets/scss/style.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "sass:math"; @import "@/assets/scss/setup/_all.scss";'
                }
            }
        }
    },
     image: {
        format: ['webp']
    },
})