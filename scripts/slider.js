const slider = document.querySelector('.slider');

const body = document.body;
const topContainer = document.querySelector('.top-container');
const displayCalculation = document.querySelector('.display-calculation');
const inputContainer = document.querySelector('.input-container');
const calcButtons = document.querySelectorAll('.calc-button');
const delButton = document.querySelector('.del-button');
const resetButton = document.querySelector('.reset-button');
const equalsButton = document.querySelector('.equals-button');

export function themeSwitcher() {
  slider.addEventListener('input', () => {
    
    clearTheme();
  
    switch (Number(slider.value)) {
      case 1:
        break;
  
      case 2:
        switchThemeTwo();
        break;
  
      case 3:
        switchThemeThree();
        break;
    }
  });
}

function clearTheme() {
  body.classList.remove('body-2', 'body-3');
  slider.classList.remove('slider-2', 'slider-3');
  topContainer.classList.remove('top-container-2', 'top-container-3');
  displayCalculation.classList.remove('display-calculation-2', 'display-calculation-3');
  inputContainer.classList.remove('input-container-2', 'input-container-3');
  calcButtons.forEach(calcButton => {
    calcButton.classList.remove('calc-button-2', 'calc-button-3');
  });
  delButton.classList.remove('del-button-2', 'del-button-3');
  resetButton.classList.remove('reset-button-2', 'reset-button-3');
  equalsButton.classList.remove('equals-button-2', 'equals-button-3');
}

function switchThemeTwo() {
  body.classList.add('body-2');
  slider.classList.add('slider-2');
  topContainer.classList.add('top-container-2');
  displayCalculation.classList.add('display-calculation-2');
  inputContainer.classList.add('input-container-2');
  calcButtons.forEach(calcButton => {
    calcButton.classList.add('calc-button-2');
  });
  delButton.classList.add('del-button-2');
  resetButton.classList.add('reset-button-2');
  equalsButton.classList.add('equals-button-2');
}

function switchThemeThree() {
  body.classList.add('body-3');
  slider.classList.add('slider-3');
  topContainer.classList.add('top-container-3');
  displayCalculation.classList.add('display-calculation-3');
  inputContainer.classList.add('input-container-3');
  calcButtons.forEach(calcButton => {
    calcButton.classList.add('calc-button-3');
  });
  delButton.classList.add('del-button-3');
  resetButton.classList.add('reset-button-3');
  equalsButton.classList.add('equals-button-3');
}