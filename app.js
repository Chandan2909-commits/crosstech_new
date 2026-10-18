/**
 * CrossTech Solutions — Master Application Controller
 * High-performance, accessible, interactive Vanilla JS
 */

// Master Products Repository from brain.md
const PRODUCTS_DATA = [
  {
    id: 'employeeos',
    name: 'EmployeeOS',
    branch: 'applications',
    branchName: 'CrossTech Applications',
    branchColor: 'blue',
    tagline: 'Workforce & employee operations platform for the connected workplace.',
    oneLiner: 'Brings core employee workflows, lifecycle management, and operations into one connected system.',
    problem: 'Modern organizations struggle with fragmented HR systems, disjointed attendance tracking, separate payroll spreadsheets, and clumsy employee self-service tools.',
    solution: 'EmployeeOS unifies the entire employee lifecycle—from onboarding and attendance to claims, payroll, and employee self-service—in a single, modern interface.',
    capabilities: ['Employee Lifecycle', 'Attendance & Leave', 'Payroll & Payslips', 'Claims & Expenses', 'Self-Service Portal', 'AI HR Assistant'],
    status: 'Live Production',
    isLive: true,
    url: 'https://empos1.vercel.app/index.html',
    badge: 'Enterprise Platform'
  },
  {
    id: 'cros',
    name: 'CROS',
    branch: 'applications',
    branchName: 'CrossTech Applications',
    branchColor: 'blue',
    tagline: 'CrossTech Retail Operating System for unified retail management.',
    oneLiner: 'A purpose-built retail operating system to coordinate day-to-day point of sale, inventory, and operations.',
    problem: 'Retailers face stock discrepancies, checkout friction, disconnected offline/online catalog records, and limited multi-outlet visibility.',
    solution: 'CROS consolidates multi-register POS, real-time inventory management, sales logs, and store performance metrics into an intuitive command hub.',
    capabilities: ['Retail POS', 'Live Inventory Tracking', 'Multi-Outlet Sync', 'Sales Reporting', 'Staff Permissions', 'Catalog Control'],
    status: 'Live',
    isLive: true,
    url: 'https://cros-three.vercel.app/',
    badge: 'Retail OS'
  },
  {
    id: 'uplycrm',
    name: 'UplyCRM',
    branch: 'applications',
    branchName: 'CrossTech Applications',
    branchColor: 'blue',
    tagline: 'Customer relationship management engineered for pipeline clarity.',
    oneLiner: 'Organize customer relationships, track qualified leads, and accelerate sales pipeline deal cycles.',
    problem: 'Sales teams lose critical deals due to unorganized customer notes, neglected follow-ups, and cumbersome CRM software designed for giant conglomerates.',
    solution: 'UplyCRM delivers a fast, focused sales pipeline and contact manager that keeps client history clear, action items prioritized, and team collaboration effortless.',
    capabilities: ['Lead Management', 'Visual Sales Pipeline', 'Deal Stages', 'Contact Directory', 'Follow-up Reminders', 'Activity Timeline'],
    status: 'Live Production',
    isLive: true,
    url: 'https://uplycrmapp.crosstechsolutions.in/',
    badge: 'CRM Platform'
  },
  {
    id: 'buildledger',
    name: 'BuildLedger',
    branch: 'applications',
    branchName: 'CrossTech Applications',
    branchColor: 'blue',
    tagline: 'Construction operations workspace for project management & site ledgers.',
    oneLiner: 'Empowers construction teams to track job sites, work orders, ledgers, and contractor access in one place.',
    problem: 'Construction and site operations run into budget overruns, delayed paperwork, untracked on-site changes, and fragmented contractor communications.',
    solution: 'BuildLedger provides an organized operations workspace where site logs, expenses, material ledgers, and project phases are kept synchronized and verifiable.',
    capabilities: ['Site Project Tracking', 'Financial Ledgers', 'Team & Contractor Access', 'Work Orders', 'Document Storage', 'Site Progress Logs'],
    status: 'Live',
    isLive: true,
    url: 'https://constructionos-xi.vercel.app/signup',
    badge: 'Site Operations'
  },
  {
    id: 'collaborationos',
    name: 'CollaborationOS',
    branch: 'applications',
    branchName: 'CrossTech Applications',
    branchColor: 'blue',
    tagline: 'Organizational workspace for departments, teams, and Kanban workflows.',
    oneLiner: 'Helps companies structure teams, manage departmental deliverables, and collaborate with role-based clarity.',
    problem: 'Cross-functional initiatives fail when departments operate in silos with disconnected task trackers, confusing permissions, and chaotic updates.',
    solution: 'CollaborationOS structures organizations into clear departments, teams, and shared Kanban boards with strict role-based controls and transparent milestones.',
    capabilities: ['Organization Hierarchy', 'Department Channels', 'Kanban Board Engine', 'Role-Based Access', 'Shared Workspaces', 'Activity Feeds'],
    status: 'Live',
    isLive: true,
    url: 'https://collaboration-os.vercel.app/',
    badge: 'Team OS'
  },
  {
    id: 'synergy',
    name: 'Synergy',
    branch: 'applications',
    branchName: 'CrossTech Applications',
    branchColor: 'blue',
    tagline: 'Cross-system operational synergy and enterprise workflow connectivity.',
    oneLiner: 'Enterprise connectivity suite designed to bridge distinct operational tools into harmonized workflows.',
    problem: 'Enterprise departments waste hundreds of hours manually syncing data between enterprise databases, accounting tools, and operations.',
    solution: 'Synergy provides intelligent operational automation and connective tissue between disparate business applications to eliminate friction.',
    capabilities: ['Workflow Automation', 'Enterprise Connectors', 'Data Harmonization', 'Task Routing', 'Unified Dashboard'],
    status: 'In Development',
    isLive: false,
    url: '#contact',
    badge: 'In Development'
  },
  {
    id: 'mindspace',
    name: 'Mind Space',
    branch: 'conscious',
    branchName: 'Conscious Living',
    branchColor: 'pink',
    tagline: 'Private AI-powered digital sanctuary for journaling, memory, and personal reflection.',
    oneLiner: 'A local-first second brain that helps users reflect on daily life, track wellness, and preserve meaningful memories.',
    problem: 'People struggle to maintain reflective journaling habits, while existing digital diary apps compromise privacy or lock thoughts behind clunky interfaces.',
    solution: 'Mind Space combines voice dictation, local-first storage encryption, mood logs, and intelligent summaries into a serene, calming private sanctuary.',
    capabilities: ['Voice Dictation (Whisper)', 'Local-First Storage', 'Mood Tracking', 'AI Summarization', 'Semantic Memory Search', 'Optional Cloud Sync'],
    status: 'Live Production',
    isLive: true,
    url: 'https://mindspace.crosstechsolutions.in/',
    badge: 'Digital Sanctuary'
  },
  {
    id: 'honeytrack',
    name: 'HoneyTrack',
    branch: 'conscious',
    branchName: 'Conscious Living',
    branchColor: 'pink',
    tagline: 'AI-native habit & wellness companion turning intentions into consistent daily action.',
    oneLiner: 'Empowers users to cultivate positive daily rituals, maintain streaks, and reflect with AI Letters.',
    problem: 'Habit trackers often induce guilt, rigid penalties, and abandonment when life inevitably interrupts a routine.',
    solution: 'HoneyTrack rethinks habit building through gentle streak freezes, Hero & Routine tasks, visual 365-day grids, mood timelines, and supportive AI reflections.',
    capabilities: ['Habit Streaks & Freezes', '365-Day Contribution Grid', 'Hero & Routine Tasks', 'Mood Calendar', 'AI Reflection Letters', 'PWA & Android Access'],
    status: 'Live Production',
    isLive: true,
    url: 'https://honeytrack.crosstechsolutions.in/',
    badge: 'Habit Companion'
  },
  {
    id: 'mivo',
    name: 'Mivo',
    branch: 'conscious',
    branchName: 'Conscious Living',
    branchColor: 'pink',
    tagline: 'Intentional wellness and mindful lifestyle experience for balanced living.',
    oneLiner: 'An upcoming Conscious Living product dedicated to mindful routines and restorative lifestyle balance.',
    problem: 'Digital noise and constant screen stimulation create chronic cognitive overload and stress in modern day-to-day life.',
    solution: 'Mivo is crafted to deliver gentle, sensory-aware moments of pause, intentional lifestyle guidance, and mindful digital tranquility.',
    capabilities: ['Mindful Routines', 'Digital Pause Cues', 'Sensory Calming', 'Lifestyle Well-Being', 'Personal Reflection'],
    status: 'In Development',
    isLive: false,
    url: '#contact',
    badge: 'In Development'
  }
];

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initFlowchart();
  initPortfolioGrid();
  initProductModal();
  initSearchModal();
  initContactForm();
  initScrollSpy();
});

