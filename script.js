// Mobile-friendly card interaction
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    let isOpen = false;
    
    // Handle both click and touch events
    card.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (isOpen) {
            // Close the card
            card.classList.remove('open');
            isOpen = false;
        } else {
            // Open the card
            card.classList.add('open');
            isOpen = true;
        }
    });
    
    // Close card when clicking outside (mobile-friendly)
    document.addEventListener('click', function(e) {
        if (isOpen && !card.contains(e.target)) {
            card.classList.remove('open');
            isOpen = false;
        }
    });
    
    // Handle hover for desktop (keep existing behavior)
    card.addEventListener('mouseenter', function() {
        if (window.innerWidth > 768) { // Only on desktop
            card.classList.add('open');
            isOpen = true;
        }
    });
    
    card.addEventListener('mouseleave', function() {
        if (window.innerWidth > 768) { // Only on desktop
            card.classList.remove('open');
            isOpen = false;
        }
    });
});
