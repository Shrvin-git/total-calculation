
let basePrice = document.querySelector('#basePrice')
let discount = document.querySelector('#discount')
let tax = document.querySelector('#tax')
let shippingPrice = document.querySelector('#shipping')
let btnElem = document.querySelector('button')
let finalPrice = document.querySelector('#finalPrice')
const discountTotal = document.querySelector('.discount_total')
const taxtTotal = document.querySelector('.tax_total')

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

    discountTotal.innerHTML = ' مقدار تخفیف کسر شده : ' + discountCalculation + '  هزار تومان میباشد';
    taxtTotal.innerHTML = '  مقدار مالیات اضافه شده : ' + taxCalculation + '  هزار تومان میباشد';

}






btnElem.addEventListener('click', priceCalculation)
