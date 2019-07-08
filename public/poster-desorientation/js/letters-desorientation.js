
const text = document.getElementById("text");
const string = text.innerHTML
let i = 0;
let inner;

string.split(" ").forEach(word => {
    if (i === 0) {
        text.innerHTML = " "
    }
    text.innerHTML += `<span class=\"word\">${word}</span><span class=\"space\"> </span>`
    i++
})

const words = document.querySelectorAll(".word")

words.forEach(word => {
    inner = word.innerHTML
    word.innerHTML = ""
    inner.split("").forEach(letter => {
        word.innerHTML += `<span class=\"ouf\">${letter}</span>`
    })
})
// } else {
//     text.innerHTML += `<span STYLE="text-wrap:none" class=\"ef\">${word}</span>`
// }





const spans = document.querySelectorAll('.ouf')
let pointerBox,
    centerPoint,
    centers,
    centerX,
    centerY,
    radians,
    degree;




document.addEventListener('mousemove', (e) => {
    
    // event.preventDefault()
    spans.forEach((span, i) => {
     

        pointerBox = span.getBoundingClientRect()

        centerPoint = window.getComputedStyle(span).transformOrigin

        centers = centerPoint.split(" ")


        centerY = pointerBox.top + parseInt(centers[1]) - window.pageYOffset
        centerX = pointerBox.left + parseInt(centers[0]) - window.pageXOffset


        if ((e.clientX - centerX) < 50 && (e.clientX - centerX) > -50 && (e.clientY - centerY) < 50 && (e.clientY - centerY) > -50) {
            // console.log(span)
            radians = Math.atan2(e.clientX - centerX, e.clientY - centerY)
            degree = (radians * (180 / Math.PI) * -1) + 180
            span.id = `${i}`

            span.style.transform = "rotate(" + degree + "deg)"

        } else {
            span.style.transform = "rotate(" + 0 + "deg)"
        }

    })
})




