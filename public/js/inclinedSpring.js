function toRadians(angle) {
  return angle * (Math.PI / 180);
}
window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const mass = document.querySelector('input[type="number"]');
  const beta = document.querySelector('input[id="beta"]');
  const friction = document.querySelector('input[id="friction"]');
  const spring = document.querySelector('input[id="spring"]');
  const elongation = document.querySelector('input[id="elongation"]');
  const ansCont = document.querySelector('.answerContainer');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (
      !friction.value &&
      !beta.value &&
      !elongation.value &&
      !spring.value &&
      !mass.value
    ) {
      alert('You have not entered any values');
      return;
    }
    if (mass.value == 0) {
      num = spring.value * elongation.value;
      denom = Math.sin(toRadians(beta.value));
      denom1 = friction.value * Math.cos(beta.value);
      finalDenom = 9.8 * (parseFloat(denom) - parseFloat(denom1));
      ansCont.innerHTML = `Mass = ${num / finalDenom}`;
      return;
    }
    if (friction.value == 0) {
      num = mass.value * 9.8 * Math.sin(toRadians(beta.value));
      finalNum = num - spring.value * elongation.value;
      denom = mass.value * 9.8 * Math.cos(beta.value);
      ansCont.innerHTML = `Coefficient of friction(Mew) = ${finalNum / denom}`;
      return;
    }

    if (spring.value == 0) {
      term1 = mass.value * 9.8 * Math.sin(toRadians(beta.value));
      term2 =
        friction.value * mass.value * 9.8 * Math.cos(toRadians(beta.value));
      finalTerm = parseFloat(term1) - parseFloat(term2);
      ansCont.innerHTML = `Spring Constant(k) = ${finalTerm /
        elongation.value}`;
      return;
    }
    if (elongation.value == 0) {
      term1 = mass.value * 9.8 * Math.sin(toRadians(beta.value));
      term2 =
        friction.value * mass.value * 9.8 * Math.cos(toRadians(beta.value));
      finalTerm = parseFloat(term1) - parseFloat(term2);
      if (finalTerm / spring.value < 0) {
        ansCont.innerHTML = `Compression(x) = ${finalTerm / spring.value}`;
        return;
      } else if (finalTerm / spring.value > 0)
        ansCont.innerHTML = `Elongation(x) = ${finalTerm / spring.value}`;
      return;
    }
  });
});
