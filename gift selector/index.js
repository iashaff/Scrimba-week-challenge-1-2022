document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
const transportDeliver = document.getElementById("transport-select")
const food = document.getElementById("food-select")
const ballons = document.getElementById("balloon-checkbox")



function calculate() {
    let foodValue = Number(food.value)
    let transportValue = Number(transportDeliver.value)
    let sum = 0

    if (transportValue != "" && foodValue != "") {
        if (ballons.checked) {
            sum = foodValue + transportValue + 1
            costEl.innerHTML = `${sum} $`
        } else
            sum = foodValue + transportValue
        costEl.innerHTML = `${sum} $`
    } else costEl.textContent = "Please, select the options"

}
