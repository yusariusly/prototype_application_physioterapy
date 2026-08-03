# TODO - Penggabungan Proyek PhysioCare ke MVC SPA

## Struktur Proyek
- [x] Buat struktur folder proyek

## Fondasi
- [x] index.html (entry point SPA)
- [x] tailwind.config.js (design system Clinical Serenity)
- [x] css/app.css (custom styles + base)

## Data (Backend Ringan)
- [x] data/services.json
- [x] data/therapists.json
- [x] data/appointments.json
- [x] data/users.json

## Model
- [x] js/models/Model.js (base)
- [x] js/models/User.js
- [x] js/models/Therapist.js
- [x] js/models/Appointment.js
- [x] js/models/Service.js
- [x] js/models/PatientRecord.js

## Router & App
- [x] js/router.js (hash router)
- [ ] js/app.js (inisialisasi)

## Komponen Reusable
- [ ] components/navbar-guest.js
- [ ] components/navbar-patient.js
- [ ] components/sidebar-admin.js
- [ ] components/footer.js
- [ ] components/therapist-card.js
- [ ] components/service-card.js
- [ ] components/booking-summary-card.js

## View Guest (10 halaman)
- [ ] views/guest/home.js
- [ ] views/guest/services.js
- [ ] views/guest/service-detail.js
- [ ] views/guest/team.js
- [ ] views/guest/articles.js
- [ ] views/guest/booking.js
- [ ] views/guest/ai-triage.js
- [ ] views/guest/contact.js

## View Auth (4 halaman)
- [ ] views/auth/login.js
- [ ] views/auth/register.js
- [ ] views/auth/forgot-password.js
- [ ] views/auth/portal.js

## View Patient (6 halaman)
- [ ] views/patient/dashboard.js
- [ ] views/patient/booking-success.js
- [ ] views/patient/assessment.js
- [ ] views/patient/payment.js
- [ ] views/patient/medical-records.js
- [ ] views/patient/contact-confirmation.js

## View Admin (4 halaman)
- [ ] views/admin/dashboard.js
- [ ] views/admin/therapists.js
- [ ] views/admin/branches.js
- [ ] views/admin/patients.js
- [ ] views/admin/login.js

## Controller
- [ ] controllers/GuestController.js
- [ ] controllers/AuthController.js
- [ ] controllers/PatientController.js
- [ ] controllers/AdminController.js

## Testing
- [ ] Uji navigasi semua halaman
- [ ] Uji interaksi (booking, login, dsb)

