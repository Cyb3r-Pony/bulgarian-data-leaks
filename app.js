let currentLang = 'en';
let currentFilter = 'all';
let searchQuery = '';
let currentPage = 1;
const ITEMS_PER_PAGE = 20;
let currentView = 'grid'; // 'grid' | 'timeline'

function toggleSection(id) {
    const section = document.getElementById('section' + id.charAt(0).toUpperCase() + id.slice(1));
    if (!section) return;
    const collapsed = section.classList.toggle('collapsed');
    const btn = section.querySelector('.stats-toggle');
    if (btn) {
        btn.setAttribute('aria-expanded', String(!collapsed));
        btn.title = collapsed ? 'Expand section' : 'Collapse section';
    }
    try { localStorage.setItem('bgdl-section-' + id, collapsed ? '0' : '1'); } catch(e) {}
}

function restoreSections() {
    ['sector', 'timeline'].forEach(id => {
        try {
            const val = localStorage.getItem('bgdl-section-' + id);
            if (val === '0') {
                const section = document.getElementById('section' + id.charAt(0).toUpperCase() + id.slice(1));
                if (section) {
                    section.classList.add('collapsed');
                    const btn = section.querySelector('.stats-toggle');
                    if (btn) { btn.setAttribute('aria-expanded', 'false'); btn.title = 'Expand section'; }
                }
            }
        } catch(e) {}
    });
}

function toggleTheme() {
    const isLight = document.body.classList.toggle('light');
    document.getElementById('themeToggle').textContent = isLight ? '☽' : '☀';
    document.documentElement.style.setProperty('--sb-track', isLight ? '#d0d6e4' : '#0d0f14');
    try { localStorage.setItem('bgdl-theme', isLight ? 'light' : 'dark'); } catch(e) {}
}

// Format date from YYYY-MM-DD / YYYY-MM / YYYY to DD/MM/YYYY
function formatDate(dateStr) {
    if (!dateStr || dateStr === 'Unknown') return dateStr;
    const parts = dateStr.trim().split('-');
    if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    if (parts.length === 2) return `${parts[1]}/${parts[0]}`;
    return parts[0]; // year only
}

