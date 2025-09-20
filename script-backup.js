// Global variables
let sourcingMap, locationsMap;
let currentProductCategory = 'shrimp';

// Product data
const products = {
    shrimp: [
        {
            icon: 'images/wild-gulf-shrimp.webp',
            isImage: true,
            name: 'Wild Gulf Shrimp',
            description: 'Fresh from the Gulf of Mexico waters',
            details: ['16-20, 21-25, 26-30 count per pound', 'IQF (Individually Quick Frozen)', 'Chemical-free', 'Shell-on and peeled options'],
            stamp: 'images/stp-stamp.avif'
        },
        {
            icon: 'images/ecuadorian-shrimp.jpeg',
            isImage: true,
            name: 'Ecuadorian White Shrimp',
            description: 'Farm-raised premium quality from Ecuador',
            details: ['Consistent sizing and quality', 'HACCP certified farms', 'Raw and cooked options', 'Tail-on and tail-off'],
            stamp: 'images/stp-stamp.avif'
        },
        {
            icon: 'images/tiger-prawns.webp',
            isImage: true,
            name: 'Tiger Prawns',
            description: 'Large, meaty prawns perfect for grilling',
            details: ['8-12, 13-15 count per pound', 'Fresh and frozen available', 'Black tiger variety', 'Head-on and headless'],
            stamp: 'images/stp-stamp.avif'
        },
        {
            icon: 'images/rock-shrimp.jpg',
            name: 'Rock Shrimp',
            description: 'Sweet, lobster-like flavor from deep waters',
            details: ['Split tail preparation', 'Flash frozen at sea', 'Perfect for pasta dishes', 'Restaurant favorite'],
            isImage: true,
            stamp: 'images/stp-stamp.avif'
        }
    ],
    fish: [
        {
            icon: 'images/mahi-mahi-new.jpg',
            isImage: true,
            name: 'Mahi Mahi',
            description: 'Firm, flaky white fish with mild flavor',
            details: ['Pacific and Atlantic varieties', 'Skinless fillets available', '4-6 oz and 6-8 oz portions', 'Fresh and frozen options']
        },
        {
            icon: 'images/red-snapper.webp',
            isImage: true,
            name: 'Red Snapper',
            description: 'Premium whole fish and fillets',
            details: ['Gulf of Mexico sourced', 'Whole fish 2-8 lbs', 'Skin-on fillets', 'Sashimi grade available']
        },
        {
            icon: 'images/tuna-correct.webp',
            isImage: true,
            name: 'Yellowfin Tuna',
            description: 'Sushi-grade quality, fresh and frozen',
            details: ['Sashimi grade #1', 'Loins and steaks', 'CO treated options', 'Pole and line caught']
        },
        {
            icon: 'images/trout-background.avif',
            isImage: true,
            name: 'Trout',
            description: 'Premium freshwater trout, sustainably farmed',
            details: ['Lake Titicaca sourced', 'Fresh and frozen options', 'Whole fish and fillets', 'Clean, mild flavor']
        },
        {
            icon: 'images/grouper-new.jpg',
            isImage: true,
            name: 'Grouper',
            description: 'Firm texture, perfect for various preparations',
            details: ['Gulf and Atlantic varieties', 'Fresh whole fish', 'Skinless fillets', 'Restaurant cuts available']
        }
    ],
    /* FROZEN SPECIALTIES - Commented out in case we want it back
    frozen: [
        {
            icon: '🦀',
            name: 'Blue Crab Meat',
            description: 'Premium lump and claw meat',
            details: ['Jumbo lump, lump, backfin', 'Pasteurized for extended shelf life', 'Restaurant grade', 'Vietnam and USA sourced']
        },
        {
            icon: '🦞',
            name: 'Lobster Tails',
            description: 'Cold water and warm water varieties',
            details: ['4-5 oz, 6-7 oz, 8-10 oz sizes', 'Raw and cooked options', 'EZ peel processing', 'Canadian and Caribbean sourced']
        },
        {
            icon: '🔵',
            name: 'Sea Scallops',
            description: 'Dry pack premium scallops',
            details: ['U-10, 10-20, 20-30 count per pound', 'Chemical-free dry pack', 'IQF frozen', 'Day boat and diver scallops']
        },
        {
            icon: '🦑',
            name: 'Calamari',
            description: 'Rings, tentacles, and whole squid',
            details: ['Tubes and tentacles', 'Pre-cut rings available', 'Breaded and unbreaded', 'Mediterranean and Pacific varieties']
        },
        {
            icon: '🐙',
            name: 'Octopus',
            description: 'Whole and tentacles, raw and cooked',
            details: ['Spanish and Portuguese varieties', '1-2 lb, 2-3 lb sizes', 'Cooked and ready-to-eat', 'Sashimi grade available']
        },
        {
            icon: '🐟',
            name: 'Fish Portions',
            description: 'Pre-portioned fillets for foodservice',
            details: ['4 oz, 6 oz, 8 oz standard cuts', 'Various species available', 'IQF individually wrapped', 'Custom portioning available']
        }
    ],
    */
    ethnic: [
        {
            icon: 'images/hawaiian-plantains.avif',
            name: 'Hawaiian Plantains',
            description: 'Green and ripe varieties from Hawaii',
            details: ['Green for cooking', 'Yellow ripe for sweet applications', 'Large premium size', 'Hand-selected quality'],
            isImage: true,
            logoOverlay: 'images/mua-moa-logo.avif',
            logoOverlayLeft: 'images/hua-moa-logo.avif'
        },
        {
            icon: 'images/cassava-yuca.avif',
            name: 'Cassava (Yuca)',
            description: 'Fresh and frozen yuca root',
            details: ['Halves Cut IQF - Retail Ready 6 x 5 lbs', 'Food Service 6 x 5 lbs', 'French Fry Cut - Retail Ready 6 x 5 lbs', 'Food Service 6 x 5 lbs'],
            isImage: true,
            logoOverlay: 'images/mua-moa-logo.avif',
            logoOverlayLeft: 'images/hua-moa-logo.avif'
        },
        {
            icon: 'images/sweet-plantains.avif',
            name: 'Sweet Plantains',
            description: 'Specialty items for ethnic cuisine',
            details: ['Ñame, malanga, boniato', 'Fresh and frozen options', 'Restaurant and retail packs', 'Central American sourced'],
            isImage: true,
            logoOverlay: 'images/mua-moa-logo.avif',
            logoOverlayLeft: 'images/hua-moa-logo.avif'
        }
    ]
};

// Sourcing locations data with detailed seafood information
const sourcingLocations = [
    { 
        name: 'Ecuador', 
        lat: -1.8312, 
        lng: -78.1834, 
        percentage: 35, 
        flag: '🇪🇨',
        products: ['Yellowfin Tuna', 'White Shrimp', 'Mahi Mahi'], 
        supplier: 'Industrial Pesquera Santa Priscila',
        shipments: '12.8k+',
        description: 'Our largest supplier of premium white shrimp and Pacific tuna'
    },
    { 
        name: 'Vietnam', 
        lat: 14.0583, 
        lng: 108.2772, 
        percentage: 25, 
        flag: '🇻🇳',
        products: ['Black Tiger Shrimp', 'Pangasius', 'Sea Bass'], 
        supplier: 'Multiple Premium Suppliers',
        shipments: '8k+',
        description: 'High-quality aquaculture products from Mekong Delta region'
    },
    { 
        name: 'Panama', 
        lat: 8.5380, 
        lng: -80.7821, 
        percentage: 20, 
        flag: '🇵🇦',
        products: ['Gulf Shrimp', 'Red Snapper', 'Sea Bass'], 
        supplier: 'SOITGAR SA',
        shipments: '1.05k+',
        description: 'Wild-caught seafood from Pacific and Caribbean waters'
    },
    { 
        name: 'India', 
        lat: 20.5937, 
        lng: 78.9629, 
        percentage: 15, 
        flag: '🇮🇳',
        products: ['Vannamei Shrimp', 'Scampi', 'Cuttlefish'], 
        supplier: 'Bluepark Seafoods',
        shipments: '2k+',
        description: 'Premium processed seafood from Indian Ocean waters'
    },
    { 
        name: 'China', 
        lat: 35.8617, 
        lng: 104.1954, 
        percentage: 5, 
        flag: '🇨🇳',
        products: ['Tilapia', 'Squid', 'Processed Seafood'], 
        supplier: 'Various Certified Suppliers',
        shipments: '500+',
        description: 'Value-added processed seafood products'
    },
    {
        name: 'Indonesia - Makassar',
        lat: -5.1477,
        lng: 119.4327,
        percentage: 15,
        flag: '🇮🇩',
        products: ['Yellowfin Tuna', 'Grouper', 'Red Snapper'],
        supplier: 'Kota Makassar/Bringkanaya Fishing Fleets',
        shipments: '3.2k+',
        description: 'Premium sushi-grade tuna and reef fish from pristine Indonesian waters'
    }
];

// Company locations
const companyLocations = [
    { name: 'Miami Headquarters', lat: 25.7617, lng: -80.1918, address: '4770 Biscayne Blvd, Suite 700, Miami, FL 33137' },
    { name: 'Tampa Office', lat: 27.9506, lng: -82.4572, address: '5121 Ehrlich Road, Suite 103B, Tampa, FL 33624' }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM Content Loaded - starting ALL initialization...');
    
    // Core functionality
    initializeNavigation();
    initializeAnimations();
    initializeCounters();
    initializeProductTabs();
    initializeMaps();
    initializeContactForm();
    initializeScrollEffects();
    
    // Advanced features
    if (window.innerWidth > 768) {
        initializeCustomCursor();
    }
    
    initializeLazyLoading();
    initializeSearch();
    
    console.log('🌍 About to call initializeWorldTransition...');
    initializeWorldTransition();
    
    // Add Enter key support for trace input
    const lotInput = document.getElementById('lot-code');
    if (lotInput) {
        lotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                traceLot();
            }
        });
    }
    
    console.log('✅ ALL initialization functions completed');
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Only prevent default for internal anchor links (starting with #)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
            // For external links (like responsibility.html), allow default behavior
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    mobileToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}

// Initialize animations
function initializeAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
}

// Initialize counters for hero stats
function initializeCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-counter'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// Animate counter function
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50; // Complete animation in ~50 steps
    const duration = 2000; // 2 seconds
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format numbers appropriately
        if (target >= 1000) {
            element.textContent = Math.floor(current).toLocaleString();
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// Initialize product tabs functionality
function initializeProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const productGrid = document.getElementById('product-grid');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            switchProductCategory(category);
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    
    // Load initial category
    switchProductCategory('shrimp');
}

// Switch product category
function switchProductCategory(category) {
    currentProductCategory = category;
    const productGrid = document.getElementById('product-grid');
    const categoryProducts = products[category] || [];
    
    // Set data-category attribute for CSS styling
    productGrid.setAttribute('data-category', category);
    
    // Clear current products with fade out
    productGrid.style.opacity = '0';
    
    setTimeout(() => {
        productGrid.innerHTML = '';
        
        categoryProducts.forEach((product, index) => {
            const productCard = createProductCard(product, index);
            productGrid.appendChild(productCard);
        });
        
        // Fade in new products
        productGrid.style.opacity = '1';
    }, 300);
}

