let currentLang = 'en';
let currentFilter = 'all';
let searchQuery = '';

const translations = {
    en: {
        mainTitle: 'BULGARIAN DATA LEAKS',
        description: 'Tracking security breaches exposing personally identifiable information of Bulgarian citizens and confidential internal documents of organizations',
        poweredBy: 'Powered by Claude Sonnet 4.5 by Anthropic',
        btnAll: 'All Leaks',
        btnPublic: 'Public Sector',
        btnPrivate: 'Private Sector',
        btnLatest: 'Latest 10',
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
        disclaimerTitle: 'Legal Disclaimer',
        disclaimerText: 'This website does not engage in the acquisition, exfiltration, downloading, possession, hosting, access, consultation, redistribution, or disclosure of unlawfully obtained data. This platform indexes only publicly visible information posted by ransomware operators and open web sources without accessing or obtaining the underlying stolen content. The service is provided to support public awareness, legitimate research, and cyber-resilience. No stolen personal or confidential data is collected or distributed via this site.',
        totalLabel: 'Total Leaks',
        publicLabel: 'Public Sector',
        privateLabel: 'Private Sector',
        latestLabel: 'Latest 10',
        searchTitle: 'Search for Company',
        searchPlaceholder: 'Enter company name or domain...',
        searchResults: 'results found',
        noResults: 'No companies found matching your search'
    },
    bg: {
        mainTitle: 'ИЗТИЧАНЕ НА ДАННИ В БЪЛГАРИЯ',
        description: 'Проследяване на нарушения на сигурността, водещи до изтичане на лична информация на български граждани и поверителни вътрешни документи на организации',
        poweredBy: 'Създадено с Claude Sonnet 4.5 от Anthropic',
        btnAll: 'Всички Изтичания',
        btnPublic: 'Публичен Сектор',
        btnPrivate: 'Частен Сектор',
        btnLatest: 'Последни 10',
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
        disclaimerTitle: 'Правна Декларация',
        disclaimerText: 'Този уебсайт не се занимава с придобиване, изтичане, изтегляне, притежание, хостинг, достъп, консултиране, преразпространение або разкриване на незаконно получени данни. Тази платформа индексира само публично видима информация, публикувана от операторите на рансъмуер и отворени уеб източници, без да осъществява достъп или да получава основното откраднато съдържание. Услугата се предоставя в подкрепа на обществената осведоменост, легитимни изследвания и киберустойчивост. Никакви откраднати лични или поверителни данни не се събират или разпространяват чрез този сайт.',
        totalLabel: 'Всички Изтичания',
        publicLabel: 'Публичен Сектор',
        privateLabel: 'Частен Сектор',
        latestLabel: 'Последни 10',
        searchTitle: 'Търсене на Компания',
        searchPlaceholder: 'Въведете име или домейн...',
        searchResults: 'намерени резултата',
        noResults: 'Няма намерени компании'
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
        return ['Digital Commerce', 'Media'];
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

        // Combine E-commerce + Retail → Digital Commerce
        if (lower === 'e-commerce' || lower === 'ecommerce' || lower === 'retail') {
            return 'Digital Commerce';
        }

        // Combine IT + Telecommunication → Technology & Telecom
        if (lower === 'it' || lower === 'telecommunication') {
            return 'Technology & Telecom';
        }

        // Combine Pharmaceutical + Healthcare → Healthcare & Pharma
        if (lower === 'pharmaceutical' || lower === 'healthcare') {
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
    document.getElementById('mainTitle').textContent = t.mainTitle;
    document.getElementById('description').textContent = t.description;
    document.getElementById('poweredBy').textContent = t.poweredBy;
    document.getElementById('btnAll').textContent = t.btnAll;
    document.getElementById('btnPublic').textContent = t.btnPublic;
    document.getElementById('btnPrivate').textContent = t.btnPrivate;
    document.getElementById('btnLatest').textContent = t.btnLatest;
    document.getElementById('langBtn').textContent = t.langBtn;
    document.getElementById('statsTitle').textContent = t.statsTitle;
    document.getElementById('disclaimerTitle').textContent = t.disclaimerTitle;
    document.getElementById('disclaimerText').textContent = t.disclaimerText;
    document.getElementById('totalLabel').textContent = t.totalLabel;
    document.getElementById('publicLabel').textContent = t.publicLabel;
    document.getElementById('privateLabel').textContent = t.privateLabel;
    document.getElementById('searchTitle').textContent = t.searchTitle;
    document.getElementById('searchInput').placeholder = t.searchPlaceholder;
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
    renderLeaks();
}

function filterLeaks(filter) {
    currentFilter = filter;
    const buttons = document.querySelectorAll('.controls .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.closest('.btn').classList.add('active');
    renderLeaks();
}

function renderLeaks() {
    const t = translations[currentLang];
    const container = document.getElementById('leaksContainer');
    
    // Filter based on current filter
    let filtered;
    if (currentFilter === 'latest') {
        // Latest 10: Filter out leaks without valid dates, sort by date descending, take first 10
        filtered = leaks
            .filter(l => l.date && l.date !== 'Unknown' && l.date.trim() !== '')
            .sort((a, b) => {
                // Parse dates for comparison (format: YYYY-MM-DD or YYYY-MM or YYYY)
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB - dateA; // Descending order (newest first)
            })
            .slice(0, 10);
    } else if (currentFilter === 'all') {
        filtered = [...leaks];
    } else {
        filtered = leaks.filter(l => l.sector === currentFilter);
    }

    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(leak => 
            leak.name.toLowerCase().includes(searchQuery) ||
            leak.domain.toLowerCase().includes(searchQuery)
        );
    }

    // Sort alphabetically by name (except for "latest" filter which is already sorted by date)
    if (currentFilter !== 'latest') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Update search results count
    const resultsElement = document.getElementById('searchResults');
    if (searchQuery) {
        resultsElement.innerHTML = `<span>${filtered.length}</span> ${t.searchResults}`;
    } else {
        resultsElement.textContent = '';
    }

    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-leaks">${searchQuery ? t.noResults : t.noLeaks}</div>`;
        return;
    }

    container.innerHTML = filtered.map(leak => {
        // Generate evidence images HTML only if valid images exist
        let evidenceHTML = '';
        const hasValidEvidence = leak.evidenceImages && 
                                Array.isArray(leak.evidenceImages) && 
                                leak.evidenceImages.length > 0;
        
        if (hasValidEvidence) {
            // Show actual images from evidenceImages array
            evidenceHTML = leak.evidenceImages.map(imgPath => `
                <img src="${imgPath}" alt="Evidence" style="width: 100%; height: auto; border: 1px solid #ffffff; box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);">
            `).join('');
        }
        
        return `
            <div class="leak-card">
                <div class="leak-header">
                    <div>
                        <div class="leak-title">${leak.name}</div>
                        ${leak.domain ? `<div class="leak-domain">${leak.domain}</div>` : ''}
                    </div>
                    <div>
                        <div class="sector-badge ${leak.sector}">
                            ${t[leak.sector]}
                        </div>
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
                        <span class="info-value">${leak.date}</span>
                    </div>
                </div>

                ${hasValidEvidence ? `
                <div class="evidence-section">
                    <div class="evidence-title">${t.evidence}</div>
                    <div class="evidence-images">
                        ${evidenceHTML}
                    </div>
                </div>
                ` : ''}

                <a href="${leak.sourceUrl}" target="_blank" class="source-link">
                    ${t.viewSource} →
                </a>
            </div>
        `;
    }).join('');
}

// Radar animation variables
let radarAngle = 0;
let radarAnimationId = null;

function renderChart() {
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

    // Determine color based on count (high=red, medium=orange, low=green)
    const maxCount = Math.max(...counts);
    const getColorForCount = (count) => {
        const ratio = count / maxCount;
        if (ratio > 0.6) return '#ff0000'; // High - red
        if (ratio > 0.3) return '#ff6600'; // Medium - orange
        return '#00ff00'; // Low - green
    };

    // Position sectors around the radar circle
    const sectorPositions = sectors.map((sector, index) => {
        const angle = (index / sectors.length) * Math.PI * 2;
        return {
            sector,
            count: counts[index],
            angle,
            color: getColorForCount(counts[index]),
            pulsePhase: Math.random() * Math.PI * 2
        };
    });

    const canvas = document.getElementById('sectorChart');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 500;
    canvas.height = 500;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radarRadius = 200;

    // Stop any existing animation
    if (radarAnimationId) {
        cancelAnimationFrame(radarAnimationId);
    }

    // Radar animation function
    function animateRadar() {
        // Clear canvas
        ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw radar circles (grid)
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.2)';
        ctx.lineWidth = 1;
        for (let i = 1; i <= 4; i++) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, (radarRadius / 4) * i, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Draw crosshairs
        ctx.strokeStyle = 'rgba(0, 255, 0, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - radarRadius);
        ctx.lineTo(centerX, centerY + radarRadius);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(centerX - radarRadius, centerY);
        ctx.lineTo(centerX + radarRadius, centerY);
        ctx.stroke();

        // Draw sector indicators
        sectorPositions.forEach((sectorData, index) => {
            const x = centerX + Math.cos(sectorData.angle) * radarRadius * 0.85;
            const y = centerY + Math.sin(sectorData.angle) * radarRadius * 0.85;

            // Calculate pulse effect
            const pulseValue = Math.sin(Date.now() / 1000 + sectorData.pulsePhase) * 0.3 + 0.7;
            
            // Check if scan line is near this sector
            const angleDiff = Math.abs(((radarAngle - sectorData.angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
            const isScanning = angleDiff < 0.3;
            
            // Base size based on count
            const baseSize = 3 + (sectorData.count / maxCount) * 8;
            const size = isScanning ? baseSize * 2 : baseSize * pulseValue;

            // Draw glow
            const glowSize = isScanning ? size * 3 : size * 1.5;
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
            gradient.addColorStop(0, sectorData.color);
            gradient.addColorStop(0.5, sectorData.color + '88');
            gradient.addColorStop(1, sectorData.color + '00');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, glowSize, 0, Math.PI * 2);
            ctx.fill();

            // Draw core dot
            ctx.fillStyle = sectorData.color;
            ctx.shadowBlur = isScanning ? 20 : 10;
            ctx.shadowColor = sectorData.color;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            // Draw connecting line
            ctx.strokeStyle = sectorData.color + '33';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();
        });

        // Draw scanning line with fade trail
        const scanGradient = ctx.createLinearGradient(
            centerX,
            centerY,
            centerX + Math.cos(radarAngle) * radarRadius,
            centerY + Math.sin(radarAngle) * radarRadius
        );
        scanGradient.addColorStop(0, 'rgba(0, 255, 0, 0)');
        scanGradient.addColorStop(0.7, 'rgba(0, 255, 0, 0.5)');
        scanGradient.addColorStop(1, 'rgba(0, 255, 0, 0.9)');

        ctx.strokeStyle = scanGradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
            centerX + Math.cos(radarAngle) * radarRadius,
            centerY + Math.sin(radarAngle) * radarRadius
        );
        ctx.stroke();

        // Draw fade trail
        for (let i = 1; i <= 8; i++) {
            const trailAngle = radarAngle - (i * 0.1);
            const trailAlpha = 0.3 * (1 - i / 8);
            ctx.strokeStyle = `rgba(0, 255, 0, ${trailAlpha})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(
                centerX + Math.cos(trailAngle) * radarRadius,
                centerY + Math.sin(trailAngle) * radarRadius
            );
            ctx.stroke();
        }

        // Update angle
        radarAngle += 0.02;
        if (radarAngle > Math.PI * 2) {
            radarAngle -= Math.PI * 2;
        }

        radarAnimationId = requestAnimationFrame(animateRadar);
    }

    // Start animation
    animateRadar();

    // Render legend with new styling
    const legendHTML = sectors.map((sector, index) => `
        <div class="legend-item">
            <div class="legend-color" style="background-color: ${getColorForCount(counts[index])}; box-shadow: 0 0 10px ${getColorForCount(counts[index])}88;"></div>
            <div class="legend-label">${sector}</div>
            <div class="legend-value">${counts[index]}</div>
        </div>
    `).join('');
    
    document.getElementById('chartLegend').innerHTML = legendHTML;
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

// Override renderLeaks to add click handlers after rendering
const originalRenderLeaks = renderLeaks;
renderLeaks = function() {
    originalRenderLeaks();
    // Setup click handlers after a brief delay to ensure DOM is updated
    setTimeout(setupEvidenceClickHandlers, 50);
};

// Initialize the page when DOM is ready
// Data is already loaded from data.js
document.addEventListener('DOMContentLoaded', function() {
    updateCounters();
    renderLeaks();
    renderChart();
});
