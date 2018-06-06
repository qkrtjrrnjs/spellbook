//const button = document.querySelector('button');
let spellBook = [];
let manaBook = [];
let counter = 0;
//let spellTracker = 0;

//function that changes the heading texts (for button)
/*const changeText = function(){
    //displaying spellbook w/ heading (one by one)
    
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
}*/

const spellList = function(spell){
    var node = document.createElement('li');            
    var textnode = document.createTextNode(spell);       
    node.appendChild(textnode);                              
    document.getElementById('spellList').appendChild(node); 
}

const manaList = function(mana){
    var node2 = document.createElement('li');            
    var textnode2 = document.createTextNode(mana);       
    node2.appendChild(textnode2);                              
    document.getElementById('manaList').appendChild(node2); 
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
            spellList(spellValue);
            manaList(manaValue);

            spellBook[counter] = spellValue;
            manaBook[counter] = manaValue;
            counter++;
            spellBook.sort();
            form.reset();
            form.usernameData.focus();
        }
    }
}

//button.addEventListener('click', changeText);


