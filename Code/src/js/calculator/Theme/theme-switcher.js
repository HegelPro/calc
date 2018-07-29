import Theme from './theme'

/**
 * @function themeSwitcher - добавляет к кнопкам события для смены режимов калькулятора и мода
 */
function themeSwitcher() {
  const theme = new Theme()

  theme.btnThemeColor.addEventListener('click', (event) => {
    if(event.target.innerText === "Dark") {
      theme.switchOnDark()
      event.target.innerText = "Light"
    } else {
      theme.switchOnLight()
      event.target.innerText = "Dark"
    }
  });

  theme.btnThemeMode.addEventListener('click', () => {
    if(event.target.innerText === "Scientific") {
      theme.switchOnScientific()
      event.target.innerText = "Normal"
    } else {
      theme.switchOnNormal()
      event.target.innerText = "Scientific"
    }
  });
}

export default themeSwitcher