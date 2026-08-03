/* ============================================
   PhysioCare - Guest Services View
   ============================================ */

const GuestServicesView = {
    /**
     * Render the services catalog page
     */
    async render() {
        const services = await ServiceModel.all();

        // Build bento grid - first service large, then paired compacts
        const cards = services.map((s, index) => {
            // Alternate: large (8 cols) and compact (4 cols)
            if (index % 3 === 0) {
                return `<div class="md:col-span-8">${ServiceCard.render(s, 'bento')}</div>`;
            }
            return `<div class="md:col-span-4">${ServiceCard.render(s, 'compact')}</div>`;
        }).join('');

        return `
        ${NavbarGuest.render('services')}
        <main class="min-h-screen">
            <!-- Hero Section -->
            <section class="relative py-20 px-6 bg-surface-container-low overflow-hidden">
                <div class="absolute inset-0 opacity-10 pointer-events-none">
                    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-3xl -mr-48 -mt-48"></div>
                    <div class="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container rounded-full blur-3xl -ml-32 -mb-32"></div>
                </div>
                <div class="max-w-container-max mx-auto text-center relative z-10">
                    <span class="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm mb-6">
                        OUR SPECIALIZATIONS
                    </span>
                    <h1 class="font-headline-lg text-headline-lg md:text-headline-lg mb-6">Expert Rehabilitation Tailored to You</h1>
                    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                        From elite athletes to recovery for the elderly, our certified specialists provide evidence-based treatments designed to restore mobility and enhance quality of life.
                    </p>
                </div>
            </section>
            <!-- Services Catalog (Bento Grid Style) -->
            <section class="py-20 px-6 max-w-container-max mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
                    ${cards}
                </div>
            </section>
            <!-- CTA Section -->
            <section class="py-20 px-6 bg-primary text-on-primary">
                <div class="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div class="max-w-2xl">
                        <h2 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">Ready to start your recovery journey?</h2>
                        <p class="font-body-lg text-body-lg opacity-90">Schedule an initial assessment with one of our STR Verified therapists today and get a personalized treatment plan.</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <a href="#/booking" class="bg-clinical-white text-primary px-8 py-4 rounded-lg font-button-text text-button-text shadow-lg hover:shadow-xl transition-all text-center">
                            Book Appointment
                        </a>
                        <a href="#/contact" class="border-2 border-on-primary text-on-primary px-8 py-4 rounded-lg font-button-text text-button-text hover:bg-on-primary/10 transition-all text-center">
                            Contact Clinic
                        </a>
                    </div>
                </div>
            </section>
            <!-- Insurance Partners -->
            <section class="py-12 border-b border-outline-variant bg-clinical-white">
                <div class="max-w-container-max mx-auto px-6 text-center">
                    <p class="font-label-sm text-label-sm text-outline mb-8">WE ACCEPT ALL MAJOR INSURANCE PROVIDERS</p>
                    <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-3xl">verified_user</span>
                            <span class="font-headline-md font-bold text-lg">HealthFirst</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-3xl">shield</span>
                            <span class="font-headline-md font-bold text-lg">BlueCross</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-3xl">health_metrics</span>
                            <span class="font-headline-md font-bold text-lg">AetnaCare</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-3xl">medical_information</span>
                            <span class="font-headline-md font-bold text-lg">GlobalHealth</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        ${Footer.render()}
        `;
    }
};
