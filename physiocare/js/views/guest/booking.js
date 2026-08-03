/* ============================================
   PhysioCare - Guest Booking View
   ============================================ */

const GuestBookingView = {
    // Store selected booking data
    state: {
        service: null,
        therapist: null,
        date: '13',
        time: '11:45 AM'
    },

    /**
     * Render the booking page
     */
    async render() {
        const services = await ServiceModel.all();
        const therapists = await TherapistModel.available();

        const serviceCards = services.map(s => `
            <label class="relative group cursor-pointer">
                <input class="peer sr-only" name="service" type="radio" value="${s.id}">
                <div class="p-6 rounded-lg border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary-fixed/10 transition-all hover:bg-surface-muted">
                    <div class="flex items-start justify-between mb-2">
                        <span class="material-symbols-outlined text-3xl text-primary" style="font-variation-settings: 'FILL' 1;">${s.icon}</span>
                        <span class="font-label-sm text-label-sm text-secondary">${Service.formatPrice(s.price)}</span>
                    </div>
                    <h3 class="font-bold text-lg mb-1">${s.name}</h3>
                    <p class="text-sm text-on-surface-variant">${s.shortDescription}</p>
                </div>
            </label>
        `).join('');

        const therapistCards = therapists.map(t => `
            <label class="flex items-center gap-4 p-4 rounded-lg border border-outline-variant hover:bg-surface-muted cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-fixed/5">
                <input class="peer sr-only" name="therapist" type="radio" value="${t.id}">
                <img class="w-16 h-16 rounded-full object-cover border-2 border-clinical-white shadow-sm" data-alt="${t.name}" src="${t.image}" alt="${t.name}">
                <div class="flex-grow">
                    <div class="flex items-center gap-2">
                        <h4 class="font-bold">${t.name}</h4>
                        ${t.strVerified ? `<span class="bg-primary-fixed text-on-primary-fixed-variant text-[10px] px-2 py-0.5 rounded-full font-label-sm uppercase">STR Verified</span>` : ''}
                    </div>
                    <p class="text-sm text-on-surface-variant">${t.specialization} • ${t.experience} years exp.</p>
                    <div class="flex items-center gap-1 text-warning-amber">
                        <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="text-xs font-bold">${t.rating} (${t.reviews} reviews)</span>
                    </div>
                </div>
                <span class="material-symbols-outlined text-primary opacity-0 peer-checked:opacity-100">check_circle</span>
            </label>
        `).join('');

        return `
        ${NavbarGuest.render('')}
        <main class="flex-grow w-full max-w-container-max mx-auto px-4 md:px-section-padding-desktop py-12">
            <!-- Progress Indicator -->
            <div class="mb-12">
                <div class="flex items-center justify-between max-w-3xl mx-auto mb-4">
                    <div class="flex flex-col items-center gap-2">
                        <div class="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">1</div>
                        <span class="font-label-sm text-label-sm text-primary">Selection</span>
                    </div>
                    <div class="flex-grow h-[2px] bg-outline-variant mx-4 -mt-6"></div>
                    <div class="flex flex-col items-center gap-2 opacity-50">
                        <div class="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold">2</div>
                        <span class="font-label-sm text-label-sm text-outline">Details</span>
                    </div>
                    <div class="flex-grow h-[2px] bg-outline-variant mx-4 -mt-6"></div>
                    <div class="flex flex-col items-center gap-2 opacity-50">
                        <div class="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold">3</div>
                        <span class="font-label-sm text-label-sm text-outline">Payment</span>
                    </div>
                </div>
                <h1 class="text-center font-headline-lg text-headline-lg mb-2">Book Your Appointment</h1>
                <p class="text-center text-on-surface-variant font-body-lg text-body-lg">Select your treatment and therapist to begin your recovery journey.</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                <!-- Left Column: Selection Flow -->
                <div class="lg:col-span-8 space-y-stack-lg">
                    <!-- Service Selection -->
                    <section class="bg-clinical-white p-8 rounded-xl shadow-sm">
                        <h2 class="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary">medical_services</span>
                            1. Select Service Type
                        </h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            ${serviceCards}
                        </div>
                    </section>
                    <!-- Therapist Selection -->
                    <section class="bg-clinical-white p-8 rounded-xl shadow-sm">
                        <h2 class="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary">group</span>
                            2. Choose a Professional
                        </h2>
                        <div class="flex flex-col gap-4">
                            ${therapistCards}
                        </div>
                    </section>
                    <!-- Initial Assessment Form -->
                    <section class="bg-clinical-white p-8 rounded-xl shadow-sm">
                        <h2 class="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary">assignment</span>
                            3. Initial Assessment
                        </h2>
                        <div class="space-y-6">
                            <div>
                                <label class="block font-body-md font-bold mb-2 text-on-surface">Primary Pain Location</label>
                                <select id="pain-location" class="w-full p-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-clinical-white">
                                    <option>Neck &amp; Upper Back</option>
                                    <option>Lower Back</option>
                                    <option>Shoulder (Left/Right)</option>
                                    <option>Knee (Left/Right)</option>
                                    <option>Ankle/Foot</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                                <div>
                                    <label class="block font-body-md font-bold mb-2 text-on-surface">Pain Duration</label>
                                    <div class="flex gap-2">
                                        <label class="flex-1">
                                            <input checked="" class="sr-only peer" name="duration" type="radio">
                                            <div class="text-center py-2 border border-outline-variant rounded-lg peer-checked:bg-primary peer-checked:text-white cursor-pointer hover:bg-surface-muted transition-colors">Acute (< 1wk)</div>
                                        </label>
                                        <label class="flex-1">
                                            <input class="sr-only peer" name="duration" type="radio">
                                            <div class="text-center py-2 border border-outline-variant rounded-lg peer-checked:bg-primary peer-checked:text-white cursor-pointer hover:bg-surface-muted transition-colors">Chronic</div>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label class="block font-body-md font-bold mb-2 text-on-surface">Pain Scale (1-10)</label>
                                    <input class="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-primary" max="10" min="1" type="range" value="5">
                                    <div class="flex justify-between text-xs text-outline mt-1 font-label-sm">
                                        <span>Mild</span>
                                        <span>Moderate</span>
                                        <span>Severe</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label class="block font-body-md font-bold mb-2 text-on-surface">Short Description of Injury/Pain</label>
                                <textarea id="pain-description" class="w-full p-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary outline-none h-24 resize-none" placeholder="e.g., Sharp pain when reaching overhead for the last 3 days..."></textarea>
                            </div>
                        </div>
                    </section>
                </div>
                <!-- Right Column: Date/Time & Summary Sticky -->
                <div class="lg:col-span-4 space-y-stack-lg sticky top-24">
                    <!-- Date/Time Selection -->
                    <section class="bg-clinical-white p-6 rounded-xl shadow-sm">
                        <h2 class="font-headline-md text-headline-md mb-4 flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary">calendar_month</span>
                            4. Date &amp; Time
                        </h2>
                        <div class="mb-6">
                            <label class="block font-label-sm text-xs text-outline mb-2 uppercase">Select Date</label>
                            <div class="grid grid-cols-4 gap-2">
                                <button class="flex flex-col items-center py-2 border border-outline-variant rounded-lg hover:border-primary transition-all date-btn">
                                    <span class="text-[10px] text-outline font-label-sm">MON</span>
                                    <span class="font-bold">12</span>
                                </button>
                                <button class="flex flex-col items-center py-2 border-2 border-primary bg-primary-fixed/20 rounded-lg date-btn active">
                                    <span class="text-[10px] text-primary font-bold font-label-sm">TUE</span>
                                    <span class="font-bold">13</span>
                                </button>
                                <button class="flex flex-col items-center py-2 border border-outline-variant rounded-lg hover:border-primary transition-all date-btn">
                                    <span class="text-[10px] text-outline font-label-sm">WED</span>
                                    <span class="font-bold">14</span>
                                </button>
                                <button class="flex flex-col items-center py-2 border border-outline-variant rounded-lg hover:border-primary transition-all date-btn">
                                    <span class="text-[10px] text-outline font-label-sm">THU</span>
                                    <span class="font-bold">15</span>
                                </button>
                            </div>
                        </div>
                        <div class="mb-6">
                            <label class="block font-label-sm text-xs text-outline mb-2 uppercase">Available Slots</label>
                            <div class="grid grid-cols-2 gap-2">
                                <button class="py-2 text-sm border border-outline-variant rounded hover:bg-primary hover:text-white transition-colors time-slot">09:00 AM</button>
                                <button class="py-2 text-sm border border-outline-variant rounded hover:bg-primary hover:text-white transition-colors time-slot">10:30 AM</button>
                                <button class="py-2 text-sm border-2 border-primary bg-primary-fixed/20 rounded font-bold time-slot active">11:45 AM</button>
                                <button class="py-2 text-sm border border-outline-variant rounded hover:bg-primary hover:text-white transition-colors time-slot">02:15 PM</button>
                                <button class="py-2 text-sm border border-outline-variant rounded hover:bg-primary hover:text-white transition-colors time-slot">03:45 PM</button>
                                <button class="py-2 text-sm bg-surface-muted text-outline-variant rounded cursor-not-allowed" disabled>05:00 PM</button>
                            </div>
                        </div>
                    </section>
                    <!-- Booking Summary Card -->
                    <div class="bg-primary p-6 rounded-xl text-on-primary shadow-xl">
                        <h3 class="font-headline-md text-headline-md mb-4">Summary</h3>
                        <div class="space-y-3 mb-6 pb-6 border-b border-primary-container">
                            <div class="flex justify-between text-sm">
                                <span class="opacity-80">Treatment</span>
                                <span class="font-bold" id="summary-service">Standard Physio</span>
                            </div>
                            <div class="flex justify-between text-sm">
                                <span class="opacity-80">Therapist</span>
                                <span class="font-bold" id="summary-therapist">Dr. Sarah Jenkins</span>
                            </div>
                            <div class="flex justify-between text-sm">
                                <span class="opacity-80">Schedule</span>
                                <span class="font-bold" id="summary-schedule">Oct 13, 11:45 AM</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center mb-6">
                            <span class="font-headline-md">Total Price</span>
                            <span class="font-headline-md" id="summary-price">${Service.formatPrice(85000)}</span>
                        </div>
                        <a href="#/patient/assessment" id="proceed-btn" class="w-full bg-clinical-white text-primary py-4 rounded-lg font-button-text hover:bg-surface-bright active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2">
                            Proceed to Contact Details
                            <span class="material-symbols-outlined">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        ${Footer.render()}
        `;
    },

    init() {
        const serviceRadios = document.querySelectorAll('input[name="service"]');
        const therapistRadios = document.querySelectorAll('input[name="therapist"]');
        const summaryService = document.getElementById('summary-service');
        const summaryTherapist = document.getElementById('summary-therapist');
        const summaryPrice = document.getElementById('summary-price');
        const summarySchedule = document.getElementById('summary-schedule');

        // Pre-select first service & therapist
        if (serviceRadios.length) serviceRadios[0].checked = true;
        if (therapistRadios.length) therapistRadios[0].checked = true;

        // Service selection
        serviceRadios.forEach(radio => {
            radio.addEventListener('change', async () => {
                if (radio.checked) {
                    const service = await ServiceModel.bySlug(radio.value);
                    if (service) {
                        this.state.service = service;
                        summaryService.textContent = service.name;
                        summaryPrice.textContent = Service.formatPrice(service.price);
                    }
                }
            });
        });

        // Therapist selection
        therapistRadios.forEach(radio => {
            radio.addEventListener('change', async () => {
                if (radio.checked) {
                    const therapist = await TherapistModel.find(radio.value);
                    if (therapist) {
                        this.state.therapist = therapist;
                        summaryTherapist.textContent = therapist.name;
                    }
                }
            });
        });

        const self = this;

        // Date & time selection
        document.querySelectorAll('.date-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.date-btn').forEach(b => {
                    b.classList.remove('border-primary', 'bg-primary-fixed/20', 'active');
                    b.classList.add('border-outline-variant');
                    const day = b.querySelector('.text-[10px]');
                    if (day) { day.classList.remove('text-primary', 'font-bold'); day.classList.add('text-outline'); }
                });
                btn.classList.add('border-primary', 'bg-primary-fixed/20', 'active');
                btn.classList.remove('border-outline-variant');
                const dayLabel = btn.querySelector('.text-[10px]');
                if (dayLabel) { dayLabel.classList.add('text-primary', 'font-bold'); dayLabel.classList.remove('text-outline'); }
                self.state.date = btn.querySelector('span:last-child').textContent;
                self.updateSummary(summarySchedule);
            });
        });

        document.querySelectorAll('.time-slot').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.time-slot').forEach(b => {
                    b.classList.remove('border-primary', 'bg-primary-fixed/20', 'active');
                    b.classList.add('border-outline-variant', 'hover:bg-primary', 'hover:text-white');
                });
                btn.classList.add('border-primary', 'bg-primary-fixed/20', 'active');
                btn.classList.remove('border-outline-variant', 'hover:bg-primary', 'hover:text-white');
                self.state.time = btn.textContent.trim();
                self.updateSummary(summarySchedule);
            });
        });
    },

    updateSummary(el) {
        if (el) {
            el.textContent = `Oct ${this.state.date}, ${this.state.time}`;
        }
    }
};
