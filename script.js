class PortfolioGallery {
    constructor() {
        this.selectedImage = null;
        this.modal = document.getElementById('imageModal');
        this.modalImage = document.getElementById('modalImage');
        this.modalClose = document.getElementById('modalClose');

        this.images = {
            1: {
                src: "https://images.pexels.com/photos/6484480/pexels-photo-6484480.jpeg",
                title: "Synthetic Memories"
            },
            2: {
                src: "https://images.pexels.com/photos/17485609/pexels-photo-17485609.png",
                title: "Urban Planning Interface"
            },
            3: {
                src: "https://images.pexels.com/photos/14046247/pexels-photo-14046247.jpeg",
                title: "Personal Brand Style Guide"
            },
            4: {
                src: "https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg",
                title: "Publication Design"
            },
            5: {
                src: "https://images.pexels.com/photos/32817201/pexels-photo-32817201.jpeg",
                title: "Architectural Studies"
            },
            6: {
                src: "https://images.pexels.com/photos/7661410/pexels-photo-7661410.jpeg",
                title: "Typography Exploration"
            },
            7: {
                src: "https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg",
                title: "Brand Identity"
            },
            8: {
                src: "https://images.pexels.com/photos/8534173/pexels-photo-8534173.jpeg",
                title: "Digital Interface"
            },
            9: {
                src: "https://images.pexels.com/photos/32862507/pexels-photo-32862507.jpeg",
                title: "Creative Process Documentation"
            },
            10: {
                src: "https://images.pexels.com/photos/7333593/pexels-photo-7333593.jpeg",
                title: "Editorial Design Collection"
            },
            11: {
                src: "https://images.pexels.com/photos/7552373/pexels-photo-7552373.jpeg",
                title: "Color Theory Exploration"
            },
            12: {
                src: "https://images.pexels.com/photos/6615239/pexels-photo-6615239.jpeg",
                title: "Architectural Studies"
            },
            13: {
                src: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg",
                title: "Package Design Series"
            },
            14: {
                src: "https://images.pexels.com/photos/8108726/pexels-photo-8108726.jpeg",
                title: "Digital Interface Design"
            },
            15: {
                src: "https://images.pexels.com/photos/32825248/pexels-photo-32825248.jpeg",
                title: "Photography Collection"
            },
            16: {
                src: "https://images.pexels.com/photos/32820932/pexels-photo-32820932.jpeg",
                title: "Textile Pattern Design"
            },
            17: {
                src: "https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg",
                title: "Brand Identity System"
            },
            18: {
                src: "https://images.pexels.com/photos/32857787/pexels-photo-32857787.jpeg",
                title: "Illustration Series"
            },
            19: {
                src: "https://images.pexels.com/photos/9665189/pexels-photo-9665189.jpeg",
                title: "Motion Graphics"
            },
            20: {
                src: "https://images.pexels.com/photos/3309949/pexels-photo-3309949.jpeg",
                title: "Book Cover Design"
            },
            21: {
                src: "https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg",
                title: "Poster Collection"
            },
            22: {
                src: "https://images.pexels.com/photos/32798811/pexels-photo-32798811.jpeg",
                title: "Magazine Layout"
            },
            23: {
                src: "https://images.pexels.com/photos/34140/pexels-photo.jpg",
                title: "Web Design Project"
            },
            24: {
                src: "https://images.pexels.com/photos/32786035/pexels-photo-32786035.jpeg",
                title: "Contemporary Art Installation"
            },
            25: {
                src: "https://images.pexels.com/photos/18069494/pexels-photo-18069494.png",
                title: "Sculptural Forms"
            },
            26: {
                src: "https://images.pexels.com/photos/32786895/pexels-photo-32786895.jpeg",
                title: "Exhibition Design"
            }
        };

        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        // Add click event listeners to all project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const imageId = card.getAttribute('data-image-id');
                this.openModal(imageId);
            });
        });

        // Modal close events
        this.modalClose.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeModal();
        });

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.selectedImage) {
                this.closeModal();
            }
        });
    }

openModal(imageId) {
    const image = this.images[imageId];
    if (image) {
        this.selectedImage = image;
        this.modalImage.src = image.src;
        this.modalImage.alt = image.title;
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        const scrollContainer = document.getElementById('modalScrollContainer');
        if (scrollContainer) scrollContainer.scrollTop = 0;

        const modalContent = this.modal.querySelector('.modal-content');
        modalContent.style.animation = 'none';
        modalContent.offsetHeight; // force reflow
        modalContent.style.animation = 'modalFadeZoom 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards';
        
    }
}



    closeModal() {
        this.selectedImage = null;
        this.modal.classList.remove('active');
        this.modalImage.src = '';
        this.modalImage.alt = '';
        document.body.style.overflow = 'auto';
    }
}

// Initialize the portfolio gallery when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioGallery();
}

);
