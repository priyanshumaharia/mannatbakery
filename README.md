# 🥐 Mannat Bakery Website

A professional, fully responsive bakery website.

---

## 📁 Project Structure

```
mannat-bakery/
│
├── index.html              ← Main website file (open this in browser)
│
├── css/
│   └── style.css           ← All styles (edit colors, fonts, spacing here)
│
├── js/
│   └── main.js             ← Animations, tabs, form, slider logic
│
└── images/                 ← ✅ PUT YOUR PHOTOS HERE
    ├── cakes/              ← Cake photos (chocolate-cake.jpg, strawberry-cake.jpg, etc.)
    ├── pastries/           ← Pastry photos (croissant.jpg, eclair.jpg, etc.)
    ├── breads/             ← Bread photos (sourdough.jpg, focaccia.jpg, etc.)
    ├── cookies/            ← Cookie photos (choco-chip.jpg, oatmeal.jpg, etc.)
    ├── gallery/            ← Gallery photos (gallery-1.jpg ... gallery-6.jpg)
    └── team/               ← Team/owner photos (owner.jpg, reviewer1.jpg, etc.)
```

---

## 🖼️ How to Add Your Own Photos

1. Put your photos inside the matching folder under `images/`
2. Name them exactly as shown below OR update the `src=""` in `index.html`

### Image File Names Expected:

| Folder         | File Names                                                  |
|----------------|-------------------------------------------------------------|
| `images/cakes/`    | `chocolate-cake.jpg`, `strawberry-cake.jpg`, `red-velvet.jpg`, `wedding-cake.jpg` |
| `images/pastries/` | `croissant.jpg`, `eclair.jpg`, `danish.jpg`, `macaron.jpg`  |
| `images/breads/`   | `sourdough.jpg`, `focaccia.jpg`, `multigrain.jpg`, `bagel.jpg` |
| `images/cookies/`  | `choco-chip.jpg`, `oatmeal.jpg`, `shortbread.jpg`, `almond.jpg` |
| `images/gallery/`  | `gallery-1.jpg` to `gallery-6.jpg`                          |
| `images/team/`     | `owner.jpg`, `reviewer1.jpg`, `reviewer2.jpg`, `reviewer3.jpg` |

> **Note:** If you don't add photos, the website automatically loads beautiful placeholder images from the internet. Add your own photos to personalize it!

---

## ✏️ Easy Customizations in `index.html`

| What to Change          | Where to Find It              |
|-------------------------|-------------------------------|
| Bakery phone number     | Search `+91 98765 43210`      |
| Email address           | Search `hello@mannatbakery.com` |
| Address                 | Search `123 Baker's Lane`     |
| Opening hours           | Search `Mon–Sat: 8:00 AM`     |
| Menu prices             | Find `₹ 850` etc.             |
| WhatsApp link           | Find `wa.me/919876543210`     |
| Social links            | Find `social-btn` buttons     |
| Google Maps embed       | Add inside `.contact-info`    |

---

## 🎨 Easy Customizations in `css/style.css`

At the top of style.css, change these color variables:

```css
:root {
  --rose:  #C8956C;   /* Main brand color — change to any color */
  --choco: #2C1810;   /* Dark background color */
  --cream: #FFF8F0;   /* Page background */
  --blush: #F5D5C0;   /* Accent light color */
  --gold:  #D4A96A;   /* Stars and highlights */
}
```

---

## 🚀 How to Run

1. Open VS Code
2. Open the `mannat-bakery` folder
3. Install the **Live Server** extension in VS Code
4. Right-click `index.html` → **"Open with Live Server"**
5. Website opens in your browser at `http://localhost:5500`

---

## 📱 Features

- ✅ Fully Responsive (Mobile, Tablet, Desktop)
- ✅ Animated Hero with floating particles
- ✅ Sticky navbar with scroll effect
- ✅ Menu tabs (Cakes, Pastries, Breads, Cookies)
- ✅ Scrolling gallery with hover effects
- ✅ Auto-rotating testimonial slider
- ✅ Contact form with success message
- ✅ "Add to Cart" toast notification
- ✅ Marquee announcement strip
- ✅ Smooth scroll animations
- ✅ WhatsApp & Call-to-Order buttons
- ✅ Newsletter subscription section

---

Made with ❤️ for Mannat Bakery