// Create product card
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Special handling for products with image on top (Yellowfin Tuna, Trout, Mahi Mahi, Red Snapper, Grouper, Wild Gulf Shrimp, Rock Shrimp, Tiger Prawns, Ecuadorian White Shrimp, Hawaiian Plantains, Cassava, and Sweet Plantains)
    if ((product.name === 'Yellowfin Tuna' || product.name === 'Trout' || product.name === 'Mahi Mahi' || product.name === 'Red Snapper' || product.name === 'Grouper' || product.name === 'Wild Gulf Shrimp' || product.name === 'Rock Shrimp' || product.name === 'Tiger Prawns' || product.name === 'Ecuadorian White Shrimp' || product.name === 'Hawaiian Plantains' || product.name === 'Cassava (Yuca)' || product.name === 'Sweet Plantains') && product.isImage) {
        card.classList.add('has-image-top');
        
        // Add sourcing link for products with known locations
        let sourcingLink = '';
        if (product.name === 'Trout') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Peru - Lake Titicaca', 'Rainbow Trout')">See where we catch it</div>`;
        } else if (product.name === 'Yellowfin Tuna') {
            sourcingLink = `<div class="sourcing-link" onclick="showTunaPopup()">See where we catch it</div>`;
        } else if (product.name === 'Mahi Mahi') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Peru - Moquegua', 'Mahi Mahi')">See where we catch it</div>`;
        } else if (product.name === 'Red Snapper') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Indonesia - Makassar', 'Red Snapper')">See where we catch it</div>`;
        } else if (product.name === 'Grouper') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Indonesia - Makassar', 'Grouper')">See where we catch it</div>`;
        } else if (product.name === 'Wild Gulf Shrimp') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('United States - Gulf of Mexico', 'Wild Gulf Shrimp')">See where we catch it</div>`;
        } else if (product.name === 'Rock Shrimp') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('United States - Atlantic Ocean', 'Rock Shrimp')">See where we catch it</div>`;
        } else if (product.name === 'Tiger Prawns') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Vietnam', 'Black Tiger Shrimp')">See where we catch it</div>`;
        } else if (product.name === 'Ecuadorian White Shrimp') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Ecuador', 'White Shrimp')">See where we catch it</div>`;
        } else if (product.name === 'Hawaiian Plantains') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('United States - Hawaii', 'Hawaiian Plantains')">See where we source it</div>`;
        } else if (product.name === 'Cassava (Yuca)') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Costa Rica', 'Cassava (Yuca)')">See where we source it</div>`;
        } else if (product.name === 'Sweet Plantains') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Central America', 'Sweet Plantains')">See where we source it</div>`;
        }
        
        // Add logo overlays for Hawaiian Plantains
        const logoOverlay = product.logoOverlay ? `<img src="${product.logoOverlay}" alt="Logo" class="logo-overlay">` : '';
        const logoOverlayLeft = product.logoOverlayLeft ? `<img src="${product.logoOverlayLeft}" alt="Logo Left" class="logo-overlay-left">` : '';
        
        // Add stamp overlay for products that have it
        const stampOverlay = product.stamp ? `<img src="${product.stamp}" alt="Quality Stamp" class="product-stamp-overlay">` : '';
        
        card.innerHTML = `
            <div class="product-image-top">
                <img src="${product.icon}" alt="${product.name}" class="top-product-image">
                ${logoOverlay}
                ${logoOverlayLeft}
                ${stampOverlay}
            </div>
            <div class="product-content">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <ul class="product-details">
                    ${product.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
                ${sourcingLink}
            </div>
        `;
    } else {
        // Create icon content - either image or emoji
        const iconContent = product.isImage 
            ? `<img src="${product.icon}" alt="${product.name}" class="product-image">`
            : product.icon;
        
        // Add sourcing links for products
        let sourcingLink = '';
        // Fish products
        if (product.name === 'Red Snapper') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Indonesia - Makassar', 'Red Snapper')">See where we catch it</div>`;
        } else if (product.name === 'Grouper') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Indonesia - Makassar', 'Grouper')">See where we catch it</div>`;
        }
        // Shrimp products
        else if (product.name === 'Ecuadorian White Shrimp') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Ecuador', 'White Shrimp')">See where we catch it</div>`;
        } else if (product.name === 'Tiger Prawns') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Vietnam')">See where we catch it</div>`;
        }
        /* FROZEN SPECIALTIES - Commented out in case we want it back
        // Frozen products
        else if (product.name === 'Blue Crab Meat') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Vietnam')">See where we catch it</div>`;
        } else if (product.name === 'Sea Scallops') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Panama')">See where we catch it</div>`;
        }
        */
        // Ethnic products
        else if (product.name === 'Cassava (Yuca)') {
            sourcingLink = `<div class="sourcing-link" onclick="scrollToSourcing('Costa Rica')">See where we source it</div>`;
        }
        
        // Add stamp if product has one
        const stampContent = product.stamp ? `<div class="product-stamp"><img src="${product.stamp}" alt="Quality Stamp" class="stamp-image"></div>` : '';
        
        card.innerHTML = `
            <div class="product-icon">${iconContent}</div>
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <ul class="product-details">
                ${product.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
            ${sourcingLink}
            ${stampContent}
        `;
    }
    
    // Safari-specific hover fix
    if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.5s ease';
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.5s ease';
            this.style.zIndex = '1';
        });
    }
    
    
    return card;
}


// Initialize maps
function initializeMaps() {
    // Initialize sourcing map stats only (map will be initialized after transition)
    if (document.getElementById('awesome-sourcing-map')) {
        populateSourcingStats();
    }
    
}

// DELETED - Initialize sourcing map
function DELETED_initializeSourcingMapOLD_BROKEN() {
    const mapElement = document.getElementById('sourcing-map');
    if (!mapElement) {
        console.error('OLD BROKEN: Map container not found');
        return;
    }
    
    console.log('Creating Leaflet map...');
    sourcingMap = L.map('sourcing-map', {
        center: [15, -30],
        zoom: 2,
        zoomControl: true,
        scrollWheelZoom: true,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(sourcingMap);
    
    console.log('Tile layer added to map');
    
    // Custom marker icon
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div class="marker-pin"></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 30]
    });
    
    // Add sourcing location markers with enhanced popups
    console.log(`Adding ${sourcingLocations.length} location markers to map`);
    sourcingLocations.forEach((location, index) => {
        console.log(`Adding marker ${index + 1}: ${location.name}`);
        const marker = L.marker([location.lat, location.lng], { icon: customIcon })
            .bindPopup(() => {
                console.log(`Creating popup for ${location.name}`);
                return createSourcePopupContent(location, marker.highlightProduct);
            }, {
                maxWidth: 400,
                maxHeight: 500,
                className: 'custom-popup'
            })
            .addTo(sourcingMap);
            
        // Add click event listener for debugging
        marker.on('click', function() {
            console.log(`Marker clicked: ${location.name}`);
        });
        
        // Store reference for highlighting
        marker.location = location;
        
        // Add enhanced hover tooltip with more information
        marker.bindTooltip(createHoverTooltipContent(location), {
            permanent: false,
            direction: 'top',
            className: 'custom-tooltip-enhanced'
        });
        
        // Hover effects
        marker.on('mouseover', function() {
            this.openTooltip();
        });
        
        marker.on('mouseout', function() {
            this.closeTooltip();
        });
    });
    
    console.log('All sourcing markers added and configured with popups/tooltips');
}

// Create enhanced hover tooltip content
function createHoverTooltipContent(location) {
    return `
        <div class="hover-tooltip-content">
            <div class="tooltip-header">
                <span class="tooltip-flag">${location.flag}</span>
                <span class="tooltip-name">${location.name}</span>
                <span class="tooltip-percentage">${location.percentage}%</span>
            </div>
            <div class="tooltip-info">
                <div class="tooltip-supplier">📦 ${location.supplier}</div>
                <div class="tooltip-products">🐟 ${location.products.join(', ')}</div>
            </div>
        </div>
    `;
}

