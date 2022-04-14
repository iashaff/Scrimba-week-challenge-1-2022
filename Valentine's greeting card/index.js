const greetingDisplay = document.getElementById("greeting-display")
const formData = document.getElementById('form')
const sender = document.getElementById("sender-input")
const recipient = document.getElementById("recipient-input")
const greeting = document.getElementById("greeting-select")


formData.addEventListener('input', writeGreeting)
function writeGreeting(event) {
    greetingDisplay.innerHTML = `<p>Dear, ${recipient.value}</p> 
                                    <p class="message">${greeting.value}</p>  
                                        <p class="sender">${sender.value}</p>`
}
