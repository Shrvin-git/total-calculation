
let basePrice = document.querySelector('#basePrice')
let discount = document.querySelector('#discount')
let tax = document.querySelector('#tax')
let shippingPrice = document.querySelector('#shipping')
let btnElem = document.querySelector('button')
let finalPrice = document.querySelector('#finalPrice')

let totalPrice;


function priceCalculation() {
    let basePriceValue = basePrice.value
    let discountValue = discount.value
    let taxValue = tax.value
    let shippingPriceValue = shippingPrice.value


    console.log(shippingPriceValue);
    let discountCalculation = (basePriceValue * discountValue) / 100

    totalPrice = basePriceValue - discountCalculation
    let taxCalculation = (taxValue / 100) * totalPrice


    totalPrice += taxCalculation
    totalPrice += Number(shippingPriceValue)

    finalPrice.innerHTML = totalPrice
}






btnElem.addEventListener('click', priceCalculation)