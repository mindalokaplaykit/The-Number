# THE NUMBER — The Growth Challenge (v3 · 4–5–6)

Web app tantangan kode angka untuk Amazing Race UGM, 31 Oktober 2026. Situs statis: tanpa akun, database, dependensi eksternal, maupun build step.

## Persiapan & penggunaan

- **Pratinjau tanpa instalasi:** buka file `The_Number_Growth_Challenge_v3.html` yang tersedia terpisah dari paket ZIP.
- **GitHub Pages:** ekstrak ZIP lalu unggah `index.html`, `app.css`, `app.js`, dan `logic.js` ke root repositori. Di GitHub buka **Settings → Pages → Deploy from a branch → main / root**. Alamat GitHub Pages yang terbit dapat dijadikan tujuan QR.
- **Satu tim satu HP.** Ketik nama kelompok pada halaman utama. Tekan **MULAI TANTANGAN**. Tombol **PETUNJUK** menjelaskan makna hasil tebakan.

## Soal rahasia — hanya untuk pengelola

| Level | Kode | Capaian |
|---|---|---|
| 01 — DISCOVER | `8041` (4 digit) | Membuka Level 02 |
| 02 — DEDUCE | `59307` (5 digit) | 1 stamp, setelah verifikasi fasilitator |
| 03 — BREAKTHROUGH | `311026` (6 digit) | Total 2 stamp, setelah verifikasi fasilitator |

Kode terakhir adalah 31 Oktober 2026 (DDMMYY), dengan digit berulang. Petunjuk bantuan bertahap tersedia hanya pada Level 3 setelah 3, 5, dan 7 percobaan yang belum tepat.

## Perilaku aplikasi

- Tidak ada batas percobaan; peserta mendapat informasi `Correct Position` dan `Wrong Position` dari tebakan terbaru saja. Tidak ada riwayat otomatis; kelompok dapat mencatat sendiri.
- Nama kelompok tampil besar selama tantangan. Level 1, 2, dan 3 memiliki perayaan visual dengan intensitas meningkat; status stamp tampil jelas.
- Setelah dua kode berhasil, peserta dapat meminta verifikasi 1 stamp, memilih level bonus, atau menyelesaikan misi.
- Tidak ada penyimpanan progres; keluar atau memuat ulang berarti mengulang dari awal.
- Tombol keluar/Back pada halaman berupaya memunculkan dialog konfirmasi. Gestur back, refresh, dan menutup tab dibatasi perilaku masing-masing browser; refresh/menutup tab hanya dapat menampilkan peringatan standar browser.
- Tidak ada aturan digit berbeda yang ditampilkan kepada peserta, dan tidak ada kata “bermain” atau “permainan” pada antarmuka.

## Penting

File app.js tersedia di browser dan dapat diperiksa peserta yang memahami DevTools. Karena ini GitHub Pages statis, kode rahasia **bukan informasi yang aman**. Gunakan verifikasi fasilitator, dan jangan mengandalkan layar aplikasi sebagai bukti yang antimanipulasi.
