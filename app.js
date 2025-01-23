const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('visible');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('visible');
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
  }
});
