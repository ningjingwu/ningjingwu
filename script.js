class PortfolioGallery {
    constructor() {
        this.selectedImage = null;
        this.modal = document.getElementById('imageModal');
        this.modalImage = document.getElementById('modalImage');
        this.modalClose = document.getElementById('modalClose');

        this.projectDetails = {
    1: {
        title: "UI/UX Design for Urban Redevelopment Agency Singapore",
        description: "Component UI and icon designs for a geospatial urban planning web application.",
        extraImages: [
            "assets/URA/URA (2).avif",
            "assets/URA/URA (3).avif",
            "assets/URA/URA (4).avif",
            "assets/URA/URA (5).avif",
            "assets/URA/URA (6).avif",
            "assets/URA/URA (7).avif",
            "assets/URA/URA (8).avif",
            "assets/URA/URA (9).avif",
        ],
    },
    2: {
        title: "Oxfam Magazine",
        description: "Editorial layout and <a href='https://www.figma.com/design/fIV67WySy05R70rzG2z4Dg/Oxfam-Shop-Website-Prototype?node-id=0-1&t=TXZNwi5Hfz4UkrFb-1' target='_blank'>website</a> design for the non-profit organisation Oxfam.",
        extraImages: [
            "assets/Oxfam/Oxfam Modal 1.avif",
            "assets/Oxfam/Oxfam Modal 2.avif",
            "assets/Oxfam/Oxfam Modal 3.avif",
            "assets/Oxfam/Oxfam Modal Website.avif"
        ],
    },

    3: {
        title: "Tembusu College Module Book",
        description: "A modern catalogue book designed for over 500 students at the National University of Singapore Tembusu College.",
        extraImages: [
            "assets/EWG/IEMs5.avif",
            "assets/EWG/IEMs6.avif",
            "assets/EWG/Seminars20.avif",
            "assets/EWG/Seminars21.avif"
        ],
    },

    4: {
        title: "Lucid State Gig Poster",
        description: "",
    },

    5: {
        title: "Divinity Magazine Launch Party Poster",
        description: "",
    },

    6: {
        title: "Academia Singapore GP Textbook",
        description: "Written, designed, and laid out a 180 page humanities guidebook for tertiary students.",
        extraImages: [
            "assets/GP Textbook/GP Modal.avif",
            "assets/GP Textbook/GP Modal 2.avif",
            "assets/GP Textbook/GP Modal 3.avif",
            "assets/GP Textbook/GP Modal 4.avif"
        ],
    },

    7: {
        title: "Synthetic Memories, a Creative Coding Project",
        description: "In “Synthetic Memories,” I explore the concept of memory and how it can be represented through abstract forms. I made use of p5.js, a JavaScript library for creative coding. Using photos taken from a trip to Japan, I used a Perlin noise algorithm to create shapes and patterns that have a fragmented and dream-like quality. <br> <br> Perlin noise is a type of noise algorithm that generates a harmonic succession of numbers that smoothly vary over time. This algorithm has been widely used in computer graphics and animation to create realistic textures and motion effects. <br> <br> The final image captures the original photo overlaid with a mesh-like distortion; as if the memories have transformed or altered over time.  You can test out the noise algorithm here and upload your own image <a href='https://editor.p5js.org/wu.ning.jing.2001/full/NlzhtAGep' target='_blank'>here</a>." 
,
        extraImages: [
            "assets/Synthetic Memories/Synthetic Memories-02.avif",
            "assets/Synthetic Memories/Synthetic Memories-03.avif",
            "assets/Synthetic Memories/Synthetic Memories Code.avif"
        ],
    },

    8: {
        title: "Diptyque Iconic Scents",
        description: "",
    },

    9: {
        title: "Personal Brand Guide",
        description: "",
        extraImages: [
            "assets/Personal Brand Guide/Final Brand Guide.avif",
            "assets/Personal Brand Guide/Final Brand Guide2.avif",
            "assets/Personal Brand Guide/Final Brand Guide3.avif",
            "assets/Personal Brand Guide/Final Brand Guide4.avif",
            "assets/Personal Brand Guide/Final Brand Guide5.avif",
            "assets/Personal Brand Guide/Final Brand Guide6.avif",
            "assets/Personal Brand Guide/Final Brand Guide7.avif",
            "assets/Personal Brand Guide/Final Brand Guide8.avif",
            "assets/Personal Brand Guide/Final Brand Guide9.avif",
            "assets/Personal Brand Guide/Final Brand Guide10.avif"
        ],
    },

    10: {
        title: "3D Logo Animation",
        description: "",
    },

    11: {
        title: "NUS High School Class of 2020 Year Book",
        description: "",
        extraImages: [
            "assets/Gradbook/Horizontal_Book_Mockup_5.avif",
            "assets/Gradbook/PSD-1.avif",
        ],
    },

    12: {
        title: "Poster for UTC2102 Presentation",
        description: "",
        extraImages: [
            "assets/Tech Talk Thumbnail.avif",
        ],
    },


    // Add more as needed...
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
    const card = document.querySelector(`.project-card[data-image-id="${imageId}"]`);
    if (!card) return;

    const mediaContainer = document.getElementById('modalMediaContainer');
    const modalTitle = document.getElementById('modalTitle');
    const modalBodyContent = document.getElementById('modalBodyContent');
    const modalBodyImage = document.getElementById('modalBodyImage');


    document.getElementById('modalTitle').className = 'modal-title';
    document.getElementById('modalBodyContent').className = 'modal-description';

    mediaContainer.innerHTML = '';
    modalTitle.textContent = '';
    modalBodyContent.textContent = '';
    modalBodyImage.innerHTML='';

    const imgElement = card.querySelector('img');
    const videoElement = card.querySelector('video');

    if (imgElement) {
        const imgClone = imgElement.cloneNode(true);
        imgClone.classList.add('modal-image');
        mediaContainer.appendChild(imgClone);
    } else if (videoElement) {
        const videoClone = document.createElement('video');
        const source = videoElement.querySelector('source');

        if (source) {
            const newSource = document.createElement('source');
            newSource.src = source.src;
            newSource.type = source.type;
            videoClone.appendChild(newSource);
        }

        videoClone.controls = true;
        videoClone.autoplay = true;
        videoClone.loop = true;
        videoClone.muted = false;
        videoClone.classList.add('modal-video');
        mediaContainer.appendChild(videoClone);
    }

    // 🔽 Add extended content
    const details = this.projectDetails[imageId];
    if (details) {
        modalTitle.textContent = details.title;

        const descPara = document.createElement('p');
        descPara.innerHTML = details.description;
        descPara.classList.add('modal-text');
        modalBodyContent.appendChild(descPara);

        // Add extra paragraphs
        if (details.extraParagraphs) {
            details.extraParagraphs.forEach(text => {
                const para = document.createElement('p');
                para.textContent = text;
                para.classList.add('modal-text');
                modalBodyContent.appendChild(para);
            });
        }

        // Add extra images
        if (details.extraImages) {
            details.extraImages.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = "Additional Project Image";
                img.classList.add('modal-placeholder'); // Or your own class
                modalBodyImage.appendChild(img);
            });
        }
    }

    

    this.selectedImage = imageId;
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const scrollContainer = document.getElementById('modalScrollContainer');
    if (scrollContainer) scrollContainer.scrollTop = 0;

    const modalContent = this.modal.querySelector('.modal-content');
    modalContent.style.animation = 'none';
    modalContent.offsetHeight;
    modalContent.style.animation = 'modalFadeZoom 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards';
}




    closeModal() {
    this.selectedImage = null;

    // Remove modal active class
    this.modal.classList.remove('active');

    // Clear modal content (optional cleanup)
    const mediaContainer = document.getElementById('modalMediaContainer');
    const modalTitle = document.getElementById('modalTitle');
    const modalBodyContent = document.getElementById('modalBodyContent');
    const modalBodyImage = document.getElementById('modalBodyImage');

    if (mediaContainer) mediaContainer.innerHTML = '';
    if (modalTitle) modalTitle.textContent = '';
    if (modalBodyContent) modalBodyContent.textContent = '';
    if (modalBodyImage) modalBodyImage.innerHTML = '';

    // ✅ Restore page scroll
    document.body.style.overflow = '';
    }
}

