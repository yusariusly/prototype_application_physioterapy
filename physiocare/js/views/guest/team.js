/* ============================================
   PhysioCare - Guest Team View
   ============================================ */

const GuestTeamView = {
    /**
     * Render the team page
     */
    async render() {
        const therapists = await TherapistModel.all();
        const cards = therapists.map(t => TherapistCard.render(t, 'public')).join('');

        return `
        ${NavbarGuest.render('team')}
        <main class="min-h-screen bg-background">
            <!-- Hero -->
            <section class="relative py-20 px-6 bg-surface-container-low overflow-hidden">
                <div class="absolute inset-0 opacity-10 pointer-events-none">
                    <div class="absolute top-0 left-0 w-96 h-96 bg-primary-container rounded-full blur-3xl -ml-48 -mt-48"></div>
                </div>
                <div class="max-w-container-max mx-auto text-center relative z-10">
                    <span class="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm mb-6">
                        STR VERIFIED THERAPISTS
                    </span>
                    <h1 class="font-headline-lg text-headline-lg mb-6">Meet Our Expert Team</h1>
                    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                        Every therapist at PhysioCare is certified with STR and rigorously vetted. We bring together specialists from multiple disciplines to ensure you receive the best care.
                    </p>
                </div>
            </section>
            <!-- Team Grid -->
            <section class="py-20 px-6 max-w-container-max mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${cards}
                </div>
            </section>
            <!-- Why Work With Us -->
            <section class="py-20 px-6 bg-primary text-on-primary">
                <div class="max-w-container-max mx-auto text-center">
                    <h2 class="font-headline-lg text-headline-lg mb-6">Why Patients Trust Our Therapists?</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div class="flex flex-col items-center gap-3">
                            <span class="material-symbols-outlined text-[48px]">verified</span>
                            <h3 class="font-headline-md text-headline-md">100% STR Certified</h3>
                            <p class="text-primary-fixed opacity-90">All therapists are registered and licensed professionals.</p>
                        </div>
                        <div class="flex flex-col items-center gap-3">
                            <span class="material-symbols-outlined text-[48px]">monitoring</span>
                            <h3 class="font-headline-md text-headline-md">Data-Driven</h3>
                            <p class="text-primary-fixed opacity-90">Evidence-based treatment plans for measurable results.</p>
                        </div>
                        <div class="flex flex-col items-center gap-3">
                            <span class="material-symbols-outlined text-[48px]">favorite</span>
                            <h3 class="font-headline-md text-headline-md">Compassionate Care</h3>
                            <p class="text-primary-fixed opacity-90">We combine clinical expertise with genuine empathy.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        ${Footer.render()}
        `;
    }
};
