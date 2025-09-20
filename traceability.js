// SPECTACULAR TRACEABILITY PAGE INTERACTIVE FUNCTIONALITY

// Sample tracking data
const trackingData = {
    'PCF-2024-0456': {
        product: 'Wild Gulf Shrimp',
        type: '🦐',
        currentStatus: 'in-transit',
        steps: [
            {
                id: 1,
                title: 'Ocean Harvest',
                location: 'Gulf of Mexico, USA',
                status: 'completed',
                details: {
                    coordinates: '28.7°N, 94.2°W',
                    date: 'March 15, 2024',
                    vessel: 'Pacific Dream',
                    captain: 'Captain Rodriguez'
                },
                timestamp: '2024-03-15T06:00:00Z'
            },
            {
                id: 2,
                title: 'Quality Processing',
                location: 'Louisiana Processing Center',
                status: 'completed',
                details: {
                    temperature: '-2°C maintained',
                    grade: 'A+ Premium',
                    batch: 'PC-24-0315',
                    inspector: 'Maria Santos'
                },
                timestamp: '2024-03-16T10:30:00Z'
            },
            {
                id: 3,
                title: 'Cold Chain Transport',
                location: 'En Route to Distribution',
                status: 'in-progress',
                details: {
                    currentTemp: '-1.8°C',
                    eta: '6 hours',
                    driver: 'John Martinez',
                    truck: 'CC-2024-089'
                },
                timestamp: '2024-03-17T08:15:00Z'
            },
            {
                id: 4,
                title: 'Retail Delivery',
                location: 'Final Destination',
                status: 'pending',
                details: {
                    status: 'Awaiting delivery',
                    quality: 'Verified fresh',
                    destination: 'Premium Market'
                }
            }
        ]
    },
    'PCF-2024-0789': {
        product: 'Red Snapper Fillet',
        type: '🐟',
        currentStatus: 'delivered',
        steps: [
            {
                id: 1,
                title: 'Ocean Harvest',
                location: 'Atlantic Coast, Florida',
                status: 'completed',
                details: {
                    coordinates: '25.8°N, 80.1°W',
                    date: 'March 12, 2024',
                    vessel: 'Ocean Spirit'
                }
            },
            {
                id: 2,
                title: 'Processing Facility',
                location: 'Miami Processing Hub',
                status: 'completed',
                details: {
                    temperature: '-1°C maintained',
                    grade: 'AAA Premium',
                    batch: 'RS-24-0312'
                }
            },
            {
                id: 3,
                title: 'Distribution',
                location: 'Regional Distribution Center',
                status: 'completed',
                details: {
                    temperature: '-1.5°C',
                    quality: 'Excellent',
                    handler: 'Fresh Logistics Inc.'
                }
            },
            {
                id: 4,
                title: 'Delivered',
                location: 'Gourmet Restaurant',
                status: 'completed',
                details: {
                    arrival: 'On time',
                    quality: 'Perfect condition',
                    chef: 'Chef Williams'
                }
            }
        ]
    },
    'PCF-2024-0123': {
        product: 'Blue Crab Meat',
        type: '🦀',
        currentStatus: 'processing',
        steps: [
            {
                id: 1,
                title: 'Crab Harvest',
                location: 'Chesapeake Bay, Maryland',
                status: 'completed',
                details: {
                    coordinates: '38.5°N, 76.4°W',
                    date: 'March 18, 2024',
                    vessel: 'Bay Harvester'
                }
            },
            {
                id: 2,
                title: 'Processing',
                location: 'Maryland Seafood Processing',
                status: 'in-progress',
                details: {
                    stage: 'Meat extraction',
                    quality: 'Premium grade',
                    batch: 'BC-24-0318'
                }
            },
            {
                id: 3,
                title: 'Quality Check',
                location: 'Quality Assurance Lab',
                status: 'pending',
                details: {
                    tests: 'Scheduled',
                    inspector: 'Dr. Chen',
                    eta: '4 hours'
                }
            },
            {
                id: 4,
                title: 'Package & Ship',
                location: 'Distribution Center',
                status: 'pending',
                details: {
                    packaging: 'Premium containers',
                    destination: 'Fine dining network'
                }
            }
        ]
    }
};

// Initialize page functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeTraceInput();
    initializeCounters();
    initializeFloatingElements();
});

// Initialize trace input functionality
function initializeTraceInput() {
    const input = document.getElementById('trace-input');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                startTrace();
            }
        });
        
        // Add typing animation
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    }
}

