let celsius = prompt('Введи свои цельсия');
celsius = Number(celsius);

if (celsius === 0){

    alert(`celsius = 0, fahrenheit = 0`); 

} else {

    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(`celsius = ${celsius}, fahrenheit = ${fahrenheit}`);
    
}

