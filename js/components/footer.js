/* ============================================
   PhysioCare - Shared Footer Component
   ============================================ */

const Footer = {
    render() {
        return `
        <footer class="bg-surface-muted w-full">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter px-6 md:px-section-padding-desktop py-12 max-w-container-max mx-auto">
                <div class="space-y-4">
                    <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">medical_services</span>
                        <span class="font-headline-md text-headline-md font-bold text-primary">PhysioCare</span>
                    </div>
<p class="text-on-surface-variant font-body-md pr-8">${t('footer.about')}</p>
                    <div class="flex gap-4">
                        <a class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#" aria-label="Social">
                            <span class="material-symbols-outlined text-[20px]">public</span>
                        </a>
                        <a class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all" href="#" aria-label="Email">
                            <span class="material-symbols-outlined text-[20px]">mail</span>
                        </a>
                    </div>
                </div>
                <div class="space-y-6">
                    <div class="font-bold text-on-background uppercase tracking-wider font-label-sm">${t('footer.quickLinks')}</div>
                    <div class="flex flex-col gap-3">
                        <a class="text-on-surface-variant font-body-md hover:text-secondary underline decoration-2 underline-offset-4 transition-opacity" href="#/services">${t('nav.services')}</a>
                        <a class="text-on-surface-variant font-body-md hover:text-secondary underline decoration-2 underline-offset-4 transition-opacity" href="#/team">${t('nav.team')}</a>
                        <a class="text-on-surface-variant font-body-md hover:text-secondary underline decoration-2 underline-offset-4 transition-opacity" href="#/contact">${t('footer.contactUs')}</a>
                        <a class="text-on-surface-variant font-body-md hover:text-secondary underline decoration-2 underline-offset-4 transition-opacity" href="#/booking">${t('footer.bookAppointment')}</a>
                    </div>
                </div>
                <div class="space-y-6">
                    <div class="font-bold text-on-background uppercase tracking-wider font-label-sm">${t('footer.ourClinic')}</div>
                    <div class="space-y-4">
                        <div class="flex gap-3">
                            <span class="material-symbols-outlined text-primary">location_on</span>
<div class="text-on-surface-variant font-body-md">
                                ${t('footer.address')}
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <span class="material-symbols-outlined text-primary">schedule</span>
                            <div class="text-on-surface-variant font-body-md">
                                ${t('footer.monSat')}<br>${t('footer.sunday')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-w-container-max mx-auto px-6 md:px-section-padding-desktop py-8 border-t border-outline-variant/30 text-center text-on-surface-variant font-body-md">
                ${t('footer.rights')}
            </div>
        </footer>`;
    }
};
