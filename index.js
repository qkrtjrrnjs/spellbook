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


