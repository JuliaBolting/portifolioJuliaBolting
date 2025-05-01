import { aboutMe, educationData, servicesData, projectsData, techData } from './data.js';
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
const educationContainer = document.querySelector('.timeline-items');
const servicesContainer = document.querySelector('.services-container');
const projectsContainer = document.querySelector('.projects-box');
const techContainer = document.getElementById('tech-list');
const toggleBtn = document.getElementById("toggle-theme");
const icon = toggleBtn.querySelector("i");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      })
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
    }
  })
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

educationData.forEach(item => {
  educationContainer.innerHTML += `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">${item.year}</div>
      <div class="timeline-content">
        <h3><strong>${item.title}</strong></h3>
        <p>${item.description}</p>
      </div>
    </div>
  `;
});

servicesData.forEach(service => {
  servicesContainer.innerHTML += `
    <div class="service-box">
      <div class="service-info">
        <h4>${service.title}</h4>
        <p>${service.description}</p>
      </div>
    </div>
  `;
});

document.addEventListener('DOMContentLoaded', () => {
  const aboutMeParagraph = document.getElementById('about-me');
  aboutMeParagraph.innerHTML = aboutMe;
});

projectsData.forEach(project => {
  projectsContainer.innerHTML += `
    <div class="project-card">
      <img src="${project.imgSrc}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="btn">
        <a href="${project.link}" target="_blank">Github Repository</a>
      </div>
    </div>
  `;
});

techData.forEach(item => {
  techContainer.innerHTML += `
    <div class="tech-item">
      <i class="${item.iconClass}"></i>
      <div class="tooltip">${item.tooltip}</div>
    </div>
  `;
});

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