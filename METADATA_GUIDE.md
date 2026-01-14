# Meta Information Kahan Dikhega - Complete Guide

## 📍 Metadata Kahan Dikhega?

### 1. **Browser Tab Title**
- Har page ka title browser tab mein dikhega
- Example: "STARSYNX PVT LTD | Digital, AI & IT Solutions Company"

### 2. **HTML Head Section**
Next.js automatically metadata ko HTML `<head>` section mein add karta hai:

```html
<head>
  <title>STARSYNX PVT LTD | Digital, AI & IT Solutions Company</title>
  <meta name="description" content="STARSYNX delivers web, AI, ERP, SEO and digital marketing services worldwide. Get a free quote today." />
  <meta name="keywords" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  <meta name="twitter:card" content="summary_large_image" />
  <!-- etc. -->
</head>
```

### 3. **Google Search Results**
Jab aapki website Google mein index ho jayegi, to:
- **Title**: Search results mein blue link ke upar
- **Description**: Title ke neeche gray text

### 4. **Social Media Sharing**
- **Facebook/LinkedIn**: OpenGraph tags use hote hain
- **Twitter/X**: Twitter card tags use hote hain
- Jab koi aapki website share karega, to title aur description automatically show hoga

---

## 🔍 Metadata Kaise Check Karein?

### Method 1: Browser DevTools (Easiest)
1. Website open karein (e.g., `http://localhost:3000`)
2. **Right-click** karein → **Inspect** ya **F12** press karein
3. **Elements** tab mein jao
4. `<head>` section expand karein
5. Wahan sab meta tags dikhenge

### Method 2: View Page Source
1. Website open karein
2. **Right-click** → **View Page Source** ya **Ctrl+U**
3. `<head>` section mein sab metadata dikhega

### Method 3: Online SEO Tools
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

### Method 4: Browser Extension
- **SEO META in 1 CLICK** (Chrome Extension)
- **Meta SEO Inspector**

---

## 📄 Current Metadata Files Location

### Main Pages:
- **Home**: `src/app/layout.tsx` (line 15-38)
- **About**: `src/app/about/page.tsx` (line 4-25)
- **Contact**: `src/app/contact/page.tsx` (line 4-25)
- **Services**: `src/app/services/page.tsx` (line 4-27)
- **Privacy**: `src/app/privacy/page.tsx` (line 4-24)
- **Terms**: `src/app/terms/page.tsx` (line 4-24)

### Service Detail Pages:
- **Dynamic**: `src/app/services/[slug]/page.tsx` (line 1196-1291)
  - Har service ka apna metadata automatically generate hota hai

---

## ✅ Verification Steps

### Step 1: Development Server Start Karein
```bash
npm run dev
```

### Step 2: Browser Mein Open Karein
```
http://localhost:3000
```

### Step 3: DevTools Mein Check Karein
1. **F12** press karein
2. **Elements** tab
3. `<head>` section expand karein
4. Dekho:
   - `<title>` tag
   - `<meta name="description">`
   - `<meta property="og:title">`
   - `<meta name="twitter:card">`

### Step 4: Different Pages Check Karein
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/services` - Services page
- `/services/web-development` - Service detail page

Har page ka apna unique metadata hoga!

---

## 🎯 Metadata Kya Kya Include Karta Hai?

1. **Title** - Browser tab aur search results mein
2. **Description** - Search results mein snippet
3. **Keywords** - SEO ke liye (optional, but included)
4. **OpenGraph** - Facebook/LinkedIn sharing ke liye
5. **Twitter Card** - Twitter/X sharing ke liye
6. **Authors** - Content creator info
7. **URL** - Canonical URL

---

## 💡 Important Notes

1. **Next.js Automatic**: Next.js automatically metadata ko HTML `<head>` mein inject karta hai
2. **No Manual Work**: Aapko manually `<head>` mein kuch add karne ki zarurat nahi
3. **Page-Specific**: Har page ka apna metadata hota hai
4. **SEO Optimized**: Sab metadata SEO-friendly format mein hai

---

## 🚀 Production Mein Check Karein

Jab website production mein deploy ho jayegi:

1. **Google Search Console** mein add karein
2. **Sitemap** submit karein
3. **Rich Results Test** se verify karein
4. **Social Media Debuggers** se check karein

---

## 📞 Need Help?

Agar metadata properly show nahi ho raha:
1. Browser cache clear karein
2. Hard refresh karein (Ctrl+Shift+R)
3. DevTools mein Network tab check karein
4. Console mein errors check karein
