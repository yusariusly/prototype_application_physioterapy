/* ============================================
   PhysioCare - Admin Therapist Management View
   ============================================ */

const AdminTherapistsView = {
    /**
     * Render the therapist management page
     */
    async render() {
        const therapists = await TherapistModel.all();

        const therapistCards = therapists.map((t, idx) => {
const statusMap = {
                'available': '<span class="w-2 h-2 rounded-full bg-success-green animate-pulse"></span> Available',
                'in-session': '<span class="w-2 h-2 rounded-full bg-secondary"></span> In Session',
                'off-duty': '<span class="w-2 h-2 rounded-full bg-outline"></span> Off Duty'
            };
            const statusClass = t.status === 'available' ? 'text-success-green' : t.status === 'in-session' ? 'text-secondary' : 'text-outline';
            const avatarBg = ['bg-surface-muted', 'bg-surface-container-low', 'bg-primary-fixed/30'][idx % 3];

            return `
            <div class="bg-clinical-white rounded-3xl p-6 shadow-clinical border border-outline-variant/20 hover:border-primary/30 transition-all flex flex-col">
                <div class="flex justify-between items-start mb-6">
                    <div class="flex gap-4">
                        <div class="relative">
                            <div class="w-20 h-20 rounded-2xl ${avatarBg} flex items-center justify-center text-primary">
                                <span class="material-symbols-outlined text-[40px]">person</span>
                            </div>
<div class="absolute -bottom-1 -right-1 w-6 h-6 ${t.status === 'available' ? 'bg-success-green' : t.status === 'in-session' ? 'bg-secondary' : 'bg-outline'} border-2 border-clinical-white rounded-full flex items-center justify-center">
                                <span class="material-symbols-outlined text-[14px] text-clinical-white" style="font-variation-settings: 'FILL' 1;">${t.status === 'available' ? 'check' : t.status === 'in-session' ? 'timer' : 'close'}</span>
                            </div>
                        </div>
                        <div>
                            <h3 class="font-headline-md text-[20px] text-on-surface mb-1">${t.name}</h3>
                            <div class="flex items-center gap-2 mb-2">
                                <span class="bg-secondary/10 text-secondary text-[11px] font-bold px-2 py-0.5 rounded-full border border-secondary/20">STR VERIFIED</span>
                                <span class="text-label-sm font-label-sm text-on-surface-variant">${t.title || 'Physiotherapist'}</span>
                            </div>
                            <p class="text-on-surface-variant text-sm flex items-center gap-1">
                                <span class="material-symbols-outlined text-sm">psychology</span>
                                ${t.specialization}
                            </p>
                        </div>
                    </div>
                    <button class="text-outline hover:text-primary transition-colors">
                        <span class="material-symbols-outlined">more_vert</span>
                    </button>
                </div>
                <div class="space-y-4 mb-6">
                    <div class="flex items-center justify-between">
                        <span class="text-label-sm font-label-sm text-on-surface-variant">Current Status</span>
                        <span class="flex items-center gap-1.5 ${statusClass} font-semibold">
                            ${statusMap[t.status] || statusMap.available}
                        </span>
                    </div>
                    <div class="p-4 bg-surface-muted rounded-2xl border border-outline-variant/30">
                        <p class="text-label-sm font-bold text-on-surface-variant uppercase mb-3 flex items-center gap-2">
                            <span class="material-symbols-outlined text-sm">schedule</span>
                            Upcoming Appointments
                        </p>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-sm font-medium">Budi Santoso</span>
                                <span class="text-sm bg-clinical-white px-2 py-1 rounded text-primary">14:30 - 15:30</span>
                            </div>
                            <div class="flex justify-between items-center opacity-60">
                                <span class="text-sm font-medium">Ani Rahayu</span>
                                <span class="text-sm bg-clinical-white px-2 py-1 rounded">16:00 - 17:00</span>
                            </div>
                        </div>
                    </div>
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
            </div>
            `;
        }).join('');

        return `
        <div class="font-body-md text-body-md bg-background text-on-surface">
        ${SidebarAdmin.render('therapists')}
        <main class="ml-64 min-h-screen">
            <!-- Top App Bar -->
            <header class="sticky top-0 z-40 h-16 px-8 bg-clinical-white dark:bg-surface-container-lowest border-b border-outline-variant flex justify-between items-center shadow-sm">
                <div class="flex items-center gap-8">
                    <span class="font-headline-md text-headline-md font-extrabold text-primary">PhysioAdmin</span>
                    <div class="hidden md:flex gap-6">
                        <a class="text-on-surface-variant hover:text-primary font-medium" href="#">Analytics</a>
                        <a class="text-on-surface-variant hover:text-primary font-medium" href="#">Reporting</a>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
                        <input class="pl-10 pr-4 py-2 bg-surface-muted border-none rounded-full text-body-md focus:ring-2 focus:ring-secondary w-64" placeholder="Search therapists..." type="text">
                    </div>
                    <button class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full relative">
                        <span class="material-symbols-outlined">notifications</span>
                        <span class="absolute top-2 right-2 w-2 h-2 bg-emergency-red rounded-full"></span>
                    </button>
                    <div class="h-8 w-px bg-outline-variant mx-2"></div>
                    <button class="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-button-text text-button-text hover:opacity-80 transition-all">
                        Quick Export
                    </button>
                    <button class="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-high rounded-full">account_circle</button>
                </div>
            </header>
            <div class="p-8 max-w-[1400px] mx-auto">
                <!-- Page Header Actions -->
                <div class="flex justify-between items-end mb-8">
                    <div>
                        <h2 class="font-headline-lg text-headline-lg text-on-surface mb-2">Manajemen Terapis</h2>
                        <p class="text-on-surface-variant max-w-2xl">Manage your clinical staff, monitor real-time availability, and coordinate patient schedules across the Central Branch facility.</p>
                    </div>
                    <button class="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-button-text text-button-text shadow-clinical hover:translate-y-[-2px] transition-all">
                        <span class="material-symbols-outlined">person_add</span>
                        Add New Therapist
                    </button>
                </div>
                <!-- Stats Summary -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="bg-clinical-white p-6 rounded-2xl shadow-clinical border border-outline-variant/30 flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-success-green/10 flex items-center justify-center text-success-green">
                            <span class="material-symbols-outlined">how_to_reg</span>
                        </div>
                        <div>
                            <p class="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">Available Now</p>
                            <p class="text-headline-md font-headline-md">${therapists.filter(t => t.status === 'available').length} <span class="text-body-md font-normal text-on-surface-variant">/ ${therapists.length}</span></p>
                        </div>
                    </div>
                    <div class="bg-clinical-white p-6 rounded-2xl shadow-clinical border border-outline-variant/30 flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                            <span class="material-symbols-outlined">event_busy</span>
                        </div>
                        <div>
                            <p class="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">In Session</p>
<p class="text-headline-md font-headline-md">${therapists.filter(t => t.status === 'in-session').length}</p>
                        </div>
                    </div>
                    <div class="bg-clinical-white p-6 rounded-2xl shadow-clinical border border-outline-variant/30 flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-warning-amber/10 flex items-center justify-center text-warning-amber">
                            <span class="material-symbols-outlined">pending_actions</span>
                        </div>
                        <div>
                            <p class="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">Daily Capacity</p>
                            <p class="text-headline-md font-headline-md">84%</p>
                        </div>
                    </div>
                    <div class="bg-clinical-white p-6 rounded-2xl shadow-clinical border border-outline-variant/30 flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span class="material-symbols-outlined">verified</span>
                        </div>
                        <div>
                            <p class="text-label-sm font-label-sm uppercase tracking-wider text-on-surface-variant">STR Verified</p>
                            <p class="text-headline-md font-headline-md">100%</p>
                        </div>
                    </div>
                </div>
                <!-- Therapist Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    ${therapistCards}
                    <!-- Add New Card -->
                    <button class="group bg-surface-container-lowest border-2 border-dashed border-outline-variant/50 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-primary/5 transition-all min-h-[350px]">
                        <div class="w-16 h-16 rounded-full bg-surface-muted flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
                            <span class="material-symbols-outlined text-3xl">add_circle</span>
                        </div>
                        <div class="text-center">
                            <h3 class="font-headline-md text-[20px] text-on-surface-variant group-hover:text-primary mb-1">Onboard Therapist</h3>
                            <p class="text-label-sm text-on-surface-variant">Add a new specialist to the clinical rotation</p>
                        </div>
                    </button>
                </div>
            </div>
</main>
        </div>
        `;
    },

    init() {}
};

