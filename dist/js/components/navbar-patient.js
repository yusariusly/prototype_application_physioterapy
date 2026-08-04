/* ============================================
   PhysioCare - Patient Navbar Component
   Used for logged-in patient pages
   ============================================ */

const NavbarPatient = {
    render(active = '', userName = 'James') {
        const links = [
            { key: 'dashboard', label: 'Dashboard', href: '#/patient/dashboard' },
            { key: 'bookings', label: 'My Bookings', href: '#/patient/booking-success' },
            { key: 'education', label: 'Education', href: '#/articles' },
            { key: 'help', label: 'Help', href: '#/contact' }
        ];

        const navLinks = links.map(link => {
            const isActive = active === link.key;
            const activeClass = isActive
                ? 'text-primary font-bold border-b-2 border-primary pb-1'
                : 'text-on-surface-variant hover:text-primary';
            return `<a class="${activeClass} transition-colors font-body-md text-body-md" href="${link.href}">${link.label}</a>`;
        }).join('');

        return `
        <header class="w-full sticky top-0 z-50 bg-clinical-white dark:bg-inverse-surface shadow-[0_20px_20px_-5px_rgba(14,116,144,0.05)] transition-all duration-200 ease-in-out">
            <nav class="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
                <div class="flex items-center gap-stack-lg">
                    <a href="#/patient/dashboard" class="text-headline-md font-headline-md text-primary dark:text-primary-fixed tracking-tight">PhysioCare</a>
                    <div class="hidden md:flex gap-stack-md">
                        ${navLinks}
                    </div>
                </div>
                <div class="flex items-center gap-stack-md">
                    <button class="p-2 text-on-surface-variant hover:bg-surface-muted rounded-full transition-all" aria-label="Notifications">
                        <span class="material-symbols-outlined">notifications</span>
                    </button>
                    <button class="p-2 text-on-surface-variant hover:bg-surface-muted rounded-full transition-all" aria-label="Settings">
                        <span class="material-symbols-outlined">settings</span>
                    </button>
                    <div class="h-10 w-10 rounded-full overflow-hidden border-2 border-primary-container">
                        <img class="w-full h-full object-cover" alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWvAJAebR7qpGOrw_YRs9wKPxmUmsjN6jvM4rA-9W8NkuwBwnZJ8kULQBZfV9i2Yfk5f3xfq6n6656u6QZeDChRV0eW-3urnQ1uzCOcadZTkGoJMocGhzarbIdAdxPlkk8RhmzQe5NFKKYYYVZ9Yq5FnbLzWhYqn7cL0tyM0AMYgK6VhagbHiZHf5eZIMSsOTuTwGYhxq_g95m_RfYTd6_EArYdbXfMcqJQgDOdyxon1VCWc8hhEuYpw"/>
                    </div>
                    <button id="logout-btn" class="hidden md:block text-primary font-body-md text-body-md hover:underline ml-stack-sm">Logout</button>
                </div>
            </nav>
        </header>
        <nav class="md:hidden fixed bottom-0 left-0 right-0 bg-clinical-white border-t border-outline-variant flex justify-around items-center h-16 z-50">
            <a class="flex flex-col items-center gap-1 text-primary" href="#/patient/dashboard">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>
                <span class="text-[10px] font-bold">Home</span>
            </a>
            <a class="flex flex-col items-center gap-1 text-on-surface-variant" href="#/patient/booking-success">
                <span class="material-symbols-outlined">calendar_month</span>
                <span class="text-[10px]">Bookings</span>
            </a>
            <a class="flex flex-col items-center gap-1 text-on-surface-variant" href="#/articles">
                <span class="material-symbols-outlined">menu_book</span>
                <span class="text-[10px]">Library</span>
            </a>
            <a class="flex flex-col items-center gap-1 text-on-surface-variant" href="#/contact">
                <span class="material-symbols-outlined">account_circle</span>
                <span class="text-[10px]">Profile</span>
            </a>
        </nav>`;
    },

    init() {
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                User.logout();
                router.navigate('/login');
            });
        }
    }
};