// Create enhanced popup content for sourcing locations
function createSourcePopupContent(location, highlightProduct = null) {
    // Get fish-specific descriptions
    const getProductDescription = (locationName, productName) => {
        if (locationName === 'Indonesia - Makassar') {
            if (productName === 'Grouper') {
                return 'Blackened, smoked or simply grilled, you can never go wrong with Grouper. One of the most popular fish in Florida for its firm, flaky and juicy texture, now becoming widely known throughout the country. There are 159 species of grouper world-wide. We only work with the very best - DNA tested that comes in different sizes such as naturals fillets or portion cuts.';
            } else if (productName === 'Yellowfin Tuna') {
                return 'Perhaps the most exciting of fish items, tuna adds elegance to any menu. Tuna has wide-spread appeal among consumers and is considered the \'filet mignon\' of seafood. We offer a wide option of cuts to fit any application: From loins for chefs who prefer to carve their own portions, to easy to use cuts including Saku blocks, portion-controlled vacuum-packed steaks, cubes, and ready-made skewers.';
            } else if (productName === 'Red Snapper') {
                return 'It\'s a salt water fish that has a gentle, sweet and nutty flavor. We have a variety of different cuts and sizes. Snapper is a lean and moist fish with a distinctive mild flavor. The pinkish meat in its raw state turns white and flakey when cooked. Snapper is one of the most recognized fish items on the menu. Available in both skin-on and skin-off natural fillets and cut portions.';
            }
        } else if (locationName === 'Peru - Moquegua') {
            if (productName === 'Mahi Mahi') {
                return 'Mahi Mahi, the Hawaiian name for Dolphin fish, has a mildly pronounced flavor with a texture similar to swordfish. The meat is firm but fork-tender, with large moist flakes. Mahi performs well on the barbeque, is popular on sandwiches, and as a center-of-the-plate protein.';
            }
        }
        // Default to location description if no specific product description
        return location.description;
    };

    const description = highlightProduct ? 
        getProductDescription(location.name, highlightProduct) : 
        location.description;

    return `
        <div class="source-popup">
            <div class="popup-header">
                <span class="country-flag">${location.flag}</span>
                <h3>${location.name}</h3>
                <span class="market-share">${location.percentage}%</span>
            </div>
            
            <div class="popup-content">
                <div class="supplier-info">
                    <strong>🏭 Supplier:</strong>
                    <p>${location.supplier}</p>
                    <small>📦 ${location.shipments} shipments</small>
                </div>
                
                <div class="products-info">
                    <strong>🐟 Seafood Products:</strong>
                    <div class="products-list">
                        ${location.products.map(product => 
                            `<span class="product-tag ${highlightProduct === product ? 'highlighted' : ''}">${product}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="description">
                    <p><em>${description}</em></p>
                </div>
            </div>
        </div>
    `;
}

// Initialize locations map
function initializeLocationsMap() {
    locationsMap = L.map('locations-map', {
        center: [26.5, -81.5],
        zoom: 7,
        zoomControl: true,
        scrollWheelZoom: false
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(locationsMap);
    
    // Add company location markers
    companyLocations.forEach(location => {
        const marker = L.marker([location.lat, location.lng])
            .bindPopup(`
                <div style="text-align: center; padding: 10px;">
                    <h4 style="margin: 0 0 10px 0; color: #ff6b47;">${location.name}</h4>
                    <p style="margin: 0;">${location.address}</p>
                </div>
            `)
            .addTo(locationsMap);
    });
}

// Populate sourcing statistics
function populateSourcingStats() {
    const statsContainer = document.getElementById('country-stats');
    
    // Clear existing content to prevent duplicates
    if (statsContainer) {
        statsContainer.innerHTML = '';
    }
    
    sourcingLocations.forEach(location => {
        const statElement = document.createElement('div');
        statElement.className = 'country-stat';
        statElement.innerHTML = `
            <div class="country-name">
                <span class="country-flag">${location.flag}</span>
                <span>${location.name}</span>
            </div>
            <div class="country-percentage">${location.percentage}%</div>
        `;
        statsContainer.appendChild(statElement);
    });
}

// Get country flag emoji
function getCountryFlag(countryName) {
    const flags = {
        'Ecuador': '🇪🇨',
        'Vietnam': '🇻🇳',
        'Panama': '🇵🇦',
        'India': '🇮🇳',
        'China': '🇨🇳'
    };
    return flags[countryName] || '🌍';
}

// Initialize home page product tabs (uses .tab-button class)
function initializeHomeProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            switchProductCategory(category);
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    
    // Load initial category
    switchProductCategory('shrimp');
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

// Initialize products page functionality
function initializeProductsPage() {
    initializeProductTabs();
    displayProducts('shrimp');
}

// Initialize product tabs functionality
function initializeProductTabs() {
    const tabButtons = document.querySelectorAll('.nav-tab');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs
            tabButtons.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get category and display products
            const category = this.getAttribute('data-category');
            displayProducts(category);
        });
    });
}

// Display products for specific category on products page
function displayProducts(category) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return; // Exit if not on products page
    
    const categoryProducts = products[category] || [];
    
    productGrid.innerHTML = '';
    
    categoryProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-aos', 'fade-up');
        productCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        const stampHTML = product.stamp ? `
            <div class="product-stamp">
                <img src="${product.stamp}" alt="Quality Stamp" class="stamp-image">
            </div>
        ` : '';
        
        const logoOverlayHTML = product.logoOverlay ? `
            <div class="logo-overlay">
                <img src="${product.logoOverlay}" alt="Brand Logo" class="logo-image">
            </div>
        ` : '';
        
        const logoOverlayLeftHTML = product.logoOverlayLeft ? `
            <div class="logo-overlay left">
                <img src="${product.logoOverlayLeft}" alt="Brand Logo" class="logo-image">
            </div>
        ` : '';
        
        const imageHTML = product.isImage ? 
            `<div class="product-image" style="background-image: url('${product.icon}'); background-size: cover; background-position: center;"></div>` :
            `<div class="product-icon">${product.icon}</div>`;
        
        productCard.innerHTML = `
            <div class="product-image-container">
                ${imageHTML}
            </div>
            ${stampHTML}
            ${logoOverlayHTML}
            ${logoOverlayLeftHTML}
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <ul class="product-details">
                    ${product.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
    
    // Reinitialize AOS for new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// Scroll to sourcing map section and focus on specific location
function scrollToSourcing(locationName = 'Peru - Lake Titicaca', highlightProduct = null) {
    const sourcingSection = document.getElementById('sourcing');
    if (sourcingSection) {
        sourcingSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Check if we're in earth mode and need to trigger animation
        if (currentMode === 'earth') {
            console.log('🌍 Earth mode detected - triggering animation to show location:', locationName);
            
            // Store the target location for after animation
            window.pendingLocation = {
                locationName: locationName,
                highlightProduct: highlightProduct
            };
            
            // Trigger the earth animation
            setTimeout(() => {
                triggerEarthToMapAnimation();
            }, 800); // Wait for scroll to complete
            
        } else {
            // We're already in map mode, just zoom to location
            setTimeout(() => {
                focusOnLocation(locationName, highlightProduct);
            }, 1000);
        }
    }
}

// Focus on specific location (extracted for reuse)
function focusOnLocation(locationName, highlightProduct = null) {
    if (sourcingMap) {
        // Find the specified location
        const targetLocation = sourcingLocations.find(loc => loc.name === locationName);
        if (targetLocation) {
            console.log('Focusing on location:', locationName);
            // Zoom to location and open popup
            sourcingMap.setView([targetLocation.lat, targetLocation.lng], 8, {
                animate: true,
                duration: 1.5
            });
            
            // Find and open the marker popup
            sourcingMap.eachLayer(function(layer) {
                if (layer instanceof L.Marker) {
                    const markerLatLng = layer.getLatLng();
                    if (Math.abs(markerLatLng.lat - targetLocation.lat) < 0.1 && 
                        Math.abs(markerLatLng.lng - targetLocation.lng) < 0.1) {
                        // Set highlight product
                        layer.highlightProduct = highlightProduct;
                        setTimeout(() => {
                            layer.openPopup();
                        }, 1000); // Wait for zoom animation
                    }
                }
            });
        }
    }
}

// Trigger earth to map animation (for product sourcing links)
function triggerEarthToMapAnimation() {
    console.log('Triggering earth animation from product link...');
    
    const spinningWorld = document.querySelector('.spinning-world');
    const interactiveMap = document.querySelector('.interactive-map');
    const replayBtn = document.querySelector('.replay-animation-btn');
    const worldGif = document.querySelector('.world-gif');
    
    // Hide the replay button during animation
    if (replayBtn) {
        replayBtn.style.display = 'none';
        replayBtn.classList.remove('show');
    }
    
    // Start the earth animation
    if (worldGif) {
        worldGif.style.animation = 'worldZoomSpin 4s ease-in-out forwards';
        console.log('Earth animation started from product link');
    }
    
    // Transition to map after animation and focus on pending location
    setTimeout(() => {
        // Show map elements that were hidden
        const mapContainer = document.querySelector('.world-transition-container');
        if (mapContainer) {
            if (interactiveMap) {
                interactiveMap.style.display = 'block';
            }
            const transitionOverlay = document.querySelector('.transition-overlay');
            if (transitionOverlay) {
                transitionOverlay.style.display = 'block';
            }
        }
        
        // Complete the transition to map
        setTimeout(() => {
            if (spinningWorld) {
                spinningWorld.classList.add('fade-out');
                spinningWorld.style.opacity = '0';
                spinningWorld.style.zIndex = '1';
            }
            
            if (interactiveMap) {
                // Use CSS class for proper visibility management
                interactiveMap.classList.add('visible');
                
                // Refresh map and focus on pending location
                if (sourcingMap) {
                    setTimeout(() => {
                        // Force complete map refresh
                        sourcingMap.invalidateSize(true);
                        
                        // Re-enable all interactions
                        sourcingMap.scrollWheelZoom.enable();
                        sourcingMap.dragging.enable();
                        sourcingMap.touchZoom.enable();
                        sourcingMap.doubleClickZoom.enable();
                        sourcingMap.boxZoom.enable();
                        
                        console.log('Map fully refreshed for product sourcing');
                        
                        // Focus on the pending location if it exists
                        if (window.pendingLocation) {
                            setTimeout(() => {
                                focusOnLocation(window.pendingLocation.locationName, window.pendingLocation.highlightProduct);
                                window.pendingLocation = null; // Clear the pending location
                            }, 500);
                        }
                    }, 200);
                }
            }
            
            // Show replay button and set to map mode
            setTimeout(() => {
                if (replayBtn) {
                    replayBtn.style.display = 'flex';
                    replayBtn.classList.add('show');
                }
                currentMode = 'map';
                console.log('Animation complete - now in map mode focused on location');
            }, 1000);
        }, 300);
    }, 3800);
}

// Handle contact form submission
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Basic form validation
    if (!data.name || !data.email || !data.inquiry) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
    
    // Reset form
    e.target.reset();
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ff4444' : '#44ff44'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-animation');
        
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
}

// Utility function to scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navbar = document.getElementById('navbar');
    
    if (section) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = section.offsetTop - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .product-card {
        animation: fadeInUp 0.6s ease forwards;
        opacity: 0;
        transform: translateY(20px);
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @media (max-width: 768px) {
        .nav-links.active {
            display: flex !important;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav-links {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// Add lazy loading for images if any are added
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize search functionality (if needed later)
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.toLowerCase();
            filterProducts(query);
        }, 300));
    }
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Filter products based on search query
function filterProducts(query) {
    if (!query) {
        switchProductCategory(currentProductCategory);
        return;
    }
    
    const allProducts = Object.values(products).flat();
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.details.some(detail => detail.toLowerCase().includes(query))
    );
    
    displayFilteredProducts(filteredProducts);
}

// Display filtered products
function displayFilteredProducts(filteredProducts) {
    const productGrid = document.getElementById('product-grid');
    productGrid.style.opacity = '0';
    
    setTimeout(() => {
        productGrid.innerHTML = '';
        
        if (filteredProducts.length === 0) {
            productGrid.innerHTML = '<div class="no-results">No products found matching your search.</div>';
        } else {
            filteredProducts.forEach((product, index) => {
                const productCard = createProductCard(product, index);
                productGrid.appendChild(productCard);
            });
        }
        
        productGrid.style.opacity = '1';
    }, 300);
}

