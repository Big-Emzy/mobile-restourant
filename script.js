import { itemsData } from "./data.js";

const itemContainer = document.getElementById('itemsContainer')
const itemsPicked = document.getElementById('itemsPickedContainer')

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
                <div class="addItemsIcon" role="button" data-add=${item.name}>
                    <img src="./public/images/addItemIcon.png" alt="adding button" class="add-icon" data-add=${item.name}>
                </div>
            </div>
    `
    return itemsBox
})

itemContainer.innerHTML = itemsBox

document.addEventListener('click',function(e) {
        addItem(e.target)
})


//this is the function for adding items
let listOfOrderedItems = []
let selectedItems = ''
function addItem(e) {
 if (e.classList.contains('add-icon') || e.classList.contains('addItemsIcon')) {
       // listOfOrderedItems.push(e.dataset.add)
        itemsPicked.style.display = 'block'
        selectedItems += `
                     <h3 id="your-order">Your Order</h3>
                            <div id="ordered-Items-Container">
                                <div class="ordered-Items">
                                    <div class="ordered-item-nameBox">
                                        <h4>${e.dataset.add}</h4>
                                        <p>remove</p>
                                    </div>
                                    <div class="order-item-price">
                                        <p>$14</p>
                                    </div>
                                </div>
                            </div>     
`
 }

 itemsPicked.innerHTML = selectedItems
 
} 


`
<!-- total ordered item section -->
                            <div>
                                <div class="total-order-box">
                                    <div class="ordered-item-nameBox">
                                        <h4>Total Price:</h4>
                                    </div>
                                    <div class="order-item-price">
                                        <p>$14</p>
                                    </div>
                                </div>
                            </div>
                            <button id="complete-order-btn" type="submit">Complete order</button>
`