const translations = {
    en: {
        mainTitle: 'BULGARIAN DATA LEAKS',
        headerEyebrow: '// THREAT INTELLIGENCE DATABASE',
        headerStatus: 'LIVE MONITORING',
        description: 'Tracking security breaches exposing personally identifiable information of Bulgarian citizens and confidential internal documents of organizations',
        poweredBy: 'Powered by Claude Sonnet 4.5 by Anthropic',
        btnAll: 'All Leaks',
        btnPublic: 'Public Sector',
        btnPrivate: 'Private Sector',
        langBtn: 'БГ',
        public: 'Public',
        private: 'Private',
        threatActor: 'Threat Actor',
        date: 'Date',
        source: 'Source',
        evidence: 'Evidence',
        viewSource: 'View Source',
        evidencePlaceholder: 'Evidence Image',
        noLeaks: 'No leaks found in this category',
        statsTitle: 'Data Leaks by Economic Sector',
        statsEyebrow: '// SECTOR ANALYSIS',
        statsSubtitle: 'Distribution of tracked breaches across industries',
        sectorsTracked: 'sectors tracked',
        mostAffected: 'Most affected',
        disclaimerTitle: 'Legal Disclaimer',
        disclaimerText: 'This website does not engage in the acquisition, exfiltration, downloading, possession, hosting, access, consultation, redistribution, or disclosure of unlawfully obtained data. This platform indexes only publicly visible information posted by ransomware operators and open web sources without accessing or obtaining the underlying stolen content. The service is provided to support public awareness, legitimate research, and cyber-resilience. No stolen personal or confidential data is collected or distributed via this site.',
        totalLabel: 'Total Leaks',
        publicLabel: 'Public Sector',
        privateLabel: 'Private Sector',
        searchTitle: 'Search for Company',
        searchPlaceholder: 'Enter company name or domain...',
        searchResults: 'results found',
        noResults: 'No companies found matching your search',
        btnGrid: 'Grid',
        btnTimeline: 'Timeline',
        lastUpdated: 'Last updated',
        prevPage: '← Prev',
        nextPage: 'Next →',
        timelineEyebrow: '// BREACH TIMELINE',
        timelineTitle: 'Leaks per Month',
        timelineSubtitle: 'Monthly breach frequency over time'
    },
    bg: {
        mainTitle: 'ИЗТИЧАНЕ НА ДАННИ В БЪЛГАРИЯ',
        headerEyebrow: '// БАЗА ДАННИ ЗА КИБЕРЗАПЛАХИ',
        headerStatus: 'НАБЛЮДЕНИЕ НА ЖИВО',
        description: 'Проследяване на нарушения на сигурността, водещи до изтичане на лична информация на български граждани и поверителни вътрешни документи на организации',
        poweredBy: 'Създадено с Claude Sonnet 4.5 от Anthropic',
        btnAll: 'Всички Изтичания',
        btnPublic: 'Публичен Сектор',
        btnPrivate: 'Частен Сектор',
        langBtn: 'EN',
        public: 'Публичен',
        private: 'Частен',
        threatActor: 'Заплаха',
        date: 'Дата',
        source: 'Източник',
        evidence: 'Доказателства',
        viewSource: 'Виж Източник',
        evidencePlaceholder: 'Доказателствена Снимка',
        noLeaks: 'Няма изтичания в тази категория',
        statsTitle: 'Изтичания по Икономически Сектор',
        statsEyebrow: '// АНАЛИЗ ПО СЕКТОРИ',
        statsSubtitle: 'Разпределение на проследените пробиви по индустрии',
        sectorsTracked: 'проследени сектора',
        mostAffected: 'Най-засегнат',
        disclaimerTitle: 'Правна Декларация',
        disclaimerText: 'Този уебсайт не се занимава с придобиване, изтичане, изтегляне, притежание, хостинг, достъп, консултиране, преразпространение або разкриване на незаконно получени данни. Тази платформа индексира само публично видима информация, публикувана от операторите на рансъмуер и отворени уеб източници, без да осъществява достъп или да получава основното откраднато съдържание. Услугата се предоставя в подкрепа на обществената осведоменост, легитимни изследвания и киберустойчивост. Никакви откраднати лични или поверителни данни не се събират или разпространяват чрез този сайт.',
        totalLabel: 'Всички Изтичания',
        publicLabel: 'Публичен Сектор',
        privateLabel: 'Частен Сектор',
        searchTitle: 'Търсене на Компания',
        searchPlaceholder: 'Въведете име или домейн...',
        searchResults: 'намерени резултата',
        noResults: 'Няма намерени компании',
        btnGrid: 'Решетка',
        btnTimeline: 'Времева линия',
        lastUpdated: 'Последна актуализация',
        prevPage: '← Предишна',
        nextPage: 'Следваща →',
        timelineEyebrow: '// ВРЕМЕВА ЛИНИЯ',
        timelineTitle: 'Изтичания по Месец',
        timelineSubtitle: 'Месечна честота на пробивите'
    }
};

// Leaks data - now loaded from data.js
// The leaks array is defined globally in data.js and contains all leak data

/**
 * Normalize and expand economic sector strings into an array of standardized sector labels.
 * Handles single sectors, multi-sector strings (separated by &), and special cases.
 * 
 * @param {string} rawSectorString - The raw economic sector field from data
 * @returns {string[]} - Array of normalized sector labels
 */
