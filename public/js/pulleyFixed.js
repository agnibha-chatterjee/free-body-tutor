window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const mass = document.querySelector('input[type="number"]');
  const ans = document.querySelector('.answer');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!mass.value) {
      alert('You have not entered any values');
      return;
    }
    ans.textContent = `${mass.value * 9.8} Newtons`;
  });
});
