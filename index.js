
class App{    
    constructor(){
        this.spellBook = [];
        this.template = document.querySelector('.spell.template');
        this.load();

        const form = document.querySelector('form')
        form.addEventListener('submit', ev => {
          this.handleSubmit(ev)
        })
    }

    load() {
        // Read the JSON from localStorage
        const spellJSON = localStorage.getItem('spellBook');
    
        // Convert the JSON back into an array
        const spellArray = JSON.parse(spellJSON);
    
        // Load the spells back into the app
        if (spellArray) {
          spellArray.forEach(this.addSpell.bind(this));
        }
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
          if(el){
            el.textContent = spell[property]
            el.setAttribute('title', spell[property])
          }
        })
    
        // delete button
        item
          .querySelector('button.delete')
          .addEventListener(
            'click',
            this.removeSpell.bind(this, spell)
          )
    
        // fav button
        item
        .querySelector('button.fav')
        .addEventListener(
          'click',
          this.toggleFavorite.bind(this, spell)
        )

        //edit button
        item
        .querySelector('button.edit')
        .addEventListener(
          'click',
          this.editItem.bind(this, spell)
        )
    
        return item
    }

    editItem(spell, ev){
        
        const button = ev.target;
        const inputText = document.getElementById('inputText');
        const inputNumber = document.getElementById('inputNumber');
        
        inputText.value = spell.name;
        inputNumber.value = spell.manaNeeded.match(/\d+/g);
        
        const item = button.closest('.spell');
        item.parentNode.removeChild(item);
    
        // Remove from the array
        const i = this.spellBook.indexOf(spell);
        this.spellBook.splice(i, 1);
        this.save();
        document.getElementById('formID').spellData.focus();

        //item.contentEditable = true;
    }

    toggleFavorite(spell,ev) {
        const button = ev.target;
        button.classList.toggleClass('fas fa-star');
        spell.favorite = true;
      }
    
    removeSpell(spell, ev) {
        // Remove from the DOM
        const button = ev.target;
        const item = button.closest('.spell');
        item.parentNode.removeChild(item);
    
        // Remove from the array
        const i = this.spellBook.indexOf(spell);
        this.spellBook.splice(i, 1);
        this.save();
        document.getElementById('formID').spellData.focus();
    }

    addSpell(spell){
        this.spellBook.push(spell);
        const item = this.renderItem(spell);
        const list = document.querySelector('#spellList');
        list.appendChild(item);
    }

//input "submit" type click handling
    handleSubmit(ev) {
        ev.preventDefault();   

        const form = ev.target;

        const spell = {
            name: form.spellData.value.trim(),
            manaNeeded: form.manaData.value.trim() + ' MP',
            favorite: false,
        }  
    
        if(spell.name === '' && spell.manaNeeded === ''){
            alert("ENTER SPELL AND MANA");
            form.spellData.focus();
        }
        else if(spell.name === ''){
            alert("ENTER SPELL");
            form.spellData.focus();
        }
        else if(spell.manaNeeded == ' MP'){
            alert("ENTER MANA");
            form.manaData.focus();
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
                this.addSpell(spell);
                this.save();
                form.reset();
                form.spellData.focus();
            }
        }
    }

    save() {
        localStorage.setItem(
          'spellBook',
          JSON.stringify(this.spellBook)
        )
    }
    

}

const app = new App();

function visibility(){
    if(document.querySelector('.hp').style.visibility === 'visible'){
        document.querySelector('.hp').style.visibility='hidden';
    }else{
        document.querySelector('.hp').style.visibility='visible';
    }
}

function hide(){
    document.querySelector('.hp').style.visibility='hidden';

}

