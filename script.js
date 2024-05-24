const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const imageGallery = document.querySelector(".image-gallery");
    //const galleryPreview = document.querySelector(".gallery-preview");
    const plusIcon = toggleButton.querySelector(".feather-plus-circle");
    const minusIcon = toggleButton.querySelector(".feather-minus-circle");

    // Hide the gallery initially
    imageGallery.style.display = "none";

    toggleButton.addEventListener("click", function() {
        if (imageGallery.style.display === "none" || imageGallery.style.display === "") {
            plusIcon.style.display = "none";
            minusIcon.style.display = "flex";

            imageGallery.style.display = "block";
            // Hide the plus circle icon
            galleryPreview.style.display = "none";
            
        } else {
            plusIcon.style.display = "flex";
            minusIcon.style.display = "none";

            imageGallery.style.display = "none";
            // Show the plus circle icon
            galleryPreview.style.display = "block";

        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton2");
    const imageGallery = document.querySelector(".image-gallery2");
    //const galleryPreview = document.querySelector(".gallery-preview");
    const plusIcon = toggleButton.querySelector(".feather-plus-circle");
    const minusIcon = toggleButton.querySelector(".feather-minus-circle");

    // Hide the gallery initially
    imageGallery.style.display = "none";

    toggleButton.addEventListener("click", function() {
        if (imageGallery.style.display === "none" || imageGallery.style.display === "") {
            plusIcon.style.display = "none";
            minusIcon.style.display = "flex";

            imageGallery.style.display = "block";
            // Hide the plus circle icon
            galleryPreview.style.display = "none";
            
        } else {
            plusIcon.style.display = "flex";
            minusIcon.style.display = "none";

            imageGallery.style.display = "none";
            // Show the plus circle icon
            galleryPreview.style.display = "block";

        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton3");
    const imageGallery = document.querySelector(".image-gallery3");
    //const galleryPreview = document.querySelector(".gallery-preview");
    const plusIcon = toggleButton.querySelector(".feather-plus-circle");
    const minusIcon = toggleButton.querySelector(".feather-minus-circle");

    // Hide the gallery initially
    imageGallery.style.display = "none";

    toggleButton.addEventListener("click", function() {
        if (imageGallery.style.display === "none" || imageGallery.style.display === "") {
            plusIcon.style.display = "none";
            minusIcon.style.display = "flex";

            imageGallery.style.display = "block";
            // Hide the plus circle icon
            galleryPreview.style.display = "none";
            
        } else {
            plusIcon.style.display = "flex";
            minusIcon.style.display = "none";

            imageGallery.style.display = "none";
            // Show the plus circle icon
            galleryPreview.style.display = "block";

        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const redirectToPageButton = document.getElementById("projectsPage");
    const redirectToPage2Button = document.getElementById("involvementsPage");
    const redirectToPage3Button = document.getElementById("hobbiesPage");

    redirectToPageButton.addEventListener("click", function() {
        // Replace "page2.html" with the URL of the page you want to redirect to
        window.location.href = "projects.html";
    });

    redirectToPage2Button.addEventListener("click", function() {
        window.location.href = "involve.html";
    });

    redirectToPage3Button.addEventListener("click", function() {
        window.location.href = "hobbies.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('space');
    const ctx = canvas.getContext('2d');
    const numLayers = 3; // Number of star layers
    const starsPerLayer = 100; // Number of stars per layer
    const starLayers = []; // Array to store star layers
    const layerSpeeds = [1, 0.5, 0.25]; // Speeds for each layer (adjust as needed)
    const layerColors = ['#ffffff', '#cccccc', '#999999']; // Colors for each layer (adjust as needed)
    const layerDepths = [0, 50, 100]; // Depths for each layer (adjust as needed)

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate star layers
    for (let layer = 0; layer < numLayers; layer++) {
        starLayers[layer] = [];
        for (let i = 0; i < starsPerLayer; i++) {
            starLayers[layer].push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3,
                color: layerColors[layer],
                depth: layerDepths[layer]
            });
        }
    }

    // Draw stars
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw star layers
        for (let layer = 0; layer < numLayers; layer++) {
            ctx.fillStyle = layerColors[layer];
            starLayers[layer].forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });
        }
    }

    // Update animation
    function update() {
        // Move star layers based on layer speeds
        for (let layer = 0; layer < numLayers; layer++) {
            starLayers[layer].forEach(star => {
                star.x -= 0.1*layerSpeeds[layer];
                // Wrap stars around canvas
                if (star.x < -star.radius) {
                    star.x = canvas.width + star.radius;
                }
            });
        }
        
        drawStars();
        requestAnimationFrame(update);
    }

    // Start animation loop
    update();
});

// script.js
// script.js
// script.js
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const icChipBackground = document.getElementById('ic-chip-background');
    const icChip = document.createElement('div');
    icChip.classList.add('ic-chip');
    icChipBackground.appendChild(icChip);

    function createPin(positionClass, topOffset) {
        const pin = document.createElement('div');
        pin.classList.add('pin', positionClass);
        pin.style.top = `${topOffset +10}px`;
        return pin;
    }

    function createTrace(positionClass, topOffset) {
        const trace = document.createElement('div');
        trace.classList.add('trace', positionClass);
        trace.style.top = `${topOffset + 83}px`; // Center the trace vertically to the pin
        trace.style.width = `${(window.outerWidth/18) -14}px`; // Extend trace halfway across the screen
        return trace;
    }

    const pinHeight = 10; // Height of each pin
    const spacing = 15; // Space between each pin
    const totalHeight = icChip.offsetHeight;
    const numPins = Math.floor(totalHeight / (pinHeight + spacing));

    for (let i = 0; i < numPins; i++) {
        const topOffset = i * (pinHeight + spacing);
        icChip.appendChild(createPin('left', topOffset));
        icChip.appendChild(createPin('right', topOffset));

        icChipBackground.appendChild(createTrace('left', topOffset));
        icChipBackground.appendChild(createTrace('right', topOffset));
        
    }
    
});





/*document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('space');
    const ctx = canvas.getContext('2d');
    const numLayers = 3;
    const starsPerLayer = 100;
    const shootingStars = [];

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate random stars for each layer
    const stars = [];
    for (let layer = 0; layer < numLayers; layer++) {
        stars[layer] = [];
        for (let i = 0; i < starsPerLayer; i++) {
            stars[layer].push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3,
                opacity: Math.random() * 0.5 + 0.5 // Random opacity between 0.5 and 1
            });
        }
    }

    // Generate shooting stars
    function generateShootingStars() {
        for (let i = 0; i < 5; i++) {
            shootingStars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: Math.random() * 5 + 1 // Random speed between 1 and 5
            });
        }
    }

    // Draw stars
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw regular stars
        for (let layer = 0; layer < numLayers; layer++) {
            ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + 0.1 * layer})`; // Layered opacity
            stars[layer].forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        // Draw shooting stars
        shootingStars.forEach((star, index) => {
            ctx.fillStyle = '#fff';
            ctx.fillRect(star.x, star.y, 2, 2); // Example shooting star shape
            // Update position
            star.x -= star.speed;
            if (star.x < 0) {
                // Reset position if off-screen
                shootingStars.splice(index, 1);
                shootingStars.push({
                    x: canvas.width,
                    y: Math.random() * canvas.height,
                    speed: Math.random() * 5 + 1
                });
            }
        });
    }

    // Update animation
    function update() {
        drawStars();
        requestAnimationFrame(update);
    }

    // Generate shooting stars initially
    generateShootingStars();

    // Start animation loop
    update();
});
*/ 
