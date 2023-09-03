import {localDB} from 'https://cdn.skypack.dev/peadb'
import shortid from 'https://cdn.skypack.dev/shortid';

const db =new localDB('grocery-list-db')
const groceries = db.getAll() || []

const groceryList = document.getElementById('groceryList')
const newGroceryInput = document.getElementById('newGrocery')
const addBtn = document.getElementById('addBtn')

const createGroceryElement = GroceryName => {
    const groceryElement = document.createElement('li')
    groceryElement.innerText= grocery.value
    groceryElement.classList.add('groceryItem')
    return groceryElement
}

const addGrocery = newGrocery => {
    groceryList.appendChild(createGroceryElement(newGrocery))
}

addBtn.addEventListener('click', e =>{
    e.preventDefault()
    const value = newGroceryInput.value
    const key = shortid.generate()
    if (value) {
        addGrocery( key, value )
        db.set(key, value)
        newGroceryInput.value = null
    }
})

groceries.map(grocery => addGrocery(grocery))