// Add custom cursor effect for interactive elements
function initializeCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: #ff6b47;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    // Scale cursor on interactive elements
    document.querySelectorAll('a, button, .product-card, .quality-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Trace lot functionality
function traceLot() {
    const lotCode = document.getElementById('lot-code').value.trim();
    
    if (!lotCode) {
        showNotification('Please enter a lot code', 'error');
        return;
    }
    
    // Simulate API call with loading state
    const button = document.querySelector('.trace-button');
    const originalText = button.textContent;
    button.textContent = 'Tracing...';
    button.disabled = true;
    
    // Simulate processing time
    setTimeout(() => {
        // Mock trace results
        const mockResults = {
            'CS2024-001': {
                product: 'Ecuadorian White Shrimp',
                origin: 'Gulf of Guayaquil, Ecuador',
                vessel: 'FV Maria Elena',
                catchDate: '2024-08-15',
                processed: '2024-08-16',
                shipped: '2024-08-17',
                arrived: '2024-08-19',
                supplier: 'Industrial Pesquera Santa Priscila'
            },
            'VM2024-002': {
                product: 'Vietnamese Black Tiger Shrimp',
                origin: 'Mekong Delta, Vietnam',
                vessel: 'Aquaculture Farm #147',
                catchDate: '2024-08-20',
                processed: '2024-08-21',
                shipped: '2024-08-22',
                arrived: '2024-08-24',
                supplier: 'Premium Aquaculture Co.'
            }
        };
        
        const result = mockResults[lotCode.toUpperCase()];
        
        if (result) {
            showTraceResults(result);
        } else {
            showNotification(`Lot code "${lotCode}" not found. Please verify the code and try again.`, 'error');
        }
        
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Show trace results in a beautiful modal
function showTraceResults(data) {
    const modal = document.createElement('div');
    modal.className = 'trace-modal';
    modal.innerHTML = `
        <div class="trace-modal-content">
            <div class="modal-header">
                <h2>🌊 Traceability Results</h2>
                <button class="close-modal" onclick="closeTraceModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="trace-result-card">
                    <h3>${data.product}</h3>
                    <div class="trace-journey">
                        <div class="journey-step">
                            <div class="journey-icon">🎣</div>
                            <div class="journey-info">
                                <h4>Caught/Harvested</h4>
                                <p><strong>Location:</strong> ${data.origin}</p>
                                <p><strong>Vessel:</strong> ${data.vessel}</p>
                                <p><strong>Date:</strong> ${data.catchDate}</p>
                            </div>
                        </div>
                        <div class="journey-step">
                            <div class="journey-icon">🏭</div>
                            <div class="journey-info">
                                <h4>Processed</h4>
                                <p><strong>Supplier:</strong> ${data.supplier}</p>
                                <p><strong>Date:</strong> ${data.processed}</p>
                            </div>
                        </div>
                        <div class="journey-step">
                            <div class="journey-icon">🚢</div>
                            <div class="journey-info">
                                <h4>Shipped</h4>
                                <p><strong>Departure:</strong> ${data.shipped}</p>
                                <p><strong>Cold Chain Maintained</strong> ✓</p>
                            </div>
                        </div>
                        <div class="journey-step">
                            <div class="journey-icon">🏢</div>
                            <div class="journey-info">
                                <h4>Arrived</h4>
                                <p><strong>Miami Facility:</strong> ${data.arrived}</p>
                                <p><strong>Quality Verified</strong> ✓</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Close trace modal
function closeTraceModal() {
    const modal = document.querySelector('.trace-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Duplicate DOMContentLoaded listener removed - consolidated above

// Initialize world transition animation (automatic scroll-triggered)
function initializeWorldTransition() {
    const sourcingSection = document.getElementById('sourcing');
    
    if (sourcingSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    console.log('Sourcing section visible, starting automatic animation');
                    
                    // Initialize the map first
                    setTimeout(() => {
                        if (typeof initializeSourcingMapMain === 'function') {
                            initializeSourcingMapMain();
                        }
                    }, 500);
                    
                    // Start the automatic animation
                    setTimeout(() => {
                        startWorldTransition();
                    }, 1000);
                    
                    observer.unobserve(sourcingSection);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });
        
        observer.observe(sourcingSection);
    }
}

// Start the world transition animation sequence
function startWorldTransition() {
    const spinningWorld = document.querySelector('.spinning-world');
    const interactiveMap = document.querySelector('.interactive-map');
    const worldGif = document.querySelector('.world-gif');
    const appleWelcome = document.querySelector('.apple-welcome');
    
    console.log('🍎 Starting Apple-style world transition animation');
    
    // Start the earth animation with maximum smoothness
    if (worldGif) {
        worldGif.style.animation = 'worldZoomSpin 4s linear forwards';
        console.log('🌍 Earth animation started');
    }
    
    // At 2.5 seconds, show Apple-style welcome message with letter animation
    setTimeout(() => {
        if (appleWelcome) {
            appleWelcome.style.opacity = '1';
            startAppleLetterAnimation();
            console.log('🍎 Apple-style letter animation started');
        }
    }, 2500);
    
    // At 5.5 seconds, fade out welcome and show map
    setTimeout(() => {
        console.log('✨ Apple transition to map');
        
        // Fade out welcome message
        if (appleWelcome) {
            appleWelcome.classList.add('fade-out');
        }
        
        // Fade out spinning world
        if (spinningWorld) {
            spinningWorld.classList.add('fade-out');
        }
        
        // Show the map
        if (interactiveMap) {
            interactiveMap.classList.add('visible');
            interactiveMap.style.display = 'block';
            console.log('🗺️ Map revealed Apple-style');
        }
    }, 5500);
    
    // Initialize the Leaflet map just before it becomes visible
    setTimeout(() => {
        console.log('About to initialize map...');
        const mapContainer = document.getElementById('sourcing-map');
        console.log('Map container found:', !!mapContainer);
        
        if (typeof initializeSourcingMapMain === 'function' && mapContainer) {
            console.log('Initializing sourcing map...');
            try {
                initializeSourcingMapMain();
                console.log('Map initialized successfully');
                
                // Force map to resize/refresh after initialization
                setTimeout(() => {
                    if (sourcingMap) {
                        sourcingMap.invalidateSize(true);
                        
                        // Ensure all interactions are enabled
                        sourcingMap.scrollWheelZoom.enable();
                        sourcingMap.dragging.enable();
                        sourcingMap.touchZoom.enable();
                        sourcingMap.doubleClickZoom.enable();
                        sourcingMap.boxZoom.enable();
                        
                        console.log('Map invalidated, refreshed, and fully interactive');
                    } else {
                        console.warn('sourcingMap not available for invalidation');
                    }
                }, 300);
            } catch (error) {
                console.error('Error initializing map:', error);
            }
        } else {
            console.warn('Cannot initialize map - missing function or container');
        }
    }, 3000);
    
    // Show replay button after animation completes and set to map mode
    setTimeout(() => {
        const replayBtn = document.querySelector('.replay-animation-btn');
        if (replayBtn) {
            replayBtn.style.display = 'flex';
            replayBtn.classList.add('show');
            console.log('Replay button shown');
        }
        currentMode = 'map'; // Ensure we're in map mode after initial animation
    }, 7000);
}

// Apple-style letter-by-letter animation
function startAppleLetterAnimation() {
    const letters = document.querySelectorAll('.apple-welcome .letter');
    
    letters.forEach((letter, index) => {
        // Stagger the animation with Apple's signature timing
        const delay = index * 80; // 80ms between letters for smooth flow
        
        setTimeout(() => {
            letter.classList.add('animate');
            
            // Add extra emphasis to "World" letters
            if (letter.classList.contains('world-word')) {
                setTimeout(() => {
                    letter.style.transform = 'translateY(0) scale(1.05) rotateX(0deg)';
                    setTimeout(() => {
                        letter.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                    }, 200);
                }, 300);
            }
        }, delay);
    });
    
    console.log('🍎 Apple letter animation: ' + letters.length + ' letters animated');
}

// State variable to track current mode
let currentMode = 'earth'; // 'earth' or 'map' - starts in earth mode

// Toggle between earth and map modes
function replayEarthAnimation() {
    console.log('🔄 TOGGLE BUTTON CLICKED - Current mode:', currentMode);
    
    const spinningWorld = document.querySelector('.spinning-world');
    const interactiveMap = document.querySelector('.interactive-map');
    const replayBtn = document.querySelector('.replay-animation-btn');
    const worldGif = document.querySelector('.world-gif');
    
    if (currentMode === 'map') {
        // Switch to static earth mode (no animation)
        console.log('Switching to static earth mode...');
        
        // Hide the entire map container
        const mapContainer = document.querySelector('.world-transition-container');
        if (mapContainer) {
            // Hide everything except the spinning world
            if (interactiveMap) {
                interactiveMap.classList.remove('visible');
                interactiveMap.style.display = 'none';
            }
            const transitionOverlay = document.querySelector('.transition-overlay');
            if (transitionOverlay) {
                transitionOverlay.style.display = 'none';
            }
        }
        
        // Show static earth
        if (spinningWorld) {
            spinningWorld.classList.remove('fade-out');
            spinningWorld.style.opacity = '1';
            spinningWorld.style.zIndex = '10';
            spinningWorld.style.display = 'flex';
        }
        
        // Make sure earth is static (no animation)
        if (worldGif) {
            worldGif.style.animation = 'none';
            const currentSrc = worldGif.src;
            worldGif.src = '';
            setTimeout(() => {
                worldGif.src = currentSrc;
                console.log('Static earth displayed');
            }, 50);
        }
        
        currentMode = 'earth';
        console.log('Now in earth mode - next click will animate');
        
    } else {
        // Switch to animated transition to map
        console.log('Starting animation from earth to map...');
        
        // Hide the replay button during animation
        if (replayBtn) {
            replayBtn.style.display = 'none';
            replayBtn.classList.remove('show');
        }
        
        // Start the earth animation
        if (worldGif) {
            worldGif.style.animation = 'worldZoomSpin 4s ease-in-out forwards';
            console.log('Earth animation started');
        }
        
        // Transition to map after animation
        setTimeout(() => {
            // Show map elements that were hidden
            const mapContainer = document.querySelector('.world-transition-container');
            if (mapContainer) {
                if (interactiveMap) {
                    interactiveMap.style.display = 'block';
                }
                const transitionOverlay = document.querySelector('.transition-overlay');
                if (transitionOverlay) {
                    transitionOverlay.style.display = 'block';
                }
            }
            
            startWorldTransitionReplay();
            currentMode = 'map';
            console.log('Now in map mode - next click will show static earth');
        }, 3800);
    }
}

// Replay-specific transition that preserves the existing map
function startWorldTransitionReplay() {
    const spinningWorld = document.querySelector('.spinning-world');
    const interactiveMap = document.querySelector('.interactive-map');
    
    console.log('Starting replay transition (preserving map)...');
    
    // After 3.5 seconds, start fading out world
    setTimeout(() => {
        console.log('Fading out spinning world (replay)');
        if (spinningWorld) {
            spinningWorld.classList.add('fade-out');
        }
    }, 3500);
    
    // Show the existing map without reinitializing it
    setTimeout(() => {
        console.log('Showing preserved map...');
        if (interactiveMap) {
            // Use CSS class for proper visibility management
            interactiveMap.classList.add('visible');
            interactiveMap.style.display = 'block';
            
            // Properly refresh the existing map
            if (sourcingMap) {
                setTimeout(() => {
                    // Force complete map refresh
                    sourcingMap.invalidateSize(true);
                    
                    // Re-enable all interactions to make sure they work
                    sourcingMap.scrollWheelZoom.enable();
                    sourcingMap.dragging.enable();
                    sourcingMap.touchZoom.enable();
                    sourcingMap.doubleClickZoom.enable();
                    sourcingMap.boxZoom.enable();
                    
                    console.log('Map fully refreshed and interactions enabled');
                }, 200);
            }
        }
    }, 4500);
    
    // Show replay button again after animation completes
    setTimeout(() => {
        const replayBtn = document.querySelector('.replay-animation-btn');
        if (replayBtn) {
            replayBtn.style.display = 'flex';
            replayBtn.classList.add('show');
            console.log('Replay button shown again');
        }
    }, 6000);
}

// Hover-specific transition function
function startWorldTransitionHover() {
    const spinningWorld = document.querySelector('.spinning-world');
    const interactiveMap = document.querySelector('.interactive-map');
    
    console.log('Starting hover transition to map...');
    
    // Hide the spinning world immediately
    if (spinningWorld) {
        spinningWorld.style.opacity = '0';
        spinningWorld.style.zIndex = '1';
    }
    
    // Show the map immediately
    if (interactiveMap) {
        interactiveMap.classList.add('visible');
        interactiveMap.style.display = 'block';
        
        // Refresh the existing map
        if (sourcingMap) {
            setTimeout(() => {
                sourcingMap.invalidateSize(true);
                
                // Re-enable all interactions
                sourcingMap.scrollWheelZoom.enable();
                sourcingMap.dragging.enable();
                sourcingMap.touchZoom.enable();
                sourcingMap.doubleClickZoom.enable();
                sourcingMap.boxZoom.enable();
                
                console.log('Map refreshed, shown, and fully interactive');
            }, 100);
        }
    }
    
    // Show replay button
    setTimeout(() => {
        const replayBtn = document.querySelector('.replay-animation-btn');
        if (replayBtn) {
            replayBtn.style.display = 'flex';
            replayBtn.classList.add('show');
            console.log('Replay button shown');
        }
    }, 1000);
}

// Call-to-action functions removed - using automatic animation

// Make the function globally available
window.replayEarthAnimation = replayEarthAnimation;

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing Pacific Coral website...');
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize products on home page (if element exists)
    if (document.getElementById('product-grid') && document.querySelector('.product-tabs')) {
        initializeHomeProductTabs();
        console.log('✅ Home page products initialized');
    }
    
    // Initialize products page (if on products page)
    if (document.querySelector('.nav-tab') && !document.querySelector('.product-tabs')) {
        initializeProductsPage();
        console.log('✅ Products page initialized');
    }
    
    // Initialize mega showcase (if on products page)
    if (document.getElementById('mega-showcase')) {
        initializeMegaShowcase();
        console.log('✅ Mega showcase initialized');
    }
    
    // Initialize contact form
    initializeContactForm();
    
    // Initialize world transition animation
    initializeWorldTransition();
    
    // Initialize maps
    initializeMaps();
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Initialize counter animation for stats
    initializeCounters();
    
    // Initialize lazy loading
    initializeLazyLoading();
    
    console.log('🎉 Pacific Coral website fully initialized!');
});

// 🚀 MEGA INTERACTIVE SHOWCASE
function initializeMegaShowcase() {
    const productCategories = {
        shrimp: [
            {
                name: 'Wild Gulf Shrimp',
                description: 'Fresh from the Gulf of Mexico waters, delivering exceptional taste and quality',
                image: 'images/wild-gulf-shrimp.webp',
                features: ['16-30 count/lb', 'IQF Frozen', 'Chemical-free'],
                category: 'Premium Shrimp'
            },
            {
                name: 'Ecuadorian White Shrimp',
                description: 'Farm-raised premium quality from Ecuador with consistent sizing',
                image: 'images/ecuadorian-shrimp.jpeg',
                features: ['HACCP Certified', 'Consistent sizing', 'Premium quality'],
                category: 'Premium Shrimp'
            },
            {
                name: 'Tiger Prawns',
                description: 'Large, meaty prawns perfect for grilling with bold black stripes',
                image: 'images/tiger-prawns-new.jpg',
                features: ['8-15 count/lb', 'Black tiger variety', 'Perfect for grilling'],
                category: 'Premium Shrimp'
            },
            {
                name: 'Rock Shrimp',
                description: 'Sweet, lobster-like flavor from deep Atlantic waters',
                image: 'images/rock-shrimp.webp',
                features: ['Lobster-like flavor', 'Flash frozen', 'Restaurant favorite'],
                category: 'Premium Shrimp'
            }
        ],
        fish: [
            {
                name: 'Yellowfin Tuna',
                description: 'Sushi-grade quality, fresh and frozen from pristine Pacific waters',
                image: 'images/tuna-correct.webp',
                features: ['Sashimi grade #1', 'Pole and line caught', 'CO treated options'],
                category: 'Fresh Fish'
            },
            {
                name: 'Mahi Mahi',
                description: 'Firm, flaky white fish with mild flavor, perfect for grilling',
                image: 'images/mahi-mahi-new.jpg',
                features: ['Pacific varieties', '4-6 oz portions', 'Fresh and frozen'],
                category: 'Fresh Fish'
            },
            {
                name: 'Red Snapper',
                description: 'Premium whole fish and fillets from Gulf of Mexico waters',
                image: 'images/red-snapper.webp',
                features: ['Gulf sourced', 'Whole fish 2-8 lbs', 'Sashimi grade'],
                category: 'Fresh Fish'
            },
            {
                name: 'Grouper',
                description: 'Firm texture fish, perfect for blackening or grilling',
                image: 'images/grouper-new.jpg',
                features: ['Gulf varieties', 'Skinless fillets', 'Restaurant cuts'],
                category: 'Fresh Fish'
            }
        ],
        ethnic: [
            {
                name: 'Hawaiian Plantains',
                description: 'Green and ripe varieties from Hawaii, hand-selected for premium quality',
                image: 'images/hawaiian-plantains.avif',
                features: ['Green for cooking', 'Yellow ripe variety', 'Large premium size'],
                category: 'Ethnic Foods'
            },
            {
                name: 'Cassava (Yuca)',
                description: 'Fresh and frozen yuca root, retail ready and food service cuts',
                image: 'images/cassava-yuca.avif',
                features: ['Halves Cut IQF', 'French Fry Cut', 'Food Service packs'],
                category: 'Ethnic Foods'
            },
            {
                name: 'Sweet Plantains',
                description: 'Specialty items for ethnic cuisine, Central American sourced',
                image: 'images/sweet-plantains.avif',
                features: ['Ñame, malanga, boniato', 'Fresh and frozen', 'Restaurant packs'],
                category: 'Ethnic Foods'
            }
        ]
    };
    
    let currentCategory = 'shrimp';
    let products = productCategories[currentCategory];

    let currentIndex = 0;
    let slideDirection = 'none'; // 'left', 'right', or 'none'
    const megaBg = document.getElementById('mega-bg');
    const megaTitle = document.getElementById('mega-title');
    const megaDescription = document.getElementById('mega-description');
    const megaFeatures = document.getElementById('mega-features');
    const megaCategory = document.querySelector('.mega-category');
    const progressBar = document.getElementById('progress-bar');
    const logoLeft = document.getElementById('mega-logo-left');
    const logoRight = document.getElementById('mega-logo-right');
    const stpStamp = document.querySelector('.mega-stamp');
    const ctaButton = document.getElementById('mega-cta');
    const arrowLeft = document.getElementById('mega-arrow-left');
    const arrowRight = document.getElementById('mega-arrow-right');
    const megaShowcase = document.getElementById('mega-showcase');
    let navButtons = document.querySelectorAll('.mega-nav-btn');
    const categoryTabs = document.querySelectorAll('.nav-tab');

    function updateProduct(index) {
        const product = products[index];
        
        if (slideDirection !== 'none' && megaShowcase) {
            console.log('STARTING ANIMATION with slideDirection:', slideDirection);
            
            // Step 1: Slide current card out in the specified direction
            if (slideDirection === 'slide-left') {
                console.log('Adding slide-out-left class');
                megaShowcase.classList.add('slide-out-left');
            } else if (slideDirection === 'slide-right') {
                console.log('Adding slide-out-right class');
                megaShowcase.classList.add('slide-out-right');
            }
            
            // Step 2: After card is completely off-screen, update content
            setTimeout(() => {
                // Update background image and content while off-screen
                if (megaBg) {
                    megaBg.style.backgroundImage = `url('${product.image}')`;
                }
                updateProductContent(product);
                
                // Remove exit classes and position new card off-screen on opposite side
                megaShowcase.classList.remove('slide-out-left', 'slide-out-right');
                
                if (slideDirection === 'slide-left') {
                    console.log('Card exited left → new card enters from right (adding slide-in-right)');
                    megaShowcase.classList.add('slide-in-right');
                } else if (slideDirection === 'slide-right') {
                    console.log('Card exited right → new card enters from left (adding slide-in-left)');
                    megaShowcase.classList.add('slide-in-left');
                }
                
                // Step 3: Slide new card smoothly into center
                setTimeout(() => {
                    console.log('Sliding new card to center (adding slide-center)');
                    megaShowcase.classList.remove('slide-in-left', 'slide-in-right');
                    megaShowcase.classList.add('slide-center');
                    
                    // Clean up after animation completes
                    setTimeout(() => {
                        console.log('Animation complete, cleaning up');
                        megaShowcase.classList.remove('slide-center');
                        slideDirection = 'none';
                    }, 500);
                }, 50);
            }, 600); // Wait for exit animation to complete (matches CSS transition)
        } else {
            // No animation, direct update
            if (megaBg) {
                megaBg.style.backgroundImage = `url('${product.image}')`;
            }
            updateProductContent(product);
            slideDirection = 'none';
        }
    }
    
    function updateProductContent(product) {
        const currentProductIndex = products.findIndex(p => p.name === product.name);
        
        // Update content
        if (megaTitle) megaTitle.textContent = product.name;
        if (megaDescription) megaDescription.textContent = product.description;
        if (megaCategory) megaCategory.textContent = product.category;
        
        // Update features
        if (megaFeatures) {
            megaFeatures.innerHTML = product.features
                .map(feature => `<div class="feature-tag">${feature}</div>`)
                .join('');
        }
        
        // Show/hide ethnic food logo overlays
        const isEthnic = currentCategory === 'ethnic';
        const isShrimp = currentCategory === 'shrimp';
        
        if (logoLeft) {
            logoLeft.classList.toggle('active', isEthnic);
        }
        if (logoRight) {
            logoRight.classList.toggle('active', isEthnic);
        }
        
        // Show/hide STP stamp (only for shrimp)
        if (stpStamp) {
            stpStamp.style.display = isShrimp ? 'block' : 'none';
        }
        
        // Update CTA button text
        if (ctaButton) {
            ctaButton.textContent = 'See More';
        }
        
        // Update progress bar
        if (progressBar) {
            progressBar.style.width = `${(currentProductIndex + 1) * (100 / products.length)}%`;
        }
        
        // Update nav buttons
        navButtons.forEach((btn, i) => {
            btn.classList.toggle('active', i === currentProductIndex);
        });
    }
    
    function switchCategory(newCategory) {
        if (newCategory === currentCategory) return;
        
        currentCategory = newCategory;
        products = productCategories[currentCategory];
        currentIndex = 0;
        
        // Update navigation buttons
        updateNavigationButtons();
        
        // Update product display
        updateProduct(0);
    }
    
    function updateNavigationButtons() {
        const megaNav = document.querySelector('.mega-nav');
        if (!megaNav) return;
        
        const icons = {
            shrimp: '🦐',
            fish: '🐟',
            ethnic: '🌱'
        };
        
        const labels = {
            shrimp: ['Wild Gulf', 'Ecuadorian', 'Tiger Prawns', 'Rock Shrimp'],
            fish: ['Yellowfin Tuna', 'Mahi Mahi', 'Red Snapper', 'Grouper'],
            ethnic: ['Hawaiian Plantains', 'Cassava (Yuca)', 'Sweet Plantains']
        };
        
        megaNav.innerHTML = products.map((product, index) => `
            <button class="mega-nav-btn ${index === 0 ? 'active' : ''}" data-product="${index}">
                <span class="nav-icon">${icons[currentCategory]}</span>
                <span class="nav-label">${labels[currentCategory][index]}</span>
            </button>
        `).join('');
        
        // Re-query nav buttons after updating HTML
        navButtons = document.querySelectorAll('.mega-nav-btn');
        
        // Re-add click handlers
        navButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                currentIndex = index;
                updateProduct(currentIndex);
            });
        });
    }
    
    function nextProduct() {
        slideDirection = 'slide-right'; // Right arrow/swipe → current exits RIGHT, next enters from LEFT
        currentIndex = (currentIndex + 1) % products.length;
        updateProduct(currentIndex);
    }
    
    function previousProduct() {
        slideDirection = 'slide-left'; // Left arrow/swipe → current exits LEFT, previous enters from RIGHT
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        updateProduct(currentIndex);
    }
    
    // Touch/swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe right → next product (current exits right, next enters from left)
                nextProduct();
            } else {
                // Swipe left → previous product (current exits left, previous enters from right)
                previousProduct();
            }
        }
    }
    
    // Touchpad/trackpad scrolling functionality
    let wheelTimeout;
    let wheelDelta = 0;
    const wheelThreshold = 100;
    
    function handleWheel(e) {
        // Prevent default scrolling behavior when on the showcase
        e.preventDefault();
        
        // Accumulate wheel delta
        wheelDelta += e.deltaX || e.deltaY;
        
        // Clear existing timeout
        clearTimeout(wheelTimeout);
        
        // Set timeout to process accumulated scroll after user stops scrolling
        wheelTimeout = setTimeout(() => {
            if (Math.abs(wheelDelta) > wheelThreshold) {
                if (wheelDelta > 0) {
                    // Positive delta = scroll/swipe right → next product (exits right, enters from left)
                    nextProduct();
                } else {
                    // Negative delta = scroll/swipe left → previous product (exits left, enters from right)
                    previousProduct();
                }
            }
            wheelDelta = 0;
        }, 50);
    }

    // Add click handlers to category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Switch category
            switchCategory(category);
        });
    });
    
    // Arrow button handlers - matching visual direction
    if (arrowLeft) {
        // Left arrow clicked → card exits LEFT, new one enters from RIGHT
        arrowLeft.addEventListener('click', () => {
            console.log('LEFT ARROW CLICKED - should exit left, enter from right');
            slideDirection = 'slide-left';
            currentIndex = (currentIndex - 1 + products.length) % products.length;
            updateProduct(currentIndex);
        });
    }
    if (arrowRight) {
        // Right arrow clicked → card exits RIGHT, new one enters from LEFT
        arrowRight.addEventListener('click', () => {
            console.log('RIGHT ARROW CLICKED - should exit right, enter from left');
            slideDirection = 'slide-right';
            currentIndex = (currentIndex + 1) % products.length;
            updateProduct(currentIndex);
        });
    }
    
    // Add touch/swipe handlers
    if (megaShowcase) {
        megaShowcase.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });
        
        megaShowcase.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        // Add keyboard navigation
        megaShowcase.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                previousProduct();
            } else if (e.key === 'ArrowRight') {
                nextProduct();
            }
        });
        
        // Add wheel/touchpad navigation - DISABLED to prevent conflicts with card deck
        // megaShowcase.addEventListener('wheel', handleWheel, { passive: false });
        
        // Make showcase focusable for keyboard navigation
        megaShowcase.tabIndex = 0;
    }

    // Add click handlers to nav buttons
    navButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentIndex = index;
            updateProduct(currentIndex);
        });
    });

    // Auto-advance disabled - only manual navigation
    // setInterval(() => {
    //     slideDirection = 'left'; // Auto-advance slides from right to left
    //     currentIndex = (currentIndex + 1) % products.length;
    //     updateProduct(currentIndex);
    // }, 5000);

    // Initialize navigation buttons
    updateNavigationButtons();
    
    // Initialize first product
    updateProduct(0);
}

// Dynamic Navbar Color Changing System
function initializeDynamicNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    // Define sections and their corresponding navbar themes for all pages
    const allSections = [
        // Products Page Sections
        { selector: '.products-hero', theme: 'theme-dark' },
        { selector: '.product-spotlight', theme: 'theme-light' },
        { selector: '.premium-selection-header', theme: 'theme-light' },
        { selector: '.product-navigation', theme: 'theme-light' },
        { selector: '.mega-product-showcase', theme: 'theme-light' },
        { selector: '.product-showcase', theme: 'theme-light' },
        { selector: '.product-standards', theme: 'theme-light' },
        { selector: '.supply-chain', theme: 'theme-coral' },
        { selector: '.products-cta', theme: 'theme-light' },
        
        // Home Page Sections
        { selector: '.hero', theme: 'theme-dark' },         // Blue-coral gradient background → dark navbar for contrast
        { selector: '.story', theme: 'theme-light' },       // White background → light navbar
        { selector: '.sourcing', theme: 'theme-light' },    // White background → light navbar
        { selector: '.products-showcase', theme: 'theme-light' }, // White background → light navbar
        { selector: '.our-brands', theme: 'theme-light' },  // Light gray background → light navbar
        { selector: '.facility-showcase', theme: 'theme-light' },
        { selector: '.contact', theme: 'theme-light' },     // White background → light navbar
        
        // About Page Sections
        { selector: '.about-hero', theme: 'theme-dark' },
        { selector: '.company-story', theme: 'theme-light' },
        { selector: '.leadership-team', theme: 'theme-light' },
        { selector: '.values-mission', theme: 'theme-light' },
        { selector: '.company-stats', theme: 'theme-light' },
        { selector: '.about-cta', theme: 'theme-light' },
        
        // Responsibility Page Sections
        { selector: '.responsibility-hero', theme: 'theme-dark' },
        { selector: '.mission-statement', theme: 'theme-light' },
        { selector: '.responsibility-pillars', theme: 'theme-light' },
        { selector: '.impact-stats', theme: 'theme-dark' },
        { selector: '.certifications-partners', theme: 'theme-light' },
        { selector: '.sustainability-timeline', theme: 'theme-light' },
        { selector: '.responsibility-cta', theme: 'theme-coral' },
        { selector: '.responsibility-section', theme: 'theme-light' },
        
        // Traceability Page Sections
        { selector: '.traceability-hero', theme: 'theme-dark' },
        { selector: '.tracking-display', theme: 'theme-light' },
        { selector: '.interactive-features', theme: 'theme-light' },
        { selector: '.trust-verification', theme: 'theme-dark' },
        { selector: '.demo-section', theme: 'theme-light' },
        { selector: '.traceability-cta', theme: 'theme-dark' },
        
        // Generic sections
        { selector: '.section', theme: 'theme-light' },
        { selector: 'footer', theme: 'theme-dark' }
    ];
    
    // Filter sections to only those that exist on current page
    const sections = allSections.filter(section => {
        return document.querySelector(section.selector) !== null;
    });
    
    console.log('Found sections for navbar theming:', sections);
    console.log('Current page:', window.location.pathname);
    
    let currentTheme = 'theme-light';
    
    // If no sections found, just use simple scroll-based theming
    if (sections.length === 0) {
        console.log('No sections found, using simple scroll-based theming');
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            if (scrollTop < 100) {
                updateNavbarTheme('theme-dark'); // Dark for hero sections
            } else {
                updateNavbarTheme('theme-light'); // Light for content sections
            }
        });
        updateNavbarTheme('theme-dark'); // Start with dark for hero
        return;
    }
    
    function updateNavbarTheme(newTheme) {
        if (newTheme !== currentTheme) {
            console.log('Changing navbar theme from', currentTheme, 'to', newTheme);
            // Remove all theme classes
            navbar.classList.remove('theme-light', 'theme-dark', 'theme-seafood', 'theme-coral', 'theme-black');
            // Add new theme
            navbar.classList.add(newTheme);
            currentTheme = newTheme;
        }
    }
    
    // Use Intersection Observer for better performance
    const observerOptions = {
        root: null,
        rootMargin: '-20px 0px -70% 0px', // Even faster detection for responsive theme changes
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] // Multiple thresholds for smoother detection
    };
    
    const observer = new IntersectionObserver((entries) => {
        // Find the section that's most visible at navbar level
        let activeSection = null;
        let maxRatio = 0;
        
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                const section = sections.find(s => {
                    const element = document.querySelector(s.selector);
                    return element === entry.target;
                });
                
                if (section) {
                    activeSection = section;
                    maxRatio = entry.intersectionRatio;
                }
            }
        });
        
        if (activeSection) {
            updateNavbarTheme(activeSection.theme);
        }
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
        const element = document.querySelector(section.selector);
        if (element) {
            observer.observe(element);
        }
    });
    
    // Remove special mega showcase handling - use regular intersection observer
    
    // Initialize with theme based on first section (likely hero)
    const initialTheme = sections.length > 0 ? sections[0].theme : 'theme-light';
    updateNavbarTheme(initialTheme);
}

// Initialize dynamic navbar on all pages
document.addEventListener('DOMContentLoaded', function() {
    // Always initialize dynamic navbar
    initializeDynamicNavbar();
    
    // Initialize page-specific features
    if (window.location.pathname.includes('products.html')) {
        initializeMegaShowcase();
    }
    
    // Initialize for other pages too
    initializeProductsPage();
    
    // Initialize Quality Card Deck on main page
    initializeQualityCardDeck();
});

// Quality Card Deck Functionality
function initializeQualityCardDeck() {
    const cardDeck = document.getElementById('qualityCardDeck');
    const cards = document.querySelectorAll('.quality-deck-card');
    const dots = document.querySelectorAll('.quality-deck-dot');
    const swipeHint = document.querySelector('.quality-swipe-hint');
    
    if (!cardDeck || !cards.length) return;
    
    let currentCard = 0;
    let isAnimating = false;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    // Initialize cards positioning
    updateCardPositions();
    
    // Add click listeners to navigation dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (!isAnimating) {
                showCard(index);
            }
        });
    });
    
    // Add click listeners to cards for next navigation
    cards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            if (!isAnimating && !isDragging) {
                e.preventDefault();
                const nextIndex = (currentCard + 1) % cards.length;
                showCard(nextIndex);
            }
        });
    });
    
    // Touch/mouse events for swipe functionality
    cardDeck.addEventListener('mousedown', handleStart);
    cardDeck.addEventListener('touchstart', handleStart, { passive: false });
    
    cardDeck.addEventListener('mousemove', handleMove);
    cardDeck.addEventListener('touchmove', handleMove, { passive: false });
    
    cardDeck.addEventListener('mouseup', handleEnd);
    cardDeck.addEventListener('touchend', handleEnd);
    
    cardDeck.addEventListener('mouseleave', handleEnd);
    
    // Auto-advance cards every 6 seconds
    let autoAdvanceTimer = setInterval(() => {
        if (!isDragging && !isAnimating) {
            const nextIndex = (currentCard + 1) % cards.length;
            showCard(nextIndex);
        }
    }, 6000);
    
    // Pause auto-advance on hover
    cardDeck.addEventListener('mouseenter', () => {
        clearInterval(autoAdvanceTimer);
    });
    
    cardDeck.addEventListener('mouseleave', () => {
        autoAdvanceTimer = setInterval(() => {
            if (!isDragging && !isAnimating) {
                const nextIndex = (currentCard + 1) % cards.length;
                showCard(nextIndex);
            }
        }, 6000);
    });
    
    function handleStart(e) {
        if (isAnimating) return;
        
        isDragging = true;
        startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        currentX = startX;
        
        cardDeck.style.cursor = 'grabbing';
        e.preventDefault();
    }
    
    function handleMove(e) {
        if (!isDragging || isAnimating) return;
        
        currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        const deltaX = currentX - startX;
        
        // Apply real-time transform for smooth dragging
        cards.forEach((card, index) => {
            const offset = (index - currentCard) * 100;
            const transform = offset + (deltaX / cardDeck.offsetWidth) * 100;
            card.style.transform = `translateX(${transform}%) rotateY(${Math.abs(transform) * 0.3}deg) scale(${1 - Math.abs(transform) * 0.001})`;
        });
        
        e.preventDefault();
    }
    
    function handleEnd(e) {
        if (!isDragging) return;
        
        isDragging = false;
        cardDeck.style.cursor = 'grab';
        
        const deltaX = currentX - startX;
        const threshold = cardDeck.offsetWidth * 0.15; // 15% of container width
        
        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0 && currentCard > 0) {
                // Swipe right - previous card
                showCard(currentCard - 1);
            } else if (deltaX < 0 && currentCard < cards.length - 1) {
                // Swipe left - next card
                showCard(currentCard + 1);
            } else {
                // Snap back to current position
                updateCardPositions();
            }
        } else {
            // Snap back to current position
            updateCardPositions();
        }
    }
    
    function showCard(index) {
        if (isAnimating || index === currentCard) return;
        
        isAnimating = true;
        currentCard = index;
        
        // Hide swipe hint after first interaction
        if (swipeHint && swipeHint.style.opacity !== '0') {
            swipeHint.style.opacity = '0';
            setTimeout(() => {
                if (swipeHint) swipeHint.style.display = 'none';
            }, 300);
        }
        
        // Update dots with black scaling animation
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentCard);
            if (i === currentCard) {
                // Pulse animation for active dot
                dot.style.transform = 'scale(1.8)';
                setTimeout(() => {
                    dot.style.transform = 'scale(1.5)';
                }, 150);
            } else {
                dot.style.transform = 'scale(1)';
            }
        });
        
        // Update card positions with animations
        updateCardPositions();
        
        // Reset animation flag after transition
        setTimeout(() => {
            isAnimating = false;
        }, 700);
    }
    
    function updateCardPositions() {
        cards.forEach((card, index) => {
            const offset = (index - currentCard) * 100;
            const absOffset = Math.abs(offset);
            
            // Apply smooth transforms with coral-style animations
            card.style.transform = `
                translateX(${offset}%) 
                rotateY(${absOffset * 0.3}deg) 
                scale(${1 - absOffset * 0.001})
            `;
            
            // Adjust z-index and opacity for elegant stacking
            card.style.zIndex = cards.length - Math.floor(absOffset / 100);
            card.style.opacity = absOffset === 0 ? '1' : Math.max(0.4, 1 - absOffset * 0.003);
            
            // Add glow effect to active card
            card.classList.toggle('active', index === currentCard);
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!cardDeck.matches(':hover')) return;
        
        if (e.key === 'ArrowLeft' && currentCard > 0) {
            e.preventDefault();
            showCard(currentCard - 1);
        } else if (e.key === 'ArrowRight' && currentCard < cards.length - 1) {
            e.preventDefault();
            showCard(currentCard + 1);
        }
    });
    
    // Touchpad/Trackpad wheel scrolling - Horizontal only, no browser navigation
    const wheelThreshold = 30; // Threshold for detection
    
    cardDeck.addEventListener('wheel', (e) => {
        // Only handle if horizontal movement is significant AND stronger than vertical
        if (Math.abs(e.deltaX) > wheelThreshold && Math.abs(e.deltaX) > Math.abs(e.deltaY) && !isAnimating) {
            e.preventDefault(); // Prevent browser navigation
            e.stopPropagation(); // Stop event bubbling
            
            if (e.deltaX > 0) {
                // Swiping left on trackpad (deltaX positive) = show next card (right)
                if (currentCard < cards.length - 1) {
                    showCard(currentCard + 1);
                }
            } else if (e.deltaX < 0) {
                // Swiping right on trackpad (deltaX negative) = show previous card (left)  
                if (currentCard > 0) {
                    showCard(currentCard - 1);
                }
            }
        }
    }, { passive: false });
}

// Initialize dynamic navbar on all pages
document.addEventListener('DOMContentLoaded', function() {
    // Always initialize dynamic navbar
    initializeDynamicNavbar();
    
    // Initialize page-specific features
    if (window.location.pathname.includes('products.html')) {
        initializeMegaShowcase();
    }
    
    // Initialize for other pages too
    initializeProductsPage();
    
    // Initialize Quality Card Deck on main page
    initializeQualityCardDeck();
});


// Initialize main page functionality
function initializeMain() {
    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 50
        });
    }
    
    // Initialize counters
    animateCounters();
    
    // Initialize navbar scroll handling
    handleNavbarScroll();
    
    // Initialize sourcing map event listeners only
    initializeSourcingMapMain();
}

// Animate counter numbers
function animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-counter'));
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current).toLocaleString();
            }
        }, 20);
    });
}

// Handle navbar scroll effects
function handleNavbarScroll() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;
        
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Initialize products page (placeholder)
function initializeProductsPage() {
    // Basic product page initialization
    initializeProductTabs();
    displayProducts('shrimp');
}

// Using existing products data from top of file

// Initialize product tabs functionality
function initializeProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs
            tabButtons.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get category and display products
            const category = this.getAttribute('data-category');
            displayProducts(category);
        });
    });
}

// Display products for specific category
function displayProducts(category) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return; // Exit if not on page with product grid
    
    const categoryProducts = products[category] || [];
    
    productGrid.innerHTML = '';
    
    categoryProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-aos', 'fade-up');
        productCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        const stampHTML = product.stamp ? `
            <div class="product-stamp">
                <img src="${product.stamp}" alt="Quality Stamp" class="stamp-image">
            </div>
        ` : '';
        
        const imageHTML = product.isImage ? 
            `<div class="product-image" style="background-image: url('${product.icon}'); background-size: cover; background-position: center;"></div>` :
            `<div class="product-icon">${product.icon}</div>`;
        
        productCard.innerHTML = `
            <div class="product-image-container">
                ${imageHTML}
            </div>
            ${stampHTML}
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <ul class="product-details">
                    ${product.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
    
    // Reinitialize AOS for new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// Initialize mega showcase (placeholder)  
function initializeMegaShowcase() {
    // Basic mega showcase initialization
}

// Initialize sourcing map and earth animation - Complete version
function initializeSourcingMapMain() {
    // Initialize sourcing stats first
    populateSourcingStats();
    
    // DEBUGGING: Check map container state
    const mapContainer = document.getElementById('awesome-sourcing-map');
    console.log('🔍 DEBUGGING MAP CONTAINER:');
    console.log('- Container exists:', !!mapContainer);
    console.log('- Container style:', mapContainer ? mapContainer.style.cssText : 'N/A');
    console.log('- Container computed style:', mapContainer ? window.getComputedStyle(mapContainer).display : 'N/A');
    console.log('- Container opacity:', mapContainer ? window.getComputedStyle(mapContainer).opacity : 'N/A');
    console.log('- Container visibility:', mapContainer ? window.getComputedStyle(mapContainer).visibility : 'N/A');
    
    const earthCallToAction = document.querySelector('.earth-call-to-action');
    const transitionContainer = document.querySelector('.world-transition-container');
    const appleWelcome = document.querySelector('.apple-welcome');
    // Global variables for sourcing map
    let sourcingMap = null;
    let isAnimating = false;
    
    // Use the comprehensive sourcing locations data from the global scope
    // (This ensures consistency with the main map and all product links)
    
    if (earthCallToAction && transitionContainer) {
        earthCallToAction.addEventListener('click', () => {
            if (isAnimating) return;
            isAnimating = true;
            
            // Phase 1: Earth zoom animation
            transitionContainer.classList.add('transitioning');
            
            // Phase 2: Show "Welcome to our world!" message after 1 second
            setTimeout(() => {
                showWelcomeMessage();
            }, 1000);
            
            // Phase 3: Show map after message appears (using working map function)
            setTimeout(() => {
                showMapAfterAnimation();
                isAnimating = false;
            }, 3500); // Longer delay to let message finish
        });
    }
    
    
    function startEpicEarthAnimation() {
        alert('EARTH ANIMATION STARTED!');
        console.log('🌍 Starting epic earth animation...');
        const transitionOverlay = document.querySelector('.transition-overlay');
        const spinningWorld = document.querySelector('.spinning-world');
        const mapContainer = document.getElementById('sourcing-map');
        
        // Phase 1: Zoom into earth
        transitionContainer.classList.add('transitioning');
        
        // Phase 2: Add particles and welcome message after 1 second
        setTimeout(() => {
            createParticleStars();
            showWelcomeMessage();
        }, 1000);
        
        // Phase 3: Transition to map after 2 seconds (reduced delay)
        setTimeout(() => {
            alert('MAP TRANSITION PHASE STARTED!');
            console.log('🗺️ Starting map transition...');
            transitionContainer.classList.add('show-map');
            
            // Double-check map container exists
            const mapElement = document.getElementById('awesome-sourcing-map');
            console.log('Map container found:', !!mapElement);
            console.log('Leaflet available:', typeof L !== 'undefined');
            
            if (mapElement && typeof L !== 'undefined') {
                alert('FOUND MAP CONTAINER AND LEAFLET!');
                console.log('✅ Using debug button approach...');
                
                // COPY EXACT DEBUG BUTTON LOGIC
                if (mapElement) {
                    // Force show the container (exact same as debug)
                    mapElement.style.opacity = '1';
                    mapElement.style.visibility = 'visible';
                    mapElement.style.display = 'block';
                    console.log('✅ Forced map container visible');
                    
                    // Create map directly (exact same as debug)
                    try {
                        if (typeof L !== 'undefined') {
                            console.log('🗺️ Creating map directly...');
                            const directMap = L.map('awesome-sourcing-map', {
                                center: [20, 0],
                                zoom: 2
                            });
                            
                            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                attribution: '© OpenStreetMap'
                            }).addTo(directMap);
                            
                            console.log('✅ Map created successfully using debug approach!');
                            
                            // Show controls
                            const mapControls = document.querySelector('.map-controls');
                            if (mapControls) {
                                mapControls.style.opacity = '1';
                                mapControls.style.visibility = 'visible';
                            }
                            
                        } else {
                            console.error('❌ Leaflet not available');
                        }
                    } catch (error) {
                        console.error('❌ Error creating map:', error);
                    }
                }
            } else {
                console.error('❌ Map initialization failed - container or Leaflet missing');
            }
            
            
            isAnimating = false;
        }, 2000);
    }
    
    function createParticleStars() {
        const spinningWorld = document.querySelector('.spinning-world');
        if (!spinningWorld) return;
        
        // Create flying star particles
        for (let i = 1; i <= 8; i++) {
            const star = document.createElement('div');
            star.className = `particle star${i}`;
            spinningWorld.appendChild(star);
        }
    }
    
    function showWelcomeMessage() {
        if (appleWelcome) {
            appleWelcome.style.opacity = '1';
            appleWelcome.style.animation = 'welcomeEpic 3s ease-in-out forwards';
            
            // Animate letters one by one
            const letters = appleWelcome.querySelectorAll('.letter');
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.style.animation = 'letterPop 0.6s ease-out forwards';
                }, index * 100);
            });
        }
        
        // Add screen flash effect
        const screenFlash = document.createElement('div');
        screenFlash.className = 'screen-flash';
        screenFlash.style.animation = 'screenFlash 0.5s ease-out';
        document.querySelector('.world-transition-container').appendChild(screenFlash);
        
        setTimeout(() => {
            if (screenFlash.parentNode) {
                screenFlash.parentNode.removeChild(screenFlash);
            }
        }, 500);
    }
    
    function DELETED_initializeLeafletMap() {
        const mapElement = document.getElementById('sourcing-map');
        if (!mapElement) {
            console.error('Map container not found');
            return;
        }
        
        // Clear existing map if it exists
        if (sourcingMap) {
            sourcingMap.remove();
            sourcingMap = null;
        }
        
        console.log('Initializing Leaflet map...');
        
        // Initialize the map
        sourcingMap = L.map('sourcing-map', {
            center: [20, 0],
            zoom: 2,
            zoomControl: false,
            attributionControl: false
        });
        
        // Make map globally available
        window.sourcingMap = sourcingMap;
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ''
        }).addTo(sourcingMap);
        
        // Add custom markers for sourcing locations
        sourcingLocations.forEach(location => {
            const marker = L.marker([location.lat, location.lng], {
                icon: L.divIcon({
                    className: 'custom-sourcing-marker',
                    html: '<div class="marker-pulse"></div>',
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                })
            }).addTo(sourcingMap);
            
            // Add popup with location info
            marker.bindPopup(`
                <div class="sourcing-popup">
                    <h4>${location.name}</h4>
                    <ul>
                        ${location.products.map(product => `<li>${product}</li>`).join('')}
                    </ul>
                </div>
            `);
        });
        
        // Update country stats
        updateCountryStats();
        
        // Force map to refresh/invalidate size and ensure visibility
        setTimeout(() => {
            if (sourcingMap) {
                sourcingMap.invalidateSize();
                console.log('✅ Map initialized and refreshed');
                
                // Force show map container as backup
                const mapElement = document.getElementById('sourcing-map');
                if (mapElement) {
                    mapElement.style.opacity = '1';
                    mapElement.style.visibility = 'visible';
                    mapElement.style.display = 'block';
                    console.log('✅ Map forced visible');
                }
            }
        }, 100);
    }
    
    function updateCountryStats() {
        const statsContainer = document.getElementById('country-stats');
        if (!statsContainer) return;
        
        const stats = [
            { country: 'Ecuador', percentage: '35%', products: 'White Shrimp, Tiger Prawns' },
            { country: 'Peru', percentage: '25%', products: 'Rock Shrimp, Scallops' },
            { country: 'USA', percentage: '20%', products: 'Wild Gulf Shrimp' },
            { country: 'Thailand', percentage: '12%', products: 'Tiger Prawns, Fish' },
            { country: 'Vietnam', percentage: '8%', products: 'White Shrimp, Fish' }
        ];
        
        statsContainer.innerHTML = stats.map(stat => `
            <div class="country-stat-item" data-aos="fade-left" data-aos-delay="200">
                <div class="country-name">${stat.country}</div>
                <div class="country-bar">
                    <div class="country-fill" style="width: ${stat.percentage}"></div>
                </div>
                <div class="country-percentage">${stat.percentage}</div>
                <div class="country-products">${stat.products}</div>
            </div>
        `).join('');
    }
}

