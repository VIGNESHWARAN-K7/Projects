function convert(){
    const vicky = Number(document.getElementById("inputbox").value)
    const vicky1 =vicky/2.54
    const vicky2 = document.getElementById("result")
    vicky2.innerHTML = vicky1.toFixed(3) + "inches"
}

