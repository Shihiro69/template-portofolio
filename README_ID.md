# <img src="assets/icons/favicon.svg" alt="Logo" width="28"> Template Portofolio

> **Template portofolio siap produksi, tanpa dependensi.**
> Tanpa build tools. Tanpa framework. Hanya HTML, CSS, dan JavaScript.

<p align="center">
  <em>✨ Tema gelap · Responsif penuh · 100% dapat dikustomisasi · WCAG AA · Navigasi keyboard · 10 bagian siap pakai ✨</em>
</p>

<p align="center">
  <a href="#mulai-cepat"><strong>Mulai Cepat</strong></a> →
  <a href="#panduan-pemilik-portofolio"><strong>Kustomisasi</strong></a> →
  <a href="#deployment">Deploy</a> →
  <a href="https://github.com/alexrivera/template-portofolio">Repositori</a>
</p>

<br>

| | |
|---|---|
| **Performa** | 95+ Lighthouse · Nol reflows · DocumentFragment batching |
| **Aksesibilitas** | WCAG 2.1 AA · Navigasi keyboard penuh · Dukungan screen reader · `prefers-reduced-motion` |
| **Responsif** | 360px → 1920px · 7 breakpoint · Mobile-first |
| **SEO** | JSON-LD · Open Graph · Twitter Card · Sitemap · URL Kanonis |
| **Browser** | Chrome · Firefox · Safari · Edge · Semua browser modern |
| **Dependensi** | **Nol.** Tidak perlu npm, Node.js, atau build step |

<br>

---

# Mengapa Template Ini?

### Masalahnya

Kebanyakan template portofolio mengharuskan Anda mengerti React, Next.js, Webpack, atau build tool. Jika Anda hanya ingin menampilkan karya Anda, seharusnya Anda tidak perlu belajar framework terlebih dahulu.

### Solusinya

**Anda hanya mengedit SATU file.** Semuanya — nama, keahlian, proyek, warna, font — ada dalam satu file bernama `data.js`.

- Tidak perlu mengedit HTML.
- Tidak perlu mengedit CSS.
- Tidak perlu mengedit JavaScript.
- Tidak perlu perintah terminal (setelah download).
- Tidak perlu npm install.

### Untuk Siapa Ini?

| Pengguna | Yang Mereka Lakukan |
|----------|-------------------|
| **Pemilik Portofolio** (90%) | Edit `data.js` untuk kustomisasi konten, warna, font, bagian |
| **Developer** (10%) | Memperluas dengan bagian baru, komponen baru, animasi |

### Filosofi Desain

| Prinsip | Artinya |
|---------|---------|
| **Sumber Data Tunggal** | Semua konten di `data.js` — tidak ada yang hardcoded di tempat lain |
| **Pemisahan Tanggung Jawab** | HTML (struktur), CSS (gaya), JS (perilaku) — tidak pernah dicampur |
| **Peningkatan Progresif** | Bekerja tanpa JS, lebih baik dengan JS, terbaik dengan API modern |
| **Tanpa Keajaiban** | Semuanya eksplisit — tidak ada abstraksi tersembunyi |
| **Mudah Copy-Paste** | Tambah bagian baru cukup copy-paste 20 baris |

<br>

---

# Mulai Cepat

### Opsi 1: GitHub (Direkomendasikan)

1. Klik tombol hijau **"Use this template"** di bagian atas repositori ini.
2. Pilih **"Create a new repository"**.
3. Beri nama `<username-anda>.github.io` (format persis seperti itu).
4. Clone repositori baru Anda:

```bash
git clone https://github.com/<username-anda>/<username-anda>.github.io.git
cd <username-anda>.github.io
```

5. Buka [data.js](data.js) dan mulai kustomisasi!

6. Push perubahan Anda:

```bash
git add data.js
git commit -m "Personalisasi portofolio"
git push origin main
```

7. Kunjungi `https://<username-anda>.github.io` — portofolio Anda sudah online!

### Opsi 2: Download ZIP

1. Klik tombol hijau **"Code"** → **"Download ZIP"**
2. Ekstrak ZIP ke folder mana pun di komputer Anda.
3. Klik dua kali `index.html` untuk melihatnya di browser.
4. Buka `data.js` di editor teks apa pun (Notepad, VS Code, dll.).
5. Kustomisasi, simpan, dan refresh browser Anda.

### Opsi 3: Edit Langsung di Browser (Tanpa Download)

1. Kunjungi repositori di GitHub.
2. Buka `data.js`.
3. Klik ikon **✏️** (pensil).
4. Lakukan perubahan Anda.
5. Klik **"Commit changes"**.

Portofolio Anda akan diperbarui dalam ~2 menit.

<br>

---

# Struktur Proyek

```
template-portofolio/
│
├── 📄 index.html                  # Satu-satunya file HTML — JANGAN DIEDIT (kecuali menambah bagian)
├── 📄 data.js                     # 🌟 SATU-SATUNYA FILE YANG PERLU ANDA EDIT
│
├── 📁 css/                        # Semua stylesheet
│   ├── main.css                   #   Manifes CSS (mengimpor semua file CSS lainnya)
│   └── base/                      #   Token desain, reset, tipografi, responsif, a11y
│   └── layout/                    #   Header, footer, kontainer bagian
│   └── components/                #   Gaya kartu, tombol, badge, chip, tag
│   └── sections/                  #   Satu stylesheet per tipe bagian
│
├── 📁 js/                         # Semua JavaScript
│   ├── main.js                    #   Titik masuk aplikasi
│   ├── core/                      #   Kontroler aplikasi, event bus
│   ├── utils/                     #   Pembantu DOM, sanitizer, utilitas a11y
│   ├── components/                #   Factory komponen UI yang dapat digunakan ulang
│   └── sections/                  #   Satu renderer per tipe bagian
│
├── 📁 assets/                     # Gambar, ikon, dokumen
│   └── icons/                     #   Favicon, gambar Open Graph
│
├── 📄 sitemap.xml                 # Sitemap SEO
├── 📄 robots.txt                  # Aturan mesin pencari
├── 📄 site.webmanifest            # Manifes PWA
└── 📄 PROJECT_BLUEPRINT.md        # Spesifikasi arsitektur (hanya untuk developer)
```

