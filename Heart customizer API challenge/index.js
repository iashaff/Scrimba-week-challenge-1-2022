const body = document.body
const heart = document.getElementById('heart')
document.getElementById("btn").addEventListener("click", changeColor)
let colorUrl = "https://apis.scrimba.com/hexcolors/?count=2"


async function changeColor() {
    let response = await fetch (colorUrl)
    if(response.ok){
        let color = await response.json()
        body.style.setProperty("background", color.colors[0].value)
        heart.style.setProperty("--heart-color", color.colors[1].value)
        
    } else console.log(`Error HTTP: ${response.status}`)
}
