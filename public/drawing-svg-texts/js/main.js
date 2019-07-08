let draw = SVG('drawing').size(1000, 1000)
let svg = document.querySelector('svg');
const saveBtn = document.getElementById('saveBtn');
const exportBtn = document.getElementById('exportBtn');
const timeH1 = document.getElementById('time');
let lastX = 0;
let lastY = 0;
let click = 0;
let inputs = [];
let pointsArray = [];
let allLines = [];
let arraySvgSmall = [];
let texts = [];
let versionNbr = 0;
let topH = 40;
const start = Date.now();
let time = 0;


// setInterval(() => {
//     time = new Date();
//     timeH1.innerText = ` 📆${time.getFullYear()}/${time.getMonth()}/${time.getDay()} -- 🕐${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${time.getMilliseconds()}`
// }, 50);



svg.addEventListener('click', (event) => {
    let x1 = event.clientX;
    let y1 = event.clientY;
    if (arraySvgSmall.length > 0 && click < 1) {
        arraySvgSmall.forEach(svgSmall => {
            svg.insertAdjacentHTML('afterbegin', svgSmall)
        })
        let last = svg.querySelector('line')
        console.log(last)
        lastX = parseInt(last.getAttribute('x2'), 10);
        lastY = parseInt(last.getAttribute('y2'), 10);
    } else {
        if (event.srcElement.nodeName !== 'input' && event.srcElement.nodeName !== 'A') {
            createInput(x1, y1, event)
            createLine(x1, y1)
        }

        inputs.forEach(input => {
            inputBlur(input)
        })

        update(x1, y1, lastX, lastY);
        lastX = event.clientX;
        lastY = event.clientY;
    }

    click += 1
})

saveBtn.addEventListener('click', (event) => {
    // svg = document.createElement(svg)
    // svg.id = `${nmbrSvg}`
    // document.body.appendChild(svg)
    let colorStroke = getRandomColor()
    // let timeH = document.createElement('h1')
    // let style = document.createElement('style');
    // style.type = 'text/css';
    // style.innerHTML = `.time-version-${versionNbr} { color: ${colorStroke}; top:${topH}px }`;
    // document.getElementsByTagName('head')[0].appendChild(style);
    // timeH.className = `time-version-${versionNbr}`;
    // // timeH.innerText = `${time}`
    // document.body.appendChild(timeH).innerText = ` 📆${time.getFullYear()}/${time.getMonth()}/${time.getDay()} -- 🕐${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${time.getMilliseconds()}`


    pointsArray.forEach((point, index) => {
        if (index < pointsArray.length - 1) {
            // arraySvgSmall.push(draw.polygon(`${point.x},${point.y} ${pointsArray[index + 1].x},${pointsArray[index + 1].y}`).fill('#f06'))
            arraySvgSmall.push(`<line x1="${point.x}" y1="${point.y}" x2="${pointsArray[index + 1].x}" y2="${pointsArray[index + 1].y}" stroke="${colorStroke}" className="version${versionNbr}" />`)
        }
    })

    texts.forEach(text => {
        if (pointsArray.length > 1) {
            arraySvgSmall.push(`<text x="${text.style.left}" y="${text.style.top}" font-size="10px" fill="black">${text.innerText}</text>`)
        }
        text.remove()
    });

    inputs.forEach(input => {
        input.remove()
    });

    lastX = 0;
    lastY = 0;
    svg.innerHTML = " "
    pointsArray = [];
    allLines = [];
    click = 0;
    versionNbr += 1;
    topH += 20;
})

exportBtn.addEventListener('click', event => {
    console.log(draw.svg())
    download(`v${versionNbr}.svg`, draw.svg())
}, false)

const createInput = (x1, y1) => {
    let input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.style.left = `${x1}px`
    input.style.top = `${y1}px`
    document.body.appendChild(input)
    inputs.push(input)
    inputs[inputs.length - 1].focus()
}

const createLine = (x1, y1) => {
    svg.insertAdjacentHTML('afterbegin',
        `<line x1="${x1}" y1="${y1}" x2="${lastX}" y2="${lastY}" stroke="black" className="line1" />`
    )
}

