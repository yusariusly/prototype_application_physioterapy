# TODO - Perbaikan Proyek PhysioCare MVC

## Langkah-langkah perbaikan

- [x] 1. Baca semua file yang relevan (router, controllers, components, models, views, data JSON)
- [x] 2. Perbaiki `js/router.js` — regex param route `/services/:slug` ditulis ulang (per-segment)
- [x] 3. Tambah `forPatient()` di `js/models/PatientRecord.js` + perbaiki mapping di `js/views/patient/medical-records.js`
- [x] 4. Perbaiki `js/views/patient/payment.js` — baca radio payment method, kirim `therapistName`/`location`, persist `paymentMethod`
- [x] 5. Update `js/models/Appointment.js` — dukung `therapistName`, `location`, `paymentMethod`
- [x] 6. Perbaiki status map di `js/views/admin/therapists.js` (`busy`→`in-session`, `off`→`off-duty`)
- [x] 7. Ganti `<body>` → `<div>` di semua view admin & auth (login, register, forgot-password, admin/login, patients)
- [x] 8. Sederhanakan price fallback di `js/components/booking-summary-card.js`
- [x] 9. Reset `GuestBookingView.state` setelah booking sukses (via `init()` di `PatientBookingSuccessView`)
- [x] 10. Verifikasi semua route render & alur booking — semua controller/nama view cocok, semua file (index.html, css, data, js) tersedia, temp files dibersihkan

