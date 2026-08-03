/* ============================================
   PhysioCare - Patient Dashboard View
   ============================================ */

const PatientDashboardView = {
    /**
     * Render the patient dashboard page
     */
    async render() {
        const user = User.getCurrentUser();
        const name = user ? user.name.split(' ')[0] : 'James';
        const appointments = await AppointmentModel.forPatient(user ? user.patientId : 'PC-8842');
        const upcoming = appointments.filter(a => a.status === 'confirmed')[0] || null;
        const therapyHistory = appointments.filter(a => a.status === 'completed');

        // Exercise program
        const exercises = [
            {
                title: "Pelvic Tilts (Core Stability)",
                sets: "3 sets × 15 reps",
                status: "Completed",
                statusColor: "text-success-green",
                statusIcon: "check_circle",
                mins: "10 MINS"
            },
            {
                title: "Cat-Cow Stretch",
                sets: "2 sets × 10 reps",
                status: "Pending",
                statusColor: "text-warning-amber",
                statusIcon: "schedule",
                mins: "5 MINS"
            },
            {
                title: "Glute Bridges",
                sets: "3 sets × 12 reps",
                status: "Pending",
                statusColor: "text-warning-amber",
                statusIcon: "schedule",
                mins: "12 MINS"
            }
        ];

        const exerciseCards = exercises.map(e => `
            <div class="group cursor-pointer">
                <div class="relative aspect-video rounded-lg overflow-hidden mb-3 bg-surface-container-low flex items-center justify-center">
                    <span class="material-symbols-outlined text-[56px] text-primary" style="font-variation-settings: 'FILL' 1;">fitness_center</span>
                    <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div class="bg-clinical-white/90 p-2 rounded-full">
                            <span class="material-symbols-outlined text-primary text-3xl">play_arrow</span>
                        </div>
                    </div>
                    <div class="absolute bottom-2 left-2">
                        <span class="bg-primary/80 backdrop-blur-md text-on-primary text-[10px] px-2 py-0.5 rounded uppercase font-bold">${e.mins}</span>
                    </div>
                </div>
                <h4 class="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">${e.title}</h4>
                <div class="flex items-center justify-between text-label-sm font-label-sm">
                    <span class="text-on-surface-variant">${e.sets}</span>
                    <span class="${e.statusColor} flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">${e.statusIcon}</span> ${e.status}
                    </span>
                </div>
            </div>
        `).join('');

        const historyRows = therapyHistory.map(h => `
            <tr class="hover:bg-surface-muted/50 transition-colors">
                <td class="py-5 px-2">
                    <div class="font-bold">${h.date}</div>
                    <div class="text-xs text-on-surface-variant">${h.time}</div>
                </td>
                <td class="py-5 px-2">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-secondary font-bold text-xs">${h.therapist.split(' ').slice(0,2).map(w=>w[0]).join('')}</div>
                        <span>${h.therapist}</span>
                    </div>
                </td>
                <td class="py-5 px-2">
                    <span class="bg-surface-variant text-primary text-xs px-2 py-1 rounded font-medium">${h.assessment ? h.assessment.sessionType : 'Therapy Session'}</span>
                </td>
                <td class="py-5 px-2">
                    <p class="text-sm text-on-surface-variant line-clamp-1 max-w-md">${h.assessment ? h.assessment.notes : 'Session completed'}</p>
                </td>
                <td class="py-5 px-2 text-right">
                    <button class="text-primary hover:text-secondary font-button-text text-button-text">View Full Note</button>
                </td>
            </tr>
        `).join('');

        return `
        ${NavbarPatient.render('dashboard', name)}
        <main class="max-w-container-max mx-auto px-gutter py-stack-lg space-y-stack-lg">
            <!-- Personalized Hero & Snapshot -->
            <section class="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
                <div class="lg:col-span-8 flex flex-col justify-center bg-primary-container text-on-primary-container p-stack-lg rounded-xl shadow-lg relative overflow-hidden group">
                    <div class="absolute -right-16 -top-16 w-64 h-64 bg-secondary-container opacity-20 rounded-full blur-3xl transition-transform group-hover:scale-110 duration-700"></div>
                    <h1 class="font-headline-lg text-headline-lg mb-stack-sm">Selamat datang kembali, ${name}</h1>
                    <p class="font-body-lg text-body-lg opacity-90 mb-stack-lg">Your recovery is our priority. You're doing great on your journey to full mobility.</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-stack-md">
                        <div class="bg-clinical-white/10 backdrop-blur-sm p-stack-md rounded-lg border border-clinical-white/20">
                            <span class="font-label-sm text-label-sm uppercase tracking-widest opacity-70 block mb-1">Next Session</span>
                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined text-secondary-fixed">calendar_today</span>
                                <span class="font-headline-md text-headline-md">${upcoming ? upcoming.date + ', ' + upcoming.time : 'Belum ada'}</span>
                            </div>
                        </div>
                        <div class="bg-clinical-white/10 backdrop-blur-sm p-stack-md rounded-lg border border-clinical-white/20">
                            <div class="flex justify-between items-end mb-2">
                                <span class="font-label-sm text-label-sm uppercase tracking-widest opacity-70">Recovery Progress</span>
                                <span class="font-headline-md text-headline-md">${user ? user.recoveryProgress : 65}%</span>
                            </div>
                            <div class="w-full bg-clinical-white/20 h-2.5 rounded-full overflow-hidden">
                                <div class="bg-secondary-container h-full rounded-full progress-bar-fill" style="width: ${user ? user.recoveryProgress : 65}%"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Active Treatment Card -->
                <div class="lg:col-span-4 flex flex-col bg-clinical-white p-stack-lg rounded-xl border border-outline-variant shadow-[0_20px_20px_-5px_rgba(14,116,144,0.05)]">
                    <span class="font-label-sm text-label-sm text-secondary mb-stack-sm flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                        ACTIVE TREATMENT
                    </span>
                    <h2 class="font-headline-md text-headline-md text-on-surface mb-stack-md">${user ? user.activeTreatment : 'Lower Back Rehab'}</h2>
                    <div class="space-y-stack-md flex-grow">
                        <div class="flex items-center gap-stack-md p-stack-sm bg-surface-muted rounded-lg">
                            <div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                                <span class="material-symbols-outlined">exercise</span>
                            </div>
                            <div>
                                <p class="font-button-text text-button-text">Daily Routine</p>
                                <p class="text-sm text-on-surface-variant">4 exercises remaining today</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-stack-md p-stack-sm bg-surface-muted rounded-lg">
                            <div class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
                                <span class="material-symbols-outlined">person_pin</span>
                            </div>
                            <div>
                                <p class="font-button-text text-button-text">Therapist</p>
                                <p class="text-sm text-on-surface-variant">${user ? user.therapist : 'Dr. Sarah Mitchell, PT'}</p>
                            </div>
                        </div>
                    </div>
                    <a href="#/patient/medical-records" class="w-full mt-stack-lg py-3 bg-secondary text-on-secondary rounded-lg font-button-text text-button-text hover:shadow-md transition-all text-center">View Full Plan</a>
                </div>
            </section>
            <!-- Quick Actions Bento -->
            <section class="grid grid-cols-2 md:grid-cols-4 gap-stack-md">
                <a href="#/booking" class="flex flex-col items-center justify-center p-stack-lg bg-clinical-white border border-outline-variant rounded-xl hover:border-primary hover:bg-surface-container-low transition-all group">
                    <span class="material-symbols-outlined text-4xl text-primary mb-stack-sm transition-transform group-hover:scale-110">add_circle</span>
                    <span class="font-button-text text-button-text text-center">Book New Session</span>
                </a>
                <a href="#/booking" class="flex flex-col items-center justify-center p-stack-lg bg-clinical-white border border-outline-variant rounded-xl hover:border-primary hover:bg-surface-container-low transition-all group">
                    <span class="material-symbols-outlined text-4xl text-primary mb-stack-sm transition-transform group-hover:scale-110">videocam</span>
                    <span class="font-button-text text-button-text text-center">Start Teleconsultation</span>
                </a>
                <a href="#/articles" class="flex flex-col items-center justify-center p-stack-lg bg-clinical-white border border-outline-variant rounded-xl hover:border-primary hover:bg-surface-container-low transition-all group">
                    <span class="material-symbols-outlined text-4xl text-primary mb-stack-sm transition-transform group-hover:scale-110">checklist_rtl</span>
                    <span class="font-button-text text-button-text text-center">Check Program</span>
                </a>
                <a href="#/patient/medical-records" class="flex flex-col items-center justify-center p-stack-lg bg-clinical-white border border-outline-variant rounded-xl hover:border-primary hover:bg-surface-container-low transition-all group">
                    <span class="material-symbols-outlined text-4xl text-primary mb-stack-sm transition-transform group-hover:scale-110">description</span>
                    <span class="font-button-text text-button-text text-center">Medical Reports</span>
                </a>
            </section>
            <!-- Home Exercise Program -->
            <section class="bg-clinical-white p-8 rounded-xl soft-shadow">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="font-headline-md text-headline-md flex items-center gap-2">
                        <span class="material-symbols-outlined text-secondary">fitness_center</span>
                        Home Exercise Program
                    </h2>
                    <a href="#/articles" class="text-secondary font-button-text text-button-text flex items-center gap-1 hover:underline">
                        View Full Program <span class="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
                    ${exerciseCards}
                </div>
            </section>
            <!-- Therapy History -->
            <section class="bg-clinical-white p-8 rounded-xl soft-shadow overflow-hidden">
                <div class="flex items-center justify-between mb-8">
                    <h2 class="font-headline-md text-headline-md flex items-center gap-2">
                        <span class="material-symbols-outlined text-secondary">history</span>
                        My Therapy History
                    </h2>
                    <div class="flex gap-2">
                        <button class="bg-surface-muted px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface-variant transition-colors">Filter by Date</button>
                        <button class="bg-surface-muted px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface-variant transition-colors">Download All Notes</button>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="border-b border-surface-muted text-on-surface-variant text-label-sm font-label-sm uppercase tracking-wider">
                                <th class="pb-4 px-2">Date</th>
                                <th class="pb-4 px-2">Therapist</th>
                                <th class="pb-4 px-2">Session Type</th>
                                <th class="pb-4 px-2">Notes &amp; Assessment</th>
                                <th class="pb-4 px-2 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-surface-muted">
                            ${historyRows || `<tr><td colspan="5" class="py-8 text-center text-on-surface-variant">Belum ada riwayat terapi</td></tr>`}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
        ${Footer.render()}
        `;
    },

    init() {
        // Progress bar animation
        const bar = document.querySelector('.progress-bar-fill');
        if (bar) {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 300);
        }
        NavbarPatient.init();
    }
};
