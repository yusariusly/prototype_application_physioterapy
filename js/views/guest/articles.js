/* ============================================
   PhysioCare - Guest Articles View
   ============================================ */

const GuestArticlesView = {
    /**
     * Render the education articles page
     */
    async render() {
        const articles = [
            {
                title: "5 Tips Mengurangi Nyeri Punggung Bawah di Rumah",
                category: "Pendidikan",
                date: "Oct 2024",
                mins: "8 min",
                excerpt: "Pelajari latihan aman dan kebiasaan sehari-hari untuk membantu meredakan nyeri punggung bawah kronis.",
                icon: "spine"
            },
            {
                title: "Pemulihan Pasca Stroke: Langkah Awal yang Benar",
                category: "Rehabilitasi",
                date: "Sep 2024",
                mins: "10 min",
                excerpt: "Panduan komprehensif untuk keluarga pasien stroke dalam mendukung proses pemulihan motorik.",
                icon: "neurology"
            },
            {
                title: "Mengenal Fisioterapi Olahraga untuk Pemula",
                category: "Olahraga",
                date: "Sep 2024",
                mins: "6 min",
                excerpt: "Apa itu fisioterapi olahraga dan kapan Anda perlu mengunjungi spesialis? Simak penjelasannya.",
                icon: "sports_gymnastics"
            },
            {
                title: "Pencegahan Jatuh untuk Lansia di Rumah",
                category: "Geriatri",
                date: "Aug 2024",
                mins: "7 min",
                excerpt: "Tips penting untuk mencegah jatuh pada lansia dan menjaga kemandirian serta mobilitas mereka.",
                icon: "elderly"
            },
            {
                title: "Latihan Peregangan untuk Pekerja Kantoran",
                category: "Kesehatan",
                date: "Aug 2024",
                mins: "5 min",
                excerpt: "Rutinitas peregangan singkat yang bisa dilakukan di meja kerja untuk mengurangi kekakuan.",
                icon: "work"
            },
            {
                title: "Pemulihan Cedera ACL: Panduan Lengkap",
                category: "Olahraga",
                date: "Jul 2024",
                mins: "12 min",
                excerpt: "Dari diagnosis hingga kembali berolahraga, pelajari tahapan rehabilitasi cedera ACL.",
                icon: "fitness_center"
            }
        ];

        const cards = articles.map(a => `
            <article class="group bg-clinical-white rounded-xl overflow-hidden border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <div class="h-48 bg-surface-container-low flex items-center justify-center relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-primary-fixed/30 to-secondary-fixed/20"></div>
                    <span class="material-symbols-outlined text-[80px] text-primary relative z-10" style="font-variation-settings: 'FILL' 1;">${a.icon}</span>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-3 mb-3">
                        <span class="bg-secondary/10 text-secondary text-[11px] font-bold px-2 py-0.5 rounded-full">${a.category}</span>
                        <span class="text-xs text-on-surface-variant">${a.date}</span>
                        <span class="text-xs text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>${a.mins}</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">${a.title}</h3>
                    <p class="text-on-surface-variant font-body-md mb-4">${a.excerpt}</p>
                    <a href="#/contact" class="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read Article <span class="material-symbols-outlined">arrow_forward</span>
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
                        HEALTH EDUCATION
                    </span>
                    <h1 class="font-headline-lg text-headline-lg mb-6">Pulih Bersama Kami</h1>
                    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                        Artikel edukasi dan latihan mandiri untuk membantu perjalanan pemulihan Anda, disusun oleh tim fisioterapis kami.
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
