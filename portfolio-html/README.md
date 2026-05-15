# 🌙 Portfolio — Rasyida Nur

Website portofolio pribadi dengan nuansa navy dan cream, dibangun dengan HTML, CSS, dan JavaScript murni.

## 🚀 Deploy ke GitHub Pages (gratis, tanpa server)

### Cara 1 — Upload langsung (paling mudah)

1. Buat repository baru di GitHub (misal: `Portofolio-v2`)
2. Klik **Add file → Upload files**
3. Upload semua file dari folder ini (termasuk folder `assets/`)
4. Klik **Commit changes**
5. Pergi ke **Settings → Pages**
6. Di bagian **Source**, pilih `main` branch → `/ (root)`
7. Klik **Save**
8. Website live di: `https://Marsmaru.github.io/Portofolio-v2/`

### Cara 2 — Via Git

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Marsmaru/Portofolio-v2.git
git push -u origin main
```
Lalu aktifkan GitHub Pages di Settings.

## 📁 Struktur File

```
portfolio-html/
├── index.html        ← Halaman utama (edit di sini)
├── README.md         ← File ini
└── assets/
    ├── profile.jpg   ← Foto kamu (taruh di sini!)
    └── README.md     ← Petunjuk gambar
```

## ✏️ Cara Kustomisasi

Buka `index.html` dan cari teks berikut untuk diganti:

- **Nama**: `Rasyida Nur`
- **Prodi/Jurusan**: `Mahasiswa Pendidikan Teknologi Informasi`
- **Bio**: cari `about-bio`
- **Email**: `rasyida@example.com`
- **Link sosmed**: cari `href="https://github.com/Marsmaru"`, dst.
- **Proyek**: cari `proj-card`

## 🖼️ Mengganti Foto

Taruh foto kamu di `assets/profile.jpg` — otomatis muncul di hero dan about section.
