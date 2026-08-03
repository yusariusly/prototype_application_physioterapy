/* ============================================
   PhysioCare - AI Triage Assistant View (Hilda)
   ============================================ */

const GuestAITriageView = {
    /**
     * Render the AI triage page
     */
    async render() {
        return `
        ${NavbarGuest.render('')}
        <main class="flex-grow flex flex-col lg:flex-row max-w-container-max mx-auto w-full px-4 md:px-section-padding-desktop py-8 gap-gutter overflow-hidden h-[calc(100vh-80px)]">
            <!-- Left Column: Chat Interface -->
            <section class="flex-1 flex flex-col bg-clinical-white rounded-xl shadow-sm overflow-hidden border border-surface-variant">
                <div class="p-4 bg-surface-container flex items-center justify-between border-b border-surface-variant">
                    <div class="flex items-center gap-3">
                        <div class="relative">
                            <div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">H</div>
                            <div class="absolute bottom-0 right-0 w-3 h-3 bg-success-green rounded-full border-2 border-clinical-white"></div>
                        </div>
                        <div>
                            <h2 class="font-headline-md text-[18px] leading-tight">Hilda</h2>
                            <p class="text-label-sm font-label-sm text-on-surface-variant uppercase">AI Triage Assistant</p>
                        </div>
                    </div>
                    <div class="flex flex-col items-end">
                        <span class="text-label-sm font-label-sm text-primary mb-1">Assessment Progress</span>
                        <div class="w-32 h-2 bg-surface-variant rounded-full overflow-hidden">
                            <div class="h-full bg-primary transition-all duration-500 w-[20%]" id="progress-bar"></div>
                        </div>
                    </div>
                </div>
                <div class="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth" id="chat-messages">
                    <div class="flex flex-col items-start max-w-[85%] animate-fade-in">
                        <div class="bg-surface-muted text-on-surface p-4 rounded-2xl chat-bubble-hilda shadow-sm">
                            <p class="font-body-md">Hello! I'm Hilda, your AI physiotherapy assistant. I'm here to help triage your symptoms and guide you toward the right care.</p>
                            <p class="mt-2 text-on-surface-variant text-sm italic">Note: I provide symptom triaging, not a formal medical diagnosis. In case of extreme pain or emergency, please seek immediate medical attention.</p>
                        </div>
                        <span class="text-[10px] text-outline mt-1 ml-2">Just now</span>
                    </div>
                    <div class="flex flex-col items-start max-w-[85%]">
                        <div class="bg-surface-muted text-on-surface p-4 rounded-2xl chat-bubble-hilda shadow-sm">
                            <p class="font-body-md">To get started, please describe where you're feeling discomfort and how long it has been bothering you.</p>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-surface-bright border-t border-surface-variant">
                    <div class="relative">
                        <textarea class="w-full bg-clinical-white border border-outline-variant rounded-xl px-4 py-3 pr-16 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all resize-none min-h-[60px]" id="user-input" placeholder="Type your symptoms here..." rows="2"></textarea>
                        <button class="absolute right-2 bottom-2 p-2 bg-primary text-on-primary rounded-lg hover:bg-primary-container transition-colors active:scale-95" id="send-btn">
                            <span class="material-symbols-outlined">send</span>
                        </button>
                    </div>
                    <div class="flex gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar">
                        <button class="whitespace-nowrap px-3 py-1 bg-surface-muted hover:bg-surface-variant rounded-full text-sm transition-colors border border-outline-variant quick-chip">Lower back pain</button>
                        <button class="whitespace-nowrap px-3 py-1 bg-surface-muted hover:bg-surface-variant rounded-full text-sm transition-colors border border-outline-variant quick-chip">Shoulder stiffness</button>
                        <button class="whitespace-nowrap px-3 py-1 bg-surface-muted hover:bg-surface-variant rounded-full text-sm transition-colors border border-outline-variant quick-chip">Ankle sprain</button>
                    </div>
                </div>
            </section>
            <!-- Right Column: Body Map & Red Flags -->
            <aside class="w-full lg:w-[400px] flex flex-col gap-gutter">
                <div class="bg-clinical-white rounded-xl shadow-sm border border-surface-variant overflow-hidden">
                    <div class="p-4 bg-surface-container border-b border-surface-variant">
                        <h3 class="font-headline-md text-primary flex items-center gap-2">
                            <span class="material-symbols-outlined">accessibility_new</span>
                            Body Map
                        </h3>
                        <p class="text-sm text-on-surface-variant">Click where it hurts to pinpoint location</p>
                    </div>
                    <div class="p-6 flex justify-center bg-surface-muted/50 relative">
                        <div class="w-48 h-80 relative">
                            <div class="w-full h-full bg-surface-container-high rounded-lg flex items-center justify-center relative overflow-hidden">
                                <span class="material-symbols-outlined text-[140px] text-primary/30">accessibility_new</span>
                                <div class="absolute top-[55%] left-[45%] w-4 h-4 bg-error rounded-full body-map-pin cursor-pointer shadow-lg border-2 border-clinical-white"></div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 flex flex-wrap gap-2 justify-center">
                        <span class="px-3 py-1 bg-surface-variant rounded-full text-xs font-bold text-on-surface-variant">FRONT</span>
                        <span class="px-3 py-1 bg-clinical-white border border-outline-variant rounded-full text-xs font-bold text-outline">BACK</span>
                    </div>
                </div>
                <!-- Red Flag Alert -->
                <div class="bg-error-container text-on-error-container p-5 rounded-xl border-l-4 border-error hidden animate-pulse" id="alert-box">
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-error text-3xl">emergency_home</span>
                        <div>
                            <h4 class="font-bold text-lg mb-1">Critical Symptom Detected</h4>
                            <p class="text-sm mb-4">Based on your description of "sharp chest pain" and "numbness," please seek immediate emergency care.</p>
                            <button class="w-full bg-emergency-red text-clinical-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
                                <span class="material-symbols-outlined">call</span>
                                CALL EMERGENCY SERVICES
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-clinical-white rounded-xl shadow-sm border border-surface-variant p-5 flex flex-col gap-4">
                    <h3 class="font-headline-md text-primary">Need more help?</h3>
                    <p class="text-sm text-on-surface-variant">If you'd rather speak with a specialist now, we can bridge the gap.</p>
                    <div class="flex flex-col gap-2">
                        <a href="#/booking" class="w-full py-3 bg-secondary text-on-primary rounded-lg font-button-text hover:brightness-110 transition-all flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined">video_call</span>
                            Talk to a Therapist
                        </a>
                        <a href="#/booking" class="w-full py-3 bg-clinical-white border-2 border-primary text-primary rounded-lg font-button-text hover:bg-surface-muted transition-all flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined">event_available</span>
                            Book Clinic Visit
                        </a>
                    </div>
                    <div class="mt-2 flex items-center gap-2 text-xs text-outline justify-center">
                        <span class="material-symbols-outlined text-[14px]">verified</span>
                        STR Verified Therapists Available
                    </div>
                </div>
            </aside>
        </main>
        `;

    },

    init() {
        const input = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');
        const chatMessages = document.getElementById('chat-messages');
        const progressBar = document.getElementById('progress-bar');
        const alertBox = document.getElementById('alert-box');

        if (!input || !sendBtn) return;
        let step = 1;

        function addMessage(text, isUser = false) {
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const bubbleClass = isUser ? 'bg-primary text-on-primary chat-bubble-user' : 'bg-surface-muted text-on-surface chat-bubble-hilda';
            const alignment = isUser ? 'items-end ml-auto' : 'items-start';
            const margin = isUser ? 'mr-2' : 'ml-2';
            const messageHtml = `
                <div class="flex flex-col ${alignment} max-w-[85%] animate-fade-in">
                    <div class="${bubbleClass} p-4 rounded-2xl shadow-sm">
                        <p class="font-body-md">${text}</p>
                    </div>
                    <span class="text-[10px] text-outline mt-1 ${margin}">${time}</span>
                </div>
            `;
            chatMessages.insertAdjacentHTML('beforeend', messageHtml);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function triggerHilda(userInput) {
            step++;
            const progress = (step / 5) * 100;
            progressBar.style.width = `${progress}%`;

            setTimeout(() => {
                if (userInput.toLowerCase().includes('chest') || userInput.toLowerCase().includes('numb')) {
                    addMessage("I've noticed you mentioned symptoms that might require urgent attention. Please look at the emergency guidelines on the right.");
                    if (alertBox) alertBox.classList.remove('hidden');
                } else if (step === 2) {
                    addMessage("I understand. On a scale of 1 to 10, how intense is this pain right now?");
                } else if (step === 3) {
                    addMessage("Does the pain radiate to any other areas, or is it concentrated in that one spot?");
                } else {
                    addMessage("Thank you for sharing that. I'm analyzing your inputs. Would you like to schedule a quick 10-minute video call with a specialist to discuss this further?");
                }
            }, 1000);
        }

        sendBtn.addEventListener('click', () => {
            const text = input.value.trim();
            if (text) {
                addMessage(text, true);
                input.value = '';
                triggerHilda(text);
            }
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendBtn.click();
            }
        });

        document.querySelectorAll('.quick-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                input.value = chip.textContent.trim();
                sendBtn.click();
            });
        });
    }
};