// Replay earth animation
function replayEarthAnimation() {
    const transitionContainer = document.querySelector('.world-transition-container');
    const replayButton = document.querySelector('.replay-animation-btn');
    const appleWelcome = document.querySelector('.apple-welcome');
    
    if (transitionContainer) {
        // Remove all animation classes
        transitionContainer.classList.remove('transitioning', 'show-map');
        
        // Hide welcome message
        if (appleWelcome) {
            appleWelcome.style.opacity = '0';
            appleWelcome.style.animation = '';
        }
        
        // Remove particles
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });
        
        // Hide replay button
        if (replayButton) {
            replayButton.style.display = 'none';
        }
        
        // Destroy existing map
        if (window.sourcingMap) {
            window.sourcingMap.remove();
            window.sourcingMap = null;
        }
    }
}

// Apple-Style Tuna Popup Functions
function showTunaPopup() {
    const popup = document.getElementById('tunaPopup');
    if (popup) {
        popup.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeTunaPopup() {
    const popup = document.getElementById('tunaPopup');
    if (popup) {
        popup.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    const popup = document.getElementById('tunaPopup');
    if (popup && event.target === popup) {
        closeTunaPopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeTunaPopup();
    }
});


// Focus specifically on Indonesia pin for tuna
function focusOnIndonesiaTuna() {
    if (window.sourcingMap) {
        // Indonesia coordinates (Makassar location - exact match with sourcing data)
        const indonesiaLat = -5.1477;
        const indonesiaLng = 119.4327;
        
        console.log('Focusing on Indonesia for tuna:', indonesiaLat, indonesiaLng);
        
        // Zoom to Indonesia location with better zoom level
        window.sourcingMap.setView([indonesiaLat, indonesiaLng], 8, {
            animate: true,
            duration: 1.5
        });
        
        // Find and open the Indonesia marker popup with exact coordinates match
        let foundMarker = false;
        window.sourcingMap.eachLayer(function(layer) {
            if (layer.getLatLng && layer.getPopup) {
                const latLng = layer.getLatLng();
                console.log('Checking marker at:', latLng.lat, latLng.lng);
                // Check for exact match with Indonesia coordinates
                if (Math.abs(latLng.lat - indonesiaLat) < 0.1 && Math.abs(latLng.lng - indonesiaLng) < 0.1) {
                    console.log('Found Indonesia marker, opening popup');
                    layer.openPopup();
                    foundMarker = true;
                }
            }
        });
        
        if (!foundMarker) {
            console.log('Indonesia marker not found, available markers:');
            window.sourcingMap.eachLayer(function(layer) {
                if (layer.getLatLng && layer.getPopup) {
                    const latLng = layer.getLatLng();
                    console.log('Available marker:', latLng.lat, latLng.lng);
                }
            });
        }
    } else {
        console.log('sourcingMap not available yet');
    }
}


// AWESOME INTERACTIVE MAP SYSTEM
// DELETED: let awesomeMap = null;
let allMarkers = [];
let currentFilter = 'all';

// Enhanced sourcing locations with product categories
const awesomeSourcingLocations = [
    {
        name: 'Ecuador',
        lat: -1.8312,
        lng: -78.1834,
        flag: '🇪🇨',
        products: [
            { name: 'Yellowfin Tuna', category: 'fish', emoji: '🐟' },
            { name: 'White Shrimp', category: 'shrimp', emoji: '🦐' },
            { name: 'Mahi Mahi', category: 'fish', emoji: '🐟' }
        ],
        supplier: 'Industrial Pesquera Santa Priscila',
        shipments: '12.8k+',
        description: 'Our largest supplier of premium white shrimp and Pacific tuna'
    },
    {
        name: 'Vietnam',
        lat: 14.0583,
        lng: 108.2772,
        flag: '🇻🇳',
        products: [
            { name: 'Black Tiger Shrimp', category: 'shrimp', emoji: '🦐' },
            { name: 'Pangasius', category: 'fish', emoji: '🐟' },
            { name: 'Sea Bass', category: 'fish', emoji: '🐟' }
        ],
        supplier: 'Multiple Premium Suppliers',
        shipments: '8k+',
        description: 'High-quality aquaculture products from Mekong Delta region'
    },
    {
        name: 'Indonesia - Makassar',
        lat: -5.1477,
        lng: 119.4327,
        flag: '🇮🇩',
        products: [
            { name: 'Yellowfin Tuna', category: 'fish', emoji: '🐟' },
            { name: 'Grouper', category: 'fish', emoji: '🐟' },
            { name: 'Red Snapper', category: 'fish', emoji: '🐟' }
        ],
        supplier: 'Kota Makassar/Bringkanaya Fishing Fleets',
        shipments: '3.2k+',
        description: 'Premium sushi-grade tuna and reef fish from pristine Indonesian waters'
    },
    {
        name: 'Panama',
        lat: 8.5380,
        lng: -80.7821,
        flag: '🇵🇦',
        products: [
            { name: 'Gulf Shrimp', category: 'shrimp', emoji: '🦐' },
            { name: 'Red Snapper', category: 'fish', emoji: '🐟' },
            { name: 'Sea Bass', category: 'fish', emoji: '🐟' }
        ],
        supplier: 'SOITGAR SA',
        shipments: '1.05k+',
        description: 'Wild-caught seafood from Pacific and Caribbean waters'
    },
    {
        name: 'Costa Rica',
        lat: 9.7489,
        lng: -83.7534,
        flag: '🇨🇷',
        products: [
            { name: 'Cassava (Yuca)', category: 'ethnic', emoji: '🌽' },
            { name: 'Sweet Plantains', category: 'ethnic', emoji: '🌽' }
        ],
        supplier: 'Tropical Farms Collective',
        shipments: '850+',
        description: 'Fresh tropical produce and root vegetables'
    }
];

// Initialize the awesome interactive map
function initializeAwesomeMap() {
    // Prevent multiple initializations
    if (awesomeMap) {
        console.log('⚠️ Map already exists, skipping initialization');
        return;
    }
    
    console.log('🚀 STARTING initializeAwesomeMap...');
    const mapContainer = document.getElementById('awesome-sourcing-map');
    console.log('🔍 Map container found:', !!mapContainer);
    console.log('🔍 Container style:', mapContainer ? mapContainer.style.cssText : 'N/A');
    console.log('🔍 Container dimensions:', mapContainer ? `${mapContainer.offsetWidth}x${mapContainer.offsetHeight}` : 'N/A');
    console.log('🔍 Container parent:', mapContainer ? mapContainer.parentElement.className : 'N/A');
    
    if (!mapContainer) {
        console.error('❌ Awesome map container not found');
        return;
    }

    if (typeof L === 'undefined') {
        console.error('❌ Leaflet not available for awesome map');
        return;
    }

    console.log('🗺️ Initializing awesome interactive map...');
    console.log('🔍 Leaflet version:', L.version);

    try {
        // Create map
        console.log('🎯 About to create Leaflet map...');
        awesomeMap = L.map('awesome-sourcing-map', {
            center: [20, 0],
            zoom: 2,
            zoomControl: true,
            attributionControl: false,
            preferCanvas: true
        });
        console.log('✅ Map object created:', !!awesomeMap);
        console.log('✅ Map container after creation:', awesomeMap.getContainer());
    } catch (error) {
        console.error('❌ Error creating map:', error);
        return;
    }

    // Add beautiful map tiles
    try {
        const tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '© OpenStreetMap © CartoDB',
            maxZoom: 18
        }).addTo(awesomeMap);
        console.log('✅ Tile layer added:', !!tileLayer);
    } catch (error) {
        console.error('❌ Error adding tile layer:', error);
    }

    // Add all markers
    try {
        addAwesomeMarkers();
        console.log('✅ Markers added');
    } catch (error) {
        console.error('❌ Error adding markers:', error);
    }

    // Initialize filter controls
    try {
        initializeMapControls();
        console.log('✅ Controls initialized');
    } catch (error) {
        console.error('❌ Error initializing controls:', error);
    }

    // Force invalidate size to ensure proper rendering
    setTimeout(() => {
        if (awesomeMap) {
            awesomeMap.invalidateSize();
            console.log('✅ Map size invalidated for proper rendering');
        }
    }, 100);

    console.log('✅ Awesome map initialized with', awesomeSourcingLocations.length, 'locations');
}