const inputBlur = (input) => {
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            input.blur()
        }
    });
    input.addEventListener('blur', (event) => {
        console.log(typeof event.target.value)
        if (event.target.value == "quentin") {
            console.log(event.target.value)
            let a = document.createElement("a")
            a.innerHTML = `${event.target.value}`
            a.style.position = "absolute"
            a.style.left = `${event.target.offsetLeft}px`
            a.style.top = `${event.target.offsetTop}px`
            a.href = "http://localhost:8082/ipfs/QmNbmc5w5Nrqd4k1AAbd7e56usqmJkndYBzT2aMUaycC5A/"
            document.body.appendChild(a);
            texts.push(a)
            event.target.remove();
        } else if (event.target.value == "simon")  {
            console.log(event.target.value)
            let a = document.createElement("a")
            a.innerHTML = `${event.target.value}`
            a.style.position = "absolute"
            a.style.left = `${event.target.offsetLeft}px`
            a.style.top = `${event.target.offsetTop}px`
            document.body.appendChild(a);
            texts.push(a)
            event.target.remove();
        } else if (event.target.value == "gabriele")  {
            console.log(event.target.value)
            let a = document.createElement("a")
            a.innerHTML = `${event.target.value}`
            a.style.position = "absolute"
            a.style.left = `${event.target.offsetLeft}px`
            a.style.top = `${event.target.offsetTop}px`
            document.body.appendChild(a);
            texts.push(a)
            event.target.remove();
        } else if (event.target.value == "dorian") {
            console.log(event.target.value)
            let a = document.createElement("a")
            a.innerHTML = `${event.target.value}`
            a.style.position = "absolute"
            a.style.left = `${event.target.offsetLeft}px`
            a.style.top = `${event.target.offsetTop}px`
            document.body.appendChild(a);
            texts.push(a)
            event.target.remove();
        }else {
            let p = document.createElement("p")
            p.innerHTML = `${event.target.value}`
            p.style.position = "absolute"
            p.style.left = `${event.target.offsetLeft}px`
            p.style.top = `${event.target.offsetTop}px`
            document.body.appendChild(p);
            texts.push(p)
            event.target.remove();
        }

    })
}

const checkLineIntersection = (line1StartX, line1StartY, line1EndX, line1EndY, line2StartX, line2StartY, line2EndX,
    line2EndY) => {
    let denominator, a, b, numerator1, numerator2, result = {
        x: null,
        y: null,
        onLine1: false,
        onLine2: false
    };
    denominator = ((line2EndY - line2StartY) * (line1EndX - line1StartX)) - ((line2EndX - line2StartX) * (
        line1EndY - line1StartY));

    if (denominator == 0) {
        return result;
    }
    a = line1StartY - line2StartY;
    b = line1StartX - line2StartX;
    numerator1 = ((line2EndX - line2StartX) * a) - ((line2EndY - line2StartY) * b);
    numerator2 = ((line1EndX - line1StartX) * a) - ((line1EndY - line1StartY) * b);
    a = numerator1 / denominator;
    b = numerator2 / denominator;

    result.x = line1StartX + (a * (line1EndX - line1StartX));
    result.y = line1StartY + (a * (line1EndY - line1StartY));

    if (a > 0 && a < 1) {
        result.onLine1 = true;
    }
    if (b > 0 && b < 1) {
        result.onLine2 = true;
    }
    return result;
};

const drawPoint = (x, y, color) => {
    const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cir1.setAttribute("cx", `${x}`);
    cir1.setAttribute("cy", `${y}`);
    cir1.setAttribute("r", "3");
    cir1.setAttribute("fill", `${color}`);
    svg.appendChild(cir1);
};

const update = (x1, y1, x2, y2) => {
    allLines = svg.querySelectorAll('line')
    let line2 = {
        startX: x1,
        startY: y1,
        endX: x2,
        endY: y2
    };
    let results;
    allLines.forEach(line => {

        let line1 = {
            startX: parseInt(line.getAttribute('x2'), 10),
            startY: parseInt(line.getAttribute('y2'), 10),
            endX: parseInt(line.getAttribute('x1'), 10),
            endY: parseInt(line.getAttribute('y1'), 10)
        };

        results = checkLineIntersection(line1.startX, line1.startY, line1.endX, line1.endY, line2.startX,
            line2.startY,
            line2.endX, line2.endY);

        if (results.onLine1 && results.onLine2) {
            drawPoint(results.x, results.y, 'red')
            pointsArray.push({ x: results.x, y: results.y })
        }
    })
};

const download = (filename, text) => {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
