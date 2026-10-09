# Components

Pola markup komponen reusable yang dipakai di `index.html`. Karena project ini
murni HTML/CSS/JS tanpa framework, komponen didokumentasikan di sini sebagai
referensi agar konsisten saat ditambahkan ke halaman.

## Glass Card
```html
<article class="glass">...</article>
```
Styling: `.glass` di `css/components.css` (blur, border, shadow, hover transition).

## Button
```html
<a class="btn btn--primary">Primary</a>
<a class="btn btn--ghost">Ghost</a>
```

## Badge
```html
<span class="badge"><span class="badge__dot"></span> Teks</span>
```

## Stat Card (animated counter)
```html
<article class="glass stat">
  <span class="stat__num" data-count="40" data-suffix="+">0</span>
  <span class="stat__label">Label</span>
</article>
```
Counter dianimasikan oleh `animateCount()` di `js/main.js` saat masuk viewport.
