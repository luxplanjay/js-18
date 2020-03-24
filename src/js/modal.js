import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const openModalBtnRef = document.querySelector('button[data-open-modal]');
const modalTemplate = document.querySelector('#modal');

const instance = basicLightbox.create(modalTemplate, {
  onShow(instance) {
    const closeModalBtnRef = getCloseModalBtnRef(instance);
    closeModalBtnRef.addEventListener('click', instance.close);

    // Добавить закрытие по esc и снятие слушателя
    // window.addEventListener('keydown', e => {
    //   if (e.code === 'Escape') {
    //     instance.close();
    //   }
    // });
  },
  onClose(instance) {
    const closeModalBtnRef = getCloseModalBtnRef(instance);
    closeModalBtnRef.removeEventListener('click', instance.close);
  },
});

openModalBtnRef.addEventListener('click', instance.show);

function getCloseModalBtnRef(parent) {
  return parent.element().querySelector('button[data-close-modal]');
}
