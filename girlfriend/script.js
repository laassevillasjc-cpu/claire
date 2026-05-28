// =============================================
// script.js — Claire Website Logic
// Linked from index.html
// =============================================


// === FLOATING BACKGROUND EMOJIS ===
// Edit this array to change what floats in the background!
const floatingItems = ['💕', '🎀', '✨', '🌸', '💗', '⭐', '🩷', '🌷', '💖', '✦', '🤍', '🎀'];
const bgCanvas = document.getElementById('bgCanvas');

for (let i = 0; i < 28; i++) {
  const el = document.createElement('div');
  el.className = 'floating-item';
  el.textContent = floatingItems[Math.floor(Math.random() * floatingItems.length)];
  el.style.left              = Math.random() * 100 + 'vw';
  el.style.top               = Math.random() * 100 + 'vh';
  el.style.fontSize          = (1.1 + Math.random() * 1.2) + 'rem';
  el.style.animationDuration = (3 + Math.random() * 5) + 's';
  el.style.animationDelay    = (Math.random() * 4) + 's';
  bgCanvas.appendChild(el);
}


// === NAVIGATE TO NEXT PAGE ===
// Triggers the heart burst first, then redirects after a short delay
// so the animation plays before leaving the page.
//
// Called by the buttons in index.html like:
//   onclick="goTo('claire.html')"
//   onclick="goTo('ugly.html')"
//
function goTo(page) {
  burstHearts('💖');
  setTimeout(() => {
    window.location.href = page;
  }, 600); // delay in ms — increase if you want the burst to play longer
}


// === HEART BURST ANIMATION ===
// Spawns floating heart emojis from the center of the card on click
function burstHearts(emoji) {
  const container = document.createElement('div');
  container.className = 'hearts-burst';

  const card = document.getElementById('mainCard');
  const rect = card.getBoundingClientRect();
  container.style.left = (rect.left + rect.width / 2) + 'px';
  container.style.top  = (rect.top  + rect.height / 2) + 'px';
  document.body.appendChild(container);

  for (let i = 0; i < 14; i++) {
    const particle = document.createElement('div');
    particle.className   = 'heart-particle';
    particle.textContent = emoji;

    const angle = (i / 14) * 360;
    const dist  = 80 + Math.random() * 80;
    particle.style.setProperty('--tx', Math.cos(angle * Math.PI / 180) * dist + 'px');
    particle.style.setProperty('--ty', Math.sin(angle * Math.PI / 180) * dist + 'px');
    particle.style.animationDelay = (Math.random() * 0.2) + 's';

    container.appendChild(particle);
  }

  setTimeout(() => container.remove(), 1200);
}
