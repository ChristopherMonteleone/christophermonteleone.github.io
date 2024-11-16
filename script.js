document.addEventListener('DOMContentLoaded', () => {
    // Get the current page from the URL
    const fullPath = window.location.pathname;
    const currentPage = fullPath.split('/').pop() || 'index.html';
    
    // For debugging - remove these in production
    console.log('Full path:', fullPath);
    console.log('Current page:', currentPage);
    
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        console.log('Link href:', linkHref); // For debugging
        
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.style.color = '#fff';
        } else {
            link.style.color = '#aaa';
        }
    });
}); 