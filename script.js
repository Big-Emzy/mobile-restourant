import { itemsData } from "./data.js";

const itemContainer = document.getElementById('itemsContainer')
const itemsPicked = document.getElementById('itemsPicked')
const yourOrder = document.getElementById('your-order')
const totalOrderContainer = document.getElementById('totalOrder')
const formContainer = document.getElementById('form-Container')
const cvv = document.getElementById('cvv')
const form = document.getElementById('paymentForm')
const orderConfirmation = document.getElementById('order-confirmation')

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
        renderForm(e.target)
        submitForm(e)
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


function renderForm(e) {
    if (e.id === 'complete-order-btn') {
        formContainer.style.display = "block"
    } 
}


function submitForm(e) {
    if (e.target.id === 'pay') {
        if (cvv.value.length > 3) {
            e.preventDefault()
            alert('your cvv should not be more than 3 values')
        }
        e.preventDefault()
        yourOrder.style.display = 'none'
        formContainer.style.display = "none"
        itemsPicked.style.display = 'none'
        totalOrderContainer.style.display = 'none'
        orderConfirmation.style.display = 'block'
        const formData = new FormData(form)
        const userName = formData.get('name')
        orderConfirmation.innerHTML = `
             <h3>Thanks, ${userName}! Your order is on its way!</h3> 
        `
    } 
}
