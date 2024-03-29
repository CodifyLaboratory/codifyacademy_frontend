import { writable } from 'svelte/store'
import s from './data/settings.json'

// holder of default SEO data
export const seo = writable({
  title: s.siteTitle,
  description: s.siteDescription,
  titleSuffix: s.siteTitleSuffix,
  image: {
    alt: s.siteImageAlt,
    src: s.siteImageSrc,
    width: s.siteImageWidth,
    height: s.siteImageHeight,
  },
  name: s.siteName,
  locale: s.siteLocale,
  ogType: s.ogType,
  twitterCard: s.twitterCard,
  twitterSite: s.twitterSite
})

export const language = writable('ru')

