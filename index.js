class App{
    constructor(){
        this.spellBook = [];
        this.template = document.querySelector('.spell.template')

        const form = document.querySelector('form')
        form.addEventListener('submit', ev => {
          this.handleSubmit(ev)
        })
    }

    renderProperty(name, value) {
        const el = document.createElement('span')
        el.textContent = value
        el.classList.add(name)
        el.setAttribute('title', value)
        return el
      }
    
      renderItem(spell) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
    
        // ['name', 'level', etc.]
        const properties = Object.keys(spell)
    
        // Replace the appropriate values in each <span>
        properties.forEach(property => {
          const el = item.querySelector(`.${property}`)
          el.textContent = spell[property]
          el.setAttribute('title', spell[property])
        })
    
        // delete button
        item
          .querySelector('button.delete')
          .addEventListener(
            'click',
            this.removeSpell.bind(this, spell)
          )
    
        // fav button
    
    
        return item
      }
    
      removeSpell(spell, ev) {
        // Remove from the DOM
        const button = ev.target
        const item = button.closest('.spell')
        item.parentNode.removeChild(item)
    
        // Remove from the array
        const i = this.spellBook.indexOf(spell)
        this.spellBook.splice(i, 1)
      }


//input "submit" type click handling
    handleSubmit(ev) {
        ev.preventDefault();   

        const form = ev.target

        const spell = {
            name: form.spellData.value.trim(),
            manaNeeded: form.manaData.value.trim(),
        }  
    
        if(spell.name === '' && spell.manaNeeded === ''){
            alert("ENTER SPELL AND MANA");
            form.spellData.focus();
        }
        else if(spell.name === ''){
            alert("ENTER SPELL");
            form.spellData.focus();
        }
        else if(spell.manaNeeded == ''){
            alert("ENTER MANA");
            form.spellData.focus();
        }
        else{
            let exists = false;
            for(let i = 0; i < this.spellBook.length; i++){
                if(this.spellBook[i].name === spell.name){
                    form.spellData.focus();        
                    alert("SPELL ALREADY EXISTS IN THE SPELLBOOK!");
                    form.reset();   
                    exists = true;     
                }
            }
            if(!exists){
                this.spellBook.push(spell);
                const item = this.renderItem(spell);
                const list = document.querySelector('#spellList');
                list.appendChild(item);
                form.reset();
                form.spellData.focus();
            }
        }
    }
}

new App();

function makeVisible(){
    document.querySelector('.hp').style.visibility='visible';
}

function hide(){
    document.querySelector('.hp').style.visibility='hidden';

}



