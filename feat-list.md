# Abelia Marketplace - Checklist Fitur

## Backend

### Model
- [x] User
- [x] Product
- [x] ProductImage
- [x] Category
- [x] Order (struktur dasar)
- [ ] Order (lengkap dengan relasi)
- [ ] OrderItem
- [ ] OrderLog
- [ ] Batch (untuk pengiriman)

### Admin Panel (Filament)
- [x] ProductResource (dasar)
- [x] ProductResource (advance: dapat memilih size (jika dia memilih size maka bisa set stock tiap size, jika tidak set size, maka stoknya hanya ada 1), star / rating product diset oleh admin)
- [x] ProductResource (kurang untuk star)
- [x] ImagesRelationManager
- [x] CategoryResource (dasar)
- [ ] CategoryResource (advance: seperti parent and child)
- [x] OrderResource (struktur dasar)
- [ ] OrderResource (lengkap dengan item pesanan)
- [ ] BatchResource

### Controller
- [x] ProductController (dasar)
- [ ] CartController
- [ ] CheckoutController
- [ ] OrderController
- [ ] BatchController (untuk pelacakan)

## Frontend

### Halaman
- [x] Homepage (struktur dasar)
- [x] Shop Page (struktur dasar)
- [x] Product Detail Page (struktur dasar)
- [ ] Cart Page
- [ ] Checkout Page
- [ ] Order Tracking Page

### Komponen
- [x] Navbar
- [x] Footer
- [x] ProductList
- [x] ProductGallery
- [x] ProductInfo
- [x] Newsletter
- [x] WhyUs
- [ ] Cart
- [ ] Checkout Form
- [ ] Order Summary
- [ ] Tracking Interface

## Alur Checkout
- [ ] Implementasi keranjang belanja
- [ ] Halaman checkout dengan form data pembeli
- [ ] Generasi kode invoice
- [ ] Integrasi dengan WhatsApp untuk konfirmasi
- [ ] Panel admin untuk persetujuan pesanan
- [ ] Penambahan pesanan ke batch pengiriman
- [ ] Halaman pelacakan untuk pembeli