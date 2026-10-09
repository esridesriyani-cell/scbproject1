# Esri Desriyani — Portfolio

Website portofolio personal modern untuk **Esri Desriyani**, Praktisi Pendidikan & Owner PT. Seribelajar Indonesia.
Dark, futuristik, dan elegan — dibangun dengan HTML, CSS, dan vanilla JavaScript (tanpa build step).

## ✨ Fitur (fase saat ini)

- **Navbar** sticky dengan efek glass saat scroll, scroll-spy, dan menu mobile.
- **Hero section** fullscreen: badge "available for opportunities", typewriter effect,
  foto profil placeholder dengan floating chips, dan tombol CTA.
- **About section**: biografi profesional, highlight pengalaman, dan animated statistics cards.
- Animated gradient background, glassmorphism, floating UI effects, dan smooth scroll reveal.
- Fully responsive: **mobile, tablet, desktop**.

> Project, skills, experience, testimonials, contact & footer akan ditambahkan pada fase berikutnya.

## 📁 Struktur Folder

```
scbproject1/
├── index.html          # Satu halaman (single-page scroll)
├── readme.md
├── assets/             # Gambar, resume, ikon
├── components/         # Catatan komponen reusable (markup pattern)
├── pages/              # Ruang untuk halaman tambahan di masa depan
├── css/
│   ├── base.css        # Design tokens, reset, background, typografi
│   ├── components.css  # UI reusable: glass, button, badge, navbar
│   ├── layout.css      # Layout section: hero, about
│   └── responsive.css  # Breakpoint mobile & tablet
└── js/
    └── main.js         # Typewriter, scroll reveal, nav, stat counters
```

## 🚀 Menjalankan

Tidak perlu build. Buka `index.html` langsung di browser, atau jalankan server statis:

```bash
# Python
python -m http.server 5500

# atau Node
npx serve .
```

Lalu buka `http://localhost:5500`.

## 🎨 Kustomisasi

- **Warna & tema**: ubah variabel di `:root` dalam `css/base.css`.
- **Foto profil**: ganti placeholder inisial di `.hero__photo-inner` (index.html) dengan `<img>`.
- **Resume**: letakkan file di `assets/resume.pdf`.

## 🛠️ Tech Stack

HTML5 · CSS3 (custom properties, grid, flexbox) · Vanilla JavaScript (IntersectionObserver)
Fonts: Sora + Space Grotesk.
