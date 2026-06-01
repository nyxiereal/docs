import sidebar from './sidebar.ts'
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  vite: {
    optimizeDeps: { include: ['@braintree/sanitize-url'] },
    resolve: {
      alias: {
        dayjs: 'dayjs/',
      },
    },
  },
  title: "Nyx's stuff",
  description: 'I write when I feel like it',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    markdown: {
      theme: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/!Index.md' },
      { text: 'Guides', link: '/guides/!Index.html' },
      { text: 'Notes', link: '/notes/!Index.md' },
      { text: 'Blog', link: '/blog/!Index.md' },
    ],
    sidebar,
    search: {
      provider: 'local'
    },
  },
})