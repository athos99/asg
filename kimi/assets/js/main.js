
/* ============================================
   ASG Arbres Services Genève - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeMenuBtn = document.querySelector('.close-menu');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => mobileNav.classList.add('open'));
    closeMenuBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // Scroll reveal animations
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Active nav link based on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) current = section.getAttribute('id');
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
      });
    });
  }

  // Header shadow on scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
      }
    });
  }

  // Contact form mailto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value;
      const lang = document.documentElement.lang || 'fr';

      let subject, body;
      if (lang === 'fr') {
        subject = 'Demande de devis - ASG Arbres Services Genève';
        body = `Bonjour,\n\nNom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nService demandé: ${service}\n\nMessage:\n${message}\n\nCordialement,\n${name}`;
      } else if (lang === 'en') {
        subject = 'Quote request - ASG Arbres Services Geneva';
        body = `Hello,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService requested: ${service}\n\nMessage:\n${message}\n\nBest regards,\n${name}`;
      } else {
        subject = 'Angebotsanfrage - ASG Arbres Services Genf';
        body = `Guten Tag,\n\nName: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\nGewünschte Dienstleistung: ${service}\n\nNachricht:\n${message}\n\nFreundliche Grüsse,\n${name}`;
      }

      window.location.href = `mailto:bendik.hauserman@bluewin.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&cc=${encodeURIComponent(email)}`;
    });
  }
});
