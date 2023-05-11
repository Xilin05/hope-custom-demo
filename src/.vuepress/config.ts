import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Blog Demo',
      description: 'A blog demo for vuepress-theme-hope'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '博客演示',
      description: 'vuepress-theme-hope 的博客演示'
    }
  },

  theme,

  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    '@theme-hope/components/HomePage': path.resolve(
      __dirname,
      './components/home-page.vue'
    ),
    '@theme-hope/components/BlogHero': path.resolve(
      __dirname,
      './components/blog-hero.vue'
    ),
    '@theme-hope/components/PageFooter': path.resolve(
      __dirname,
      './components/page-footer.vue'
    )
  }

  // Enable it with pwa
  // shouldPrefetch: false,
})
