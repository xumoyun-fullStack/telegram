let btn = document.querySelector("button")
let input = document.querySelector("input")
let ulElement = document.querySelector(".container")

let messages = []
btn.addEventListener("click", function(){
    let text = input.value
    let msg = `<li class="from_me">${text}</li>`
    messages.push(msg)
    render()
})

function render(){
    ulElement.innerHTML = ""
    for(let i = 0; i < messages.length; i++){
        ulElement.innerHTML += messages[i]
    }
}

render()