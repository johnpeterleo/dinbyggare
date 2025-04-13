//Functions to send user to another page
function goHome() {
    window.location.href = "index.html";
}
function goContact() {
    window.location.href = "contact.html";
}
function goAboutUs() {
    window.location.href = "about_us.html";
}







//Functions for slideshow
// Slideshow functionality
document.addEventListener('DOMContentLoaded', function() {
  // Sample image data - replace with your actual images
  const imageData = {
      bathroom: [
          { src: 'byggbilder/badrumNy1.png', title: '' },
          { src: 'byggbilder/badrumNy2.png', title: '' },
          { src: 'byggbilder/badrumNy3.png', title: '' },
          { src: 'byggbilder/badrumNy4.png', title: '' },
          { src: 'byggbilder/badrumNy5.png', title: '' },
          { src: 'byggbilder/badrumNy6.png', title: '' },
          { src: 'byggbilder/badrumNy7.png', title: '' },
          { src: 'byggbilder/badrumNy8.png', title: '' },
          { src: 'byggbilder/badrumNy9.png', title: '' },
          { src: 'byggbilder/badrumNy10.png', title: '' },
          { src: 'byggbilder/badrumNy11.png', title: '' },
          { src: 'byggbilder/badrumNy12.png', title: '' },
          { src: 'byggbilder/badrumNy13.png', title: '' },
          { src: 'byggbilder/badrum1.jpg', title: '' },
          { src: 'byggbilder/badrum2.jpg', title: ''  },
          { src: 'byggbilder/badrum3.JPEG', title: ''  },
          { src: 'byggbilder/badrum4.JPEG', title: ''  },
          { src: 'byggbilder/badrum5.JPEG', title: ''  },
          { src: 'byggbilder/badrum6.JPEG', title: ''  },
          { src: 'byggbilder/badrum7.JPEG', title: ''  },
          { src: 'byggbilder/badrum8.JPEG', title: ''  },
          { src: 'byggbilder/badrum9.JPEG', title: ''  }
      ],
      kitchen: [
          { src: 'byggbilder/kök1.jpg', title: ''  },
          { src: 'byggbilder/kök2.jpg', title: ''  },
          { src: 'byggbilder/kök3.JPEG', title: ''  },
          { src: 'byggbilder/kökNy1.png', title: ''  }
      ],
      interior: [
          { src: 'byggbilder/inredning1.jpg', title: ''  },
          { src: 'byggbilder/inredning2.jpg', title: ''  },
          { src: 'byggbilder/inredning3.jpg', title: ''  },
          { src: 'byggbilder/inredning4.JPEG', title: ''  },
          { src: 'byggbilder/inredningNy1.png', title: ''  },
          { src: 'byggbilder/inredningNy2.png', title: ''  },
          { src: 'byggbilder/dörr1.jpg', title: ''  },
          { src: 'byggbilder/dörr2.jpg', title: ''  }
      ],
      balcony: [
          { src: 'byggbilder/altan1.jpg', title: ''  },
          { src: 'byggbilder/altan2.JPEG', title: ''  },
          { src: 'byggbilder/altan3.JPEG', title: ''  }
      ],
      carpentry: [
          { src: 'byggbilder/snickeri1.jpg', title: ''  },
          { src: 'byggbilder/snickeri2.jpg', title: ''  },
          { src: 'byggbilder/snickeri3.JPEG', title: ''  },
          { src: 'byggbilder/snickeri4.JPEG', title: ''  }
      ],
      renovation: [
          { src: 'byggbilder/totalrenovering1.jpg', title: ''  },
          { src: 'byggbilder/totalrenovering2.jpg', title: ''  },
          { src: 'byggbilder/totalrenovering3.jpg', title: ''  },
          { src: 'byggbilder/totalrenovering4.JPEG', title: ''  }
      ],
      construction: [
          { src: 'byggbilder/nybyggnation1.jpg', title: ''  },
          { src: 'byggbilder/nybyggnation2.JPEG', title: ''  }
      ],
      rebuilding: [
        { src: 'byggbilder/ombyggnaderNy2.png', title: ''  },
        { src: 'byggbilder/ombyggnaderNy3.png', title: ''  },
          { src: 'byggbilder/ombyggnaderNy1.png', title: ''  },
          { src: 'byggbilder/ombyggnader1.jpg', title: ''  }
      ],
      flooring: [
          { src: 'byggbilder/golv1.jpg', title: ''  },
          { src: 'byggbilder/golv2.jpg', title: ''  },
          { src: 'byggbilder/golv3.JPEG', title: ''  },
          { src: 'byggbilder/golv4.JPEG', title: ''  }
      ],
      window: [
          { src: 'byggbilder/fönsterbyte1.jpg', title: ''  },
          { src: 'byggbilder/dörr3.JPEG', title: ''  },
          { src: 'byggbilder/dörr4.JPEG', title: ''  },
          { src: 'byggbilder/dörr5.JPEG', title: ''  },
          { src: 'byggbilder/ytterdörr1.png', title: ''  },
          { src: 'byggbilder/ytterdörr2.png', title: ''  },
          { src: 'byggbilder/fönsterNy1.png', title: ''  }
          
      ]
  };
  
  // DOM Elements
  const track = document.querySelector('.slideshow-track');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const indicators = document.querySelector('.slide-indicators');
  const categoryBtns = document.querySelectorAll('.category-btn');
  
  let currentCategory = 'bathroom';
  let currentIndex = 0;
  let slides = [];
  let slideInterval;
  
  // Initialize slideshow
  function initSlideshow() {
      loadCategory(currentCategory);
      startSlideShow();
  }
  
  // Load images for a category
  function loadCategory(category) {
    track.innerHTML = '';
    indicators.innerHTML = '';
    
    const images = imageData[category] || [];
    slides = images;
    
    images.forEach((image, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'slide';
        if (index === 0) slide.classList.add('active');
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.loading = "lazy"; // Add lazy loading
        
        // Add error handling for images
        img.onerror = function() {
            this.style.display = 'none';
            const errorPlaceholder = document.createElement('div');
            errorPlaceholder.className = 'image-error';
            errorPlaceholder.innerHTML = `
                <svg viewBox="0 0 24 24" width="48" height="48">
                    <path fill="#d10000" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M13,17H11V7H13V17M13,13H11V11H13V13Z"/>
                </svg>
                <p>Image not available</p>
            `;
            slide.appendChild(errorPlaceholder);
        };
        
        const caption = document.createElement('div');
        caption.className = 'slide-caption';
        caption.innerHTML = `<h3 class="slide-title">${image.title}</h3>`;
        
        slide.appendChild(img);
        slide.appendChild(caption);
        track.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
    });
    
    currentIndex = 0;
    updateSlidePosition();
}
  
  // Start automatic slideshow
  function startSlideShow() {
      clearInterval(slideInterval);
      slideInterval = setInterval(() => {
          nextSlide();
      }, 5000);
  }
  
  // Go to specific slide
  function goToSlide(index) {
      currentIndex = index;
      updateSlidePosition();
      startSlideShow();
  }
  
  // Next slide
  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlidePosition();
  }
  
  // Previous slide
  function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
  }
  
  // Update slide position and indicators
  function updateSlidePosition() {
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.indicator');
      
      slides.forEach((slide, index) => {
          slide.classList.remove('active');
          if (index === currentIndex) {
              slide.classList.add('active');
          }
      });
      
      dots.forEach((dot, index) => {
          dot.classList.remove('active');
          if (index === currentIndex) {
              dot.classList.add('active');
          }
      });
      
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  // Event listeners
  prevBtn.addEventListener('click', () => {
      prevSlide();
      startSlideShow();
  });
  
  nextBtn.addEventListener('click', () => {
      nextSlide();
      startSlideShow();
  });
  
  categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          const category = btn.dataset.category;
          currentCategory = category;
          
          categoryBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          loadCategory(category);
      });
  });
  
  // Initialize
  initSlideshow();
});


