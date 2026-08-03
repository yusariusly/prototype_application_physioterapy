/* ============================================
   PhysioCare - Hash Router (Vanilla JS)
   ============================================ */

class Router {
    constructor() {
        this.routes = [];
        this.currentRoute = null;
        this.currentParams = {};
        this.onChange = null;

        window.addEventListener('hashchange', () => this.resolve());
    }

    /**
     * Register a route.
     * path patterns: "/", "/services", "/services/:slug"
     */
    add(path, handler) {
        const paramNames = [];
        const pattern = path.replace(/:[^/]+/g, (match) => {
            paramNames.push(match.substring(1));
            return '([^/]+)';
        });
        // Escape other special chars but keep the param regex groups
        const safePattern = pattern.replace(/[.?*+^$[\]\\(){}|]/g, (c) => {
            // Only escape if not part of our group wrapper
            return '\\' + c;
        }).replace(/\\\(\\\(\[\^\/\]\+\\\)\\\)/g, '([^/]+)');

        this.routes.push({
            path,
            pattern: new RegExp('^' + safePattern + '$'),
            paramNames,
            handler
        });
    }

    /**
     * Parse the current hash into path segments
     */
    getPath() {
        const hash = window.location.hash.substring(1) || '/';
        return hash.startsWith('/') ? hash : '/' + hash;
    }

    /**
     * Navigate to a route
     */
    navigate(path) {
        window.location.hash = path;
    }

    /**
     * Resolve current URL hash to a route and execute it.
     */
    resolve() {
        const path = this.getPath();
        const queryIndex = path.indexOf('?');
        const pathname = queryIndex === -1 ? path : path.substring(0, queryIndex);
        const query = queryIndex === -1 ? {} : parseQuery(path.substring(queryIndex + 1));

        // Trailing slash normalization
        let normalized = pathname;
        if (normalized.length > 1 && normalized.endsWith('/')) {
            normalized = normalized.slice(0, -1);
        }

        for (const route of this.routes) {
            const match = normalized.match(route.pattern);
            if (match) {
                const params = {};
                route.paramNames.forEach((name, i) => {
                    params[name] = decodeURIComponent(match[i + 1]);
                });
                this.currentRoute = route;
                this.currentParams = { ...params, query };
                if (this.onChange) {
                    this.onChange(route, this.currentParams);
                }
                route.handler(this.currentParams);
                return;
            }
        }

        // 404
        if (this.onChange) {
            this.onChange(null, {});
        }
        this.handleNotFound(path);
    }

    handleNotFound(path) {
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = `
                <div class="min-h-screen flex flex-col items-center justify-center bg-background text-on-background px-6 text-center">
                    <span class="material-symbols-outlined text-[80px] text-primary mb-6">travel_explore</span>
                    <h1 class="font-headline-lg text-headline-lg text-primary mb-4">Halaman Tidak Ditemukan</h1>
                    <p class="text-on-surface-variant max-w-md mb-8">Halaman <span class="font-bold text-primary">${path}</span> tidak tersedia. Silakan kembali ke beranda.</p>
                    <a href="#/" class="bg-primary text-on-primary px-8 py-4 rounded-xl font-button-text text-button-text hover:bg-primary-container transition-all shadow-lg">Kembali ke Beranda</a>
                </div>
            `;
        }
    }
}

function parseQuery(queryString) {
    const result = {};
    queryString.split('&').forEach(pair => {
        if (pair.includes('=')) {
            const [key, value] = pair.split('=');
            result[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return result;
}

// Global router instance
const router = new Router();
