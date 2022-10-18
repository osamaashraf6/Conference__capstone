const bars = document.querySelector('.nav__container__parnav > .bars');
const ul = document.querySelector('.nav__container__parnav__ul');
// ============================================================================
bars.addEventListener('click', () => {
  if (bars.classList.contains('change')) {
    bars.classList.remove('change');
    ul.classList.remove('change');
  } else {
    bars.classList.add('change');
    ul.classList.add('change');
  }
});