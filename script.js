let x = 16
function draw(x,pixelColor){
    for (let i = 1; i <= (x); i++) {
    let rowDiv = document.createElement("div")
    const container = document.querySelector(".container")
    container.style.border = "5px solid black"
    rowDiv.className = "rowDiv"
    rowDiv.style.width = "960px";
    rowDiv.style.height = `${960/x}px`
    container.append(rowDiv);
    for (let j = 1; j <= x; j++) {
        let elementDiv = document.createElement("div");
        // elementDiv.className = "elementDiv"
        elementDiv.addEventListener('mouseover', () => {
            elementDiv.style.backgroundColor = "red";
        })
        rowDiv.append(elementDiv);
        // elementDiv.style.border = "1px solid gray"
        elementDiv.style.display = "inline-block"
        elementDiv.style.width = `${960/x}px`
        elementDiv.style.height = `${960/x}px`
        elementDiv.style.backgroundColor = pixelColor;
    }
}
}
draw(x,"aqua")

function remove(){
    let rowDivs = document.querySelectorAll(".rowDiv")
    rowDivs.forEach((rowDiv) => rowDiv.remove()
    )
}
// let elementDiv = document.querySelector(".elementDiv")

button1 = document.querySelector('.btn1')
button1.addEventListener('click',() => {
    x = Number(prompt("Enter Size:"))
    remove()
    draw(x,"aqua")

})

button2 = document.querySelector('.btn2')
button2.addEventListener('click',()=> {
    remove()
    draw(x,"aqua")
})
