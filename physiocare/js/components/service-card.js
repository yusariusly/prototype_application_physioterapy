/* ============================================
   PhysioCare - Service Card Component
   ============================================ */

const ServiceCard = {
    /**
     * Render a service card
     * @param {object} service - service data
     * @param {string} variant - 'bento' (large, with image) or 'compact'
     */
    render(service, variant = 'compact') {
        const price = Service.formatPrice(service.price);
        if (variant === 'bento') {
            return this.renderBento(service, price);
        }
        return this.renderCompact(service, price);
    },

    renderBento(service, price) {
        return `
        <div class="group relative overflow-hidden rounded-xl bg-clinical-white border border-outline-variant service-card-hover flex flex-col">
            <div class="w-full h-48 overflow-hidden">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="${service.name}" src="${service.image}" alt="${service.name}">
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex justify-between items-start mb-4">
                    <span class="material-symbols-outlined text-primary-container text-4xl" style="font-variation-settings: 'FILL' 1;">${service.icon}</span>
                    <div class="text-right">
                        <p class="font-label-sm text-label-sm text-outline">Starting from</p>
                        <p class="font-headline-md text-primary font-bold">${price}</p>
                    </div>
                </div>
                <h3 class="font-headline-md text-headline-md mb-3">${service.name}</h3>
                <p class="font-body-md text-on-surface-variant mb-6">${service.shortDescription}</p>
                <div class="flex items-center justify-between mt-auto pt-4">
                    <div class="flex items-center gap-2 text-outline">
                        <span class="material-symbols-outlined text-sm">schedule</span>
                        <span class="font-label-sm text-label-sm">${service.duration}</span>
                    </div>
                    <a href="#/services/${service.id}" class="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
                        Learn More
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
            </div>
        </div>`;
    },

    renderCompact(service, price) {
        return `
        <div class="group rounded-xl bg-clinical-white border border-outline-variant service-card-hover p-8 flex flex-col justify-between">
            <div>
                <div class="flex justify-between items-start mb-6">
                    <div class="p-3 bg-surface-muted rounded-lg">
                        <span class="material-symbols-outlined text-primary text-3xl">${service.icon}</span>
                    </div>
                    <div class="text-right">
                        <p class="font-label-sm text-label-sm text-outline">Starting from</p>
                        <p class="font-headline-md text-primary font-bold">${price}</p>
                    </div>
                </div>
                <h3 class="font-headline-md text-headline-md mb-3">${service.name}</h3>
                <p class="font-body-md text-on-surface-variant mb-6">${service.shortDescription}</p>
            </div>
            <div>
                <div class="flex items-center gap-2 text-outline mb-4">
                    <span class="material-symbols-outlined text-sm">schedule</span>
                    <span class="font-label-sm text-label-sm">${service.duration}</span>
                </div>
                <a href="#/services/${service.id}" class="w-full py-3 border-2 border-primary text-primary rounded-lg font-button-text hover:bg-primary hover:text-on-primary transition-all text-center block">
                    Learn More
                </a>
            </div>
        </div>`;
    }
};