function normalizeAndExpandSectors(rawSectorString) {
    // Handle null/undefined/empty cases
    if (!rawSectorString || rawSectorString.trim() === '') {
        return ['Other'];
    }

    const raw = rawSectorString.trim();

    // Special case: domain list pattern - starts with [ and contains .bg domains
    if (raw.startsWith('[') && raw.includes('.bg')) {
        // This represents multiple Bulgarian e-commerce/media sites
        return ['Commerce', 'Media'];
    }

    // Split on & to handle multi-sector fields
    const parts = raw.split('&').map(part => part.trim()).filter(part => part);

    // Normalize each part
    const normalized = parts.map(part => {
        const lower = part.toLowerCase();

        // Normalize Public variations to "Public administration"
        if (lower === 'public' || lower === 'public sector' || lower === 'public sector ') {
            return 'Public administration';
        }

        // Normalize Energy variations to "Energy"
        if (lower === 'energy' || lower === 'energy sector') {
            return 'Energy';
        }

        // Combine E-commerce + Retail → Commerce
        if (lower === 'e-commerce' || lower === 'ecommerce' || lower === 'retail') {
            return 'Commerce';
        }

        // Combine IT + Telecom + Technology variations → IT & Telecom
        if (lower === 'it' || lower === 'telecommunication' || lower === 'telecom' ||
            lower === 'technology' || lower === 'technology & telecom' ||
            lower === 'it & telecom') {
            return 'IT & Telecom';
        }

        // Combine Pharmaceutical + Healthcare + Pharma → Healthcare & Pharma
        if (lower === 'pharmaceutical' || lower === 'healthcare' || lower === 'pharma') {
            return 'Healthcare & Pharma';
        }

        // Combine Logistics + Manufacturing → Industrial & Supply Chain
        if (lower === 'logistics' || lower === 'manufacturing') {
            return 'Industrial & Supply Chain';
        }

        // Rename Services → General Services
        if (lower === 'services' || lower === 'tourism') {
            return 'General Services';
        }

        // Return trimmed version with first letter capitalized for consistency
        return part.trim();
    });

    // Remove duplicates and return
    return [...new Set(normalized)];
}

// NOTE: The old loadLeaksData() and processLeak() functions have been removed.
// Data is now loaded directly from data.js which defines the global leaks array.
// The text file data/data.txt is no longer used.

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bg' : 'en';
    updateTranslations();
}

function updateTranslations() {
    const t = translations[currentLang];
    const mainTitleEl = document.getElementById('mainTitle');
    mainTitleEl.textContent = t.mainTitle;
    mainTitleEl.setAttribute('data-text', t.mainTitle);
    document.getElementById('headerEyebrow').textContent = t.headerEyebrow;
    document.getElementById('headerStatus').textContent = t.headerStatus;
    document.getElementById('description').textContent = t.description;
    document.getElementById('poweredBy').textContent = t.poweredBy;
    document.getElementById('btnAll').textContent = t.btnAll;
    document.getElementById('btnPublic').textContent = t.btnPublic;
    document.getElementById('btnPrivate').textContent = t.btnPrivate;
    document.getElementById('langBtn').textContent = t.langBtn;
    document.getElementById('statsTitle').textContent = t.statsTitle;
    document.getElementById('statsEyebrow').textContent = t.statsEyebrow;
    document.getElementById('statsSubtitle').textContent = t.statsSubtitle;
    document.getElementById('disclaimerTitle').textContent = t.disclaimerTitle;
    document.getElementById('disclaimerText').textContent = t.disclaimerText;
    document.getElementById('totalLabel').textContent = t.totalLabel;
    document.getElementById('publicLabel').textContent = t.publicLabel;
    document.getElementById('privateLabel').textContent = t.privateLabel;
    document.getElementById('searchTitle').textContent = t.searchTitle;
    document.getElementById('searchInput').placeholder = t.searchPlaceholder;
    const btnGridEl = document.getElementById('btnGrid');
    if (btnGridEl) btnGridEl.textContent = t.btnGrid || 'Grid';
    const btnTimelineEl = document.getElementById('btnTimeline');
    if (btnTimelineEl) btnTimelineEl.textContent = t.btnTimeline || 'Timeline';
    const timelineEyebrowEl = document.getElementById('timelineEyebrow');
    if (timelineEyebrowEl) timelineEyebrowEl.textContent = t.timelineEyebrow || '// BREACH TIMELINE';
    const timelineTitleEl = document.getElementById('timelineTitle');
    if (timelineTitleEl) timelineTitleEl.textContent = t.timelineTitle || 'Leaks per Month';
    const timelineSubtitleEl = document.getElementById('timelineSubtitle');
    if (timelineSubtitleEl) timelineSubtitleEl.textContent = t.timelineSubtitle || 'Monthly breach frequency over time';
    renderLeaks();
    renderChart();
}

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

function updateCounters() {
    const total = leaks.length;
    const publicCount = leaks.filter(l => l.sector === 'public').length;
    const privateCount = leaks.filter(l => l.sector === 'private').length;

    animateCounter(document.getElementById('totalCounter'), total);
    animateCounter(document.getElementById('publicCounter'), publicCount);
    animateCounter(document.getElementById('privateCounter'), privateCount);
}

function handleSearch() {
    searchQuery = document.getElementById('searchInput').value.toLowerCase();
    currentPage = 1;
    renderLeaks();
}

