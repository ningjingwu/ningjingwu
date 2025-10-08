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
            "assets/URA/URA (2).PNG",
            "assets/URA/URA (3).PNG",
            "assets/URA/URA (4).PNG",
            "assets/URA/URA (5).PNG",
            "assets/URA/URA (6).PNG",
            "assets/URA/URA (7).PNG",
            "assets/URA/URA (8).PNG",
            "assets/URA/URA (9).PNG",
        ],
    },
    2: {
        title: "Oxfam Magazine",
        description: "Editorial layout and <a href='https://www.figma.com/design/fIV67WySy05R70rzG2z4Dg/Oxfam-Shop-Website-Prototype?node-id=0-1&t=TXZNwi5Hfz4UkrFb-1' target='_blank'>website</a> design for the non-profit organisation Oxfam.",
        extraImages: [
            "assets/Oxfam/Oxfam Modal 1.png",
            "assets/Oxfam/Oxfam Modal 2.png",
            "assets/Oxfam/Oxfam Modal 3.png",
            "assets/Oxfam/Oxfam Modal Website.PNG"
        ],
    },

    3: {
        title: "Tembusu College Module Book",
        description: "A modern catalogue book designed for over 500 students at the National University of Singapore Tembusu College.",
        extraImages: [
            "assets/EWG/IEMs5.png",
            "assets/EWG/IEMs6.png",
            "assets/EWG/Seminars20.png",
            "assets/EWG/Seminars21.png"
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
            "assets/GP Textbook/GP Modal.png",
            "assets/GP Textbook/GP Modal 2.png",
            "assets/GP Textbook/GP Modal 3.png",
            "assets/GP Textbook/GP Modal 4.png"
        ],
    },

    7: {
        title: "Synthetic Memories, a Creative Coding Project",
        description: "In “Synthetic Memories,” I explore the concept of memory and how it can be represented through abstract forms. I made use of p5.js, a JavaScript library for creative coding. Using photos taken from a trip to Japan, I used a Perlin noise algorithm to create shapes and patterns that have a fragmented and dream-like quality. <br> <br> Perlin noise is a type of noise algorithm that generates a harmonic succession of numbers that smoothly vary over time. This algorithm has been widely used in computer graphics and animation to create realistic textures and motion effects. <br> <br> The final image captures the original photo overlaid with a mesh-like distortion; as if the memories have transformed or altered over time.  You can test out the noise algorithm here and upload your own image <a href='https://editor.p5js.org/wu.ning.jing.2001/full/NlzhtAGep' target='_blank'>here</a>." 
,
        extraImages: [
            "assets/Synthetic Memories/Synthetic Memories-02.png",
            "assets/Synthetic Memories/Synthetic Memories-03.png",
            "assets/Synthetic Memories/Synthetic Memories Code.png"
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
            "assets/Personal Brand Guide/Final Brand Guide.png",
            "assets/Personal Brand Guide/Final Brand Guide2.png",
            "assets/Personal Brand Guide/Final Brand Guide3.png",
            "assets/Personal Brand Guide/Final Brand Guide4.png",
            "assets/Personal Brand Guide/Final Brand Guide5.png",
            "assets/Personal Brand Guide/Final Brand Guide6.png",
            "assets/Personal Brand Guide/Final Brand Guide7.png",
            "assets/Personal Brand Guide/Final Brand Guide8.png",
            "assets/Personal Brand Guide/Final Brand Guide9.png",
            "assets/Personal Brand Guide/Final Brand Guide10.png"
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
            "assets/Gradbook/Horizontal_Book_Mockup_5.png",
            "assets/Gradbook/PSD-1.png",
        ],
    },

    12: {
        title: "Poster for UTC2102 Presentation",
        description: "",
        extraImages: [
            "assets/Tech Talk Thumbnail.png",
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
  const scroller = document.getElementById('modalScrollContainer');
  const modalBodyImage = document.getElementById('modalBodyImage');

  details.extraImages.forEach(src => {
    const img = document.createElement('img');
    img.alt = "Additional Project Image";
    img.className = 'modal-placeholder img-blur';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.dataset.hi = src.replace(/\\/g, '/'); // keep your files; code handles swap
    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5"><rect width="100%" height="100%" fill="%23f2f2f2"/></svg>';
    modalBodyImage.appendChild(img);
  });

  const ioModal = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const img = e.target;
      const hi = img.dataset.hi;
      const pre = new Image();
      pre.decoding = 'async';
      pre.onload = () => {
        img.src = hi;
        img.classList.add('img-sharp');
        img.classList.remove('img-blur');
        obs.unobserve(img);
      };
      pre.src = hi;
    });
  }, { root: scroller, rootMargin: '200px 0px' });

  modalBodyImage.querySelectorAll('img[data-hi]').forEach(im => ioModal.observe(im));
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

