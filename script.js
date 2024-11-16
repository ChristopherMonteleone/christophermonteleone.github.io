document.addEventListener('DOMContentLoaded', () => {
    // Get the current page from the URL
    const fullPath = window.location.pathname;
    const currentPage = fullPath.split('/').pop() || 'index.html';
    
    // For debugging
    console.log('Current page:', currentPage);
    
    // Update navigation highlighting
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Check if this link matches the current page
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (fullPath.includes(linkHref))) {
            link.style.color = '#fff';
        } else {
            link.style.color = '#aaa';
        }
    });
}); 