/* ==========================================================================
   Navigation & Header
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-menu-btn');
  const navCapsule = document.querySelector('.nuvue-nav-capsule');
  const tracker = document.querySelector('.vertical-index-tracker');
  const darkSection = document.getElementById('purpose');
  const footer = document.querySelector('.site-footer');

  const onScroll = () => {
    // Header gets .scrolled styling when scrolling past hero top
    if (window.scrollY > 40) {
      if (header) header.classList.add('scrolled');
    } else {
      if (header) header.classList.remove('scrolled');
    }

    // Right-edge index tracker shows once past hero
    if (window.scrollY > window.innerHeight * 0.4) {
      if (tracker) tracker.classList.add('visible');
    } else {
      if (tracker) tracker.classList.remove('visible');
    }

    // Header adapts color when over dark sections (#purpose or footer)
    const headerHeight = header ? header.offsetHeight : 80;
    let isHeaderDark = false;

    if (darkSection) {
      const rect = darkSection.getBoundingClientRect();
      if (rect.top <= headerHeight && rect.bottom >= 0) {
        isHeaderDark = true;
      }
    }

    if (footer) {
      const rect = footer.getBoundingClientRect();
      if (rect.top <= headerHeight && rect.bottom >= 0) {
        isHeaderDark = true;
      }
    }

    if (header) {
      if (isHeaderDark) {
        header.classList.add('on-dark');
      } else {
        header.classList.remove('on-dark');
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (mobileToggle && navCapsule) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navCapsule.classList.contains('mobile-expanded');
      if (isVisible) {
        navCapsule.classList.remove('mobile-expanded');
      } else {
        navCapsule.classList.add('mobile-expanded');
      }
    });
  }
}

/* ==========================================================================
   Interactive Business Bifurcation Flowchart (brain.md Sec 3 & 6)
   ========================================================================== */
