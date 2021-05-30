(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  document.body.classList.toggle("modal-open");

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

 document.body.classList.toggle("modal-open")