### Folder: `data.js`

| | |
|---|---|
| **Tujuan** | Menyimpan SEMUANYA: nama, keahlian, proyek, warna, tautan sosial, navigasi. |
| **Pemilik Portofolio** | ✅ **YA — ini satu-satunya file yang Anda edit.** |
| **Developer** | Jarang — hanya saat menambah *tipe* bagian baru. |

> [!TIP]
> Jika Anda hanya membuka satu file, buka `data.js`.

### Folder: `index.html`

| | |
|---|---|
| **Tujuan** | Struktur halaman — kontainer `<section>` kosong. Konten diisi oleh JavaScript. |
| **Pemilik Portofolio** | ❌ **JANGAN PERNAH.** Kecuali Anda menambah bagian yang benar-benar baru. |
| **Developer** | Hanya saat menambah tipe bagian baru. |

> [!WARNING]
> Jangan mengetik nama, bio, atau konten apa pun ke dalam `index.html`. Semua konten berasal dari `data.js`.

### Folder: `css/`

| | |
|---|---|
| **Tujuan** | Semua gaya visual — warna, font, spasi, tata letak, breakpoint responsif. |
| **Pemilik Portofolio** | ❌ **JANGAN PERNAH.** Warna dan font dikonfigurasi di `data.js`. |
| **Developer** | Saat menambah gaya bagian baru atau varian komponen baru. |

### Folder: `js/`

| | |
|---|---|
| **Tujuan** | Semua logika aplikasi — rendering, navigasi, scroll spy, factory bagian. |
| **Pemilik Portofolio** | ❌ **JANGAN PERNAH.** Semuanya otomatis. |
| **Developer** | Saat membuat bagian, komponen, atau fitur baru. |

### Folder: `assets/`

| | |
|---|---|
| **Tujuan** | File statis — foto profil, PDF resume, favicon. |
| **Pemilik Portofolio** | ✅ **YA.** Ganti gambar dengan milik Anda sendiri. |
| **Developer** | Tidak — kecuali menambah tipe aset baru. |

<br>

---

# Cara Kerja Proyek Ini

