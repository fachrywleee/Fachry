particlesJS("particles-js", {
  "particles": {
    "number": { 
      "value": 60, 
      "density": { "enable": true, "value_area": 800 } 
    },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { 
      "value": 0.4, 
      "random": true 
    },
    "size": { 
      "value": 3, 
      "random": true 
    },
    "line_linked": { 
      "enable": true, 
      "distance": 120, 
      "color": "#ffffff", 
      "opacity": 0.1, 
      "width": 1 
    },
    "move": { 
      "enable": true, 
      "speed": 1, 
      "direction": "none", 
      "random": true, 
      "straight": false, 
      "out_mode": "out" 
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { 
      "onhover": { "enable": true, "mode": "grab" }, 
      "onclick": { "enable": false } 
    }
  },
  "retina_detect": true
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            
            const icon = menuToggle.querySelector("i");
            if (navMenu.classList.contains("active")) {
                icon.className = "fas fa-times";
            } else {
                icon.className = "fas fa-bars";
            }
        });
    }
});