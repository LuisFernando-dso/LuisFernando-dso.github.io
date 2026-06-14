const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const themeToggle = document.querySelector(".theme-toggle");
const backToTop = document.querySelector(".back-to-top");
const revealElements = document.querySelectorAll(".reveal");
const skillCards = document.querySelectorAll(".skill-card");
const statValues = document.querySelectorAll(".stat-value");
const projectsGrid = document.querySelector("#projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const currentYear = document.querySelector("#currentYear");
const particleCanvas = document.querySelector("#particleCanvas");

let projects = [];
let countersStarted = false;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

currentYear.textContent = new Date().getFullYear();

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme) {
    setTheme(savedTheme);
    return;
  }

  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  setTheme(prefersLight ? "light" : "dark");
}

loadSavedTheme();

themeToggle.addEventListener("click", () => {
  const activeTheme = document.documentElement.getAttribute("data-theme");
  setTheme(activeTheme === "dark" ? "light" : "dark");
});

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  body.classList.toggle("menu-open", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    body.classList.remove("menu-open");
  });
});

function handleScrollState() {
  const isScrolled = window.scrollY > 24;
  header.classList.toggle("scrolled", isScrolled);
  backToTop.classList.toggle("visible", window.scrollY > 600);
}

window.addEventListener("scroll", handleScrollState);
handleScrollState();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");

      if (entry.target.classList.contains("skill-card")) {
        const progress = entry.target.dataset.progress;
        entry.target.querySelector(".progress-bar").style.width = `${progress}%`;
      }

      if (entry.target.classList.contains("stat-card") && !countersStarted) {
        countersStarted = true;
        animateCounters();
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((element) => revealObserver.observe(element));
skillCards.forEach((card) => revealObserver.observe(card));
document.querySelectorAll(".stat-card").forEach((card) => revealObserver.observe(card));

function animateCounters() {
  statValues.forEach((stat) => {
    const target = Number(stat.dataset.count);
    const duration = 1400;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      stat.textContent = Math.floor(eased * target);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        stat.textContent = target;
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

async function loadProjects() {
  try {
    const response = await fetch("assets/data/projects.json");
    if (!response.ok) throw new Error("Não foi possível carregar projects.json");

    projects = await response.json();
    renderProjects(projects);
  } catch (error) {
    projectsGrid.innerHTML = `
      <p class="glass-card project-body">
        Os projetos não puderam ser carregados agora. Confira o arquivo assets/data/projects.json.
      </p>
    `;
    console.error(error);
  }
}

function renderProjects(projectList) {
  if (!projectList.length) {
    projectsGrid.innerHTML = "<p>Nenhum projeto encontrado para este filtro.</p>";
    return;
  }

  projectsGrid.innerHTML = projectList
    .map(
      (project) => `
        <article class="project-card glass-card reveal visible">
          <img src="${project.image}" alt="${project.imageAlt}">
          <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
              ${project.technologies.map((technology) => `<span class="project-tag">${technology}</span>`).join("")}
            </div>
            <div class="project-links">
              <a href="${project.github}" target="_blank" rel="noopener">GitHub</a>
              <a href="${project.demo}" target="_blank" rel="noopener">Demonstração</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    const filteredProjects =
      filter === "Todos"
        ? projects
        : projects.filter((project) => project.categories.includes(filter));

    renderProjects(filteredProjects);
  });
});

loadProjects();

function initParallax() {
  const parallaxElement = document.querySelector("[data-parallax]");
  if (!parallaxElement || prefersReducedMotion) return;

  document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * 18;
    parallaxElement.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}

initParallax();

function initParticles() {
  if (!particleCanvas || prefersReducedMotion) return;

  const context = particleCanvas.getContext("2d");
  const particles = [];
  const particleCount = 70;
  let width = 0;
  let height = 0;
  let mouseX = 0;
  let mouseY = 0;

  function resizeCanvas() {
    const ratio = window.devicePixelRatio || 1;
    width = particleCanvas.offsetWidth;
    height = particleCanvas.offsetHeight;
    particleCanvas.width = width * ratio;
    particleCanvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function createParticles() {
    particles.length = 0;

    for (let index = 0; index < particleCount; index += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.7,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35
      });
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          context.strokeStyle = `rgba(57, 208, 255, ${0.13 - distance / 1000})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(particles[i].x, particles[i].y);
          context.lineTo(particles[j].x, particles[j].y);
          context.stroke();
        }
      }
    }
  }

  function animateParticles() {
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 130) {
        particle.x -= dx * 0.002;
        particle.y -= dy * 0.002;
      }

      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > height) particle.speedY *= -1;

      context.fillStyle = "rgba(140, 242, 196, 0.82)";
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    });

    drawConnections();
    requestAnimationFrame(animateParticles);
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
    createParticles();
  });

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  resizeCanvas();
  createParticles();
  animateParticles();
}

initParticles();
