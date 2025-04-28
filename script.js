import { aboutMe, educationData, servicesData } from './data.js';
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
const educationContainer = document.querySelector('.timeline-items');
const servicesContainer = document.querySelector('.services-container');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
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

