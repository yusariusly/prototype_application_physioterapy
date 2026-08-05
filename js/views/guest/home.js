/* ============================================
   PhysioCare - Guest Home View
   ============================================ */

const GuestHomeView = {
    /**
     * Render the public home page
     */
    async render() {
        const services = await ServiceModel.all();

        // Service cards for expertise section (use first 3)
        const expertiseCards = services.slice(0, 3).map(s => `
            <div class="relative group rounded-3xl overflow-hidden h-[450px] shadow-lg">
                <div class="absolute inset-0">
                    <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="${s.name}" src="${s.image}" alt="${s.name}">
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/20 to-transparent"></div>
                <div class="absolute bottom-0 p-8 w-full text-clinical-white">
                    <div class="mb-4 w-12 h-12 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center">
                        <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">${s.icon}</span>
                    </div>
                    <h4 class="font-headline-md text-headline-md mb-2">${s.name}</h4>
                    <p class="text-primary-fixed text-[14px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">${s.shortDescription}</p>
                </div>
            </div>
        `).join('');

        return `
        ${NavbarGuest.render('home')}
        <!-- Hero Section -->
        <section class="relative min-h-[85vh] flex items-center overflow-hidden bg-surface-bright">
            <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-gradient-to-r from-surface-bright via-surface-bright/80 to-transparent"></div>
            </div>
            <div class="relative z-10 max-w-container-max mx-auto px-6 md:px-section-padding-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
                <div class="space-y-stack-lg">
<div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full font-label-sm text-label-sm uppercase tracking-widest">
                        <span class="material-symbols-outlined text-[14px]">verified</span>
                        ${t('home.badge')}
                    </div>
                    <h1 class="font-headline-lg text-headline-lg lg:text-[64px] lg:leading-[72px] text-on-background tracking-tight">
                        ${t('home.heroTitle')}
                    </h1>
                    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-[540px]">
                        ${t('home.heroSub')}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="#/booking" class="bg-primary text-on-primary px-8 py-4 rounded-xl font-button-text text-button-text flex items-center justify-center gap-2 hover:bg-primary-container shadow-lg transition-all active:scale-[0.98]">
                            ${t('home.bookAppointment')}
                            <span class="material-symbols-outlined">calendar_today</span>
                        </a>
                        <a href="#/services" class="border-2 border-primary text-primary px-8 py-4 rounded-xl font-button-text text-button-text flex items-center justify-center gap-2 hover:bg-primary-fixed/20 transition-all">
                            ${t('home.viewServices')}
                        </a>
                    </div>
                    <div class="flex items-center gap-6 pt-8">
                        <div class="flex -space-x-3">
                            <div class="w-10 h-10 rounded-full border-2 border-clinical-white bg-slate-200 overflow-hidden"></div>
                            <div class="w-10 h-10 rounded-full border-2 border-clinical-white bg-slate-200 overflow-hidden"></div>
                            <div class="w-10 h-10 rounded-full border-2 border-clinical-white bg-slate-200 overflow-hidden"></div>
                        </div>
                        <div class="text-on-surface-variant font-label-sm">
                            <span class="font-bold text-primary">500+</span> ${t('home.patientsRecovered')}
                        </div>
                    </div>
                </div>
                <div class="hidden lg:block relative h-[600px]">
                    <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-fixed/20 rounded-full blur-3xl"></div>
                    <div class="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-[12px] border-clinical-white bg-primary-fixed/30 flex items-center justify-center">
                        <span class="material-symbols-outlined text-[120px] text-primary" style="font-variation-settings: 'FILL' 1;">health_and_safety</span>
                        <div class="absolute bottom-8 left-8 p-6 glass-card rounded-2xl shadow-xl max-w-[280px]">
                            <div class="flex items-center gap-3 mb-2">
                                <div class="p-2 bg-success-green/20 rounded-lg">
                                    <span class="material-symbols-outlined text-success-green" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                </div>
<span class="font-bold text-primary">${t('home.strVerified')}</span>
                            </div>
                            <p class="text-[14px] text-on-surface-variant leading-tight">${t('home.certified')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Why Choose Us - Bento Grid -->
        <section class="py-24 bg-clinical-white">
            <div class="max-w-container-max mx-auto px-6 md:px-section-padding-desktop">
<div class="text-center mb-16 space-y-4">
                    <span class="font-label-sm text-secondary uppercase tracking-widest">${t('home.coreValues')}</span>
                    <h2 class="font-headline-lg text-headline-lg text-on-background">${t('home.whyChoose')}</h2>
                    <div class="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="group p-8 rounded-3xl bg-surface-muted hover:bg-primary transition-all duration-500 cursor-default">
                        <div class="w-16 h-16 rounded-2xl bg-primary group-hover:bg-primary-container flex items-center justify-center mb-6 transition-colors">
                            <span class="material-symbols-outlined text-on-primary text-[32px]">clinical_notes</span>
                        </div>
                        <h3 class="font-headline-md text-headline-md mb-4 text-on-background group-hover:text-on-primary">${t('home.evidenceBased')}</h3>
                        <p class="text-on-surface-variant group-hover:text-primary-fixed font-body-md">${t('home.evidenceBasedDesc')}</p>
                    </div>
                    <div class="group p-8 rounded-3xl bg-surface-muted hover:bg-primary transition-all duration-500 cursor-default">
                        <div class="w-16 h-16 rounded-2xl bg-primary group-hover:bg-primary-container flex items-center justify-center mb-6 transition-colors">
                            <span class="material-symbols-outlined text-on-primary text-[32px]">psychology</span>
                        </div>
                        <h3 class="font-headline-md text-headline-md mb-4 text-on-background group-hover:text-on-primary">${t('home.patientFirst')}</h3>
                        <p class="text-on-surface-variant group-hover:text-primary-fixed font-body-md">${t('home.patientFirstDesc')}</p>
                    </div>
                    <div class="group p-8 rounded-3xl bg-surface-muted hover:bg-primary transition-all duration-500 cursor-default">
                        <div class="w-16 h-16 rounded-2xl bg-primary group-hover:bg-primary-container flex items-center justify-center mb-6 transition-colors">
                            <span class="material-symbols-outlined text-on-primary text-[32px]">ecg</span>
                        </div>
                        <h3 class="font-headline-md text-headline-md mb-4 text-on-background group-hover:text-on-primary">${t('home.advancedTech')}</h3>
                        <p class="text-on-surface-variant group-hover:text-primary-fixed font-body-md">${t('home.advancedTechDesc')}</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Our Expertise - High Fidelity Cards -->
        <section class="py-24 bg-surface-bright relative">
            <div class="max-w-container-max mx-auto px-6 md:px-section-padding-desktop">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div class="space-y-4">
                        <span class="font-label-sm text-secondary uppercase tracking-widest">${t('home.clinicalExcellence')}</span>
                        <h2 class="font-headline-lg text-headline-lg text-on-background">${t('home.specializedExpertise')}</h2>
                    </div>
                    <a class="text-primary font-bold flex items-center gap-2 group" href="#/services">
                        ${t('home.exploreAllServices')}
                        <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    ${expertiseCards}
                </div>
            </div>
        </section>
        <!-- Testimonials & Trust Badges -->
        <section class="py-24 bg-clinical-white overflow-hidden">
            <div class="max-w-container-max mx-auto px-6 md:px-section-padding-desktop">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div class="space-y-stack-lg">
                        <span class="font-label-sm text-secondary uppercase tracking-widest">${t('home.patientVoices')}</span>
                        <h2 class="font-headline-lg text-headline-lg text-on-background">${t('home.restoringQuality')}</h2>
                        <div class="space-y-8">
                            <div class="flex gap-4 p-6 bg-surface-muted rounded-2xl relative">
                                <span class="material-symbols-outlined absolute -top-4 -left-4 text-[48px] text-primary opacity-20">format_quote</span>
                                <div class="flex-1">
                                    <p class="font-body-md text-on-surface-variant italic mb-4">${t('home.testimonial1')}</p>
                                    <div class="flex items-center gap-3">
                                        <div class="w-12 h-12 rounded-full bg-slate-300"></div>
                                        <div>
                                            <div class="font-bold text-on-background">David Kurniawan</div>
                                            <div class="font-label-sm text-secondary">${t('home.marathonRunner')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-4 p-6 bg-primary-fixed/20 rounded-2xl relative">
                                <div class="flex-1">
                                    <p class="font-body-md text-on-surface-variant italic mb-4">${t('home.testimonial2')}</p>
                                    <div class="flex items-center gap-3">
                                        <div class="w-12 h-12 rounded-full bg-slate-300"></div>
                                        <div>
                                            <div class="font-bold text-on-background">Siti Aminah</div>
                                            <div class="font-label-sm text-secondary">${t('home.familyCaregiver')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-surface-muted p-12 rounded-[40px] flex flex-col items-center justify-center text-center space-y-stack-lg">
                        <div class="font-label-sm text-primary uppercase tracking-tighter">${t('home.recognizedBy')}</div>
                        <div class="grid grid-cols-2 gap-8 w-full opacity-60">
                            <div class="flex flex-col items-center gap-2">
                                <span class="material-symbols-outlined text-[40px] text-primary">health_and_safety</span>
                                <span class="font-bold text-on-surface">${t('home.mohCertified')}</span>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <span class="material-symbols-outlined text-[40px] text-primary">workspace_premium</span>
                                <span class="font-bold text-on-surface">${t('home.iso')}</span>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <span class="material-symbols-outlined text-[40px] text-primary">award_star</span>
                                <span class="font-bold text-on-surface">${t('home.topPhysio')}</span>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <span class="material-symbols-outlined text-[40px] text-primary">verified_user</span>
                                <span class="font-bold text-on-surface">${t('home.kars')}</span>
                            </div>
                        </div>
                        <div class="pt-8 border-t border-outline-variant w-full">
                            <div class="font-headline-lg text-primary text-glow">98%</div>
                            <div class="font-label-sm text-on-surface-variant">${t('home.satisfactionRate')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- CTA Section -->
        <section class="py-24 bg-primary text-on-primary">
            <div class="max-w-container-max mx-auto px-6 md:px-section-padding-desktop text-center">
                <h2 class="font-headline-lg text-headline-lg mb-8 max-w-3xl mx-auto">${t('home.ctaTitle')}</h2>
                <p class="font-body-lg text-primary-fixed mb-12 max-w-2xl mx-auto">${t('home.ctaDesc')}</p>
                <div class="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="#/booking" class="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-2xl font-button-text text-button-text hover:scale-105 transition-transform shadow-xl">
                        ${t('home.scheduleAssessment')}
                    </a>
                    <a href="#/contact" class="bg-primary-container text-on-primary-container border border-primary-fixed/30 px-10 py-5 rounded-2xl font-button-text text-button-text hover:bg-on-primary-fixed-variant transition-colors">
                        ${t('home.contactSpecialist')}
                    </a>
                </div>
            </div>
        </section>
        ${Footer.render()}
        `;
    }
};
