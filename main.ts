input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index <= 4; index++) {
            led.plot(index, 2)
            basic.pause(50)
        }
        basic.clearScreen()
        for (let index = 0; index <= 4; index++) {
            led.plot(4 - index, 2)
            basic.pause(50)
        }
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index <= 4; index++) {
            led.plot(index, 2)
            led.unplot(index - 1, 2)
            basic.pause(50)
        }
        basic.clearScreen()
        for (let index = 0; index <= 4; index++) {
            led.plot(4 - index, 2)
            led.unplot(5 - index, 2)
            basic.pause(50)
        }
        basic.clearScreen()
    }
})
