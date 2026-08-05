/* ============================================
   PhysioCare - Guest Navbar Component
   Used for public-facing pages
   ============================================ */

const NavbarGuest = {
    /**
     * Render the guest navigation bar
     * @param {string} active - active link (home, services, team, articles)
     */
render(active = '') {
        const links = [
            { key: 'home', label: t('nav.home'), href: '#/' },
            { key: 'services', label: t('nav.services'), href: '#/services' },
            { key: 'team', label: t('nav.team'), href: '#/team' },
            { key: 'articles', label: t('nav.articles'), href: '#/articles' }
        ];

        const navLinks = links.map(link => {
            const isActive = active === link.key;
            const activeClass = isActive
                ? 'text-secondary font-bold border-b-2 border-secondary pb-1'
                : 'text-on-surface-variant hover:text-secondary';
            return `<a class="${activeClass} transition-colors duration-200" href="${link.href}">${link.label}</a>`;
        }).join('');

        // Language switcher
        const langBtn = `
            <button onclick="I18n.toggleLang()" class="flex items-center gap-1 px-3 py-2 rounded-lg border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all font-bold text-sm" title="Switch language">
                <span class="material-symbols-outlined text-[16px]">translate</span>
                ${t('lang.switch')}
            </button>
        `;

        return `
        <nav class="sticky top-0 w-full z-50 bg-clinical-white shadow-sm transition-all duration-300">
            <div class="flex justify-between items-center px-6 md:px-section-padding-desktop py-4 max-w-container-max mx-auto">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">medical_services</span>
                    <span class="font-headline-md text-headline-md font-extrabold text-primary tracking-tighter">PhysioCare</span>
                </div>
                <div class="hidden md:flex items-center gap-8">
                    ${navLinks}
                </div>
                <div class="flex items-center gap-4">
                    ${langBtn}
                    <a href="#/booking" class="bg-primary text-on-primary px-6 py-3 rounded-lg font-button-text text-button-text active:scale-95 transition-all shadow-md hover:shadow-lg hover:bg-primary-container">
                        ${t('nav.bookNow')}
                    </a>
                    <button class="md:hidden text-primary p-2">
                        <span class="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </nav>`;
    }
};
