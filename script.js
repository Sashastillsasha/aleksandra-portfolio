document.documentElement.classList.add('js');
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
document.querySelectorAll('video').forEach((video) => {
  video.addEventListener('click', () => video.paused ? video.play() : video.pause());
});

const preview = document.querySelector('.hover-preview');
if (preview && window.matchMedia('(hover: hover)').matches) {
  const image = preview.querySelector('img');
  const video = preview.querySelector('video');
  const caption = preview.querySelector('figcaption');
  const move = (event) => {
    const width = preview.offsetWidth || 330;
    const height = preview.offsetHeight || 360;
    const x = Math.min(event.clientX, window.innerWidth - width - 34);
    const y = Math.min(event.clientY, window.innerHeight - height - 34);
    preview.style.left = `${Math.max(8, x)}px`;
    preview.style.top = `${Math.max(8, y)}px`;
  };
  document.querySelectorAll('[data-preview]').forEach((item) => {
    const show = () => {
      const isVideo = item.dataset.previewType === 'video';
      image.style.display = isVideo ? 'none' : 'block';
      video.style.display = isVideo ? 'block' : 'none';
      if (isVideo) {
        if (video.src !== new URL(item.dataset.preview, document.baseURI).href) video.src = item.dataset.preview;
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        image.src = item.dataset.preview;
      }
      caption.textContent = item.dataset.caption || '';
      preview.classList.add('is-visible');
    };
    item.addEventListener('mouseenter', show);
    item.addEventListener('mousemove', move);
    item.addEventListener('mouseleave', () => { preview.classList.remove('is-visible'); video.pause(); });
    item.addEventListener('focusin', () => {
      show();
      preview.style.left = `${Math.max(8, window.innerWidth - 370)}px`;
      preview.style.top = '90px';
    });
    item.addEventListener('focusout', () => { preview.classList.remove('is-visible'); video.pause(); });
  });
}
