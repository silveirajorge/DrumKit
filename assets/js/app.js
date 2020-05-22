window.addEventListener('keydown', playSound);

function playSound(e) {
  //   console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // Para a função caso a tecla não esteja vinculada.
  audio.currentTime = 0; // Retorna o som para o início.
  audio.play();
  key.classList.add('playing');
}
// Remover a classe .playing após terminar a transição
const keys = document.querySelectorAll('.key');
keys.forEach((key) =>
  key.addEventListener('transitionend', removePlayingClass)
);

function removePlayingClass(e) {
  this.classList.remove('playing');
}

// Tocar com o click do mouse
keys.forEach((key) => key.addEventListener('click', playByMouse));
function playByMouse(e) {
  const keyCode = this.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  key.classList.add('playing');
}
