import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lflauncher.org'
  const locales = ['en', 'vi', 'es', 'ru', 'ar']
  
  const paths = [
    '',
    '/about',
    '/download',
    '/wiki/overview',
    '/wiki/getting-started/installing-lflauncher',
    '/wiki/getting-started/installing-java',
    '/wiki/getting-started/creating-instance',
    '/wiki/overview/feedback-and-bugs',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const path of paths) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.8,
      })
    }
  }

  return sitemapEntries
}
