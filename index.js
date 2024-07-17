/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convBtn = document.getElementById("conv-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
render()
convBtn.addEventListener("click", render)

function render(){
    if(Number(inputEl.value)) {
        base = Number(inputEl.value)
    } else {
        base = 0
    }
    lengthEl.innerHTML = `${base} meters = ${convert(base, 3.281)} feet | ${base} feet = ${convert(base, 1/3.281)} meters`
    volumeEl.innerHTML = `${base} liters = ${convert(base, 0.264)} gallons | ${base} gallons = ${convert(base, 1/0.264)} litres`
    massEl.innerHTML = `${base} kilograms = ${convert(base, 2.204)} pounds | ${base} pounds = ${convert(base, 1/2.204)} kilograms`
}

function convert(num, conversionRate) {
    return (num * conversionRate).toFixed(3)
}