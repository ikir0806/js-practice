let numberObject = {
    'units': 0,
    'dozens': 0,
    'hundreds': 0
}
let number = prompt('Enter a number');

if ((number < 0) || (number > 999)) {
    alert('Wrong number!');
}
else numberToObject(number);

function numberToObject(number) {
    numberObject['units'] = number % 10;
    numberObject['dozens'] = ((number % 100) - (number % 10)) / 10;
    numberObject['hundreds'] = (number - (number % 100)) / 100;
    console.log(numberObject);
}