const refs = {
  gallery: document.querySelector('.js-gallery'),
  largeImage: document.querySelector('.js-large-image'),
};

refs.gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;

  setLargeImageSrc(largeImageURL);
}

function setLargeImageSrc(url) {
  refs.largeImage.src = url;
}
