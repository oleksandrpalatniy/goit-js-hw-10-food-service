import refs from './refs.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;
const { checkboxBtn } = refs;

checkboxBtn.addEventListener('change', e => {
    if (e.target.checked) {
        document.querySelector('body').classList.add(DARK)
        localStorage.setItem('theme', 'dark')
    } else {
        document.querySelector('body').classList.remove(DARK)
        localStorage.removeItem('theme')
    }
})

let theme = localStorage.getItem('theme')


if (theme) {
  document.querySelector('body').classList.add(DARK)
  checkboxBtn.checked = true
} else {
  document.querySelector('body').classList.remove(DARK)
  checkboxBtn.checked = false
}