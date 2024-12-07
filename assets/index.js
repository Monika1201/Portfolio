// Loader functionality
setTimeout(() => {
  const loader = document.getElementById('loader');
  const loadingText = document.getElementById('loadingText');
  const startButton = document.getElementById('startButton');

  loader.style.display = 'none'; 
  loadingText.classList.add('hidden'); 
  startButton.style.display = 'inline-block'; 
}, 2000);

document.getElementById('startButton').addEventListener('click', () => {
  const loadingContainer = document.getElementById('loadingContainer');
  const portfolioContent = document.getElementById('portfolioContent');

  loadingContainer.style.display = 'none'; 
  portfolioContent.style.display = 'block'; 

  // Start the background animation
  init();
  animate();
});

// Canvas for background animation
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numberOfParticles = 100;

const mouse = {
  x: null,
  y: null,
  radius: 100 
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init(); 
});

class Particle {
  constructor(x, y, size, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      this.x -= dx / 10;
      this.y -= dy / 10;
    }
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 5 + 1; 
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = (Math.random() - 0.5) * 2; 
    const speedY = (Math.random() - 0.5) * 2;
    const color = "rgba(255, 255, 255, 0.8)";
    particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  connectParticles(); 
  requestAnimationFrame(animate);
}

function connectParticles() {
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      const dx = particlesArray[a].x - particlesArray[b].x;
      const dy = particlesArray[a].y - particlesArray[b].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

// Dynamic typing effect
const dynamicText = document.getElementById('dynamicText');
const textArray = ['Frontend Developer', 'Web Designer', 'Pixel Perfectionist'];
let index = 0;
let textIndex = 0;

function type() {
  if (textIndex < textArray[index].length) {
    dynamicText.textContent += textArray[index].charAt(textIndex);
    textIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(() => {
      dynamicText.textContent = '';
      textIndex = 0;
      index = (index + 1) % textArray.length;
      type();
    }, 2000);
  }
}
setTimeout(() => {
  type();
}, 5000);
