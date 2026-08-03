/* ============================================
   PhysioCare - Guest Service Detail View
   ============================================ */

const GuestServiceDetailView = {
    /**
     * Render the service detail page
     * @param {object} params - route params { slug }
     */
    async render(params) {
        const service = await ServiceModel.bySlug(params.slug);
        if (!service) {
            return `
            ${NavbarGuest.render('services')}
            <div class="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
                <span class="material-symbols-outlined text-[80px] text-primary mb-6">search_off</span>
                <h1 class="font-headline-lg text-headline-lg text-primary mb-4">Layanan Tidak Ditemukan</h1>
                <p class="text-on-surface-variant mb-8">Layanan yang Anda cari tidak tersedia.</p>
                <a href="#/services" class="bg-primary text-on-primary px-8 py-4 rounded-xl font-button-text hover:bg-primary-container transition-all">Lihat Semua Layanan</a>
            </div>
            ${Footer.render()}`;
        }

        const price = Service.formatPrice(service.price);

        const features = (service.features || []).map(f => `
            <li class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full bg-success-green/10 flex items-center justify-center">
                    <span class="material-symbols-outlined text-success-green text-[18px]" style="font-variation-settings: 'FILL' 1;">check</span>
                </span>
                <span class="text-on-surface-variant font-body-md">${f}</span>
            </li>
        `).join('');

        return `
        ${NavbarGuest.render('services')}
        <main class="min-h-screen bg-background">
            <!-- Hero -->
            <section class="relative py-20 px-6 bg-surface-container-low overflow-hidden">
                <div class="absolute inset-0 opacity-10 pointer-events-none">
                    <div class="absolute top-0 left-0 w-96 h-96 bg-primary-container rounded-full blur-3xl -ml-48 -mt-48"></div>
                </div>
                <div class="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <a href="#/services" class="inline-flex items-center gap-2 text-secondary font-bold mb-6 hover:underline">
                            <span class="material-symbols-outlined">arrow_back</span> Back to Services
                        </a>
                        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm mb-6">
                            <span class="material-symbols-outlined text-[16px]">${service.icon}</span>
                            ${service.duration}
                        </span>
                        <h1 class="font-headline-lg text-headline-lg mb-6">${service.name}</h1>
                        <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">${service.description}</p>
                        <div class="flex items-center gap-6">
                            <div>
                                <p class="font-label-sm text-label-sm text-outline mb-1">Starting from</p>
                                <p class="font-headline-lg text-headline-lg text-primary font-bold">${price}</p>
                            </div>
                            <a href="#/booking" class="bg-primary text-on-primary px-8 py-4 rounded-xl font-button-text text-button-text hover:bg-primary-container shadow-lg transition-all">
                                Book This Service
                            </a>
                        </div>
                    </div>
                    <div class="relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-clinical-white h-[400px]">
                        <img class="w-full h-full object-cover" data-alt="${service.name}" src="${service.image}" alt="${service.name}">
                    </div>
                </div>
            </section>
            <!-- Features & Details -->
            <section class="py-20 px-6 max-w-container-max mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-2">
                        <h2 class="font-headline-md text-headline-md mb-8">Apa yang termasuk?</h2>
                        <ul class="space-y-4">
                            ${features}
                        </ul>
                        <div class="mt-12 p-6 bg-surface-muted rounded-2xl border border-outline-variant/30 flex gap-4">
                            <span class="material-symbols-outlined text-primary text-[40px]">medical_information</span>
                            <div>
                                <h3 class="font-headline-md text-headline-md mb-2">Indikasi Penanganan</h3>
                                <p class="text-on-surface-variant font-body-md">
                                    Layanan ini sesuai untuk pasien dengan kondisi ${service.name.toLowerCase()}. Konsultasikan dengan terapis kami untuk asesmen awal dan rencana perawatan yang disesuaikan.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-clinical-white rounded-xl border border-outline-variant/20 p-8 shadow-sm sticky top-24">
                            <h3 class="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                                <span class="material-symbols-outlined text-primary">info</span>
                                Informasi Cepat
                            </h3>
                            <div class="space-y-4">
                                <div class="flex justify-between">
                                    <span class="text-on-surface-variant">Durasi</span>
                                    <span class="font-bold">${service.duration}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-on-surface-variant">Harga Mulai</span>
                                    <span class="font-bold text-primary">${price}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-on-surface-variant">Terapis</span>
                                    <span class="font-bold">STR Verified</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-on-surface-variant">Garansi</span>
                                    <span class="font-bold text-success-green">Free Reschedule</span>
                                </div>
                            </div>
                            <a href="#/booking" class="w-full mt-8 py-3 bg-primary text-on-primary rounded-xl font-button-text text-center hover:bg-primary-container transition-all block">
                                Book Now
                            </a>
                            <a href="#/contact" class="w-full mt-3 py-3 border-2 border-primary text-primary rounded-xl font-button-text text-center hover:bg-primary/5 transition-all block">
                                Ask a Question
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        ${Footer.render()}
        `;
    }
};
