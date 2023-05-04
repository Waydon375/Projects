//document.getElementById("count-el").innerText = 5
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
console.log(saveEl)
let count = 0
function increment(){
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save(){
    let countStr = count + " - "
    saveEl.innerText += countStr
    countEl.innerText = 0
    count = 0
    console.log(count)
    
}






