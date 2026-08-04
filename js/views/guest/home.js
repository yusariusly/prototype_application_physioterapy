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
                        Professional Rehabilitation
                    </div>
                    <h1 class="font-headline-lg text-headline-lg lg:text-[64px] lg:leading-[72px] text-on-background tracking-tight">
                        Pulih <span class="text-primary italic">Bersama</span> Kami
                    </h1>
                    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-[540px]">
                        Empowering your journey to recovery through personalized physiotherapy, evidence-based treatments, and compassionate clinical care.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="#/booking" class="bg-primary text-on-primary px-8 py-4 rounded-xl font-button-text text-button-text flex items-center justify-center gap-2 hover:bg-primary-container shadow-lg transition-all active:scale-[0.98]">
                            Book Appointment
                            <span class="material-symbols-outlined">calendar_today</span>
                        </a>
                        <a href="#/services" class="border-2 border-primary text-primary px-8 py-4 rounded-xl font-button-text text-button-text flex items-center justify-center gap-2 hover:bg-primary-fixed/20 transition-all">
                            View Services
                        </a>
                    </div>
                    <div class="flex items-center gap-6 pt-8">
                        <div class="flex -space-x-3">
                            <div class="w-10 h-10 rounded-full border-2 border-clinical-white bg-slate-200 overflow-hidden"></div>
                            <div class="w-10 h-10 rounded-full border-2 border-clinical-white bg-slate-200 overflow-hidden"></div>
                            <div class="w-10 h-10 rounded-full border-2 border-clinical-white bg-slate-200 overflow-hidden"></div>
                        </div>
                        <div class="text-on-surface-variant font-label-sm">
                            <span class="font-bold text-primary">500+</span> Patients recovered this month
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
                                <span class="font-bold text-primary">STR Verified</span>
                            </div>
                            <p class="text-[14px] text-on-surface-variant leading-tight">All our therapists are certified and professionally licensed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Why Choose Us - Bento Grid -->
        <section class="py-24 bg-clinical-white">
            <div class="max-w-container-max mx-auto px-6 md:px-section-padding-desktop">
                <div class="text-center mb-16 space-y-4">
                    <span class="font-label-sm text-secondary uppercase tracking-widest">Core Values</span>
                    <h2 class="font-headline-lg text-headline-lg text-on-background">Why Choose Us</h2>
                    <div class="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="group p-8 rounded-3xl bg-surface-muted hover:bg-primary transition-all duration-500 cursor-default">
                        <div class="w-16 h-16 rounded-2xl bg-primary group-hover:bg-primary-container flex items-center justify-center mb-6 transition-colors">
                            <span class="material-symbols-outlined text-on-primary text-[32px]">clinical_notes</span>
                        </div>
                        <h3 class="font-headline-md text-headline-md mb-4 text-on-background group-hover:text-on-primary">Evidence-Based</h3>
                        <p class="text-on-surface-variant group-hover:text-primary-fixed font-body-md">Our treatments are strictly guided by the latest clinical research and international health protocols.</p>
                    </div>
                    <div class="group p-8 rounded-3xl bg-surface-muted hover:bg-primary transition-all duration-500 cursor-default">
                        <div class="w-16 h-16 rounded-2xl bg-primary group-hover:bg-primary-container flex items-center justify-center mb-6 transition-colors">
                            <span class="material-symbols-outlined text-on-primary text-[32px]">psychology</span>
                        </div>
                        <h3 class="font-headline-md text-headline-md mb-4 text-on-background group-hover:text-on-primary">Patient-First</h3>
                        <p class="text-on-surface-variant group-hover:text-primary-fixed font-body-md">Every patient receives a unique care plan tailored to their lifestyle, age, and specific recovery goals.</p>
                    </div>
                    <div class="group p-8 rounded-3xl bg-surface-muted hover:bg-primary transition-all duration-500 cursor-default">
                        <div class="w-16 h-16 rounded-2xl bg-primary group-hover:bg-primary-container flex items-center justify-center mb-6 transition-colors">
                            <span class="material-symbols-outlined text-on-primary text-[32px]">ecg</span>
                        </div>
                        <h3 class="font-headline-md text-headline-md mb-4 text-on-background group-hover:text-on-primary">Advanced Tech</h3>
                        <p class="text-on-surface-variant group-hover:text-primary-fixed font-body-md">We utilize state-of-the-art diagnostic and therapeutic equipment for faster and safer recovery.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Our Expertise - High Fidelity Cards -->
        <section class="py-24 bg-surface-bright relative">
            <div class="max-w-container-max mx-auto px-6 md:px-section-padding-desktop">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div class="space-y-4">
                        <span class="font-label-sm text-secondary uppercase tracking-widest">Clinical Excellence</span>
                        <h2 class="font-headline-lg text-headline-lg text-on-background">Our Specialized Expertise</h2>
                    </div>
                    <a class="text-primary font-bold flex items-center gap-2 group" href="#/services">
                        Explore All Services
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
                        <span class="font-label-sm text-secondary uppercase tracking-widest">Patient Voices</span>
                        <h2 class="font-headline-lg text-headline-lg text-on-background">Restoring Quality of Life</h2>
                        <div class="space-y-8">
                            <div class="flex gap-4 p-6 bg-surface-muted rounded-2xl relative">
                                <span class="material-symbols-outlined absolute -top-4 -left-4 text-[48px] text-primary opacity-20">format_quote</span>
                                <div class="flex-1">
                                    <p class="font-body-md text-on-surface-variant italic mb-4">"After my sports injury, I thought I'd never run again. The team at PhysioCare designed a program that was challenging yet safe. Today, I'm back on the track."</p>
                                    <div class="flex items-center gap-3">
                                        <div class="w-12 h-12 rounded-full bg-slate-300"></div>
                                        <div>
                                            <div class="font-bold text-on-background">David Kurniawan</div>
                                            <div class="font-label-sm text-secondary">Marathon Runner</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-4 p-6 bg-primary-fixed/20 rounded-2xl relative">
                                <div class="flex-1">
                                    <p class="font-body-md text-on-surface-variant italic mb-4">"PhysioCare helped my father recover his mobility after his stroke. The patience and expertise shown by the therapists were truly exceptional."</p>
                                    <div class="flex items-center gap-3">
                                        <div class="w-12 h-12 rounded-full bg-slate-300"></div>
                                        <div>
                                            <div class="font-bold text-on-background">Siti Aminah</div>
                                            <div class="font-label-sm text-secondary">Family Caregiver</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-surface-muted p-12 rounded-[40px] flex flex-col items-center justify-center text-center space-y-stack-lg">
                        <div class="font-label-sm text-primary uppercase tracking-tighter">Recognized By</div>
                        <div class="grid grid-cols-2 gap-8 w-full opacity-60">
                            <div class="flex flex-col items-center gap-2">
                                <span class="material-symbols-outlined text-[40px] text-primary">health_and_safety</span>
                                <span class="font-bold text-on-surface">MOH Certified</span>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <span class="material-symbols-outlined text-[40px] text-primary">workspace_premium</span>
                                <span class="font-bold text-on-surface">ISO 9001:2015</span>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <span class="material-symbols-outlined text-[40px] text-primary">award_star</span>
                                <span class="font-bold text-on-surface">Top Physio 2023</span>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <span class="material-symbols-outlined text-[40px] text-primary">verified_user</span>
                                <span class="font-bold text-on-surface">KARS Accredited</span>
                            </div>
                        </div>
                        <div class="pt-8 border-t border-outline-variant w-full">
                            <div class="font-headline-lg text-primary text-glow">98%</div>
                            <div class="font-label-sm text-on-surface-variant">Patient Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- CTA Section -->
        <section class="py-24 bg-primary text-on-primary">
            <div class="max-w-container-max mx-auto px-6 md:px-section-padding-desktop text-center">
                <h2 class="font-headline-lg text-headline-lg mb-8 max-w-3xl mx-auto">Ready to start your journey back to full health?</h2>
                <p class="font-body-lg text-primary-fixed mb-12 max-w-2xl mx-auto">Book your initial assessment today and receive a personalized recovery roadmap from our specialists.</p>
                <div class="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="#/booking" class="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-2xl font-button-text text-button-text hover:scale-105 transition-transform shadow-xl">
                        Schedule Assessment
                    </a>
                    <a href="#/contact" class="bg-primary-container text-on-primary-container border border-primary-fixed/30 px-10 py-5 rounded-2xl font-button-text text-button-text hover:bg-on-primary-fixed-variant transition-colors">
                        Contact Specialist
                    </a>
                </div>
            </div>
        </section>
        ${Footer.render()}
        `;
    }
};
