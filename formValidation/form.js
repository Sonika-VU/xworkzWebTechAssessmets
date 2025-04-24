function submitForm(){
    let value = true;

    let nameInput = document.formName.nameName.value
    let numberInput = document.formName.numberName.value
    let emailInput = document.formName.emailName.value
    let collegeInput = document.formName.collegeName.value
    let locationInput = document.formName.locationName.value

    alert(nameInput+"\n"+numberInput+"\n" + emailInput + "\n" +collegeInput + "\n" +locationInput);

    return value;

}


// function resetForm(){
//     alert('cleared the details')
// }