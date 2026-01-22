import fs from 'node:fs';
import path from 'node:path';

export interface SitemapURL {
  loc: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function updateSitemap(distDir: string, urls: SitemapURL[]) {
  const sitemapPath = path.join(distDir, 'sitemap.xml');

  if (!fs.existsSync(sitemapPath)) {
    console.warn('⚠️ Sitemap not found at:', sitemapPath);
    return;
  }

  let sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const lastMod = new Date().toISOString();
  let addedCount = 0;

  const entries = urls.map(url => {
    // Check if URL is already in sitemap to avoid duplicates
    // Simple check: see if loc exists in content
    if (sitemapContent.includes(url.loc)) {
        return '';
    }

    addedCount++;
    return `
    <url>
        <loc>${url.loc}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>${url.changefreq || 'monthly'}</changefreq>
        <priority>${url.priority || 0.5}</priority>
    </url>`;
  }).join('');

  if (addedCount > 0) {
      sitemapContent = sitemapContent.replace('</urlset>', `${entries}\n</urlset>`);
      fs.writeFileSync(sitemapPath, sitemapContent);
      console.log(`✅ Added ${addedCount} entries to sitemap.xml`);
  } else {
      console.log('ℹ️ No new entries to add to sitemap.');
  }
}
