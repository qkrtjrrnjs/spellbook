let spellBook = [];
let manaBook = [];
let counter = 0;

const list = function(data, listName){
    var node = document.createElement('li');            
    var textnode = document.createTextNode(data);       
    node.appendChild(textnode);                             
    document.getElementById(listName).appendChild(node); 
    node.style.color = '#363636';
}

//input "submit" type click handling
const form = document.getElementById('formID');
form.onsubmit = function(event){
    event.preventDefault();   
    //const f = event.target; 
    const spellValue = form.spellData.value;
    const manaValue = form.manaData.value;
    
    if(spellValue === '' && manaValue === ''){
        alert("ENTER SPELL AND MANA");
        form.spellData.focus();
    }
    else if(spellValue === ''){
        alert("ENTER SPELL");
        form.spellData.focus();
    }
    else if(manaValue == ''){
        alert("ENTER MANA");
        form.spellData.focus();
    }
    else{
        const exists = false;
        for(let i = 0; i < spellBook.length; i++){
            if(spellBook[i] === spellValue){
                alert("SPELL ALREADY EXISTS IN THE SPELLBOOK!");
                form.reset();   
                exists = true;     
                form.spellData.focus();        
            }
        }
        if(!exists){
            list(spellValue, 'spellList');
            list(manaValue, 'manaList');

            spellBook[counter] = spellValue;
            manaBook[counter] = manaValue;
            counter++;
            spellBook.sort();
            form.reset();
            form.spellData.focus();
        }
    }
}



