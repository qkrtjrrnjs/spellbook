const button = document.querySelector('button');
let spellBook = [];
let manaBook = [];
let counter = 0;
let spellTracker = 0;

//function that changes the heading texts 
const changeText = function(){
    const heading1 = document.querySelector('#SPELL');
    const heading2 = document.querySelector('#MANA');

    if(spellTracker < spellBook.length){
        heading1.textContent = spellBook[spellTracker];
        heading2.textContent = manaBook[spellTracker++];
    }
    else{
        spellTracker = 0;
        heading1.textContent = spellBook[spellTracker];
        heading2.textContent = manaBook[spellTracker++];
    }
}

//input "submit" type click handling
const form = document.getElementById('formID');
//form.usernameData.focus();
form.onsubmit = function(event){
    event.preventDefault();   
    //const f = event.target; 
    const spellValue = form.usernameData.value;//document.getElementById('u').value;
    const manaValue = form.passwordData.value;//document.getElementById('p').value;
    
    if(spellValue === '' && manaValue === ''){
        alert("ENTER SPELL AND MANA");
    }
    else if(spellValue === ''){
        alert("ENTER SPELL");
    }
    else if(manaValue == ''){
        alert("ENTER MANA");
    }
    else if(isNaN(manaValue)){
        alert("ENTER A NUMBER FOR THE MANA VALUE");
    }
    else{
        const exists = false;
        for(let i = 0; i < spellBook.length; i++){
            if(spellBook[i] === spellValue){
                alert("SPELL ALREADY EXISTS IN THE SPELLBOOK!");
                form.reset();   
                exists = true;             
            }
        }
        if(!exists){
            spellBook[counter] = spellValue;
            manaBook[counter] = manaValue;
            counter++;
            form.reset();
        }
    }
}

button.addEventListener('click', changeText);


