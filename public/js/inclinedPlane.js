function toRadians(angle) {
  return angle * (Math.PI / 180);
}
window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const mass = document.querySelector('input[type="number"]');
  const beta = document.querySelector('input[id="beta"]');
  const ans = document.querySelector('.answer');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!mass.value || !beta.value) {
      alert('You have not entered any values');
      return;
    }
    ans.textContent = `${mass.value *
      Math.cos(toRadians(beta.value)) *
      9.8} Newtons`;
  });
});
