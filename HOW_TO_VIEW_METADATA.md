# Website Par Metadata Kaise Dekhein - Step by Step Guide

## 🎯 Method 1: Browser DevTools (Sabse Aasan)

### Steps:
1. **Website Open Karein**
   ```
   http://localhost:3000
   ```
   (Agar development server chal raha hai)

2. **DevTools Open Karein**
   - **F12** press karein
   - Ya **Right-click** → **Inspect**
   - Ya **Ctrl+Shift+I** (Windows) / **Cmd+Option+I** (Mac)

3. **Elements Tab Mein Jao**
   - DevTools open hote hi **Elements** tab automatically open hota hai

4. **HTML Structure Dekhein**
   - Top par `<html>` tag dikhega
   - Uske andar `<head>` section expand karein
   - Wahan sab metadata dikhega!

### Kya Dikhega:
```html
<head>
  <title>STARSYNX PVT LTD | Digital, AI & IT Solutions Company</title>
  <meta name="description" content="STARSYNX delivers web, AI, ERP, SEO and digital marketing services worldwide. Get a free quote today." />
  <meta property="og:title" content="STARSYNX PVT LTD | Digital, AI & IT Solutions Company" />
  <meta property="og:description" content="STARSYNX delivers web, AI, ERP, SEO and digital marketing services worldwide. Get a free quote today." />
  <meta property="og:url" content="https://www.starsynx.com" />
  <!-- etc. -->
</head>
```

---

## 🎯 Method 2: View Page Source

### Steps:
1. **Website Open Karein**
2. **Right-click** karein → **View Page Source**
   - Ya **Ctrl+U** (Windows) / **Cmd+Option+U** (Mac)
3. **Page Source Open Hogi**
4. **Ctrl+F** press karein
5. **Search Karein**: `<head>` ya `<title>`
6. **Wahan Sab Metadata Dikhega**

---

## 🎯 Method 3: Browser Tab (Quick Check)

- **Browser Tab Par Title Dikhega**
- Ye hi `<title>` tag hai jo metadata ka part hai

---

## 📱 Different Pages Check Karein

### Home Page:
```
http://localhost:3000
```
Metadata: `src/app/layout.tsx` se aayega

### About Page:
```
http://localhost:3000/about
```
Metadata: `src/app/about/page.tsx` se aayega

### Contact Page:
```
http://localhost:3000/contact
```
Metadata: `src/app/contact/page.tsx` se aayega

### Services Page:
```
http://localhost:3000/services
```
Metadata: `src/app/services/page.tsx` se aayega

---

## 🔍 Visual Guide

### Step 1: Website Open
```
Browser → http://localhost:3000
```

### Step 2: DevTools Open
```
Press F12
```

### Step 3: Elements Tab
```
DevTools → Elements Tab (already open)
```

### Step 4: Head Section
```
<html>
  └── <head>  ← Yahan click karein to expand
      ├── <title>...</title>
      ├── <meta name="description">...</meta>
      ├── <meta property="og:title">...</meta>
      └── ... (sab metadata)
```

---

## ✅ Verification Checklist

- [ ] DevTools open ho gaya
- [ ] Elements tab visible hai
- [ ] `<head>` section expand kiya
- [ ] `<title>` tag dikh raha hai
- [ ] `<meta name="description">` dikh raha hai
- [ ] `<meta property="og:title">` dikh raha hai
- [ ] Different pages par different metadata dikh raha hai

---

## 💡 Tips

1. **Cache Clear Karein**: Agar metadata update nahi dikh raha
   - **Ctrl+Shift+R** (Hard Refresh)
   - Ya DevTools → Network tab → "Disable cache" check karein

2. **Network Tab**: Agar metadata load ho raha hai ya nahi check karein
   - DevTools → Network tab
   - Page refresh karein
   - HTML file check karein

3. **Console Tab**: Agar koi error hai to wahan dikhega
   - DevTools → Console tab

---

## 🚀 Quick Test

1. Terminal mein:
   ```bash
   npm run dev
   ```

2. Browser mein:
   ```
   http://localhost:3000
   ```

3. **F12** press karein

4. **Elements** tab → `<head>` expand karein

5. **Metadata Dekhein!** ✅

---

## 📞 Problem?

Agar metadata nahi dikh raha:
1. Development server chal raha hai? (`npm run dev`)
2. Browser cache clear kiya? (Ctrl+Shift+R)
3. DevTools properly open hua? (F12)
4. `<head>` section expand kiya?
