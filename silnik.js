var button = document.getElementById('button');

button.addEventListener('click', function(e) {
    var textBox = document.getElementById('textBox');
    
    if (textBox.value !== 'TEST') {
        e.preventDefault;
        textBox.setCustomValidity('Powinieneś napisać TEST!');
    } else {
        textBox.setCustomValidity('');
    }
});