window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const mass = document.querySelector('input[type="number"]');
  const k = document.querySelector('input[id="beta"]');
  const elongation = document.querySelector('input[id="elongation"]');
  const ans = document.querySelector('.answer');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!mass.value && !k.value && !elongation.value) {
      alert('You have not entered any values');
      return;
    }
    if (!mass.value) {
      ans.innerHTML = `Mass = ${(k.value * elongation.value) / 9.8} Kgs`;
      return;
    }
    if (!k.value) {
      ans.innerHTML = `Spring constant(k) = ${(mass.value * 9.8) /
        elongation.value}`;
      return;
    }
  });
});
