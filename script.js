

const btn = document.querySelector(".btn")

const body = document.querySelector("body");

function generColor() {

    let rdncolor = Math.floor(Math.random() * 256);

    return rdncolor;
}



btn.addEventListener("click", ()=>{
    body.style.backgroundColor = `rgb(${generColor()}, ${generColor()}, ${generColor()})`
})