// Initialize the portfolio gallery when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioGallery();
}

);


// ===== Simple Photo Gallery Modal =====
(function () {
  const galleryModal = document.getElementById('galleryModal');
  const galleryClose = document.getElementById('galleryClose');
  const galleryGrid  = document.getElementById('galleryGrid');

  // Brand-new images: put your actual files here (use forward slashes!)
  const galleryImages = [
    'assets/Gallery/DSCF1163.jpg',
    'assets/Gallery/DSCF1629.jpg',
    'assets/Gallery/DSCF4130.jpg',
    'assets/Gallery/DSCF4469.jpg',
    'assets/Gallery/f0345088.jpg',
    'assets/Gallery/f2769472.jpg',
    'assets/Gallery/P1010102.jpg',
    'assets/Gallery/P1010132.jpg',
    'assets/Gallery/P1010138.jpg',
    'assets/Gallery/P1010174.jpg',
    'assets/Gallery/P1010214.jpg',
    'assets/Gallery/P1010288.jpg',
    'assets/Gallery/P1010334.jpg',
    'assets/Gallery/P1010349.jpg',
    'assets/Gallery/P1010369.jpg',
    'assets/Gallery/P1010454.jpg',
    'assets/Gallery/P1010630.jpg',
    'assets/Gallery/P1010749.jpg',
    'assets/Gallery/P1010834.jpg',
    'assets/Gallery/P1010867.jpg',
    'assets/Gallery/P1010926.jpg',
    'assets/Gallery/P1011023.jpg',
    'assets/Gallery/P1011050.jpg',
    'assets/Gallery/P1011067.jpg',
    'assets/Gallery/P1011396.jpg',
    'assets/Gallery/P1011488.jpg',
    'assets/Gallery/P1011556.jpg',
    'assets/Gallery/P1011617.jpg',
    'assets/Gallery/P1011663.jpg',
    'assets/Gallery/P1011805.jpg',
    'assets/Gallery/P1011866.jpg',
    'assets/Gallery/P1011872.jpg',
    'assets/Gallery/P1011907.jpg',
    'assets/Gallery/P1011982.jpg',
    'assets/Gallery/P1011983.jpg',
    'assets/Gallery/P1012011.jpg',
    'assets/Gallery/P1012043.jpg',
    'assets/Gallery/P1012070.jpg',
    'assets/Gallery/P1012085.jpg',
    'assets/Gallery/P1012093.jpg',
    'assets/Gallery/P1012473.jpg',
    'assets/Gallery/P1013061.jpg',
    'assets/Gallery/P1013076.jpg',
    'assets/Gallery/P1014389.jpg',
    'assets/Gallery/P1050869.jpg',
    'assets/Gallery/P1010434.jpg',
    'assets/Gallery/P1013226.jpg',
    'assets/Gallery/P1040124.jpg'
  ];

function shuffle(arr) {
  // Fisher–Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function populateGallery() {
  galleryGrid.innerHTML = '';

  // Randomize the order each open to avoid a repeated pattern
  const randomized = shuffle([...galleryImages]);

  randomized.forEach((src, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = src;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.alt = `Gallery image ${i + 1}`;

    item.appendChild(img);
    galleryGrid.appendChild(item);
  });
}


  function openGallery(e) {
    e?.preventDefault();
    populateGallery();
    galleryModal.classList.add('active');
    galleryModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.getElementById('galleryScrollContainer')?.focus();
  }

  function closeGallery() {
    galleryModal.classList.remove('active');
    galleryModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    galleryGrid.innerHTML = '';
  }

  // Open buttons (works for all footers + optional sidebar link)
  document.querySelectorAll('.contact-link-js-open-gallery').forEach(el => {
    el.addEventListener('click', openGallery);
  });

  document.querySelectorAll('.contact-link-js-open-gallery-mobile').forEach(el => {
    el.addEventListener('click', openGallery);
  });

  // Close controls
  galleryClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeGallery();
  });

  galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) closeGallery();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && galleryModal.classList.contains('active')) {
      closeGallery();
    }
  });
})();
