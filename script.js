import { itemsData } from "./data.js";

const itemContainer = document.getElementById('itemsContainer')
const itemsPicked = document.getElementById('itemsPicked')
const yourOrder = document.getElementById('your-order')
const totalOrderContainer = document.getElementById('totalOrder')

let itemsBox = ''
itemsData.map(function(item) {
    const {name, ingredients, itemImage, price} = item
    itemsBox += `
    <div class="items">
                <div class="pizza-namebox">
                    <div>
                        <img src=${itemImage} alt=${name} class="itemImage">
                    </div>
                    <div>
                        <h3 class="itemName">${name}</h3>
                        <p class="itemIngredients">${ingredients}</p>
                        <p class="itemPrice">$${price}</p>
                    </div>
                </div>
                <div class="addItemsIcon" role="button" data-add=${name} id=${price}>
                    <img src="./public/images/addItemIcon.png" alt="adding button" class="add-icon" data-add=${name} id=${price}>
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
let listofItemsPrices = []
let selectedItems = ''
function addItem(e) {
 if (e.classList.contains('add-icon') || e.classList.contains('addItemsIcon')) {
        listofItemsPrices.push(Number(e.id))
        yourOrder.style.display = 'block'
        itemsPicked.style.display = 'block'
        totalOrderContainer.style.display = 'block'
        selectedItems += `
                                <div class="ordered-Items">
                                    <div class="ordered-item-nameBox">
                                        <h4>${e.dataset.add}</h4>
                                        <p>remove</p>
                                    </div>
                                    <div class="order-item-price">
                                        <p>$${e.id}</p>
                                    </div>
                                </div> 
                        `
        renderTotalOrder(listofItemsPrices)              
 }
  
 itemsPicked.innerHTML = selectedItems
}



let totalOrder = ''
function renderTotalOrder(priceList) {
    const sumOfPrice = priceList.reduce((total, currentValue) => total + currentValue)
    totalOrder = `
                    <div>
                        <div class="total-order-box">
                            <div class="ordered-item-nameBox">
                                <h4>Total Price:</h4>
                            </div>
                            <div class="order-item-price">
                                <p>$${sumOfPrice}</p>
                            </div>
                        </div>
                    </div>
                    <button id="complete-order-btn" type="submit">Complete order</button>
                `
    return totalOrderContainer.innerHTML = totalOrder    
}


