// Portfolio Interactivity Script
document.addEventListener("DOMContentLoaded", () => {
    console.log("Mohammad Atiur Rahman's Portfolio Initialized Successfully.");

    // Smooth scroll effect or extra interactive handlers can be added here if needed in the future.
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(197, 168, 128, 0.6)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'var(--border-color)';
        });
    });
});