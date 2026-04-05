---
layout: page
title: gallery
permalink: /gallery/
description: Travel photos from around the world.
nav: false
---

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="photo-gallery">
</div>

<p id="gallery-empty" class="text-center text-muted mt-4">
  <em>Photos coming soon! Check back after my next trip.</em>
</p>

<script>
document.addEventListener('DOMContentLoaded', function() {
  fetch('{{ "/assets/data/photos.json" | relative_url }}')
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(photos => {
      if (!photos || photos.length === 0) return;
      const gallery = document.getElementById('photo-gallery');
      const empty = document.getElementById('gallery-empty');
      empty.style.display = 'none';
      photos.forEach(photo => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
          <div class="card h-100">
            <img src="${photo.thumbnail}" class="card-img-top" alt="${photo.title}" loading="lazy" style="object-fit:cover;height:220px;">
            <div class="card-body">
              <h5 class="card-title">${photo.title}</h5>
              <p class="card-text"><small class="text-muted">${photo.location} &middot; ${photo.date}</small></p>
            </div>
          </div>`;
        gallery.appendChild(col);
      });
    })
    .catch(() => {});
});
</script>
