// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['nuxt-icon', '@nuxt/image'],
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