import { itemsData } from "./data.js";

const itemContainer = document.getElementById('itemsContainer')
console.log(itemContainer)

let itemsBox = ''
const items = itemsData.map(function(item) {
    itemsBox += `
    <div class="items">
                <div class="pizza-namebox">
                    <div>
                        <img src=${item.itemImage} alt=${item.name} class="itemImage">
                    </div>
                    <div>
                        <h3 class="itemName">${item.name}</h3>
                        <p class="itemIngredients">${item.ingredients}</p>
                        <p class="itemPrice">$${item.price}</p>
                    </div>
                </div>
                <div class="addItemsIcon" role="button">
                    <img src="./public/images/addItemIcon.png" alt="adding button" class="add-icon">
                </div>
            </div>
    `
    return itemsBox
})

itemContainer.innerHTML = itemsBox

console.log(items)