// Add awesome markers to the map
function addAwesomeMarkers() {
    allMarkers = []; // Reset markers
    
    awesomeSourcingLocations.forEach(location => {
        // Determine primary category for marker styling
        const categories = location.products.map(p => p.category);
        const primaryCategory = categories.includes('fish') ? 'fish' : 
                              categories.includes('shrimp') ? 'shrimp' : 'ethnic';

        // Create custom marker
        const markerIcon = L.divIcon({
            className: 'awesome-marker ' + primaryCategory,
            html: location.flag,
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });

        // Create marker
        const marker = L.marker([location.lat, location.lng], {
            icon: markerIcon
        }).addTo(awesomeMap);

        // Create awesome popup content
        const popupContent = createAwesomePopup(location);
        
        marker.bindPopup(popupContent, {
            maxWidth: 350,
            className: 'awesome-popup-container'
        });

        // Store marker with metadata
        marker.locationData = location;
        marker.categories = categories;
        allMarkers.push(marker);
    });
}

// Create awesome popup content
function createAwesomePopup(location) {
    const productsHtml = location.products.map(product => 
        '<div class="product-tag">' + product.emoji + ' ' + product.name + '</div>'
    ).join('');

    return '<div class="awesome-popup">' +
           '<h4>' + location.flag + ' ' + location.name + '</h4>' +
           '<div class="location-subtitle">' + location.description + '</div>' +
           '<div class="products-grid">' + productsHtml + '</div>' +
           '<div class="supplier-info">' +
           '<div class="supplier-name">' + location.supplier + '</div>' +
           '<div class="shipments">' + location.shipments + ' shipments annually</div>' +
           '</div></div>';
}

