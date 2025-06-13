// Custom dropdown functionality
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-options');
    const selected = document.querySelector('.dropdown-selected');
    
    dropdown.classList.toggle('show');
    selected.classList.toggle('open');
}

function selectOption(element, text) {
    // Update selected text
    document.getElementById('selected-text').textContent = text;
    
    // Remove active class from all options
    document.querySelectorAll('.dropdown-option').forEach(option => {
        option.classList.remove('active');
    });
    
    // Add active class to selected option
    element.classList.add('active');
    
    // Close dropdown
    document.getElementById('dropdown-options').classList.remove('show');
    document.querySelector('.dropdown-selected').classList.remove('open');
    
    // Get selected value
    const selectedValue = element.getAttribute('data-value');
    console.log('Selected sort option:', selectedValue);
    
    // Handle sorting logic
    handleSortChange(selectedValue);
}

function handleSortChange(sortType) {
    switch(sortType) {
        case 'date':
            console.log('Sorting by date...');
            // Add your date sorting logic here
            break;
        case 'prize':
            console.log('Sorting by prize...');
            // Add your prize sorting logic here
            break;
        case 'format':
            console.log('Sorting by format...');
            // Add your format sorting logic here
            break;
        default:
            console.log('Default sorting...');
            // Add your default sorting logic here
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.custom-dropdown');
    const dropdownOptions = document.getElementById('dropdown-options');
    const selected = document.querySelector('.dropdown-selected');
    
    if (!dropdown.contains(event.target)) {
        dropdownOptions.classList.remove('show');
        selected.classList.remove('open');
    }
});

// Function to redirect to tournament page
function redirectToTournament() {
    // Add loading animation
    const card = document.querySelector('.tournament-card');
    card.classList.add('loading');
    
    // Simulate loading delay and redirect
    setTimeout(() => {
        // Replace 'tournament-details.html' with your actual tournament page URL
        window.location.href = 'tournament-details.html';
        
        // Alternative: Open in new tab
        // window.open('tournament-details.html', '_blank');
        
        // Alternative: Use specific tournament ID
        // const tournamentId = 'tournament-123';
        // window.location.href = `tournament-details.html?id=${tournamentId}`;
    }, 300);
}

// Add keyboard navigation support
document.addEventListener('DOMContentLoaded', function() {
    const tournamentCard = document.querySelector('.tournament-card');
    
    // Make card focusable
    tournamentCard.setAttribute('tabindex', '0');
    
    // Add keyboard event listener
    tournamentCard.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            redirectToTournament();
        }
    });
    
    // Add focus styles
    tournamentCard.addEventListener('focus', function() {
        this.style.outline = '2px solid #8B5CF6';
        this.style.outlineOffset = '2px';
    });
    
    tournamentCard.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
    
    // Keyboard navigation for dropdown
    const dropdownSelected = document.querySelector('.dropdown-selected');
    dropdownSelected.setAttribute('tabindex', '0');
    
    dropdownSelected.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
        }
        if (e.key === 'Escape') {
            document.getElementById('dropdown-options').classList.remove('show');
            this.classList.remove('open');
        }
    });
});

// Declare gtag variable if not already declared
let gtag = window.gtag || function() { /* No-op if gtag is not defined */ };

// Add click analytics (optional)
function trackCardClick() {
    // Example analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'tournament_card_click', {
            'event_category': 'engagement',
            'event_label': 'tournament_card'
        });
    }
    
    // Or send to your analytics service
    console.log('Tournament card clicked - analytics tracked');
}

// Enhanced redirect function with analytics
function redirectToTournamentWithAnalytics() {
    trackCardClick();
    redirectToTournament();
}