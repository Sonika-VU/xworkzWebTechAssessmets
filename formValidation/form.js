// function onClick(){
//     document.getElementById('blankSpanId').innerHTML = 'Please provide valid data'

//     document.getElementsByClassName('myClass')[0].innerHTML = 'hello!!!........';
//     var msg = document.getElementsByName('myClass')[0];

//     console.log(msg);
// }


function submitForm() {
    let values = true;

    let nameInput = document.formName.nameName.value
    let numberInput = document.formName.numberName.value
    // let ageInput = document.formName.ageName.value
    // let emailInput = document.formName.emailName.value
    // let collegeInput = document.formName.collegeName.value
    // let locationInput = document.formName.locationName.value

    // alert(nameInput+"\n"+numberInput+"\n" + emailInput + "\n" +collegeInput + "\n" +locationInput);

    if (nameInput.length < 3 || nameInput.length > 20) {
        values = false;
        setError('nameErrorId' , 'name should be min 3 and max 20 characters.....');
    }else{
        clearField('nameErrorId');
    }

    // if (ageInput <= 18) {
    //     values = false;setError('');
    // }

    if (numberInput.length != 10) {
        values = false;
        setError('phoneErrorId', 'The length should be 10-digit');
    }else{
        clearField('phoneErrorId');
    }
    return values;

}

function setError(id, message){
    document.getElementById(id).innerHTML = message;
    console.log(id);
    // alert(id);
    // alert(message);

}

function clearField(id){
    document.getElementById(id).innerHTML = '';
}

function clearForm(){
    document.getElementById().innerHTML = '';
}