// Initialize map filter controls
function initializeMapControls() {
    const filterButtons = document.querySelectorAll('.map-filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Apply filter
            const filter = button.dataset.filter;
            filterMarkers(filter);
        });
    });
}

// Filter markers based on product category
function filterMarkers(filter) {
    currentFilter = filter;
    
    allMarkers.forEach(marker => {
        if (filter === 'all' || marker.categories.includes(filter)) {
            marker.setOpacity(1);
            if (marker._icon) marker._icon.style.display = 'flex';
        } else {
            marker.setOpacity(0.3);
            if (marker._icon) marker._icon.style.display = 'none';
        }
    });
}

// Enhanced tuna redirect to awesome map
function redirectToSourcingWithTuna() {
    closeTunaPopup();
    
    setTimeout(() => {
        document.getElementById('sourcing').scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
            // Check if map is visible, if not trigger earth animation first
            const mapContainer = document.getElementById('awesome-sourcing-map');
            const isMapVisible = mapContainer && mapContainer.style.opacity === '1' && mapContainer.style.visibility === 'visible';
            
            if (!isMapVisible) {
                // Trigger earth animation first
                const earthButton = document.querySelector('.earth-call-to-action');
                if (earthButton) {
                    earthButton.click();
                    
                    // Wait for animation to complete, then focus on Indonesia
                    setTimeout(() => {
                        if (awesomeMap) {
                            focusOnAwesomeLocation('Indonesia - Makassar');
                        }
                    }, 3000);
                }
            } else {
                // Map already visible, focus immediately
                if (awesomeMap) {
                    focusOnAwesomeLocation('Indonesia - Makassar');
                }
            }
        }, 1000);
    }, 400);
}

