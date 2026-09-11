/* ============================================================
   KASHISH PORTFOLIO — Shared JavaScript
   Grain overlay, directory preview, scroll reveal,
   brand collections, format tabs & archive filters
   ============================================================ */
(function(){
  'use strict';

  /* ---- Grain SVG filter injection ---- */
  function initGrain(){
    if(document.getElementById('grainFilter')) return;
    var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('width','0');
    svg.setAttribute('height','0');
    svg.style.position = 'absolute';
    svg.innerHTML = '<filter id="grainFilter"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise"/><feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.9 0"/></filter>';
    document.body.prepend(svg);
    var grain = document.createElement('div');
    grain.className = 'grain';
    grain.style.filter = 'url(#grainFilter)';
    grain.style.background = '#000';
    svg.after(grain);
  }

  /* ---- Directory hover preview (homepage) ---- */
  function initDirectoryPreview(){
    var preview = document.getElementById('preview');
    var rows = document.querySelectorAll('.d-row');
    if(!preview || !rows.length) return;

    var img = preview.querySelector('img');

    rows.forEach(function(row){
      row.addEventListener('mouseenter', function(){
        if(img && row.dataset.preview){
          img.src = row.dataset.preview;
        }
        preview.classList.add('active');
      });
      row.addEventListener('mousemove', function(e){
        preview.style.left = (e.clientX + 24) + 'px';
        preview.style.top  = (e.clientY - 180) + 'px';
      });
      row.addEventListener('mouseleave', function(){
        preview.classList.remove('active');
      });
    });
  }

  /* ---- Case study teaser scroll reveal (homepage) ---- */
  function initScrollReveal(){
    var sections = document.querySelectorAll('.case');
    if(!sections.length) return;
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.3 });
    sections.forEach(function(s){ io.observe(s); });
  }

  /* ---- Brand Collections & Format Tabs ---- */
  function initBrandCollections(){
    var brandNavBtns = document.querySelectorAll('.brand-nav-btn');
    var brandPanes = document.querySelectorAll('.brand-pane');
    if(!brandNavBtns.length || !brandPanes.length) return;

    brandNavBtns.forEach(function(btn){
      btn.addEventListener('click', function(){
        brandNavBtns.forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        var targetBrand = btn.dataset.brand;
        brandPanes.forEach(function(pane){
          if(pane.id === 'brand-' + targetBrand){
            pane.classList.add('active');
          } else {
            pane.classList.remove('active');
          }
        });
      });
    });

    // Format filter tabs within each brand pane
    var fmtBtns = document.querySelectorAll('.fmt-btn');
    fmtBtns.forEach(function(btn){
      btn.addEventListener('click', function(){
        var parentPane = btn.closest('.brand-pane');
        if(!parentPane) return;
        var siblings = parentPane.querySelectorAll('.fmt-btn');
        siblings.forEach(function(s){ s.classList.remove('active'); });
        btn.classList.add('active');

        var fmt = btn.dataset.fmt;
        var cards = parentPane.querySelectorAll('.deliverable-card');
        cards.forEach(function(card){
          if(fmt === 'all' || card.dataset.fmt === fmt){
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---- Smart Archive Multi-Filters ---- */
  function initArchiveFilters(){
    var catButtons = document.querySelectorAll('.filter-btn[data-cat]');
    var brandButtons = document.querySelectorAll('.filter-btn[data-brand]');
    var tiles = document.querySelectorAll('.g-tile');
    if(!tiles.length) return;

    var activeCat = 'all';
    var activeBrand = 'all';

    function applyFilters(){
      tiles.forEach(function(t){
        var matchCat = (activeCat === 'all') || (t.dataset.cat === activeCat);
        var matchBrand = (activeBrand === 'all') || (t.dataset.brand === activeBrand);
        t.classList.toggle('hidden', !(matchCat && matchBrand));
      });
    }

    if(catButtons.length){
      catButtons.forEach(function(btn){
        btn.addEventListener('click', function(){
          catButtons.forEach(function(b){ b.classList.remove('active'); });
          btn.classList.add('active');
          activeCat = btn.dataset.cat;
          applyFilters();
        });
      });
    }

    if(brandButtons.length){
      brandButtons.forEach(function(btn){
        btn.addEventListener('click', function(){
          brandButtons.forEach(function(b){ b.classList.remove('active'); });
          btn.classList.add('active');
          activeBrand = btn.dataset.brand;
          applyFilters();
        });
      });
    }
  }

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', function(){
    initGrain();
    initDirectoryPreview();
    initScrollReveal();
    initBrandCollections();
    initArchiveFilters();
  });

})();