// === Progressive thumbnails with local cache (no file changes) ===
// Works for all <img class="project-image"> on the page.
// First visit: shows lightweight skeleton/blur, loads hi-res, then swaps.
// After that, it shows a REAL tiny thumbnail instantly from IndexedDB, then swaps to hi-res.

(function () {
  const TINY_SVG = 'data:image/svg+xml;utf8,\
<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5">\
<rect width="100%" height="100%" fill="%23f2f2f2"/></svg>';

  // --- IndexedDB tiny cache ---
  function openThumbDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('thumbdb_v1', 1);
      req.onupgradeneeded = e => e.target.result.createObjectStore('t');
      req.onsuccess = e => resolve(e.target.result);
      req.onerror = () => reject(req.error);
    });
  }
  function idbGet(db, key) {
    return new Promise((res, rej) => {
      const tx = db.transaction('t', 'readonly');
      const st = tx.objectStore('t');
      const rq = st.get(key);
      rq.onsuccess = () => res(rq.result || null);
      rq.onerror = () => rej(rq.error);
    });
  }
  function idbSet(db, key, val) {
    return new Promise((res, rej) => {
      const tx = db.transaction('t', 'readwrite');
      tx.objectStore('t').put(val, key);
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
  }

  async function toDataURLFromCanvas(canvas, type = 'image/webp', quality = 0.6) {
    if (canvas.convertToBlob) {
      const blob = await canvas.convertToBlob({ type, quality });
      return new Promise(r => {
        const fr = new FileReader();
        fr.onloadend = () => r(fr.result);
        fr.readAsDataURL(blob);
      });
    }
    return canvas.toDataURL(type, quality);
  }

  async function makeTinyFromImageBitmap(bmp, max = 24) {
    const scale = Math.min(max / bmp.width, max / bmp.height);
    const tw = Math.max(1, Math.round(bmp.width * scale));
    const th = Math.max(1, Math.round(bmp.height * scale));
    const canvas = (typeof OffscreenCanvas !== 'undefined')
      ? new OffscreenCanvas(tw, th)
      : Object.assign(document.createElement('canvas'), { width: tw, height: th });
    if (!(canvas instanceof OffscreenCanvas)) { canvas.width = tw; canvas.height = th; }
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bmp, 0, 0, tw, th);
    return toDataURLFromCanvas(canvas);
  }

  async function generateAndCacheTiny(db, hiResURL, imgElForDecode) {
    try {
      // Use what we just loaded (fastest path)
      const bmp = await createImageBitmap(imgElForDecode);
      const tiny = await makeTinyFromImageBitmap(bmp);
      await idbSet(db, hiResURL, tiny);
    } catch { /* ignore */ }
  }

  function loadHiRes(img, hiURL, onReady) {
    const loader = new Image();
    loader.decoding = 'async';
    loader.referrerPolicy = 'no-referrer'; // safe default
    loader.onload = () => onReady(loader);
    loader.onerror = () => onReady(null);
    loader.src = hiURL;
  }

  document.addEventListener('DOMContentLoaded', async () => {
    const db = await openThumbDB().catch(() => null);

    // Prepare every thumbnail on the page
    const imgs = Array.from(document.querySelectorAll('img.project-image'));
    // Give the first image higher priority, rest lazy
    imgs.forEach((img, i) => {
      img.decoding = 'async';
      img.loading = i < 1 ? 'eager' : 'lazy';
      img.setAttribute('fetchpriority', i < 1 ? 'high' : 'low');

      const hi = img.getAttribute('src');
      img.dataset.hi = hi;
    });

    // Assign immediate tiny preview (cached or skeleton)
    for (const img of imgs) {
      const hi = img.dataset.hi;
      let tiny = null;
      if (db) tiny = await idbGet(db, hi).catch(() => null);

      if (tiny) {
        img.src = tiny;      // real tiny preview from previous visit
      } else {
        img.src = TINY_SVG;  // very cheap skeleton on first visit
      }
      img.classList.add('img-blur');
    }

    // Swap to hi-res when near viewport
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const img = e.target;
        const hi = img.dataset.hi;
        loadHiRes(img, hi, async (loaded) => {
          if (loaded) {
            // Swap to hi-res
            img.src = hi;
            img.classList.add('img-sharp');
            img.classList.remove('img-blur');
            // Build + cache tiny for next time (no file changes)
            if (db) generateAndCacheTiny(db, hi, loaded);
          } else {
            // Fallback: just set the original if load failed to prefetch
            img.src = hi;
            img.classList.add('img-sharp');
            img.classList.remove('img-blur');
          }
        });
        obs.unobserve(img);
      });
    }, { rootMargin: '300px 0px' });

    imgs.forEach(img => io.observe(img));
  });
})();

