let font
let graphic

const waveInput = document.querySelector("input.wave")
const firstText = document.querySelector("input.first-text")
const secondText = document.querySelector("input.second-text")
const dxInput = document.querySelector("input.dx")
const dyInput = document.querySelector("input.dy")

function preload () {
    font = loadFont("fonts/spacegrotesk-medium.otf")
}

function setup () {
    createCanvas(1200, 600)

    createCopy()
}

function draw () {
    background("#ebe2d8")

    const tileSize = 10

    for (let x = 0; x < 120; x = x + 1) {

        for (let y = 0; y < 60; y = y + 1) {
            const speed = waveInput.value

            const distortionX = sin(frameCount * speed + x * 0.5 + y * 0.3) * dxInput.value
            const distortionY = sin(frameCount * speed + x * 0.2 + y * 0.7) * dyInput.value

            // source parameters
            const sx = x * tileSize + distortionX
            const sy = y * tileSize + distortionY
            const sw = tileSize
            const sh = tileSize

            // destination parameters

            const dx = x * tileSize
            const dy = y * tileSize
            const dw = tileSize
            const dh = tileSize

            image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
        }
    }

}

function createCopy () {

    graphic = createGraphics(1200, 600)

    const text = `${firstText.value}\n${secondText.value}`

    graphic.textFont(font)
    graphic.textSize(300)
    graphic.fill("#ff0000")
    graphic.textLeading(220)
    graphic.textAlign(CENTER, CENTER)
    graphic.text(text, 600, 300)
}

firstText.addEventListener("input", () => {
    createCopy()
} )

secondText.addEventListener("input", () => {
    createCopy()
} )

