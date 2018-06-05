const button = document.querySelector('button');
let spellTracker = 0;
let spellingTracker = 0;

const changeText = function(){
    const heading1 = document.querySelector('#spells');
    const heading2 = document.querySelector('#spelling');
    const spellBook = ['Wingardium Leviosa', 'Expelliarmus', 'Lumos', 'Alohomora', 'Avada Kedavra', 'Sectumsempra', 'Obliviate', 'Riddikulus', 'Accio', 'Expecto Patronum'];
    const spelling = ['Techpoint', 'Al', 'Nichole', 'Fretless', 'Dana', 'Davey'];

    heading1.textContent = spellBook[spellTracker];
    heading2.textContent = spelling[spellingTracker];
    spellTracker++;
    spellingTracker++;
    if(spellTracker === 10)
        spellTracker = 0;
    if(spellingTracker == 5)
        spellingTracker = 0;
}

button.addEventListener('click', changeText);

const form = document.getElementById('formID');
form.onsubmit = function(event){
    event.preventDefault();    
    const usernameValue = document.getElementById('u').value;
    const passwordValue = document.getElementById('p').value;
    const username = document.getElementById('user');
    const password = document.getElementById('pass');

    if(passwordValue != '' && username != ''){
        username.innerHTML = 'username: ' + usernameValue;
        password.innerHTML = 'password: ' + passwordValue;
        form.remove();
    }
    
    if(usernameValue === '' && passwordValue === ''){
        alert("ENTER USERNAME AND PASSWORD");
    }
    else if(usernameValue === ''){
        alert("ENTER USERNAME");
    }
    else if(passwordValue == ''){
        alert("ENTER PASSWORD");
    }
}
/*
let userInput = document.getElementById("u");

userInput.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    const passwordValue = document.getElementById('p').value;
    if(passwordValue === null){
        alert("ENTER A PASSWORD");
    }
    document.getElementById("submitButton").click();
  }
});

let passInput = document.getElementById("p");

passInput.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    const usernameValue = document.getElementById('u').value;
    if(usernameValue === null){
        alert("ENTER A USERNAME");
    }
    document.getElementById("submitButton").click();
  }
});*/