// Focus on specific location in awesome map
function focusOnAwesomeLocation(locationName) {
    const location = awesomeSourcingLocations.find(loc => loc.name === locationName);
    if (!location || !awesomeMap) return;

    awesomeMap.setView([location.lat, location.lng], 6, {
        animate: true,
        duration: 1.5
    });

    // Find and open the marker
    const marker = allMarkers.find(m => m.locationData.name === locationName);
    if (marker) {
        setTimeout(() => {
            marker.openPopup();
        }, 500);
    }
}

// NEW SIMPLE SOURCING MAP FUNCTION
function showNewSourcingMap() {
    console.log('🗺️ Creating new simple sourcing map...');
    
    const mapContainer = document.getElementById('sourcing-map');
    if (!mapContainer) {
        console.error('Map container not found');
        return;
    }
    
    // Show the map container
    mapContainer.style.opacity = '1';
    mapContainer.style.visibility = 'visible';
    mapContainer.style.transition = 'opacity 1s ease-in-out';
    
    // Create simple map with orange pins
    const map = L.map('sourcing-map', {
        center: [20, -30],
        zoom: 2,
        zoomControl: true
    });
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add orange pins for each sourcing location
    const locations = [
        { name: 'Ecuador', lat: -1.8312, lng: -78.1834, product: 'White Shrimp' },
        { name: 'Peru', lat: -9.1900, lng: -75.0152, product: 'Rock Shrimp' },
        { name: 'USA', lat: 29.9511, lng: -90.0715, product: 'Gulf Shrimp' },
        { name: 'Thailand', lat: 15.8700, lng: 100.9925, product: 'Tiger Prawns' },
        { name: 'Indonesia', lat: -5.1477, lng: 119.4327, product: 'Premium Tuna' }
    ];
    
    locations.forEach(location => {
        // Create orange marker
        const orangeIcon = L.divIcon({
            className: 'orange-marker',
            html: '<div style="background: #ff6b47; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>',
            iconSize: [26, 26],
            iconAnchor: [13, 13]
        });
        
        const marker = L.marker([location.lat, location.lng], { icon: orangeIcon })
            .bindPopup(`
                <div style="text-align: center; padding: 10px;">
                    <h4 style="margin: 0 0 5px 0; color: #ff6b47;">${location.name}</h4>
                    <p style="margin: 0; font-size: 14px;">${location.product}</p>
                </div>
            `)
            .addTo(map);
    });
    
    console.log('✅ New sourcing map created with orange pins!');
}

// TEMPORARY DEBUG FUNCTION
function debugMapTest() {
    console.log('🔧 MANUAL DEBUG TEST STARTED');
    const mapContainer = document.getElementById('awesome-sourcing-map');
    console.log('Map container:', mapContainer);
    
    if (mapContainer) {
        // Force show the container
        mapContainer.style.opacity = '1';
        mapContainer.style.visibility = 'visible';
        mapContainer.style.display = 'block';
        mapContainer.style.backgroundColor = 'lightblue';
        console.log('✅ Forced map container visible');
        
        // Try to initialize map directly
        try {
            if (typeof L !== 'undefined') {
                console.log('🗺️ Creating test map...');
                const testMap = L.map('awesome-sourcing-map', {
                    center: [20, 0],
                    zoom: 2
                });
                
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap'
                }).addTo(testMap);
                
                console.log('✅ Test map created successfully!');
            } else {
                console.error('❌ Leaflet not available');
            }
        } catch (error) {
            console.error('❌ Error creating test map:', error);
        }
    } else {
        console.error('❌ Map container not found');
    }
}

// SHOW MAP AFTER ANIMATION COMPLETES
function showMapAfterAnimation() {
    console.log('🗺️ Showing map after animation...');
    
    const container = document.getElementById('sourcing-map');
    if (!container || typeof L === 'undefined') {
        console.error('Cannot create map - missing container or Leaflet');
        return;
    }
    
    try {
        // Clear any existing map
        container.innerHTML = '';
        
        // Show the container with smooth transition
        container.style.opacity = '1';
        container.style.visibility = 'visible';
        container.style.transition = 'opacity 1s ease-in-out';
        
        // Create map
        const map = L.map('sourcing-map', {
            center: [20, -30],
            zoom: 2
        });
        
        // Add tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Add orange pins for sourcing locations
        const locations = [
            { name: 'Ecuador', lat: -1.8312, lng: -78.1834, product: 'White Shrimp' },
            { name: 'Peru', lat: -9.1900, lng: -75.0152, product: 'Rock Shrimp' },
            { name: 'USA', lat: 29.9511, lng: -90.0715, product: 'Gulf Shrimp' },
            { name: 'Thailand', lat: 15.8700, lng: 100.9925, product: 'Tiger Prawns' },
            { name: 'Indonesia', lat: -5.1477, lng: 119.4327, product: 'Premium Tuna' }
        ];
        
        locations.forEach(location => {
            const orangePin = L.divIcon({
                html: '<div style="background: #ff6b47; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>',
                iconSize: [26, 26],
                iconAnchor: [13, 13]
            });
            
            L.marker([location.lat, location.lng], { icon: orangePin })
                .bindPopup(`
                    <div style="text-align: center; padding: 10px;">
                        <h4 style="margin: 0 0 5px 0; color: #ff6b47;">${location.name}</h4>
                        <p style="margin: 0; font-size: 14px;">${location.product}</p>
                    </div>
                `)
                .addTo(map);
        });
        
        console.log('✅ Map created successfully after animation!');
        
    } catch (error) {
        console.error('Error creating map:', error);
    }
}

// SIMPLE TEST FUNCTION (keep for testing)
function testMap() {
    showMapAfterAnimation();
}