//Automatic slideshow for the reviews
let slideIndex = 0;
let slideInterval;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
  showSlides(slideIndex);
  startSlideShow();
});

// Start automatic slideshow
function startSlideShow() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000); // Change slide every 5 seconds
}

// Pause on hover (optional)
document.querySelector('.auto-slideshow-container').addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

document.querySelector('.auto-slideshow-container').addEventListener('mouseleave', () => {
  startSlideShow();
});

// Next/previous controls
function plusSlides(n) {
  clearInterval(slideInterval); // Reset timer when manually changing slides
  showSlides(slideIndex += n);
  startSlideShow(); // Restart timer
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(slideInterval); // Reset timer when clicking dots
  showSlides(slideIndex = n - 1);
  startSlideShow(); // Restart timer
}

function showSlides(n) {
  // Handle wrap-around
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  
  // Hide all slides first
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].className = slides[i].className.replace(" active", "");
    slides[i].className = slides[i].className.replace(" prev", "");
    slides[i].className = slides[i].className.replace(" next", "");
  }
  
  // Update dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show current slide
  slides[slideIndex].style.display = "block";
  slides[slideIndex].className += " active";
  
  // Set previous slide (for animation)
  let prevIndex = slideIndex - 1;
  if (prevIndex < 0) prevIndex = slides.length - 1;
  slides[prevIndex].style.display = "block";
  slides[prevIndex].className += " prev";
  
  // Set next slide (for animation)
  let nextIndex = slideIndex + 1;
  if (nextIndex >= slides.length) nextIndex = 0;
  slides[nextIndex].style.display = "block";
  slides[nextIndex].className += " next";
  
  // Update active dot
  dots[slideIndex].className += " active";
}








//hamburger menu 
function toggleMenu() {
    var menu = document.getElementById("menu");
    var hamburger = document.querySelector('.hamburger-icon');
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
        hamburger.innerHTML = "&#9776;"; // Hamburger icon
    } else {
        menu.style.display = "block";
        hamburger.innerHTML = "✕"; // Close icon
    }
}