function initFlowchart() {
  const filterBtns = document.querySelectorAll('.flow-control-btn');
  const appBranchCard = document.querySelector('.branch-header-card.blue-branch');
  const consciousBranchCard = document.querySelector('.branch-header-card.pink-branch');
  const appNest = document.querySelector('.blue-branch-nest');
  const consciousNest = document.querySelector('.pink-branch-nest');
  const lineToApp = document.querySelector('.line-to-app');
  const lineToConscious = document.querySelector('.line-to-conscious');

  // Render product chips dynamically into the flowchart nests
  if (appNest && consciousNest) {
    const appProducts = PRODUCTS_DATA.filter(p => p.branch === 'applications');
    const consciousProducts = PRODUCTS_DATA.filter(p => p.branch === 'conscious');

    appNest.innerHTML = appProducts.map(prod => `
      <div class="product-node-chip" data-product-id="${prod.id}">
        <div class="chip-header">
          <span class="chip-name">${prod.name}</span>
        </div>
        <p class="chip-one-liner">${prod.oneLiner}</p>
        <div class="chip-footer-link">
          <span>Inspect Architecture</span>
          <span>&rarr;</span>
        </div>
      </div>
    `).join('');

    consciousNest.innerHTML = consciousProducts.map(prod => `
      <div class="product-node-chip" data-product-id="${prod.id}">
        <div class="chip-header">
          <span class="chip-name">${prod.name}</span>
        </div>
        <p class="chip-one-liner">${prod.oneLiner}</p>
        <div class="chip-footer-link">
          <span>Inspect Sanctuary</span>
          <span>&rarr;</span>
        </div>
      </div>
    `).join('');

    // Attach click listeners to chips
    document.querySelectorAll('.product-node-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const prodId = chip.getAttribute('data-product-id');
        openProductModal(prodId);
      });
    });
  }

  // Branch filter toggle interaction
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'blue-active', 'pink-active'));
      const mode = btn.getAttribute('data-branch-filter');

      if (mode === 'all') {
        btn.classList.add('active');
        if (appBranchCard) { appBranchCard.style.opacity = '1'; appBranchCard.classList.remove('focused'); }
        if (consciousBranchCard) { consciousBranchCard.style.opacity = '1'; consciousBranchCard.classList.remove('focused'); }
        if (appNest) appNest.style.opacity = '1';
        if (consciousNest) consciousNest.style.opacity = '1';
        if (lineToApp) lineToApp.setAttribute('class', 'tree-line-path active-blue');
        if (lineToConscious) lineToConscious.setAttribute('class', 'tree-line-path active-pink');
      } else if (mode === 'applications') {
        btn.classList.add('active', 'blue-active');
        if (appBranchCard) { appBranchCard.style.opacity = '1'; appBranchCard.classList.add('focused'); }
        if (consciousBranchCard) { consciousBranchCard.style.opacity = '0.35'; consciousBranchCard.classList.remove('focused'); }
        if (appNest) appNest.style.opacity = '1';
        if (consciousNest) consciousNest.style.opacity = '0.35';
        if (lineToApp) lineToApp.setAttribute('class', 'tree-line-path active-blue');
        if (lineToConscious) lineToConscious.setAttribute('class', 'tree-line-path');
      } else if (mode === 'conscious') {
        btn.classList.add('active', 'pink-active');
        if (appBranchCard) { appBranchCard.style.opacity = '0.35'; appBranchCard.classList.remove('focused'); }
        if (consciousBranchCard) { consciousBranchCard.style.opacity = '1'; consciousBranchCard.classList.add('focused'); }
        if (appNest) appNest.style.opacity = '0.35';
        if (consciousNest) consciousNest.style.opacity = '1';
        if (lineToApp) lineToApp.setAttribute('class', 'tree-line-path');
        if (lineToConscious) lineToConscious.setAttribute('class', 'tree-line-path active-pink');
      }
    });
  });

  // Hover highlighting on branch cards
  if (appBranchCard && lineToApp) {
    appBranchCard.addEventListener('mouseenter', () => lineToApp.setAttribute('class', 'tree-line-path active-blue'));
  }
  if (consciousBranchCard && lineToConscious) {
    consciousBranchCard.addEventListener('mouseenter', () => lineToConscious.setAttribute('class', 'tree-line-path active-pink'));
  }
}

