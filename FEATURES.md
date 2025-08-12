# Abelia Marketplace - Fitur

## Fitur Pengguna

### Autentikasi dan Manajemen Pengguna
- Registrasi pengguna baru
- Login pengguna
- Manajemen profil pengguna
- Sistem multi-role (admin dan user)

### Katalog Produk
- Tampilan produk dengan kategori
- Pencarian dan filter produk
- Halaman detail produk
- Tampilan produk terkait
- Kategori produk dengan hierarki (parent-child)

### Fitur Belanja
- Keranjang belanja (Cart)
- Sistem rating dan review produk
- Proses checkout dengan informasi pengiriman

### Fitur Lainnya
- Halaman beranda dengan tampilan produk unggulan
- Newsletter untuk update produk terbaru
- Informasi "Why Us" (keunggulan marketplace)

## Fitur Admin

### Manajemen Produk
- Tambah, edit, dan hapus produk
- Upload dan kelola gambar produk
- Atur stok produk
- Atur bintang (opsional)
- Atur harga dan diskon produk
- Atur apakah termasuk varigata atau tidak (boolean)
- Entry Kategori (dari relasi tabel kategori)
#### Sub Manajemen Produk
- Setting untuk ukuran setiap produk
- Bisa memilih untuk tidak menggunakan sistem ukuran
- Ukuran hanya tersedia S,M,L 
- Setiap ukuran punya stok, dan harga yang berbeda

### Manajemen Kategori
- Tambah, edit, dan hapus kategori
- Atur hierarki kategori (parent-child)

### Manajemen Pesanan
- Lihat daftar pesanan
- Detail pesanan dan item pesanan
- Approve / Reject Pesanan
- Mendaftarkan pesanan ke batch pengiriman
- Log aktivitas pesanan

### Manajemen Pengguna
- Lihat daftar pengguna
- Atur role dan permission pengguna

### Manajemen Batch (untuk pengiriman)
- CRUD Batch 
- Batch = One to many dengan pesanan
- Untuk log pengiriman ke User, jika batch di update maka User dapat melihat posisi terkini product

## Alur user checkout
User checkout -> redirect message dengan mengirim kode INV ke wa admin (untuk proses payment) -> admin check order list di dashboard dengan memasukkan kode INV -> Admin approve (pembayaran berhasil) / tidak -> jika success admin menambahkan batch (pengiriman) ke pesanan, agar user dapat melihat tracking pengiriman


## Teknologi yang Digunakan

### Backend
- Laravel (PHP Framework)
- MySQL Database
- Spatie Permission untuk manajemen role dan permission
- Filament untuk admin panel

### Frontend
- React dengan TypeScript
- Inertia.js untuk integrasi Laravel-React
- Tailwind CSS untuk styling
- Headless UI untuk komponen UI

## Struktur Database

### Tabel Utama
- users: Menyimpan data pengguna
- products: Menyimpan data produk
- categories: Menyimpan data kategori produk
- product_images: Menyimpan gambar produk
- carts: Menyimpan item di keranjang belanja
- orders: Menyimpan data pesanan
- order_items: Menyimpan item dalam pesanan
- order_logs: Menyimpan log aktivitas pesanan
- rating: Menyimpan rating dan review produk

### Tabel Pendukung
- roles: Menyimpan data role (admin, user)
- permissions: Menyimpan data permission
- model_has_roles: Relasi antara model dan role
- model_has_permissions: Relasi antara model dan permission
- role_has_permissions: Relasi antara role dan permission