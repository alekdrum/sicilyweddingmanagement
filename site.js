// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const burger = document.querySelector('.burger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMenu(){
  burger.setAttribute('aria-expanded','false');
  mobileMenu.style.display = 'none';
  mobileMenu.setAttribute('aria-hidden','true');
}

function openMenu(){
  burger.setAttribute('aria-expanded','true');
  mobileMenu.style.display = 'block';
  mobileMenu.setAttribute('aria-hidden','false');
}

burger?.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  expanded ? closeMenu() : openMenu();
});

mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.querySelector('.lightbox-close');

document.getElementById('galleryGrid')?.addEventListener('click', (e) => {
  const img = e.target?.closest('img');
  if(!img) return;
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt || 'Wedding photo';
  lightbox.style.display = 'flex';
  lightbox.setAttribute('aria-hidden','false');
});

function closeLightbox(){
  lightbox.style.display = 'none';
  lightbox.setAttribute('aria-hidden','true');
  lightboxImg.src = '';
}

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => {
  if(e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeLightbox();
});
