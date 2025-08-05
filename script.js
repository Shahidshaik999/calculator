document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
    let currentValue = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;
            
            if (value === 'clear') {
                currentValue = '';
                display.value = '';
            } else if (value === 'backspace') {
                currentValue = currentValue.slice(0, -1);
                display.value = currentValue;
            } else if (value === '=') {
                try {
                    currentValue = eval(currentValue).toString();
                    display.value = currentValue;
                } catch (error) {
                    currentValue = 'Error';
                    display.value = currentValue;
                }
            } else {
                currentValue += value;
                display.value = currentValue;
            }
        });
    });
});
