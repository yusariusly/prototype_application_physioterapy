/* ============================================
   PhysioCare - Guest Articles View
   ============================================ */

const GuestArticlesView = {
    /**
     * Render the education articles page
     */
    async render() {
const articles = [
            { titleT: 'articles.a1Title', categoryT: 'articles.catEducation', date: "Oct 2024", mins: "8 min", excerptT: 'articles.a1Excerpt', icon: "spine" },
            { titleT: 'articles.a2Title', categoryT: 'articles.catRehab', date: "Sep 2024", mins: "10 min", excerptT: 'articles.a2Excerpt', icon: "neurology" },
            { titleT: 'articles.a3Title', categoryT: 'articles.catSports', date: "Sep 2024", mins: "6 min", excerptT: 'articles.a3Excerpt', icon: "sports_gymnastics" },
            { titleT: 'articles.a4Title', categoryT: 'articles.catGeriatric', date: "Aug 2024", mins: "7 min", excerptT: 'articles.a4Excerpt', icon: "elderly" },
            { titleT: 'articles.a5Title', categoryT: 'articles.catHealth', date: "Aug 2024", mins: "5 min", excerptT: 'articles.a5Excerpt', icon: "work" },
            { titleT: 'articles.a6Title', categoryT: 'articles.catSports', date: "Jul 2024", mins: "12 min", excerptT: 'articles.a6Excerpt', icon: "fitness_center" }
        ];

        const cards = articles.map(a => `
            <article class="group bg-clinical-white rounded-xl overflow-hidden border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <div class="h-48 bg-surface-container-low flex items-center justify-center relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-primary-fixed/30 to-secondary-fixed/20"></div>
                    <span class="material-symbols-outlined text-[80px] text-primary relative z-10" style="font-variation-settings: 'FILL' 1;">${a.icon}</span>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-3 mb-3">
                        <span class="bg-secondary/10 text-secondary text-[11px] font-bold px-2 py-0.5 rounded-full">${t(a.categoryT)}</span>
                        <span class="text-xs text-on-surface-variant">${a.date}</span>
                        <span class="text-xs text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>${a.mins}</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">${t(a.titleT)}</h3>
                    <p class="text-on-surface-variant font-body-md mb-4">${t(a.excerptT)}</p>
                    <a href="#/contact" class="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                        ${t('articles.read')} <span class="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
            </article>
        `).join('');

        return `
        ${NavbarGuest.render('articles')}
        <main class="min-h-screen bg-background">
            <!-- Hero -->
            <section class="relative py-20 px-6 bg-surface-container-low overflow-hidden">
                <div class="absolute inset-0 opacity-10 pointer-events-none">
                    <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary-container rounded-full blur-3xl -mr-48 -mb-48"></div>
                </div>
                <div class="max-w-container-max mx-auto text-center relative z-10">
<span class="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm mb-6">
                        ${t('articles.badge')}
                    </span>
                    <h1 class="font-headline-lg text-headline-lg mb-6">${t('articles.title')}</h1>
                    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                        ${t('articles.sub')}
                    </p>
                </div>
            </section>
            <!-- Articles Grid -->
            <section class="py-20 px-6 max-w-container-max mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${cards}
                </div>
            </section>
        </main>
        ${Footer.render()}
        `;
    }
};
