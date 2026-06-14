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
      "onclick": { "enable": true, "mode": "push"} 
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

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    
    const heroSection = document.querySelector(".hero");

    const backgrounds = {
        orange: "https://images.unsplash.com/photo-1746471926328-979c066a50b6?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cyan: "https://images.unsplash.com/photo-1677330888529-3b859572df7a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        purple: "https://images.unsplash.com/photo-1649935465689-2b5b383ee424?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    };

    const updateBackgroundImage = (imageUrl) => {
        if (heroSection) {
            heroSection.style.backgroundImage = `linear-gradient(to bottom, rgba(11, 21, 25, 0.5) 0%, rgba(11, 21, 25, 0.7) 60%, rgba(11, 21, 25, 0.95) 100%), url('${imageUrl}')`;
        }
    };

    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === "cyan-theme") updateBackgroundImage(backgrounds.cyan);
        if (savedTheme === "purple-theme") updateBackgroundImage(backgrounds.purple);
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            if (!body.classList.contains("cyan-theme") && !body.classList.contains("purple-theme")) {
                body.classList.add("cyan-theme");
                updateBackgroundImage(backgrounds.cyan);
                localStorage.setItem("portfolio-theme", "cyan-theme");
                
            } else if (body.classList.contains("cyan-theme")) {
                body.classList.remove("cyan-theme");
                body.classList.add("purple-theme");
                updateBackgroundImage(backgrounds.purple);
                localStorage.setItem("portfolio-theme", "purple-theme");
                
            } else {
                body.classList.remove("purple-theme");
                updateBackgroundImage(backgrounds.orange);
                localStorage.removeItem("portfolio-theme");
            }
            
            themeToggle.style.transform = "scale(1.2) rotate(15deg)";
            setTimeout(() => {
                themeToggle.style.transform = "scale(1) rotate(0deg)";
            }, 200);
        });

        themeToggle.addEventListener("mouseenter", () => {
            themeToggle.style.color = "var(--accent-color)";
        });
        themeToggle.addEventListener("mouseleave", () => {
            themeToggle.style.color = "#a0aec0";
        });
    }
});