// Start tracing functionality
function startTrace() {
    const input = document.getElementById('trace-input');
    const code = input.value.trim().toUpperCase();
    
    if (!code) {
        showNotification('Please enter a tracking code', 'warning');
        return;
    }
    
    showLoadingAnimation();
    
    setTimeout(() => {
        if (trackingData[code]) {
            displayTrackingResults(trackingData[code]);
            showNotification('Tracking information found!', 'success');
        } else {
            showNotification('Tracking code not found. Try our demo codes!', 'error');
        }
        hideLoadingAnimation();
    }, 2000);
}

// Simulate QR code scanning
function simulateQRScan() {
    showQRScanAnimation();
    
    setTimeout(() => {
        const randomCodes = Object.keys(trackingData);
        const randomCode = randomCodes[Math.floor(Math.random() * randomCodes.length)];
        
        document.getElementById('trace-input').value = randomCode;
        displayTrackingResults(trackingData[randomCode]);
        showNotification('QR Code scanned successfully!', 'success');
        hideQRScanAnimation();
    }, 3000);
}

// Demo trace functionality
function demoTrace(code) {
    document.getElementById('trace-input').value = code;
    showLoadingAnimation();
    
    setTimeout(() => {
        displayTrackingResults(trackingData[code]);
        showNotification('Demo tracking loaded!', 'success');
        hideLoadingAnimation();
    }, 1500);
}

// Display tracking results
function displayTrackingResults(data) {
    const trackingSection = document.getElementById('tracking-section');
    if (!trackingSection) return;
    
    // Update journey steps
    const journeySteps = trackingSection.querySelectorAll('.journey-step');
    
    journeySteps.forEach((step, index) => {
        const stepData = data.steps[index];
        if (!stepData) return;
        
        // Update step status
        step.className = `journey-step ${stepData.status}`;
        
        // Update content
        const title = step.querySelector('h3');
        const location = step.querySelector('p');
        const details = step.querySelector('.step-details');
        
        if (title) title.textContent = stepData.title;
        if (location) location.textContent = stepData.location;
        
        // Update details
        if (details && stepData.details) {
            details.innerHTML = '';
            Object.entries(stepData.details).forEach(([key, value]) => {
                const detail = document.createElement('span');
                detail.className = 'detail-item';
                detail.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
                details.appendChild(detail);
            });
        }
    });
    
    // Show tracking section with animation
    trackingSection.style.display = 'block';
    trackingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Animate steps sequentially
    animateTrackingSteps();
}

// Animate tracking steps
function animateTrackingSteps() {
    const steps = document.querySelectorAll('.journey-step');
    
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.opacity = '0';
            step.style.transform = 'translateX(-50px)';
            step.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            setTimeout(() => {
                step.style.opacity = '1';
                step.style.transform = 'translateX(0)';
            }, 100);
        }, index * 200);
    });
}

// Show loading animation
function showLoadingAnimation() {
    const loadingOverlay = createLoadingOverlay();
    document.body.appendChild(loadingOverlay);
    
    setTimeout(() => {
        loadingOverlay.classList.add('show');
    }, 10);
}

// Hide loading animation
function hideLoadingAnimation() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.classList.remove('show');
        setTimeout(() => {
            loadingOverlay.remove();
        }, 300);
    }
}

// Create loading overlay
function createLoadingOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.innerHTML = `
        <div class="loading-content">
            <div class="loading-spinner">
                <div class="spinner-ring"></div>
                <div class="spinner-ring"></div>
                <div class="spinner-ring"></div>
            </div>
            <div class="loading-text">Tracking your seafood journey...</div>
            <div class="loading-steps">
                <div class="step active">Connecting to blockchain</div>
                <div class="step">Verifying authenticity</div>
                <div class="step">Retrieving journey data</div>
            </div>
        </div>
    `;
    
    // Add loading styles
    const style = document.createElement('style');
    style.textContent = `
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(15, 23, 42, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .loading-overlay.show {
            opacity: 1;
        }
        
        .loading-content {
            text-align: center;
            color: white;
        }
        
        .loading-spinner {
            position: relative;
            width: 80px;
            height: 80px;
            margin: 0 auto 2rem;
        }
        
        .spinner-ring {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 4px solid transparent;
            border-top: 4px solid #3b82f6;
            border-radius: 50%;
            animation: spin 1.5s linear infinite;
        }
        
        .spinner-ring:nth-child(2) {
            animation-delay: 0.5s;
            border-top-color: #06b6d4;
        }
        
        .spinner-ring:nth-child(3) {
            animation-delay: 1s;
            border-top-color: #10b981;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .loading-text {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            font-weight: 500;
        }
        
        .loading-steps {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .step {
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            opacity: 0.5;
            transition: all 0.5s ease;
        }
        
        .step.active {
            opacity: 1;
            background: rgba(59, 130, 246, 0.2);
            border: 1px solid rgba(59, 130, 246, 0.5);
        }
    `;
    document.head.appendChild(style);
    
    // Animate steps
    setTimeout(() => animateLoadingSteps(), 1000);
    
    return overlay;
}

