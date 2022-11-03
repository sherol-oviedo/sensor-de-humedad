function encender_rego () {
    if (humedad > 350) {
        basic.showIcon(IconNames.Umbrella)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P2, 80)
        basic.pause(3000)
        pins.analogWritePin(AnalogPin.P2, 0)
    }
    basic.pause(5000)
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(humedad)
})
function medida_sensor () {
    humedad = pins.analogReadPin(AnalogPin.P1)
    serial.writeValue("HumedadSuelo", humedad)
}
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Umbrella)
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(3000)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.pause(3000)
    pins.analogWritePin(AnalogPin.P2, 0)
})
let humedad = 0
humedad = 350
basic.forever(function () {
    medida_sensor()
    basic.showIcon(IconNames.Yes)
    encender_rego()
})
