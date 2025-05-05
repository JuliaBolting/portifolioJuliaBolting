import {
  aboutMe,
  educationData,
  servicesData,
  projectsData,
  techData,
  translations,
  homeData,
  tooltipSocialData
} from '/js/data.js';

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let currentLang = localStorage.getItem("lang") || "pt-BR";

const educationContainer = document.querySelector('.timeline-items');
const servicesContainer = document.querySelector('.services-container');
const projectsContainer = document.querySelector('.projects-box');
const techContainer = document.getElementById('tech-list');
const toggleBtn = document.getElementById("toggle-theme");
const icon = toggleBtn.querySelector("i");
const greetingElement = document.querySelector(".home-content h1");
const introductionElement = document.querySelector(".home-content h3");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      let activeLink = document.querySelector('header nav a[href*=' + id + ']');
      if (activeLink) activeLink.classList.add('active');
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

function switchLang(lang) {
  document.body.classList.remove("lang-pt", "lang-en");
  document.body.classList.add(lang === "pt-BR" ? "lang-pt" : "lang-en");
}

function renderData(lang) {
  educationContainer.innerHTML = '';
  educationData[lang].forEach(item => {
    const html = `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${DOMPurify.sanitize(item.year)}</div>
        <div class="timeline-content">
          <h3><strong>${DOMPurify.sanitize(item.title)}</strong></h3>
          <p>${DOMPurify.sanitize(item.description)}</p>
        </div>
      </div>
    `;
    educationContainer.insertAdjacentHTML('beforeend', html);
  });

  servicesContainer.innerHTML = '';
  servicesData[lang].forEach(service => {
    const html = `
      <div class="service-box">
        <div class="service-info">
          <h4>${DOMPurify.sanitize(service.title)}</h4>
          <p>${DOMPurify.sanitize(service.description)}</p>
        </div>
      </div>
    `;
    servicesContainer.insertAdjacentHTML('beforeend', html);
  });

  projectsContainer.innerHTML = '';
  projectsData[lang].forEach(project => {
    const html = `
      <div class="project-card">
        <img src="${DOMPurify.sanitize(project.imgSrc)}" alt="${DOMPurify.sanitize(project.title)}">
        <h3>${DOMPurify.sanitize(project.title)}</h3>
        <p>${DOMPurify.sanitize(project.description)}</p>
        <div class="btn">
          <a href="${DOMPurify.sanitize(project.link)}" target="_blank" rel="noopener noreferrer">Github Repository</a>
        </div>
      </div>
    `;
    projectsContainer.insertAdjacentHTML('beforeend', html);
  });

  techContainer.innerHTML = '';
  techData[lang].forEach(item => {
    const html = `
      <div class="tech-item">
        <i class="${DOMPurify.sanitize(item.iconClass)}"></i>
        <div class="tooltip">${DOMPurify.sanitize(item.tooltip)}</div>
      </div>
    `;
    techContainer.insertAdjacentHTML('beforeend', html);
  });
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    icon.classList.replace("bx-sun", "bx-moon");
  } else {
    document.body.classList.remove("light-theme");
    icon.classList.replace("bx-moon", "bx-sun");
  }
}

applySavedTheme();

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const isLight = document.body.classList.toggle("light-theme");

  if (isLight) {
    icon.classList.replace("bx-sun", "bx-moon");
    localStorage.setItem("theme", "light");
  } else {
    icon.classList.replace("bx-moon", "bx-sun");
    localStorage.setItem("theme", "dark");
  }
});

function applyTranslations(lang) {
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });

  document.querySelectorAll('[data-i18n-value]').forEach(el => {
    const key = el.getAttribute('data-i18n-value');
    if (t[key]) el.value = t[key];
  });

  const about = document.getElementById('about-me');
  if (about && typeof t.aboutMe === 'string') {
    about.textContent = t.aboutMe;
  }
}

function applyTooltips(lang) {
  document.querySelectorAll('.tooltip-text').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (tooltipSocialData[lang][key]) {
      el.textContent = tooltipSocialData[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
  renderData(currentLang);
  switchLang(currentLang);
  applyTooltips(currentLang);

  greetingElement.innerHTML = homeData[currentLang].greeting;
  introductionElement.innerHTML = homeData[currentLang].introduction;
});

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "pt-BR" ? "en" : "pt-BR";
  localStorage.setItem("lang", currentLang);
  applyTranslations(currentLang);
  renderData(currentLang);
  switchLang(currentLang);
  applyTooltips(currentLang);

  greetingElement.innerHTML = homeData[currentLang].greeting;
  introductionElement.innerHTML = homeData[currentLang].introduction;
});

document.getElementById("email-btn").addEventListener("click", () => {
  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=juliabolting.cs@gmail.com", "_blank");
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  if (form._honey.value) return;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert(currentLang === "pt-BR"
      ? "Por favor, insira um email válido."
      : "Please enter a valid email.");
    return;
  }

  if (!email || !subject || !message) {
    alert(currentLang === "pt-BR"
      ? "Por favor, preencha os campos obrigatórios: Email, Assunto e Mensagem."
      : "Please fill in the required fields: Email, Subject and Message.");
    return;
  }

  const body = `
Nome: ${name}
Email: ${email}
Telefone: ${phone}

Mensagem:
${message}
  `;

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=juliabolting.cs@gmail.com` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.open(gmailURL, "_blank");
});