/* ==========================================================================
   Product Portfolio Grid & Filtering (brain.md Sec 7 & 69)
   ========================================================================== */
function initPortfolioGrid() {
  const gridContainer = document.getElementById('portfolioGrid');
  const filterTabs = document.querySelectorAll('.filter-tab-pill');

  if (!gridContainer) return;

  function renderGrid(filter = 'all') {
    const filtered = filter === 'all' 
      ? PRODUCTS_DATA 
      : PRODUCTS_DATA.filter(p => p.branch === filter);

    gridContainer.innerHTML = filtered.map(prod => `
      <article class="portfolio-card branch-${prod.branch}" data-product-id="${prod.id}">
        <div class="card-top-meta">
          <span class="card-branch-tag ${prod.branch === 'applications' ? 'tag-app' : 'tag-conscious'}">
            ${prod.branch === 'applications' ? 'CrossTech Applications' : 'Conscious Living'}
          </span>
        </div>

        <div class="card-body">
          <h3 class="card-title">${prod.name}</h3>
          <p class="card-positioning">${prod.oneLiner}</p>

          <div class="card-caps-list">
            ${prod.capabilities.slice(0, 4).map(c => `<span class="cap-pill">${c}</span>`).join('')}
          </div>
        </div>

        <div class="card-actions-row">
          <button type="button" class="card-btn-inspect" onclick="openProductModal('${prod.id}')">
            Detailed Overview &rarr;
          </button>
          ${prod.isLive ? `
            <a href="${prod.url}" target="_blank" rel="noopener noreferrer" class="card-btn-external" title="Open live production app in new window">
              Launch App ↗
            </a>
          ` : `
            <a href="#contact" class="card-btn-external" style="background:#555761;" title="Get in touch for early preview">
              Inquire
            </a>
          `}
        </div>
      </article>
    `).join('');
  }

  // Initial render
  renderGrid('all');

  // Tab click events
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filterVal = tab.getAttribute('data-filter');
      renderGrid(filterVal);
    });
  });
}

