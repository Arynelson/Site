# Portfolio Setup Instructions

## 🚀 Deployment Checklist

Before deploying your portfolio to production, complete these steps:

### 1. Configure Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website
3. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
4. In `index.html` (lines 34-44), uncomment the Google Analytics code
5. Replace `G-XXXXXXXXXX` with your actual Measurement ID

```html
<!-- Before -->
<!-- TODO: Replace G-XXXXXXXXXX with your actual Google Analytics ID -->
<!-- Uncomment when ready to use:
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
...

<!-- After -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ACTUAL-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR-ACTUAL-ID');
</script>
```

### 2. Update URLs in Meta Tags

In `index.html` (lines 14-27), replace `https://aryhauffe.com/` with your actual domain:

```html
<!-- Open Graph / Facebook -->
<meta property="og:url" content="https://YOUR-ACTUAL-DOMAIN.com/" />
<meta property="og:image" content="https://YOUR-ACTUAL-DOMAIN.com/assets/images/homepic.png" />

<!-- Twitter -->
<meta name="twitter:url" content="https://YOUR-ACTUAL-DOMAIN.com/" />
<meta name="twitter:image" content="https://YOUR-ACTUAL-DOMAIN.com/assets/images/homepic.png" />

<!-- Canonical -->
<link rel="canonical" href="https://YOUR-ACTUAL-DOMAIN.com/" />
```

### 3. Create OG Image (Optional but Recommended)

For better social media sharing:

1. Create a 1200x630px image with your branding
2. Save it as `assets/images/og-image.png`
3. Update meta tags to point to this image instead of `homepic.png`

### 4. Test Before Deployment

**Local Testing:**
```bash
# If using a simple HTTP server
python -m http.server 8000
# or
npx serve .
```

**Test Checklist:**
- [ ] All navigation links work
- [ ] All project images load
- [ ] All external links (GitHub, LinkedIn, Live Demos) work
- [ ] CV download button works
- [ ] Contact information is correct
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Smooth scrolling works
- [ ] CTA buttons work

### 5. SEO Testing Tools

After deployment, test your site with:

1. **Open Graph Debugger**
   - Facebook: https://developers.facebook.com/tools/debug/
   - LinkedIn: https://www.linkedin.com/post-inspector/

2. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator

3. **Google Search Console**
   - Add your site and submit sitemap

### 6. Performance Optimization

**Optional but Recommended:**

1. **Optimize Images**
   ```bash
   # Use tools like:
   # - TinyPNG (https://tinypng.com/)
   # - Squoosh (https://squoosh.app/)
   # Convert to WebP format for better performance
   ```

2. **Add Sitemap.xml**
   Create a `sitemap.xml` in root directory:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://YOUR-DOMAIN.com/</loc>
       <lastmod>2024-11-26</lastmod>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

3. **Add robots.txt**
   Create a `robots.txt` in root directory:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
   ```

### 7. Deployment Platforms

**Recommended Platforms:**

1. **Vercel (Easiest - Recommended)**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Netlify**
   - Drag and drop the folder to Netlify
   - Or connect GitHub repo

3. **GitHub Pages**
   - Push to GitHub
   - Enable GitHub Pages in repository settings

4. **Custom Server**
   - Upload files via FTP/SFTP
   - Point domain to server

---

## 📊 Post-Deployment

### Monitor Your Portfolio

1. **Google Analytics** - Track visitors
2. **Google Search Console** - Monitor SEO performance
3. **Uptime Monitoring** - Use services like UptimeRobot

### Update Content Regularly

- Update projects when you complete new ones
- Keep skills section current
- Update CV periodically
- Add testimonials when you get them

---

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Check file names match exactly (case-sensitive)

### Analytics Not Working
- Verify Measurement ID is correct
- Check code is uncommented
- Wait 24-48 hours for data to appear
- Use Real-Time view in Google Analytics to test

### Social Media Preview Not Showing
- Use debugging tools mentioned above
- Clear cache and re-share
- Verify image URLs are absolute (not relative)
- Check image dimensions (1200x630px recommended)

---

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Verify all file paths are correct
3. Test in incognito/private mode
4. Clear browser cache

---

**Last Updated:** November 26, 2024
**Version:** 2.0