function filterLeaks(filter) {
    currentFilter = filter;
    const buttons = document.querySelectorAll('.filter-group .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.closest('.btn').classList.add('active');
    currentPage = 1;
    renderLeaks();
}

function toggleView(view) {
    currentView = view;
    currentPage = 1;
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    const target = document.getElementById(view === 'grid' ? 'viewGrid' : 'viewTimeline');
    if (target) target.classList.add('active');
    renderLeaks();
}

function buildLeakCard(leak, t) {
    const hasValidEvidence = leak.evidenceImages &&
        Array.isArray(leak.evidenceImages) && leak.evidenceImages.length > 0;
    const evidenceHTML = hasValidEvidence ? leak.evidenceImages.map(imgPath => `
        <img src="${imgPath}" alt="Evidence" style="width:100%;height:auto;border:1px solid rgba(120,130,145,0.3);border-radius:6px;box-shadow:0 6px 18px rgba(0,0,0,0.45);">
    `).join('') : '';
    return `
        <div class="leak-card">
            <div class="leak-header">
                <div>
                    <div class="leak-title">${leak.name}</div>
                    ${leak.domain ? `<div class="leak-domain">${leak.domain}</div>` : ''}
                </div>
                <div>
                    <div class="sector-badge ${leak.sector}">${t[leak.sector]}</div>
                    <div class="economic-sector">${leak.economicSector}</div>
                </div>
            </div>
            <div class="leak-info">
                <div class="info-row">
                    <span class="info-label">${t.threatActor}:</span>
                    <span class="info-value threat-actor">${leak.threatActor}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">${t.date}:</span>
                    <span class="info-value">${formatDate(leak.date)}</span>
                </div>
            </div>
            ${hasValidEvidence ? `
            <div class="evidence-section">
                <div class="evidence-title">${t.evidence}</div>
                <div class="evidence-images">${evidenceHTML}</div>
            </div>` : ''}
            <a href="${leak.sourceUrl}" target="_blank" class="source-link">${t.viewSource} →</a>
        </div>
    `;
}

function getFilteredSorted() {
    let filtered = currentFilter === 'all' ? [...leaks] : leaks.filter(l => l.sector === currentFilter);
    if (searchQuery) {
        filtered = filtered.filter(l =>
            l.name.toLowerCase().includes(searchQuery) ||
            (l.domain || '').toLowerCase().includes(searchQuery) ||
            (l.threatActor || '').toLowerCase().includes(searchQuery)
        );
    }
    filtered.sort((a, b) => {
        const hasA = a.date && a.date !== 'Unknown' && a.date.trim() !== '';
        const hasB = b.date && b.date !== 'Unknown' && b.date.trim() !== '';
        if (!hasA && !hasB) return 0;
        if (!hasA) return 1;
        if (!hasB) return -1;
        return new Date(b.date) - new Date(a.date);
    });
    return filtered;
}

function renderLeaks() {
    const t = translations[currentLang];
    const container = document.getElementById('leaksContainer');
    const filtered = getFilteredSorted();

    // Update search results count
    const resultsElement = document.getElementById('searchResults');
    if (searchQuery) {
        resultsElement.innerHTML = `<span>${filtered.length}</span> ${t.searchResults}`;
    } else {
        resultsElement.textContent = '';
    }

    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-leaks">${searchQuery ? t.noResults : t.noLeaks}</div>`;
        document.getElementById('paginationContainer').innerHTML = '';
        return;
    }

    if (currentView === 'timeline') {
        container.classList.remove('leak-grid');
        container.classList.add('leak-timeline-host');
        renderTimelineView(filtered, container, t);
        document.getElementById('paginationContainer').innerHTML = '';
        updateURL();
        return;
    }
    // Grid mode
    container.classList.add('leak-grid');
    container.classList.remove('leak-timeline-host');

    // Grid view with pagination
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    if (currentPage > totalPages) currentPage = Math.max(1, totalPages);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageLeaks = filtered.slice(start, start + ITEMS_PER_PAGE);

    container.innerHTML = pageLeaks.map(leak => buildLeakCard(leak, t)).join('');
    setupEvidenceClickHandlers();
    renderPagination(totalPages);
    updateURL();
}

