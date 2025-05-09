document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content img');
    const closeBtn = document.querySelector('.close-modal');
    
    // Open modal when clicking on gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            modalImg.src = imgSrc;
            modal.style.display = 'block';
            // Add active class after a small delay for animation
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
            document.body.style.overflow = 'auto';
        }
    });

    // Navbar scroll effect
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}); 