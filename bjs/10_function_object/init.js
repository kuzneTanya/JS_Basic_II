document.querySelector("#generate").addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#surnameOutput').innerHTML = initPerson.surname;
    document.querySelector('#firstNameOutput').innerHTML = initPerson.firstName;
    document.querySelector('#genderOutput').innerHTML = initPerson.gender + ',';
    document.querySelector('#birthDateOutput').innerHTML = initPerson.dateOfBirth;
    document.querySelector('#lastNameOutput').innerHTML = initPerson.lastName;
    document.querySelector('#jobOutput').innerHTML = initPerson.job;
})

document.querySelector("#clear").addEventListener('click', function() {
    let spans = document.querySelectorAll('span');
    for (i=0; i<spans.length; i++) {
        spans[i].innerHTML = "";
    };
    document.querySelector("#surnameOutput").innerHTML = 'Нажмите кнопку "Сгенерировать", чтобы получить данные';
})
