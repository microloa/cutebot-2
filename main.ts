cuteBot.forward()
cuteBot.stopcar()
basic.forever(function () {
    if (input.lightLevel() < 10) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 125, 125, 125)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 125, 125, 125)
    } else {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
    }
    basic.pause(1000)
})
