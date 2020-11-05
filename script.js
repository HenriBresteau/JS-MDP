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

    passwordOutput.select();
    document.execCommand('copy');
    generateButton.innerHTML ='MDP copié';
    console.log(generateButton);
    setTimeout( () => {
        generateButton.innerHTML= "Générer mot de passe";
    },3000)
}

document.getElementById('generateButton').addEventListener('mousemove',(e) => {
    
    const x = e.pageX - e.target.offsetLeft-436
    const y = e.pageY - e.target.offsetTop-145
    e.target.style.setProperty('--x', `${x}px`)
    e.target.style.setProperty('--y', `${y}px`)
})