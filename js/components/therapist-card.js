/* ============================================
   PhysioCare - Therapist Card Component
   ============================================ */

const TherapistCard = {
    /**
     * Render a therapist card
     * @param {object} therapist - therapist data
     * @param {string} variant - 'public' or 'admin'
     */
    render(therapist, variant = 'public') {
        if (variant === 'admin') {
            const statusBadge = this.adminStatusBadge(therapist.status);
            return this.renderAdminCard(therapist, statusBadge);
        }
        return this.renderPublicCard(therapist);
    },

    adminStatusBadge(status) {
        const map = {
            'available': `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-green/10 text-success-green border border-success-green/20">Available</span>`,
            'in-session': `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning-amber/10 text-warning-amber border border-warning-amber/20">In Session</span>`,
            'off-duty': `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-outline/10 text-on-surface-variant border border-outline/20">Off Duty</span>`
        };
        return map[status] || '';
    },

    adminStatusDot(status) {
        const map = {
            'available': { color: 'bg-success-green', label: 'Available', icon: 'check', iconColor: 'text-clinical-white' },
            'in-session': { color: 'bg-secondary', label: 'In Session (24m left)', icon: 'timer', iconColor: 'text-clinical-white' },
            'off-duty': { color: 'bg-outline', label: 'Off Duty', icon: 'close', iconColor: 'text-clinical-white' }
        };
        const s = map[status] || map['off-duty'];
        return `
            <span class="flex items-center gap-1.5 text-${status === 'available' ? 'success-green' : status === 'in-session' ? 'secondary' : 'outline'} font-semibold">
                <span class="w-2 h-2 rounded-full ${s.color} ${status === 'available' ? 'animate-pulse' : ''}"></span>
                ${s.label}
            </span>`;
    },

    renderPublicCard(therapist) {
        const ratingStars = Array.from({ length: 5 }, (_, i) =>
            `<span class="material-symbols-outlined text-sm ${i < Math.round(therapist.rating) ? '' : 'opacity-30'}" style="font-variation-settings: 'FILL' 1;">star</span>`
        ).join('');

        return `
        <div class="bg-clinical-white rounded-2xl p-6 shadow-sm border border-outline-variant/20 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
            <div class="flex items-start gap-4 mb-6">
                <div class="relative">
                    <img class="w-20 h-20 rounded-2xl object-cover ring-4 ring-surface-muted" data-alt="${therapist.name}" src="${therapist.image}" alt="${therapist.name}">
                    <div class="absolute -bottom-1 -right-1 w-6 h-6 ${therapist.status === 'available' ? 'bg-success-green' : 'bg-outline'} border-2 border-clinical-white rounded-full flex items-center justify-center">
                        <span class="material-symbols-outlined text-[14px] text-clinical-white" style="font-variation-settings: 'FILL' 1;">${therapist.status === 'available' ? 'check' : 'schedule'}</span>
                    </div>
                </div>
                <div class="flex-grow">
                    <h3 class="font-headline-md text-[20px] text-on-surface mb-1">${therapist.name}</h3>
                    <div class="flex items-center gap-2 mb-2">
                        ${therapist.strVerified ? `<span class="bg-primary-fixed text-on-primary-fixed-variant text-[10px] px-2 py-0.5 rounded-full font-label-sm uppercase">STR Verified</span>` : ''}
                        <span class="text-label-sm font-label-sm text-on-surface-variant">${therapist.title}</span>
                    </div>
                    <p class="text-on-surface-variant text-sm flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">psychology</span> 
                        ${therapist.specialization}
                    </p>
                </div>
            </div>
            <p class="text-sm text-on-surface-variant mb-4">${therapist.experience} years experience</p>
            <div class="flex items-center text-warning-amber mb-6">
                ${ratingStars}
                <span class="text-xs font-bold text-on-surface ml-2">${therapist.rating} (${therapist.reviews} reviews)</span>
            </div>
            <a href="#/booking" class="block w-full py-3 bg-primary text-on-primary rounded-lg font-button-text text-center hover:bg-primary-container transition-all active:scale-95">
                Book Schedule
            </a>
        </div>`;
    },

    renderAdminCard(therapist, statusBadge) {
        const scheduleItems = (therapist.schedule || []).map(s => `
            <div class="flex justify-between items-center ${s.patient.includes('Current') ? 'text-primary' : ''}">
                <span class="text-sm font-medium${s.patient.includes('Current') ? ' font-bold' : ''}">${s.patient}</span>
                <span class="text-sm bg-clinical-white px-2 py-1 rounded ${s.patient.includes('Current') ? 'text-primary bg-primary/10' : ''}">${s.time}</span>
            </div>
        `).join('');

        const isOffDuty = therapist.status === 'off-duty';

        return `
        <div class="bg-clinical-white rounded-3xl p-6 shadow-clinical border border-outline-variant/20 hover:border-primary/30 transition-all flex flex-col ${isOffDuty ? 'grayscale-[0.5] opacity-80' : ''}">
            <div class="flex justify-between items-start mb-6">
                <div class="flex gap-4">
                    <div class="relative">
                        <img class="w-20 h-20 rounded-2xl object-cover ring-4 ring-surface-muted" data-alt="${therapist.name}" src="${therapist.image}" alt="${therapist.name}">
                        <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-success-green border-2 border-clinical-white rounded-full flex items-center justify-center">
                            <span class="material-symbols-outlined text-[14px] text-clinical-white" style="font-variation-settings: 'FILL' 1;">check</span>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-headline-md text-[20px] text-on-surface mb-1">${therapist.name}</h3>
                        <div class="flex items-center gap-2 mb-2">
                            ${therapist.strVerified ? `<span class="bg-secondary/10 text-secondary text-[11px] font-bold px-2 py-0.5 rounded-full border border-secondary/20">STR VERIFIED</span>` : ''}
                            <span class="text-label-sm font-label-sm text-on-surface-variant">${therapist.title}</span>
                        </div>
                        <p class="text-on-surface-variant text-sm flex items-center gap-1">
                            <span class="material-symbols-outlined text-sm">psychology</span>
                            ${therapist.specialization}
                        </p>
                    </div>
                </div>
                <button class="text-outline hover:text-primary transition-colors" aria-label="More options">
                    <span class="material-symbols-outlined">more_vert</span>
                </button>
            </div>
            <div class="space-y-4 mb-6">
                <div class="flex items-center justify-between">
                    <span class="text-label-sm font-label-sm text-on-surface-variant">Current Status</span>
                    ${this.adminStatusDot(therapist.status)}
                </div>
                ${isOffDuty ? `
                <div class="p-4 bg-surface-muted rounded-2xl border border-outline-variant/30 italic">
                    <p class="text-label-sm font-bold text-on-surface-variant uppercase mb-3 flex items-center gap-2">
                        <span class="material-symbols-outlined text-sm">event</span>
                        Next Availability
                    </p>
                    <p class="text-sm text-on-surface-variant">${therapist.nextAvailability || 'Not available today'}</p>
                </div>
                ` : `
                <div class="p-4 bg-surface-muted rounded-2xl border border-outline-variant/30">
                    <p class="text-label-sm font-bold text-on-surface-variant uppercase mb-3 flex items-center gap-2">
                        <span class="material-symbols-outlined text-sm">schedule</span>
                        Upcoming Appointments
                    </p>
                    <div class="space-y-3">
                        ${scheduleItems || '<p class="text-sm text-on-surface-variant">No upcoming appointments</p>'}
                    </div>
                </div>
                `}
            </div>
            <div class="mt-auto grid grid-cols-2 gap-3">
                <button class="bg-surface-muted text-on-surface-variant hover:bg-surface-container-high px-4 py-3 rounded-xl font-button-text text-button-text transition-colors flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg">calendar_today</span>
                    Schedule
                </button>
                <button class="bg-primary text-on-primary hover:opacity-90 px-4 py-3 rounded-xl font-button-text text-button-text transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-lg">edit</span>
                    Edit Profile
                </button>
            </div>
        </div>`;
    }
};
