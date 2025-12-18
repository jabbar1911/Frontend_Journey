# Day 67 – Semantic HTML & CSS with Flags Project

## 📌 What is This Project?
A multi-page website where the main dashboard (index.html) links to three different country flags (India, Italy, Andorra). Each flag is built with HTML divs and CSS styling, and all pages share the same stylesheet for consistency.

## 🎯 What I Built
- **index.html** - Main dashboard with semantic HTML and text styling examples
- **india.html** - Indian flag with horizontal stripes and animated Ashoka Chakra
- **italy.html** - Italian flag with vertical stripes
- **andorra.html** - Andorra flag with coat of arms in the center
- **style.css** - Shared stylesheet for all pages

## 📁 File Organization
```
day-67/
├── index.html      (Main page with links to flags)
├── india.html      (Indian flag)
├── italy.html      (Italian flag)
├── andorra.html    (Andorra flag)
├── style.css       (Shared CSS for all pages)
└── README.md       (This file)
```

## 💡 What I Learned

**Why Multiple Pages?**
- Real websites split content into separate pages (Home, About, Contact, etc.)
- Easier to organize and maintain
- Better user experience with clear navigation

**Why Shared CSS?**
- Write CSS once, use on all pages
- Update the stylesheet once = update entire website
- Saves time and prevents mistakes
- Professional and consistent look

**Key Skills:**
- Semantic HTML tags (`<header>`, `<section>`, `<article>`, `<footer>`)
- CSS text styling (text-transform, text-decoration, text-shadow)
- Responsive layouts with viewport units (vh, vw)
- Flexbox and Float layouts for flag designs
- Linking pages with relative paths
- Navigation menus between pages

## 🔗 How It Works
```
User visits index.html
    ↓
Clicks on flag links
    ↓
Views india.html, italy.html, or andorra.html
    ↓
Each page uses the same style.css
    ↓
Consistent look across all pages
```

## 📝 CSS Techniques Used

**Text Effects:**
- `.upper` - Transforms text to UPPERCASE
- `.decor` - Adds underline decoration
- `.shadow` - Adds shadow effect to text

**Flag Designs:**
- Full-screen layouts using viewport height (100vh)
- Flexbox to center the Ashoka Chakra in Indian flag
- Horizontal and vertical stripe patterns
- Color use: Saffron, White, Green (India), Green, White, Red (Italy), Blue, Yellow, Red (Andorra)

## 🚀 How to Use
1. Open `index.html` in your browser
2. Click the flag links to view each country flag
3. All pages use the same `style.css` file
4. Try changing colors or text effects in the CSS file

## ✨ Key Takeaways

✅ Shared CSS file eliminates code repetition  
✅ Multiple pages organized with proper navigation  
✅ Semantic HTML makes code meaningful  
✅ Relative file paths link pages together  
✅ Responsive units (vh, vw) adapt to any screen size  
✅ Professional websites combine multiple techniques  


---


