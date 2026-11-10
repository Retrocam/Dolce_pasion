/* Dolce Pasión · lógica: menú hamburguesa y carrusel */
(function () {
  'use strict';

  /* ---------- Menú hamburguesa ---------- */
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');

  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }

  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  /* ---------- Carrusel (2 tarjetas visibles) ---------- */
  var VISIBLE = 2;
  var track = document.getElementById('track');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var total = track.children.length;
  var index = 0;

  function go(step) {
    index = Math.max(0, Math.min(total - VISIBLE, index + step));
    track.style.transform = 'translateX(-' + (index * (100 / VISIBLE)) + '%)';
    prev.disabled = index === 0;
    next.disabled = index >= total - VISIBLE;
  }

  prev.addEventListener('click', function () { go(-2); });
  next.addEventListener('click', function () { go(2); });
  go(0);
})();
