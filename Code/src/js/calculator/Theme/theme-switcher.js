import Theme from './theme'

/**
 * @function themeSwitcher - добавляет к кнопкам события для смены режимов калькулятора и мода
 */
function themeSwitcher() {
  const theme = new Theme()

  theme.btnDarkTheme.addEventListener('click', () => {
    theme.btnLightTheme.style.display = 'block';
    theme.btnDarkTheme.style.display = 'none';

    theme.switchOnDark()
  });

  theme.btnLightTheme.addEventListener('click', () => {
    theme.btnLightTheme.style.display = 'none';
    theme.btnDarkTheme.style.display = 'block';
    
    theme.switchOnLight()
  });

  theme.btnScientificTheme.addEventListener('click', () => {
    theme.btnNormalTheme.style.display = 'block';
    theme.btnScientificTheme.style.display = 'none';

    theme.switchOnScientific()
  });

  theme.btnNormalTheme.addEventListener('click', () => {
    theme.btnNormalTheme.style.display = 'none';
    theme.btnScientificTheme.style.display = 'block';

    theme.switchOnNormal()
  });
}

export default themeSwitcher