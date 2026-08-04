/* ============================================
   PhysioCare - Booking Summary Card Component
   ============================================ */

const BookingSummaryCard = {
    /**
     * Render the booking summary sidebar card
     * @param {object} data - { service, therapist, date, time, price }
     */
    render(data = {}) {
const service = data.service || { name: 'Standard Physiotherapy', shortDescription: '60-minute initial consult' };
        const therapist = data.therapist || { name: 'Dr. Sarah Mitchell', image: null, strVerified: true };
        const price = data.price != null ? Service.formatPrice(data.price) : 'Mulai dari Rp199.000';

        return `
        <div class="bg-clinical-white rounded-xl shadow-[0_20px_40px_rgba(14,116,144,0.05)] border border-surface-muted overflow-hidden sticky top-24">
            <div class="bg-primary-container/10 p-6">
                <h2 class="font-headline-md text-headline-md text-primary">Booking Summary</h2>
            </div>
            <div class="p-6 space-y-6">
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-lg bg-surface-muted flex items-center justify-center text-primary">
                        <span class="material-symbols-outlined">medical_services</span>
                    </div>
                    <div>
                        <p class="text-[12px] font-label-sm text-on-surface-variant uppercase">Service</p>
                        <p class="font-body-md font-bold text-on-surface">${service.name}</p>
                        <p class="text-[14px] text-on-surface-variant">${service.shortDescription || '60-minute consult'}</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-full overflow-hidden relative border-2 border-surface-muted ${therapist.image ? '' : 'bg-surface-container-highest flex items-center justify-center'}" ${therapist.image ? '' : ''}>
                        ${therapist.image
                            ? `<img class="w-full h-full object-cover" data-alt="${therapist.name}" src="${therapist.image}" alt="${therapist.name}">`
                            : `<span class="material-symbols-outlined text-primary">person</span>`
                        }
                    </div>
                    <div>
                        <p class="text-[12px] font-label-sm text-on-surface-variant uppercase">Therapist</p>
                        <p class="font-body-md font-bold text-on-surface">${therapist.name}</p>
                        ${therapist.strVerified ? `
                        <div class="flex items-center gap-1">
                            <span class="bg-success-green/10 text-success-green text-[10px] font-bold px-2 py-0.5 rounded uppercase">STR Verified</span>
                        </div>` : ''}
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-lg bg-surface-muted flex items-center justify-center text-primary">
                        <span class="material-symbols-outlined">calendar_today</span>
                    </div>
                    <div>
                        <p class="text-[12px] font-label-sm text-on-surface-variant uppercase">Schedule</p>
                        <p class="font-body-md font-bold text-on-surface">${data.date || 'Thursday, Oct 24'}</p>
                        <p class="text-[14px] text-on-surface-variant">${data.time || '10:00 AM — 11:00 AM'}</p>
                    </div>
                </div>
                <div class="pt-6 border-t border-surface-muted flex justify-between items-center">
                    <div>
                        <p class="font-body-md text-on-surface">Total Price</p>
                        <p class="text-[12px] text-on-surface-variant">All taxes included</p>
                    </div>
                    <p class="font-headline-md text-headline-md text-primary font-bold">${price}</p>
                </div>
                <div class="p-4 bg-surface-muted rounded-lg border border-outline-variant/30 flex gap-3">
                    <span class="material-symbols-outlined text-warning-amber">info</span>
                    <p class="text-[12px] leading-relaxed text-on-surface-variant">Cancellation is free up to 24 hours before your scheduled appointment.</p>
                </div>
            </div>
        </div>`;
    }
};
