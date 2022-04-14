const message = document.getElementById("paragraph")
document.getElementById("btn").addEventListener("click", correct)


function correct() {
     let letterMessage = message.textContent.toLowerCase().split(' ')
     
     let newMessage =  letterMessage.map(transform => transform[0].toUpperCase() + transform.slice(1))
     message.textContent = newMessage.join(' ')  
}
