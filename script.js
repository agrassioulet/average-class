const btn = document.getElementById("generate-images")
const mainGrid = document.getElementById("main-grid")
console.log("aaa")

btn.onclick = (e) => {
    e.preventDefault()
    console.log("ijiji")
    for (let img of mainGrid.children) {
        img.setAttribute("src", "https://picsum.photos/200?rand_number=" + Math.random())
    }
}