
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#surnameOutput').innerHTML = initPerson.surname;
    document.querySelector('#firstNameOutput').innerHTML = initPerson.firstName;
    document.querySelector('#genderOutput').innerHTML = initPerson.gender;
    document.querySelector('#birthDateOutput').innerHTML = initPerson.dateOfBirth;
};

