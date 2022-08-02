const button = document.querySelector('#btn');

const transposeTable = ['q', 'W', 'p', 'J', 5, 'g', '8', 'V',
                        'Z', 3, 'A', 'N', 't', 1, 9, 'e', 
                        'c','y', 'n', 'H', 'F', 4, 'o', 'R'];

function loadPassword(){
    let numArray = [];
    let password = [];
    let IMEI = document.getElementById('imei');
    numArray = IMEI.value.split("");

    for (let i = 0; i < numArray.length; i++){
        let index = parseInt(numArray[i]) + i;
        password.push(transposeTable[index]);
    }

    let final = password.join("");
    console.log(final);
    document.getElementById('pass').innerText = "The password is: " + final;
}

button.addEventListener('click', loadPassword);