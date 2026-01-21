(function(){
  const lightbox = document.getElementById("lightbox");
  if(!lightbox) return;

  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxLabel = document.getElementById("lightboxLabel");
  const closeBtn = document.getElementById("closeBtn");

  function openLightbox(src, label){
    lightboxImg.src = src;
    lightboxImg.alt = label || "Foto";
    lightboxLabel.textContent = label || "Foto";
    lightbox.classList.add("open");
  }
  function closeLightbox(){
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }

  document.querySelectorAll(".thumb").forEach(t => {
    t.addEventListener("click", () => openLightbox(t.dataset.full, t.dataset.label));
  });

  closeBtn && closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => { if(e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeLightbox(); });

})();