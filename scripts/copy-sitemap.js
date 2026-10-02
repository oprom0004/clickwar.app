import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const sitemap0 = path.join(distDir, 'sitemap-0.xml');
const sitemap = path.join(distDir, 'sitemap.xml');

if (fs.existsSync(sitemap0)) {
  fs.copyFileSync(sitemap0, sitemap);
  console.log('✅ Successfully created dist/sitemap.xml from sitemap-0.xml');
} else {
  console.log('⚠️ sitemap-0.xml not found, skipping copy');
}
