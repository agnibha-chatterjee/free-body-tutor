function toRadians(angle) {
  return angle * (Math.PI / 180);
}
window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const mass = document.querySelector('input[type="number"]');
  const beta = document.querySelector('input[id="beta"]');
  const friction = document.querySelector('input[id="friction"]');
  const ans = document.querySelector('.answer');
  const ansCont = document.querySelector('.answerContainer');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!friction.value && !beta.value) {
      alert('You have not entered any values');
      return;
    }
    if (friction.value == 0 || !mass.value) {
      ansCont.innerHTML = `Coefficient of friction(Mew) = ${Math.tan(
        toRadians(beta.value)
      )}`;
      return;
    }
    if (beta.value == 0 || !mass.value) {
      ansCont.innerHTML = `Angle beta = ${Math.atan(
        toRadians(friction.value)
      )}`;
      return;
    }
  });
});
