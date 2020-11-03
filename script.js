const passwordOutput = document.getElementById('password-output');
const dataLowercase = 'azertyuiopqsdfghjklmwxcvbn'.split('');
const dataUppercase = 'AZERTYUIOPQSDFGHJKLMWXCVBN'.split('');
const dataNumbers = '0123456789'.split('');
const dataSymbols = "!@#$%^&*-_=+\|:;',.>/?~".split('');


function generatePassword() {
    const data = [].concat(
        lowercase.checked ? dataLowercase : [],
        uppercase.checked ? dataUppercase : [],
        numbers.checked ? dataNumbers : [],
        symbols.checked ? dataSymbols : []
    )

    let passwordLength = parseInt(document.getElementById('display-password-length').value);
    let newPassword = '';

    if(data.length === 0) {
        passwordOutput.innerHTML = 'Générateur de MDP';
        alert('Veuillez sélectionnez des critères !');
        return
    }
    for (let i = 0; i < passwordLength; i++) {
        newPassword += data[Math.floor(Math.random()* data.length)];
    }
    passwordOutput.value = newPassword;
    
}