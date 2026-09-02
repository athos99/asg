/**
 * ASG Arbres Services Genève - Interactive Script
 * Satigny (GE), Suisse
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', !isOpen);
      mobileToggle.innerHTML = !isOpen 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      }
    });
  }

  // 2. Header shadow & elevation on scroll
  const header = document.querySelector('.main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.style.boxShadow = '0 6px 20px rgba(17, 45, 30, 0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Optional: close other items for an accordion effect
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });

        item.classList.toggle('active', !isActive);
      });
    }
  });

  // 4. Gallery Filtering (on realisations.html or homepage)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(10px)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // 5. Quote / Contact Form -> Send via User's Email Client (mailto)
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Collect values
      const clientTypeSelect = document.getElementById('clientType');
      const clientTypeText = clientTypeSelect ? clientTypeSelect.options[clientTypeSelect.selectedIndex].text : '';
      const nom = document.getElementById('nom') ? document.getElementById('nom').value.trim() : '';
      const societe = document.getElementById('societe') ? document.getElementById('societe').value.trim() : '';
      const telephone = document.getElementById('telephone') ? document.getElementById('telephone').value.trim() : '';
      const commune = document.getElementById('commune') ? document.getElementById('commune').value.trim() : '';
      const prestationSelect = document.getElementById('prestation');
      const prestationText = prestationSelect ? prestationSelect.options[prestationSelect.selectedIndex].text : '';
      const description = document.getElementById('description') ? document.getElementById('description').value.trim() : '';

      // Prepare email content
      const recipient = 'bendik.hauserman@bluewin.ch';
      const subject = encodeURIComponent(`Demande de devis ASG - ${nom} (${commune})`);
      const bodyLines = [
        `Bonjour Bendik,`,
        ``,
        `Voici les informations de ma demande de devis pour ASG Arbres Services Genève :`,
        ``,
        `• Profil : ${clientTypeText}`,
        `• Nom & Prénom : ${nom}`,
        `• Téléphone : ${telephone}`,
        societe ? `• Société / Régie : ${societe}` : null,
        `• Localité / Code Postal : ${commune}`,
        `• Prestation souhaitée : ${prestationText}`,
        ``,
        `Description de mon besoin :`,
        `${description}`,
        ``,
        `---`,
        `Message préparé depuis le site web ASG Arbres Services Genève (Satigny, GE)`
      ].filter(line => line !== null).join('\n');

      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyLines)}`;

      // Simulate sending state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 0.8s linear infinite;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        Ouverture de votre messagerie...
      `;

      // Trigger user's email client
      window.location.href = mailtoUrl;

      setTimeout(() => {
        // Confirmation alert box styled for the green theme
        const successBox = document.createElement('div');
        successBox.className = 'alert-box-success';
        successBox.style.cssText = `
          background: #18442c;
          border: 1px solid #6bf1a3;
          color: #ffffff;
          padding: 1.35rem 1.5rem;
          border-radius: 10px;
          margin-top: 1.5rem;
          font-weight: 500;
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        `;
        successBox.innerHTML = `
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6bf1a3" stroke-width="2.2" style="flex-shrink: 0; margin-top: 2px;">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <div style="font-size: 0.95rem; line-height: 1.55; color: #ffffff;">
            <strong style="color: #6bf1a3; font-size: 1.05rem;">Votre messagerie a été ouverte !</strong><br>
            Le message pré-rempli pour <strong>bendik.hauserman@bluewin.ch</strong> est prêt à être expédié depuis votre boîte mail.<br><br>
            <span style="font-size: 0.88rem; color: #d6eee1;">Si votre logiciel de messagerie ne s'est pas ouvert automatiquement :</span><br>
            <a href="${mailtoUrl}" class="btn btn-sm btn-primary" style="margin-top: 0.5rem; display: inline-flex;">
              &#9993; Cliquer ici pour ouvrir l'email manuellement
            </a>
            <span style="display: block; margin-top: 0.6rem; font-size: 0.85rem; color: #c0decb;">
              Ou contactez directement Bendik au <strong>+41 79 921 77 23</strong>.
            </span>
          </div>
        `;

        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        // Remove old notice if any
        const existingNotice = quoteForm.parentNode.querySelector('.alert-box-success');
        if (existingNotice) existingNotice.remove();

        quoteForm.parentNode.appendChild(successBox);
        successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 700);
    });
  }
});

// Keyframe animation for spinner
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);