> [!NOTE]
> Memahami ini opsional. Jika Anda Pemilik Portofolio, lewati ke [Panduan Pemilik Portofolio](#panduan-pemilik-portofolio).

### Alur Data

```
┌──────────────┐
│   data.js    │  ← Anda mengedit ini
│  (semua      │
│   konten)    │
└──────┬───────┘
       │  Objek portfolioData dibaca oleh...
       ▼
┌──────────────┐
│   app.js     │  ← Kontroler (tidak pernah Anda sentuh)
│  (membaca    │
│   bagian)    │
└──────┬───────┘
       │  Setiap bagian dikirim ke...
       ▼
┌──────────────┐
│    section-  │  ← Registry (memetakan "hero" → renderHero, dll.)
│   registry   │
└──────┬───────┘
       │  Fungsi renderer yang benar dipanggil...
       ▼
┌──────────────┐
│  Renderer    │  ← Contoh: renderExperience()
│  Bagian      │     Membangun elemen DOM dari data
└──────┬───────┘
       │  Renderer bagian menggunakan komponen yang...
       ▼
┌──────────────┐
│  Komponen    │  ← createCard(), createBadge(), dll.
│  (factory)   │     Fungsi murni yang menghasilkan elemen HTML
└──────┬───────┘
       │  Elemen dimasukkan ke dalam...
       ▼
┌──────────────┐
│   Kontainer  │  ← Kontainer <section> HTML kosong
│   <section>  │     (dari index.html)
│   kosong     │
└──────┬───────┘
       │  Browser merender...
       ▼
┌──────────────┐
│   🖥️ Portofolio│
│   Anda       │  ← Terlihat oleh dunia
└──────────────┘
```

### Saya edit `data.js` → semuanya otomatis diperbarui. Sesederhana itu.

<br>

---

# Panduan Pemilik Portofolio

Ini adalah bagian untuk orang yang ingin mengkustomisasi portofolio dengan cepat. **Anda hanya perlu mengedit satu file:** `data.js`.

Buka `data.js` di editor teks apa pun. Setiap bagian di bawah ini menunjukkan persis apa yang harus diubah.

> [!IMPORTANT]
> **Sebelum mengedit:** Buat salinan `data.js` sebagai cadangan. Beri nama `data-backup.js`.
> Jika terjadi kesalahan, pulihkan cadangan Anda.

---

## 🎨 Identitas Anda

### Mengubah Nama

**Lokasi:** `data.js` → blok `meta` → `author`

```diff
  meta: {
-   author: "Alex Rivera",
+   author: "Budi Santoso",
  }
```

**Hasil:** Nama Anda muncul di tab browser, metadata JSON-LD, dan inisial logo.

**Juga perbarui:** `meta.title` (muncul di tab browser dan hasil pencarian):

```diff
  meta: {
-   title: "Alex Rivera — Front-End Engineer & UI Architect",
+   title: "Budi Santoso — UI/UX Designer",
  }
```

> [!TIP]
> Jaga judul di bawah 60 karakter agar tidak terpotong di hasil pencarian Google.

---

### Mengubah Peran / Tagline

**Lokasi:** `data.js` → `sections` → cari `"type": "hero"` → `data.role`

```diff
  {
    type: "hero",
    heading: "Hai, Saya Alex",
    data: {
-     role: "Front-End Engineer & UI Architect",
+     role: "UI/UX Designer & Peneliti",
-     tagline: "Saya menciptakan antarmuka yang aksesibel dan scalable.",
+     tagline: "Saya mendesain pengalaman yang disukai pengguna.",
    }
  }
```

---

### Mengubah Bio / Teks Tentang

**Lokasi:** `data.js` → `sections` → cari `"type": "about"` → `data.description`

```diff
  {
    type: "about",
    data: {
-     description: [
-       "Saya seorang front-end engineer dengan pengalaman 8+ tahun...",
-       "Saat ini di TechCorp Finance, memimpin design system...",
-     ],
+     description: [
+       "Saya seorang UI/UX designer yang bersemangat membuat teknologi aksesibel.",
+       "Saya memiliki 6 tahun pengalaman mendesain untuk kesehatan, pendidikan, dan fintech.",
+     ],
    }
  }
```

> [!NOTE]
> `description` adalah **array** paragraf. Setiap string dalam array menjadi paragraf terpisah.
>
> ```javascript
> description: [
>   "Paragraf pertama.",   // ← menjadi <p>Paragraf pertama.</p>
>   "Paragraf kedua.",     // ← menjadi <p>Paragraf kedua.</p>
> ]
> ```

---

### Mengubah Foto Profil

**Lokasi:** `data.js` → `sections` → cari `"type": "about"` → `data.image`

```diff
  data: {
-   image: "/assets/images/profile/alex-rivera.jpg",
+   image: "/assets/images/profile/budi-santoso.jpg",
-   imageAlt: "Foto profesional Alex Rivera",
+   imageAlt: "Foto profesional Budi Santoso",
  }
```

**Langkah 1:** Letakkan foto Anda di folder `assets/images/profile/`.

**Langkah 2:** Perbarui path di `data.js`.

> [!TIP]
> **Tips gambar:**
> - Gunakan foto persegi (rasio 1:1).
> - Ukuran yang direkomendasikan: 400×400 piksel.
> - Format yang didukung: `.jpg`, `.png`, `.webp`.
> - Jaga ukuran file di bawah 100KB untuk loading cepat.

> [!WARNING]
> **Selalu atur `imageAlt`.** Ini yang dibaca screen reader untuk mendeskripsikan foto Anda. Juga digunakan Google.

---

## 🎨 Tampilan

### Mengubah Warna Tema

**Lokasi:** `data.js` → `meta` → `design`

```diff
  meta: {
    design: {
+     // Nilai HSL (Hue, Saturation, Lightness):
-     primary:   { h: 240, s: 80, l: 60 },  // Biru Indigo
+     primary:   { h: 340, s: 80, l: 60 },  // Pink Mawar
-     secondary: { h: 175, s: 70, l: 48 },  // Teal
+     secondary: { h: 200, s: 70, l: 48 },  // Biru Langit
-     accent:    { h: 40,  s: 95, l: 55 },  // Amber
+     accent:    { h: 145, s: 70, l: 50 },  // Hijau Zamrud
    }
  }
```

| Peran Warna | Yang Berubah |
|-------------|-------------|
| `primary` | Tombol, tautan, judul, highlight, outline fokus |
| `secondary` | Tombol sekunder, badge, elemen dekoratif |
| `accent` | Badge khusus, highlight, stat hero, warna tag |

> [!TIP]
> **Cara memilih warna:** Kunjungi [hslpicker.com](https://hslpicker.com). Cari warna yang Anda suka. Salin nilai H, S, L.

| Nuansa | Primary | Secondary | Accent |
|--------|---------|-----------|--------|
| Teknologi/Modern | `h:240, s:80, l:60` (Indigo) | `h:175, s:70, l:48` (Teal) | `h:40, s:95, l:55` (Amber) |
| Kreatif | `h:340, s:80, l:60` (Mawar) | `h:200, s:70, l:48` (Langit) | `h:145, s:70, l:50` (Zamrud) |
| Korporat | `h:215, s:90, l:45` (Navy) | `h:200, s:30, l:55` (Baja) | `h:35, s:80, l:50` (Emas) |
| Minimal | `h:0, s:0, l:20` (Abu Tua) | `h:0, s:0, l:40` (Abu) | `h:0, s:0, l:60` (Abu Muda) |

---

### Mengubah Font

**Lokasi:** `data.js` → `meta` → `design`

```diff
  design: {
-   fontHeading: "Inter, system-ui, sans-serif",
+   fontHeading: "Playfair Display, Georgia, serif",
-   fontBody: "Inter, system-ui, sans-serif",
+   fontBody: "Source Sans Pro, system-ui, sans-serif",
  }
```

Dan tambahkan tautan Google Fonts di `meta`:

```diff
  meta: {
-   googleFonts: "Inter:wght@300;400;500;600;700;800",
+   googleFonts: "Playfair+Display:wght@400;600;700;800|Source+Sans+Pro:wght@300;400;600",
  }
```

> [!TIP]
> **Cara mendapatkan Google Fonts:**
> 1. Kunjungi [fonts.google.com](https://fonts.google.com).
> 2. Pilih font Anda dan pilih ketebalan yang diinginkan.
> 3. Salin URL (tanpa awalan `https://fonts.googleapis.com/css2?family=`).
> 4. Tempel ke `googleFonts`.
> 5. Atur nama font di `fontHeading` dan `fontBody`.

---

## 🗂️ Navigasi

### Tambah/Hapus Item Navigasi

**Lokasi:** `data.js` → `site` → `navigation`

```diff
  site: {
    navigation: [
      { label: "Tentang",      target: "about"         },
      { label: "Keahlian",     target: "skills"        },
      { label: "Pengalaman",   target: "experience"    },
      { label: "Proyek",       target: "projects"      },
+     { label: "Pendidikan",   target: "education"     },
      { label: "Pencapaian",   target: "achievements"  },
      { label: "Kontak",       target: "contact"       },
-     { label: "Kontak",       target: "contact"       },
    ]
  }
```

> [!NOTE]
> - `label` adalah yang muncul di bilah navigasi.
> - `target` harus cocok dengan `type` bagian yang ingin ditautkan.
> - Urutkan ulang item dengan bebas — bilah navigasi diperbarui otomatis.
> - Hapus item untuk menyembunyikannya dari navigasi (bagian tetap ada di halaman).

---

### Mengubah Tautan Resume

**Lokasi:** `data.js` → `site` → `resume`

```diff
  site: {
    resume: {
-     label: "Download Résumé",
+     label: "Download CV",
-     url: "/assets/documents/resume.pdf",
+     url: "/assets/dokumen/cv-budi.pdf",
    }
  }
```

> [!TIP]
> Atur `resume: null` untuk menyembunyikan tombol resume sepenuhnya.

---

## 📋 Bagian (Section)

### Memahami Bagian (Section)

**Bagian** adalah satu blok portofolio Anda — Hero, Tentang, Keahlian, Proyek, dll.

Setiap bagian di `data.js` terlihat seperti:

```javascript
{
  id:        "section-hero",   // Harus cocok dengan HTML <section id>
  type:      "hero",           // Renderer mana yang digunakan
  visible:   true,             // true = tampilkan, false = sembunyikan
  heading:   "Hai, Saya Alex", // Judul bagian
  data: {                      // Konten khusus bagian
    // ... bervariasi per tipe bagian
  }
}
```

| Field | Fungsinya | Wajib? |
|-------|----------|--------|
| `id` | Harus cocok dengan elemen `<section>` di `index.html` | ✅ Ya |
| `type` | Memberi tahu sistem renderer mana yang digunakan | ✅ Ya |
| `visible` | Atur ke `false` untuk menyembunyikan tanpa menghapus | ✅ Ya |
| `heading` | Judul yang ditampilkan di atas bagian | ❌ Opsional |
| `data` | Konten aktual — bervariasi per tipe | ✅ Ya |

---

### Menyembunyikan / Menampilkan Bagian

**Lokasi:** `data.js` → `sections` → bagian yang ingin disembunyikan

```diff
  {
    id: "section-social",
    type: "social",
-   visible: true,
+   visible: false,
  }
```

**Hasil:** Bagian Social hilang dari halaman. Untuk memunculkannya kembali, ubah `false` ke `true`.

> [!TIP]
> Sembunyikan bagian yang tidak Anda butuhkan daripada menghapusnya. Anda selalu bisa memunculkannya kembali nanti.

---

### Mengubah Urutan Bagian

**Lokasi:** `data.js` → `sections`

Cukup **urutkan ulang objek** dalam array. Urutan di `data.js` = urutan di halaman.

```diff
  sections: [
    { id: "section-hero",        type: "hero"        },
    { id: "section-about",       type: "about"       },
+   { id: "section-projects",    type: "projects"    },  // ← dipindah ke atas
    { id: "section-skills",      type: "skills"      },
-   { id: "section-projects",    type: "projects"    },  // ← tadinya di sini
    { id: "section-experience",  type: "experience"  },
  ]
```

**Hasil:** Bagian Proyek sekarang muncul sebelum Keahlian di halaman.

> [!WARNING]
> JANGAN mengubah nilai `id`. Nilai tersebut harus cocok dengan HTML. Hanya ubah **urutan** objek.

---

## 💪 Keahlian

### Menambah Keahlian

**Lokasi:** `data.js` → `sections` → cari `"type": "skills"` → `data.categories`

```diff
  categories: [
    {
      name: "Frontend",
      items: [
        { name: "HTML5",    level: 95 },
        { name: "CSS3",     level: 90 },
+       { name: "TypeScript", level: 75 },
+       { name: "Next.js",    level: 70 },
      ]
    },
+   {
+     name: "Alat",                          // ← Kategori baru
+     items: [
+       { name: "Figma",   level: 90 },
+       { name: "VS Code", level: 95 },
+       { name: "Git",     level: 85 },
+     ]
+   }
  ]
```

| Field | Artinya |
|-------|---------|
| `name` (kategori) | Judul untuk grup keahlian |
| `name` (keahlian) | Nama keahlian yang ditampilkan di progress bar |
| `level` | Angka 0 sampai 100 — seberapa mahir Anda |

---

### Menghapus Keahlian

Cukup hapus barisnya:

```diff
  items: [
    { name: "HTML5",    level: 95 },
-   { name: "jQuery",    level: 50 },
    { name: "CSS3",     level: 90 },
  ]
```

---

## 💼 Pengalaman

### Menambah Pekerjaan

**Lokasi:** `data.js` → `sections` → cari `"type": "experience"` → `data.items`

```diff
  items: [
+   {
+     role:        "Junior Developer",
+     company:     "StartupXYZ",
+     url:         "https://startupxyz.com",
+     type:        "Penuh Waktu",           // Badge di samping perusahaan
+     period:      "Jan 2020 — Des 2021",
+     location:    "Remote",
+     description: "Membangun dan merawat aplikasi web utama perusahaan.",
+     highlights: [
+       "Mengurangi waktu loading halaman sebesar 40%",
+       "Mentoring 2 developer magang",
+       "Memperkenalkan pengujian otomatis"
+     ],
+     tech: ["React", "Node.js", "MongoDB", "AWS"]
+   },
  ]
```

| Field | Yang Ditampilkan | Wajib? |
|-------|-----------------|--------|
| `role` | Jabatan Anda | ✅ Ya |
| `company` | Nama perusahaan (menjadi tautan jika `url` diisi) | ✅ Ya |
| `url` | Situs web perusahaan | ❌ |
| `type` | Badge: "Penuh Waktu", "Kontrak", "Freelance" | ❌ |
| `period` | Rentang tanggal | ✅ Ya |
| `location` | "Remote", "Jakarta" | ❌ |
| `description` | 1-2 kalimat tentang peran Anda | ❌ |
| `highlights` | Pencapaian poin-poin | ❌ |
| `tech` | Badge teknologi | ❌ |

> [!TIP]
> Daftar pekerjaan dalam **urutan kronologis** — terbaru di atas. Timeline dirender dari atas ke bawah.

---

## 🚀 Proyek

### Menambah Proyek

**Lokasi:** `data.js` → `sections` → cari `"type": "projects"` → `data.items`

```diff
  items: [
+   {
+     title:       "Dashboard Cuaca",
+     category:    "Proyek Sampingan",
+     description: "Dashboard cuaca real-time dengan prakiraan 7 hari.",
+     image:       "/assets/images/projects/cuaca.jpg",
+     imageAlt:    "Screenshot Dashboard Cuaca",
+     tech:        ["React", "Chart.js", "OpenWeatherAPI"],
+     liveUrl:     "https://cuaca.example.com",
+     url:         "https://github.com/budi/dashboard-cuaca",
+     featured:    true
+   },
  ]
```

| Field | Yang Ditampilkan | Wajib? |
|-------|-----------------|--------|
| `title` | Nama proyek | ✅ Ya |
| `category` | Badge di atas kartu | ❌ |
| `description` | 1-2 kalimat | ❌ |
| `image` | Thumbnail | ❌ |
| `imageAlt` | Teks screen reader | ❌ |
| `tech` | Badge teknologi | ❌ |
| `liveUrl` | Membuat tombol "Live Demo" | ❌ |
| `url` | Membuat tombol "Source Code" | ❌ |
| `featured` | Membuat kartu lebih menonjol | ❌ |

---

## 🏆 Pencapaian

### Menambah Pencapaian

**Lokasi:** `data.js` → `sections` → cari `"type": "achievements"` → `data.items`

```diff
  items: [
+   {
+     title:        "Juara 1 Hackathon",
+     organization: "Dicoding",
+     year:         "2024",
+     description:  "Memenangkan hackathon nasional dengan 500+ peserta.",
+     url:          "https://dicoding.com/hackathon/2024"
+   },
  ]
```

---

## 🎓 Pendidikan

### Menambah Pendidikan

**Lokasi:** `data.js` → `sections` → cari `"type": "education"` → `data.items`

```diff
  items: [
+   {
+     degree:       "S.Kom. Ilmu Komputer",
+     institution:  "Universitas Indonesia",
+     location:     "Depok, Jawa Barat",
+     period:       "2016 — 2020",
+     gpa:          "3.75",
+     description:  "Fokus pada Interaksi Manusia-Komputer.",
+     achievements: [
+       "Skripsi: Desain Antarmuka Inklusif untuk Disabilitas Kognitif",
+       "Asisten Dosen untuk mata kuliah IMK"
+     ]
+   },
  ]
```

---

## 📜 Sertifikat

### Menambah Sertifikat

**Lokasi:** `data.js` → `sections` → cari `"type": "certificates"` → `data.items`

```diff
  items: [
+   {
+     title:        "AWS Solutions Architect",
+     issuer:       "Amazon Web Services",
+     date:         "2024",
+     credentialId: "AWS-SAA-12345",
+     url:          "https://aws.amazon.com/certification/verify/12345"
+   },
  ]
```

---

## 📞 Kontak

### Mengubah Info Kontak

**Lokasi:** `data.js` → `sections` → cari `"type": "contact"` → `data`

```diff
  data: {
-   email:        "alex@alexrivera.dev",
+   email:        "budi@budisantoso.dev",
-   location:     "San Francisco, CA",
+   location:     "Jakarta, Indonesia",
    availability: {
-     status:      "available",
+     status:      "available",         // "available" atau "unavailable"
-     label:       "Tersedia untuk proyek baru",
+     label:       "Terbuka untuk pekerjaan freelance",
    },
    cta: {
-     label:  "Hubungi Saya",
+     label:  "Rekrut Saya",
-     action: "mailto:alex@alexrivera.dev",
+     action: "https://calendly.com/budi/30min",
    }
  }
```

---

## 🌐 Media Sosial

### Menambah Tautan Sosial

**Lokasi:** `data.js` → `sections` → cari `"type": "social"` → `data.links`

```diff
  links: [
    { platform: "GitHub",    username: "@budisantoso", url: "https://github.com/budisantoso"   },
    { platform: "LinkedIn",  username: "@budisantoso", url: "https://linkedin.com/in/budisantoso" },
+   { platform: "Instagram", username: "@budisantoso", url: "https://instagram.com/budisantoso"  },
+   { platform: "YouTube",   username: "@budisantoso", url: "https://youtube.com/@budisantoso"  },
  ]
```

---

## ⚡ Stat Hero

### Mengubah Stat Hero

**Lokasi:** `data.js` → `sections` → cari `"type": "hero"` → `data.stats`

```diff
  stats: [
-   { value: "8+",   label: "Tahun Pengalaman" },
-   { value: "50+",  label: "Proyek Selesai"   },
-   { value: "15+",  label: "Klien Puas"       },
+   { value: "10+",  label: "Tahun Pengalaman" },
+   { value: "100+", label: "Desain Selesai"   },
+   { value: "20+",  label: "Presentasi"       },
  ]
```

> [!TIP]
> Atur `stats: []` (array kosong) untuk menyembunyikan baris stat sepenuhnya.

---

## 🖼️ Favicon

### Mengganti Favicon

1. Buat gambar SVG atau PNG persegi (minimal 64×64px).
2. Simpan sebagai `assets/icons/favicon.svg` (timpa yang sudah ada).
3. Selesai — tidak perlu perubahan kode.

---

## 🔍 SEO

### Perbarui Info Mesin Pencari

**Lokasi:** `data.js` → `meta`

```diff
  meta: {
-   title:        "Alex Rivera — Front-End Engineer & UI Architect",
+   title:        "Budi Santoso — UI/UX Designer",
-   description:  "Portfolio of Alex Rivera, specializing in design systems...",
+   description:  "Portfolio Budi Santoso, UI/UX designer spesialis kesehatan, pendidikan, dan fintech.",
-   url:          "https://alexrivera.dev",
+   url:          "https://budisantoso.dev",
-   author:       "Alex Rivera",
+   author:       "Budi Santoso",
  }
```

> [!WARNING]
> Jika Anda deploy ke GitHub Pages, atur `url` ke `https://<username>.github.io` (atau domain kustom Anda).

---

<br>

---

# Panduan Developer

Bagian ini untuk developer yang ingin memperluas template — menambah bagian baru, membuat komponen baru, atau memahami arsitektur.

> [!NOTE]
> Jika Anda Pemilik Portofolio yang mengkustomisasi konten, lewati ke [FAQ](#faq). Anda tidak perlu bagian ini.

---

## Ikhtisar Arsitektur

### Pola Desain: Section Registry

Proyek ini menggunakan **Pola Registry** untuk rendering:

```
┌────────────────────────────────────┐
│ section-registry.js                │
│                                    │
│ {                                  │
│   "hero":         renderHero,      │
│   "about":        renderAbout,     │
│   "skills":       renderSkills,    │
│   "experience":   renderExperience,│
│   "projects":     renderProjects,  │
│   // ... dan seterusnya            │
│ }                                  │
└────────────────────────────────────┘
```

**Mengapa:** Menambah bagian baru berarti menambah 1 import + 1 pasangan key-value. Tidak ada file pusat yang perlu direfaktor.

### Alur Rendering (Teknis)

```
app.js:init()
  │
  ├─→ _renderHeader(site)       — Membangun logo, nav, tombol resume
  │     └─→ navigation.init()   — Scroll spy, smooth scroll, menu mobile
  │
  ├─→ _initUX()                 — Scroll progress bar, efek bayangan header
  │
  └─→ _renderSections(sections) — Loop melalui portfolioData.sections[]
        │
        └─→ Untuk setiap bagian:
              ├─→ Periksa visible === true
              ├─→ Cari renderer: sectionRegistry[section.type]
              ├─→ Cari kontainer: getElementById(section.id + "-container")
              └─→ renderer(section, container)
                    │
                    └─→ Renderer bagian menggunakan:
                          ├─→ createSectionWrapper()  — heading + kontainer bersama
                          ├─→ createElement()         — factory node DOM
                          ├─→ createCard()            — komponen kartu
                          ├─→ createBadge()           — komponen badge
                          └─→ createButton()          — komponen tombol
```

---

## Utilitas DOM (`js/utils/dom.js`)

### `createElement(tag, attrs, ...children)`

Blok bangunan inti. **Semua** node DOM dibuat melalui fungsi ini. Jangan pernah gunakan `innerHTML`.

```javascript
// Elemen sederhana:
createElement("h2", { class: "judul", text: "Halo Dunia" });

// Dengan anak (children):
createElement("div", { class: "wadah" },
  createElement("p", { text: "Paragraf pertama" }),
  createElement("p", { text: "Paragraf kedua" })
);

// Properti `text:` menggunakan textContent (aman XSS).
```

### `batchAppend(parent, nodes)`

Menambahkan banyak node dalam satu reflow menggunakan `DocumentFragment`:

```javascript
batchAppend(kontainer, [kartu1, kartu2, kartu3]);
```

### Utilitas Sanitasi (`js/utils/sanitize.js`)

```javascript
sanitizeURL('https://example.com');           // → 'https://example.com'
sanitizeURL('javascript:alert(1)');           // → '#'
```

> [!IMPORTANT]
> **Jangan pernah gunakan `innerHTML` untuk konten pengguna.** Gunakan `createElement` dengan properti `text:`.

---

## Menambah Bagian Baru

### Langkah 1: Tambah Data ke `data.js`

```javascript
{
  id:      "section-testimoni",
  type:    "testimonials",
  visible: true,
  heading: "Apa Kata Mereka",
  data: { items: [ ... ] }
}
```

### Langkah 2: Tambah Kontainer HTML

Di `index.html`, sebelum `</main>`:

```html
<section id="section-testimoni"
         data-section="testimonials"
         aria-labelledby="testimonials-heading">
  <div class="l-section" id="testimonials-container"></div>
</section>
```

### Langkah 3: Buat Renderer

Buat `js/sections/testimonials.js`:

```javascript
"use strict";
import { createElement } from "../utils/dom.js";
import { createSectionWrapper } from "../utils/renderer-helper.js";
import { createCard } from "../components/card.js";

function renderTestimonials(data, container) {
  const { content } = createSectionWrapper(data, "testimonials");
  const grid = createElement("div", { class: "testimonials__grid" });
  data.data.items.forEach(item => {
    grid.appendChild(createCard({ title: item.author, text: item.quote }));
  });
  content.appendChild(grid);
  container.appendChild(content);
}
export { renderTestimonials };
```

### Langkah 4: Daftarkan

Di `js/sections/section-registry.js`:

```diff
+ import { renderTestimonials } from "./testimonials.js";
  const sectionRegistry = {
+   testimonials: renderTestimonials,
  };
```

### Langkah 5: Tambah CSS (Opsional)

Di `css/main.css`:

```diff
+ @import "./sections/testimonials.css";
```

---

## Deployment

### GitHub Pages (Gratis)

```bash
git push origin main
# Settings → Pages → Branch = "main" → Save
```

### Penyedia Lain

| Penyedia | Instruksi |
|----------|----------|
| **Netlify** | Drag-and-drop folder proyek |
| **Vercel** | Import dari GitHub, tanpa konfigurasi |
| **Hosting statis apa pun** | Upload semua file via FTP |

---

<br>

---

# FAQ

### Dasar-Dasar

<details>
<summary><strong>T: Di mana saya mengubah nama?</strong></summary>

**J:** Buka `data.js`. Cari blok `meta` di bagian atas. Ubah field `author` dan `title`. Simpan dan refresh.

</details>

<details>
<summary><strong>T: Bagaimana cara mengganti foto profil?</strong></summary>

**J:** Letakkan foto Anda di `assets/images/profile/`. Lalu di `data.js`, perbarui `data.image` di bagian **About**.

</details>

<details>
<summary><strong>T: Mengapa bagian saya tidak muncul?</strong></summary>

**J:** Periksa tiga hal:
1. `visible: true` (bukan `false`)
2. Nilai `id` cocok persis dengan yang ada di `index.html`
3. Anda tidak sengaja menghapus bagian dari array `sections`

</details>

<details>
<summary><strong>T: Bagaimana cara menyembunyikan bagian?</strong></summary>

**J:** Di `data.js`, cari bagian dan ubah `visible: true` menjadi `visible: false`.

</details>

<details>
<summary><strong>T: Bagaimana cara mengubah urutan bagian?</strong></summary>

**J:** Di `data.js`, pindahkan objek bagian ke atas atau ke bawah dalam array `sections`. Urutan di array = urutan di halaman.

</details>

<details>
<summary><strong>T: Bagaimana cara mengubah warna?</strong></summary>

**J:** Di `data.js`, cari `meta.design`. Ubah nilai `h`, `s`, `l` untuk `primary`, `secondary`, dan `accent`.

</details>

<details>
<summary><strong>T: Apakah saya perlu Node.js?</strong></summary>

**J:** Tidak. Proyek ini murni HTML/CSS/JS. Anda bisa membuka `index.html` langsung di browser.

</details>

<details>
<summary><strong>T: Apakah saya perlu npm atau build tools?</strong></summary>

**J:** Tidak. Nol dependensi. Tidak perlu `npm install`, Webpack, atau Vite.

</details>

<details>
<summary><strong>T: Bolehkah saya menggunakan ini secara komersial?</strong></summary>

**J:** Ya. Lisensi MIT — bebas untuk penggunaan pribadi dan komersial.

</details>

<details>
<summary><strong>T: Bagaimana cara menyembunyikan tombol resume?</strong></summary>

**J:** Di `data.js`, cari `site.resume` dan atur ke `null`.

</details>

<details>
<summary><strong>T: Bagaimana cara menghapus item navigasi?</strong></summary>

**J:** Hapus dari array `site.navigation` di `data.js`.

</details>

<details>
<summary><strong>T: Bagaimana cara menghapus bagian sosial/kontak/pencapaian?</strong></summary>

**J:** Cari bagian di array `sections`. Atur `visible: false`.

</details>

<details>
<summary><strong>T: Bagaimana cara menambah tautan media sosial baru?</strong></summary>

**J:** Di `data.js`, cari bagian Social. Tambah objek baru ke `links`.

</details>

<details>
<summary><strong>T: Apakah tema terang tersedia?</strong></summary>

**J:** Template dikirimkan dengan tema gelap sebagai default. Dukungan tema terang tersedia dengan menghapus komentar `@import "./themes/light.css"` di `main.css`.

</details>

<details>
<summary><strong>T: Mengapa ada dua file README?</strong></summary>

**J:** `README.md` versi Bahasa Inggris. `README_ID.md` versi Bahasa Indonesia. Kontennya sama.

</details>


### Deployment

<details>
<summary><strong>T: Bagaimana cara deploy ke GitHub Pages?</strong></summary>

**J:** Push ke GitHub → Buka Settings repositori → Pages → Pilih branch "main" → Save. Situs Anda live di `https://<username>.github.io/<repo>/`.

</details>

<details>
<summary><strong>T: Berapa lama GitHub Pages memperbarui?</strong></summary>

**J:** Biasanya 1–2 menit. Kadang hingga 5 menit untuk deployment pertama.

</details>

<details>
<summary><strong>T: Bisakah saya menggunakan domain kustom?</strong></summary>

**J:** Ya. Tambahkan file `CNAME` ke root repositori dengan nama domain Anda. Konfigurasi DNS dengan penyedia Anda.

</details>

<details>
<summary><strong>T: Mengapa situs saya menampilkan 404?</strong></summary>

**J:** Periksa:
1. Nama repositori persis `<username>.github.io` (untuk halaman pengguna) ATAU Anda telah mengaktifkan Pages di Settings.
2. Anda meng-commit `index.html` ke branch `main`.
3. Tunggu 2 menit setelah push.

</details>

<details>
<summary><strong>T: Bisakah deploy ke Netlify atau Vercel?</strong></summary>

**J:** Ya. Keduanya mendukung drag-and-drop atau integrasi Git. Tanpa konfigurasi.

</details>


### Pemecahan Masalah

<details>
<summary><strong>T: Perubahan saya tidak muncul setelah mengedit data.js.</strong></summary>

**J:** Coba:
1. **Hard refresh**: `Ctrl+Shift+R` (Windows) atau `Cmd+Shift+R` (Mac).
2. **Hapus cache**: Buka DevTools → tab Network → centang "Disable cache".
3. **Periksa kesalahan ketik**: Koma atau kutip yang hilang di `data.js` merusak segalanya.

</details>

<details>
<summary><strong>T: Halaman benar-benar kosong.</strong></summary>

**J:** Anda mungkin memiliki kesalahan sintaks JavaScript di `data.js`. Buka DevTools browser (F12) → tab Console. Cari pesan error merah. Penyebab umum: koma hilang, koma berlebih, kutip tidak tertutup.

</details>

<details>
<summary><strong>T: Saya mengubah sesuatu di data.js dan semuanya rusak.</strong></summary>

**J:** Pulihkan dari cadangan (`data-backup.js`). Jika tidak punya, download ulang `data.js` asli dari repositori.

</details>

<details>
<summary><strong>T: Bisakah saya mengedit HTML langsung?</strong></summary>

**J:** Tidak — jangan edit `index.html` untuk menambah konten. Semua konten ada di `data.js`.

</details>

<details>
<summary><strong>T: Gambar saya tidak muncul.</strong></summary>

**J:** Periksa:
1. File ada di path yang Anda tentukan.
2. Path yang dimulai dengan `/` relatif terhadap root situs web.
3. Nama file case-sensitive (`Foto.jpg` ≠ `foto.jpg`).

</details>

<br>

---

# Praktik Terbaik

### ✅ LAKUKAN

| Lakukan | Mengapa |
|---------|---------|
| **Selalu edit `data.js` untuk konten** | Itu Sumber Data Tunggal |
| **Simpan cadangan** `data.js` sebelum mengedit | Pemulihan mudah jika terjadi kesalahan |
| **Gunakan nama gambar deskriptif** | `foto-profil.jpg` menjelaskan apa itu |
| **Atur teks `alt` untuk setiap gambar** | Screen reader dan Google membutuhkannya |
| **Kompres gambar sebelum menambahkannya** | Loading halaman lebih cepat |
| **Uji portofolio di ponsel Anda** | 60%+ tampilan portofolio dari mobile |
| **Perbarui `meta.url` saat deploy** | Memastikan tag OG dan URL kanonis benar |

### ❌ JANGAN PERNAH

| Jangan Pernah | Mengapa |
|--------------|---------|
| **Edit `index.html` untuk konten** | Konten ada di `data.js` |
| **Edit CSS kecuali Anda mengerti CSS** | Warna dan font sudah dapat dikonfigurasi di `data.js` |
| **Edit renderer JS** | Sistem rendering menangani semuanya otomatis |
| **Gunakan `innerHTML` untuk konten pengguna** | Risiko keamanan XSS |
| **Hardcode warna** di CSS | Gunakan variabel CSS — warna berasal dari `data.js` |
| **Hapus bagian** dari array `sections` | Atur `visible: false` saja — bisa di-undo |
| **Masukkan gambar besar** (di atas 1MB) | Gunakan [Squoosh](https://squoosh.app) untuk kompresi |

<br>

---

# Kontribusi

Kontribusi diterima! Proyek ini bertujuan tetap **tanpa dependensi** dan **ramah pemula**.

### Cara Berkontribusi

1. **Fork** repositori.
2. **Buat branch**: `git checkout -b fitur/fitur-saya`.
3. **Lakukan perubahan**.
4. **Uji** di Chrome, Firefox, Safari, dan Edge.
5. **Jalankan Lighthouse** — pastikan tidak ada penurunan skor.
6. **Kirim Pull Request**.

### Pedoman Kontribusi

- Fitur baru harus **opt-in** — jangan ubah perilaku default.
- Dependensi baru? **Tidak.** Proyek ini tetap tanpa dependensi.
- Bagian baru harus mengikuti [Pola Section Registry](#menambah-bagian-baru).
- Semua pembuatan DOM harus menggunakan `createElement` — tidak boleh `innerHTML`.

---

# Lisensi

Lisensi MIT — bebas untuk penggunaan pribadi dan komersial. Atribusi dihargai tetapi tidak diwajibkan.

---

<p align="center">
  <em>Dibangun dengan ❤️ oleh proyek template-portofolio.</em><br>
  <em>Tanpa framework. Tanpa dependensi. Hanya Anda dan cerita Anda.</em>
</p>