// Animate loading steps
function animateLoadingSteps() {
    const steps = document.querySelectorAll('.loading-steps .step');
    let currentStep = 0;
    
    const interval = setInterval(() => {
        if (currentStep > 0) {
            steps[currentStep - 1].classList.remove('active');
        }
        
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('active');
            currentStep++;
        } else {
            clearInterval(interval);
        }
    }, 600);
}

// Show QR scan animation
function showQRScanAnimation() {
    const qrOverlay = createQROverlay();
    document.body.appendChild(qrOverlay);
    
    setTimeout(() => {
        qrOverlay.classList.add('show');
    }, 10);
}

// Hide QR scan animation
function hideQRScanAnimation() {
    const qrOverlay = document.querySelector('.qr-overlay');
    if (qrOverlay) {
        qrOverlay.classList.remove('show');
        setTimeout(() => {
            qrOverlay.remove();
        }, 300);
    }
}

// Create QR overlay
function createQROverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'qr-overlay';
    overlay.innerHTML = `
        <div class="qr-scanner">
            <div class="qr-frame">
                <div class="qr-corner tl"></div>
                <div class="qr-corner tr"></div>
                <div class="qr-corner bl"></div>
                <div class="qr-corner br"></div>
                <div class="qr-scan-line"></div>
            </div>
            <div class="qr-text">Scanning QR Code...</div>
        </div>
    `;
    
    // Add QR styles
    const style = document.createElement('style');
    style.textContent = `
        .qr-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .qr-overlay.show {
            opacity: 1;
        }
        
        .qr-scanner {
            text-align: center;
            color: white;
        }
        
        .qr-frame {
            position: relative;
            width: 250px;
            height: 250px;
            margin: 0 auto 2rem;
            border: 2px solid rgba(16, 185, 129, 0.5);
        }
        
        .qr-corner {
            position: absolute;
            width: 30px;
            height: 30px;
            border: 3px solid #10b981;
        }
        
        .qr-corner.tl {
            top: -3px;
            left: -3px;
            border-right: none;
            border-bottom: none;
        }
        
        .qr-corner.tr {
            top: -3px;
            right: -3px;
            border-left: none;
            border-bottom: none;
        }
        
        .qr-corner.bl {
            bottom: -3px;
            left: -3px;
            border-right: none;
            border-top: none;
        }
        
        .qr-corner.br {
            bottom: -3px;
            right: -3px;
            border-left: none;
            border-top: none;
        }
        
        .qr-scan-line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, transparent, #10b981, transparent);
            animation: qrScan 2s ease-in-out infinite;
        }
        
        @keyframes qrScan {
            0% { top: 0; }
            100% { top: calc(100% - 3px); }
        }
        
        .qr-text {
            font-size: 1.2rem;
            font-weight: 500;
        }
    `;
    document.head.appendChild(style);
    
    return overlay;
}

// Initialize animated counters
function initializeCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-counter'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// Animate counter
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const isDecimal = target % 1 !== 0;
    
    const updateCounter = () => {
        if (current < target) {
            current += increment;
            element.textContent = isDecimal ? current.toFixed(1) : Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = isDecimal ? target.toFixed(1) : target;
        }
    };
    
    updateCounter();
}

// Initialize floating elements
function initializeFloatingElements() {
    createFloatingElements();
    setInterval(createFloatingElements, 10000);
}

// Create floating elements
function createFloatingElements() {
    const container = document.querySelector('.hero-floating-elements');
    if (!container) return;
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const element = document.createElement('div');
            element.className = 'floating-tech-element';
            element.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #3b82f6;
                border-radius: 50%;
                box-shadow: 0 0 20px #3b82f6;
                left: ${Math.random() * 100}%;
                top: 100%;
                opacity: 0;
                animation: floatUp 8s ease-out forwards;
            `;
            
            container.appendChild(element);
            
            setTimeout(() => {
                element.remove();
            }, 8000);
        }, i * 1000);
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        }
        
        .notification.success {
            background: linear-gradient(135deg, #10b981, #059669);
        }
        
        .notification.error {
            background: linear-gradient(135deg, #ef4444, #dc2626);
        }
        
        .notification.warning {
            background: linear-gradient(135deg, #f59e0b, #d97706);
        }
        
        .notification.info {
            background: linear-gradient(135deg, #3b82f6, #2563eb);
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        @keyframes floatUp {
            0% {
                opacity: 0;
                transform: translateY(0);
            }
            10% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translateY(-100vh);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}