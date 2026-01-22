import puppeteer from 'puppeteer';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';
import { updateSitemap } from './utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

async function generate() {
  console.log('Starting PDF generation...');

  // Start Vite Preview server
  const server = await preview({
    root: path.resolve(__dirname, '..'),
    preview: { port: 4173, open: false }
  });

  const serverUrl = server.resolvedUrls?.local[0] ?? 'http://localhost:4173';
  console.log(`Server running at ${serverUrl}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // Safer for CI environments
  });

  const page = await browser.newPage();

  const targets = [
    { path: '/en', file: 'resume-en.pdf' },
    { path: '/de', file: 'resume-de.pdf' }
  ];

  for (const t of targets) {
    console.log(`Generating ${t.file}...`);
    const url = `${serverUrl}${t.path.substring(1)}`; // Remove leading slash if needed or just path
    // actually urljoin is safer but explicit concatenation works here: serverUrl ends with /?
    // resolvedUrls.local includes port. e.g. http://localhost:4173/

    await page.goto(`${serverUrl}${t.path.substring(1)}`, { waitUntil: 'networkidle0' });

    // Save to DIST (for deployment)
    await page.pdf({
      path: path.join(distDir, t.file),
      format: 'A4',
      printBackground: true
    });
  }

  await browser.close();
  server.httpServer.close();
  console.log('✅ PDFs generated in dist/.');

  // Update Sitemap
  // Update Sitemap
  updateSitemap(distDir, targets.map(t => ({
    loc: `https://artemkloko.github.io/${t.file}`,
    changefreq: 'monthly',
    priority: 0.8
  })));
  process.exit(0);
}

generate().catch(err => {
  console.error('❌ Error generating PDFs:', err);
  process.exit(1);
});
