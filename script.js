const canvas = document.querySelector("#canvas")
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

document.body.onresize = () => {
    canvas.width = document.body.clientWidth
    canvas.height = document.body.clientHeight
    main()
}

const ctx = canvas.getContext("2d")

const dots = []

const main = () => {
    // Draw black background
    ctx.fillStyle = "#000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

// Draw white points
    const config = {
        pixelSize: 1,
        pixelNumbers: Infinity,
        updateInterval: 1,
        pixelColor: "#0c22f3"
    }
    let paintedDots = 0

    if (JSON.stringify(dots) !== "[]" && paintedDots === 0) {
        dots.forEach((dot) => {
            ctx.fillStyle = config.pixelColor
            ctx.fillRect(dot.x, dot.y, config.pixelSize, config.pixelSize)
        })
    }

    setInterval(() => {
        if (paintedDots < config.pixelNumbers) {
            ctx.fillStyle = config.pixelColor
            let x = Math.random() * canvas.width
            let y = Math.random() * canvas.height
            if (!dots.includes({x, y})) {
                dots.push({x, y})
                ctx.fillRect(x, y, config.pixelSize, config.pixelSize)
                paintedDots++
            } else {
                return ""
            }

        }
    }, config.updateInterval)
}
main()