/* ==========================================================================
   Product Detail Modal Dialog
   ========================================================================== */
function initProductModal() {
  const modal = document.getElementById('productDetailModal');
  const closeBtn = document.getElementById('closeProductModal');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
}

window.openProductModal = function(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById('productDetailModal');
  const container = document.getElementById('productModalBody');

  if (!modal || !container) return;

  container.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
      <span class="card-branch-tag ${prod.branch === 'applications' ? 'tag-app' : 'tag-conscious'}">
        ${prod.branchName}
      </span>
    </div>

    <h2 style="font-size: clamp(2rem, 4vw, 2.8rem); line-height: 1.1; margin-bottom: 12px; text-transform: uppercase;">
      ${prod.name}
    </h2>
    <p style="font-size: 1.15rem; font-weight: 500; color: var(--text-black); margin-bottom: 28px;">
      ${prod.tagline}
    </p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 32px; background: var(--bg-surface); padding: 24px; border-radius: 16px; border: 1px solid var(--border-light);">
      <div>
        <h4 style="font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">
          The Operational Challenge
        </h4>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
          ${prod.problem}
        </p>
      </div>
      <div>
        <h4 style="font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: ${prod.branch === 'applications' ? 'var(--pastel-blue-deep)' : 'var(--pastel-pink-deep)'}; margin-bottom: 8px;">
          The CrossTech Solution
        </h4>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
          ${prod.solution}
        </p>
      </div>
    </div>

    <div style="margin-bottom: 32px;">
      <h4 style="font-family: var(--font-mono); font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 16px;">
        Core Architecture & Verified Capabilities
      </h4>
      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        ${prod.capabilities.map(c => `
          <span style="font-family: var(--font-mono); font-size: 0.8rem; padding: 6px 14px; border-radius: 9999px; background: #FFFFFF; border: 1px solid var(--border-light); color: var(--text-black);">
            &bull; ${c}
          </span>
        `).join('')}
      </div>
    </div>

    <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 24px; border-top: 1px solid var(--border-light); flex-wrap: wrap; gap: 16px;">
      <div style="font-size: 0.82rem; color: var(--text-muted);">
        Verified against CrossTech Master Specification (brain.md)
      </div>
      <div>
        ${prod.isLive ? `
          <a href="${prod.url}" target="_blank" rel="noopener noreferrer" class="cta-btn-primary" style="padding: 12px 28px; font-size: 0.95rem;">
            <span>Open ${prod.name} Production App</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l9.2-9.2M17 17V7.8H7.8"/></svg>
          </a>
        ` : `
          <a href="#contact" class="cta-btn-primary" onclick="document.getElementById('productDetailModal').classList.remove('open');" style="padding: 12px 28px; font-size: 0.95rem;">
            <span>Request Early Access / Demo</span>
          </a>
        `}
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   Global Search Modal (⌘K / Ctrl+K) (brain.md Sec 25)
   ========================================================================== */
function initSearchModal() {
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('globalSearchInput');
  const searchResults = document.getElementById('searchResultsContainer');
  const searchTriggers = document.querySelectorAll('[data-action="open-search"]');
  const closeSearchBtn = document.getElementById('closeSearchModal');

  function openSearch() {
    if (!searchModal) return;
    searchModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
      renderSearchResults('');
    }
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });
  }

  // Keyboard shortcut ⌘K / Ctrl+K
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchModal && searchModal.classList.contains('open')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape' && searchModal && searchModal.classList.contains('open')) {
      closeSearch();
    }
  });

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value.trim().toLowerCase());
    });
  }

  function renderSearchResults(query) {
    if (!searchResults) return;

    let matches = PRODUCTS_DATA;
    if (query) {
      matches = PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.oneLiner.toLowerCase().includes(query) ||
        p.branchName.toLowerCase().includes(query) ||
        p.capabilities.some(c => c.toLowerCase().includes(query))
      );
    }

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div style="padding: 32px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          No matching products or pages found for "<strong>${escapeHtml(query)}</strong>".
        </div>
      `;
      return;
    }

    searchResults.innerHTML = matches.map(prod => `
      <div class="search-result-item" onclick="handleSearchSelect('${prod.id}')">
        <div class="item-info">
          <h5>${prod.name}</h5>
          <p>${prod.tagline}</p>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="card-branch-tag ${prod.branch === 'applications' ? 'tag-app' : 'tag-conscious'}" style="font-size: 0.65rem; padding: 2px 8px;">
            ${prod.branch === 'applications' ? 'Applications' : 'Conscious'}
          </span>
          <span style="font-size: 0.8rem; color: var(--text-black);">&rarr;</span>
        </div>
      </div>
    `).join('');
  }
}

window.handleSearchSelect = function(productId) {
  const searchModal = document.getElementById('searchModal');
  if (searchModal) {
    searchModal.classList.remove('open');
    document.body.style.overflow = '';
  }
  openProductModal(productId);
};

/* ==========================================================================
   Contact Form Handler with Anti-Spam & Purpose Selector (brain.md Sec 22)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactEnquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Anti-spam Honeypot verification (brain.md Sec 22)
    const honeyField = form.querySelector('input[name="user_nickname_field"]');
    if (honeyField && honeyField.value.trim() !== '') {
      console.warn('Spam submission suppressed by honeypot.');
      return;
    }

    const name = form.querySelector('#contactName')?.value;
    const email = form.querySelector('#contactEmail')?.value;
    const purpose = form.querySelector('#contactPurpose')?.value;

    showToast(`Thank you, ${name}! Your ${purpose} inquiry has been transmitted.`);
    form.reset();
  });
}

function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <span class="toast-indicator-icon">&#10003;</span>
      <span id="toastMessage">${message}</span>
    `;
    document.body.appendChild(toast);
  } else {
    document.getElementById('toastMessage').textContent = message;
  }

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* ==========================================================================
   ScrollSpy & Right-Side Index Tracker (Martina Galleri Inspiration)
   ========================================================================== */
