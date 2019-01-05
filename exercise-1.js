function result() {

    
    var inputFirstName = document.getElementById('first').value;
    var inputLastName = document.getElementById('last').value;
    var inputDOB = document.getElementById('DOB').value;
    var inputFavFood = document.getElementById('food').value;
    
    document.getElementById('result').innerHTML = 'My name is ' + inputFirstName + ' ' + inputLastName + ', and I was born on ' + inputDOB + '. My favorite food is ' + inputFavFood + '.';

}