function renderPagination(totalPages) {
    const container = document.getElementById('paginationContainer');
    if (!container) return;
    if (totalPages <= 1) { container.innerHTML = ''; return; }

    const t = translations[currentLang];
    let html = '<div class="pagination">';
    html += `<button class="page-btn" onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>${t.prevPage || '← Prev'}</button>`;

    const range = [];
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
        range.push(i);
    }
    if (range[0] > 1) {
        html += `<button class="page-btn" onclick="goToPage(1)">1</button>`;
        if (range[0] > 2) html += `<span class="page-ellipsis">…</span>`;
    }
    range.forEach(i => {
        html += `<button class="page-btn${i === currentPage ? ' active' : ''}" onclick="goToPage(${i})">${i}</button>`;
    });
    if (range[range.length - 1] < totalPages) {
        if (range[range.length - 1] < totalPages - 1) html += `<span class="page-ellipsis">…</span>`;
        html += `<button class="page-btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }
    html += `<button class="page-btn" onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>${t.nextPage || 'Next →'}</button>`;
    html += '</div>';
    container.innerHTML = html;
}

function goToPage(page) {
    if (page < 1) return;
    currentPage = page;
    renderLeaks();
    const leakTop = document.getElementById('leaksContainer').offsetTop;
    window.scrollTo({ top: leakTop - 100, behavior: 'smooth' });
}

function renderTimelineView(filtered, container, t) {
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const monthNamesFull = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    // Group by year-month key
    const groups = {};
    filtered.forEach(leak => {
        const d = leak.date || '';
        const parts = d.split('-');
        const year = parts[0] || 'Unknown';
        const month = parts[1] ? parts[1].padStart(2, '0') : '00';
        const key = `${year}-${month}`;
        if (!groups[key]) groups[key] = { year, month, leaks: [] };
        groups[key].leaks.push(leak);
    });

    // Sort newest first (left-to-right: newest on left)
    const sortedKeys = Object.keys(groups).sort((a, b) => b.localeCompare(a));
    if (!sortedKeys.length) { container.innerHTML = '<div class="no-leaks">No data</div>'; return; }

    const maxCount = Math.max(...sortedKeys.map(k => groups[k].leaks.length));
    const BAR_MAX_PX = 110; // max bar height in pixels

    // Build columns HTML
    const cols = sortedKeys.map((key, idx) => {
        const g = groups[key];
        const mIdx = parseInt(g.month, 10) - 1;
        const mShort = g.month === '00' ? '?' : (monthNames[mIdx] || g.month).toUpperCase();
        const mFull  = g.month === '00' ? 'Unknown' : (monthNamesFull[mIdx] || g.month);
        const barH = maxCount ? Math.max(6, Math.round((g.leaks.length / maxCount) * BAR_MAX_PX)) : 6;
        const isBig = g.leaks.length === maxCount;

        const leaksHtml = g.leaks.map(l => `
            <div class="htl-leak-item">
                <span class="htl-leak-dot sector-${l.sector}"></span>
                <span class="htl-leak-name" title="${l.name}">${l.name}</span>
            </div>`).join('');

        return `
        <div class="htl-col${isBig ? ' htl-col--peak' : ''}" data-key="${key}">
            <div class="htl-upper">
                <div class="htl-month-label"><span class="htl-mon">${mShort}</span><span class="htl-yr">${g.year}</span></div>
                <div class="htl-count-badge">${g.leaks.length}</div>
                <div class="htl-bar-wrap">
                    <div class="htl-bar" style="height:${barH}px" data-count="${g.leaks.length}"></div>
                </div>
            </div>
            <div class="htl-node-row">
                <div class="htl-connector htl-connector--left"></div>
                <div class="htl-dot" title="${mFull} ${g.year} · ${g.leaks.length} breach${g.leaks.length !== 1 ? 'es' : ''}"></div>
                <div class="htl-connector htl-connector--right"></div>
            </div>
            <div class="htl-lower">
                <div class="htl-leaks-list">${leaksHtml}</div>
            </div>
        </div>`;
    }).join('');

    container.innerHTML = `
        <div class="htl-wrapper">
            <div class="htl-scroll-area">
                <div class="htl-cols">${cols}</div>
            </div>
            <div class="htl-scroll-hint" aria-hidden="true">
                <span>← scroll</span>
            </div>
        </div>`;
}

function getLastUpdated() {
    const dates = leaks
        .filter(l => l.date && l.date !== 'Unknown' && l.date.trim() !== '' && /^\d{4}/.test(l.date))
        .map(l => l.date);
    if (!dates.length) return null;
    dates.sort();
    return dates[dates.length - 1];
}

function updateURL() {
    const params = new URLSearchParams();
    if (currentFilter !== 'all') params.set('filter', currentFilter);
    if (searchQuery) params.set('search', searchQuery);
    if (currentPage > 1) params.set('page', String(currentPage));
    if (currentView !== 'grid') params.set('view', currentView);
    const qs = params.toString();
    try {
        history.replaceState({}, '', qs ? '?' + qs : window.location.pathname);
    } catch(e) {}
}

function readURLParams() {
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('filter') && ['all','public','private'].includes(params.get('filter'))) {
            currentFilter = params.get('filter');
            // Update active filter button
            document.querySelectorAll('.filter-group .btn').forEach(btn => btn.classList.remove('active'));
            const ids = { all: 'btnAll', public: 'btnPublic', private: 'btnPrivate' };
            const el = document.getElementById(ids[currentFilter]);
            if (el) el.closest('.btn').classList.add('active');
        }
        if (params.get('search')) {
            searchQuery = params.get('search');
            const inp = document.getElementById('searchInput');
            if (inp) inp.value = searchQuery;
        }
        if (params.get('page')) {
            currentPage = Math.max(1, parseInt(params.get('page')) || 1);
        }
        if (params.get('view') === 'timeline') {
            currentView = 'timeline';
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            const tBtn = document.getElementById('viewTimeline');
            if (tBtn) tBtn.classList.add('active');
            const gBtn = document.getElementById('viewGrid');
            if (gBtn) gBtn.classList.remove('active');
        }
    } catch(e) {}
}

function renderBreachTimeline() {
    const chart = document.getElementById('breachTimelineChart');
    if (!chart) return;

    const counts = {};
    leaks.forEach(l => {
        if (!l.date || l.date === 'Unknown') return;
        const parts = l.date.split('-');
        if (parts.length < 2) return;
        const key = `${parts[0]}-${parts[1].padStart(2, '0')}`;
        counts[key] = (counts[key] || 0) + 1;
    });

    const sorted = Object.keys(counts).sort().slice(-24);
    if (!sorted.length) { chart.innerHTML = ''; return; }

    const maxCount = Math.max(...sorted.map(k => counts[k]));
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    chart.innerHTML = sorted.map((key, i) => {
        const [y, m] = key.split('-');
        const label = `${monthNames[parseInt(m, 10) - 1] || m} ${y}`;
        const count = counts[key];
        const pct = maxCount ? (count / maxCount) * 100 : 0;
        const delay = Math.min(i * 40, 700);
        const tier = pct > 60 ? 'high' : pct > 30 ? 'medium' : 'low';
        return `
            <div class="sector-bar" style="--bar-delay:${delay}ms">
                <div class="sector-bar-label" title="${label}">${label}</div>
                <div class="sector-bar-track">
                    <div class="sector-bar-fill ${tier}" style="width:${pct}%">
                        <span class="sector-bar-tip"></span>
                    </div>
                    <span class="sector-bar-count">${count}</span>
                </div>
            </div>`;
    }).join('');
}

// Escape HTML to safely inject sector labels
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function renderChart() {
    const t = translations[currentLang];

    // Count leaks by economic sector using normalized and expanded sectors
    const sectorCounts = {};
    leaks.forEach(leak => {
        // Get normalized sectors for this leak (may be multiple)
        const normalizedSectors = normalizeAndExpandSectors(leak.economicSector);

        // Increment count for each normalized sector
        normalizedSectors.forEach(sector => {
            sectorCounts[sector] = (sectorCounts[sector] || 0) + 1;
        });
    });

    // Convert to array of [sector, count] pairs and sort by count descending (highest first)
    const sortedSectorPairs = Object.entries(sectorCounts).sort((a, b) => b[1] - a[1]);

    // Extract sorted sectors and counts
    const sectors = sortedSectorPairs.map(pair => pair[0]);
    const counts = sortedSectorPairs.map(pair => pair[1]);
    const maxCount = counts.length ? Math.max(...counts) : 0;

    // Intensity tier by share of the most-affected sector:
    // high = bright red, medium = warm coral, low = deep crimson.
    const getTier = (count) => {
        const ratio = maxCount ? count / maxCount : 0;
        if (ratio > 0.6) return 'high';
        if (ratio > 0.3) return 'medium';
        return 'low';
    };

    const chart = document.getElementById('sectorChart');
    if (!chart) return;

    // Build the animated horizontal bars. Width is driven by count/maxCount;
    // a CSS scaleX animation grows each bar from the left with a staggered delay.
    const barsHTML = sectors.map((sector, index) => {
        const count = counts[index];
        const pct = maxCount ? (count / maxCount) * 100 : 0;
        const tier = getTier(count);
        const delay = Math.min(index * 60, 700);
        return `
            <div class="sector-bar" style="--bar-delay: ${delay}ms">
                <div class="sector-bar-label" title="${escapeHtml(sector)}">${escapeHtml(sector)}</div>
                <div class="sector-bar-track">
                    <div class="sector-bar-fill ${tier}" style="width: ${pct}%;">
                        <span class="sector-bar-tip"></span>
                    </div>
                    <span class="sector-bar-count">${count}</span>
                </div>
            </div>
        `;
    }).join('');

    chart.innerHTML = barsHTML || `<div class="sector-bars-empty">${t.noLeaks}</div>`;

    // Compact summary strip in place of the old legend.
    const legend = document.getElementById('chartLegend');
    if (legend) {
        if (sectors.length) {
            legend.innerHTML = `
                <div class="chart-summary">
                    <div class="chart-summary-item">
                        <span class="chart-summary-value">${sectors.length}</span>
                        <span class="chart-summary-label">${t.sectorsTracked}</span>
                    </div>
                    <div class="chart-summary-divider"></div>
                    <div class="chart-summary-item">
                        <span class="chart-summary-label">${t.mostAffected}</span>
                        <span class="chart-summary-top">${escapeHtml(sectors[0])} · ${counts[0]}</span>
                    </div>
                </div>
            `;
        } else {
            legend.innerHTML = '';
        }
    }
}

// Evidence Lightbox Functions
function openEvidenceOverlay(imageSrc, imageAlt) {
    const overlay = document.getElementById('evidenceLightbox');
    const image = document.getElementById('lightboxImage');
    
    image.src = imageSrc;
    image.alt = imageAlt || 'Evidence Image';
    
    overlay.classList.add('active');
    document.body.classList.add('lightbox-active');
}

function closeEvidenceOverlay() {
    const overlay = document.getElementById('evidenceLightbox');
    
    overlay.classList.remove('active');
    document.body.classList.remove('lightbox-active');
}

// Setup click handlers for evidence images after leaks are rendered
function setupEvidenceClickHandlers() {
    const evidenceImages = document.querySelectorAll('.evidence-images img');
    
    evidenceImages.forEach(img => {
        // Remove existing click handler if any
        img.onclick = null;
        
        // Add click handler
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            openEvidenceOverlay(this.src, this.alt);
        });
    });
}

// Click outside image to close
document.getElementById('evidenceLightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeEvidenceOverlay();
    }
});

// ESC key to close
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
        const overlay = document.getElementById('evidenceLightbox');
        if (overlay.classList.contains('active')) {
            closeEvidenceOverlay();
        }
    }
});

// Initialize the page when DOM is ready
// Data is already loaded from data.js
document.addEventListener('DOMContentLoaded', function() {
    // Restore saved theme
    try {
        if (localStorage.getItem('bgdl-theme') === 'light') {
            document.body.classList.add('light');
            document.getElementById('themeToggle').textContent = '☽';
            document.documentElement.style.setProperty('--sb-track', '#d0d6e4');
        }
    } catch(e) {}

    // Apply URL params before first render
    readURLParams();
    restoreSections();

    // Last updated timestamp
    const lastDate = getLastUpdated();
    if (lastDate) {
        const t = translations[currentLang];
        const luEl = document.getElementById('lastUpdated');
        if (luEl) luEl.textContent = `${t.lastUpdated || 'Last updated'}: ${formatDate(lastDate)}`;
    }

    updateCounters();
    renderLeaks();
    renderChart();
    renderBreachTimeline();

    // Back to top button visibility
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
});