function initScrollSpy() {
  const tracker = document.querySelector('.vertical-index-tracker');
  const steps = document.querySelectorAll('.index-step');
  const navItems = document.querySelectorAll('.nuvue-nav-item');
  const sections = [
    { id: 'home', step: 1, navHref: '#home' },
    { id: 'applications-showcase', step: 2, navHref: '#applications-showcase' },
    { id: 'conscious-showcase', step: 3, navHref: '#conscious-showcase' },
    { id: 'purpose', step: 4, navHref: '#purpose' },
    { id: 'insights', step: 5, navHref: '#insights' },
    { id: 'bifurcation', step: 6, navHref: '#bifurcation' },
    { id: 'contact', step: 7, navHref: '#contact' }
  ];

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    // Detect if we are over the dark section
    const darkSection = document.getElementById('purpose');
    const footer = document.querySelector('.site-footer');
    let isOverDark = false;
    const trackerMid = window.innerHeight / 2;

    if (darkSection) {
      const rect = darkSection.getBoundingClientRect();
      if (rect.top <= trackerMid && rect.bottom >= trackerMid) {
        isOverDark = true;
      }
    }

    if (footer) {
      const rect = footer.getBoundingClientRect();
      if (rect.top <= trackerMid) {
        isOverDark = true;
      }
    }

    if (tracker) {
      if (isOverDark) {
        tracker.classList.add('on-dark');
      } else {
        tracker.classList.remove('on-dark');
      }
    }

    // Update active index step and navbar item
    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) {
        const top = el.offsetTop - 120;
        const bottom = top + el.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          steps.forEach(s => s.classList.remove('active'));
          const currentStep = document.querySelector(`.index-step[data-step="${sec.step}"]`);
          if (currentStep) currentStep.classList.add('active');

          navItems.forEach(item => {
            if (item.getAttribute('href') === sec.navHref) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });
        }
      }
    });
  }, { passive: true });

  steps.forEach(step => {
    step.addEventListener('click', () => {
      const targetId = step.getAttribute('data-target-id');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ==========================================================================
   Legal & Compliance Modal Handler (brain.md Sec 27-36)
   ========================================================================== */
const LEGAL_DOCS = {
  privacy: {
    title: 'Privacy Policy & Data Protection (DPDP Act 2023)',
    tag: 'Indian Regulatory Compliance &middot; Data Fiduciary Notice',
    content: `
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        <strong>1. Entity & Scope:</strong> CrossTech Solutions operates as a parent entity and Data Fiduciary under the <em>Digital Personal Data Protection (DPDP) Act, 2023</em> of India. This policy governs how we collect, process, and safeguard personal and organizational data across CrossTech Applications and Conscious Living.
      </p>
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        <strong>2. Local-First Privacy for Conscious Living:</strong> In products such as <strong>Mind Space</strong> and <strong>HoneyTrack</strong>, personal reflections, journal entries, and habit logs reside strictly in local-first storage on your device by default. Cloud synchronization is entirely opt-in and encrypted in transit. We never sell, rent, or trade your personal journal data to advertisers or third-party brokers.
      </p>
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        <strong>3. Enterprise SaaS Boundaries:</strong> For CrossTech Applications (EmployeeOS, CROS, UplyCRM, BuildLedger, CollaborationOS), customer data is isolated in multi-tenant environments with strict role-based access control (RBAC), and processed exclusively for providing operational services.
      </p>
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        <strong>4. Data Principal Rights:</strong> Users and organizations maintain the right to access, rectify, and permanently erase their records. To exercise your rights, contact our Data Grievance Officer at <code>privacy@crosstechsolutions.in</code>.
      </p>
    `
  },
  terms: {
    title: 'Terms of Service',
    tag: 'Operational Master Agreement',
    content: `
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        <strong>1. Acceptance of Terms:</strong> By accessing CrossTech Solutions or any of our branch applications, you agree to comply with and be bound by these Terms of Service.
      </p>
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        <strong>2. Intellectual Property:</strong> All software code, UI designs, brand marks, and documentation under CrossTech Solutions, CrossTech Applications, and Conscious Living are the exclusive intellectual property of CrossTech Solutions.
      </p>
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        <strong>3. Acceptable Use:</strong> Users agree not to misuse, probe, exploit, or reverse-engineer any product, or use our software to distribute malicious payloads or unlawful content.
      </p>
    `
  },
  cookies: {
    title: 'Cookie & Tracking Policy',
    tag: 'Minimal Tracker Philosophy',
    content: `
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        CrossTech Solutions believes in transparent, privacy-respecting software. Our corporate website does not employ third-party surveillance cookies or cross-site advertising pixels.
      </p>
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        We strictly utilize essential local session tokens to remember user preferences (such as branch focus and theme selections) and protect our forms against automated spam attacks.
      </p>
    `
  },
  disclaimer: {
    title: 'Wellness & Medical Disclaimer',
    tag: 'Conscious Living Branch Notice',
    content: `
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        <strong>Crucial Clarification:</strong> Conscious Living products—including Mind Space, HoneyTrack, and Mivo—are digital self-reflection, habit cultivation, and lifestyle tools designed to foster mindfulness and personal intentionality.
      </p>
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        They are <strong>not</strong> medical devices, diagnostic systems, or psychiatric treatment platforms. They are not designed or certified to diagnose, cure, treat, or prevent any psychological, mental health, or medical disorder. Always seek the advice of a qualified physician or healthcare provider for medical questions or acute crises.
      </p>
    `
  },
  security: {
    title: 'Security Architecture & Responsible Disclosure',
    tag: 'Infrastructure Safeguards',
    content: `
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        <strong>1. Safeguards:</strong> We apply industry-standard TLS 1.3 encryption in transit, strict HTTPS enforcement, encrypted storage at rest, and multi-factor authentication across all production database environments.
      </p>
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        <strong>2. Responsible Disclosure:</strong> If you discover a security vulnerability in any CrossTech product, we invite you to report it directly to our security engineering team at <code>security@crosstechsolutions.in</code>. We commit to prompt investigation, respectful coordination, and no legal action against white-hat researchers acting in good faith.
      </p>
    `
  },
  accessibility: {
    title: 'Accessibility Statement (WCAG 2.2 AA)',
    tag: 'Inclusive Design Standard',
    content: `
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        CrossTech Solutions is committed to digital accessibility. We target <strong>WCAG 2.2 Level AA</strong> compliance across our websites and applications.
      </p>
      <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 16px;">
        Our interactive flowchart includes full semantic textual fallback for screen readers, high-contrast keyboard navigation focus indicators, visible text labels, and respect for operating system <code>prefers-reduced-motion</code> settings.
      </p>
    `
  }
};

window.openLegalModal = function(policyKey) {
  const doc = LEGAL_DOCS[policyKey] || LEGAL_DOCS['privacy'];
  const modal = document.getElementById('legalModal');
  const container = document.getElementById('legalModalBody');
  const closeBtn = document.getElementById('closeLegalModal');

  if (!modal || !container) return;

  container.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="card-branch-tag tag-app" style="font-size: 0.72rem; padding: 4px 12px;">
        ${doc.tag}
      </span>
    </div>
    <h2 id="legalModalTitle" style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); line-height: 1.15; margin-bottom: 24px; text-transform: uppercase;">
      ${doc.title}
    </h2>
    <div style="background: var(--bg-surface); padding: 28px; border-radius: 16px; border: 1px solid var(--border-light); margin-bottom: 28px;">
      ${doc.content}
    </div>
    <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--border-light);">
      <span style="font-size: 0.8rem; color: var(--text-muted);">CrossTech Solutions Legal Trust Center</span>
      <button type="button" class="cta-btn-primary" onclick="document.getElementById('legalModal').classList.remove('open'); document.body.style.overflow='';" style="padding: 8px 20px; font-size: 0.85rem;">
        <span>Close Notice</span>
      </button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (closeBtn) {
    closeBtn.onclick = () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    };
  }

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };
};

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
