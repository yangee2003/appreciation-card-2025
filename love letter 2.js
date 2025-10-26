// Simple JavaScript for the Valentine's Day card
document.addEventListener('DOMContentLoaded', function() {
    console.log('Happy Valentine\'s Day! 💕');
    
    // Add any interactive features here if needed
    const card = document.querySelector('.card');
    
    if (card) {
        // Optional: Add click sound or other effects
        card.addEventListener('click', function() {
            console.log('Card clicked! 💖');
        });
    }
});