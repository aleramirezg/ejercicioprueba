input.onButtonPressed(Button.A, function () {
    suma = numero_1 + numero_2
    basic.showNumber(suma)
    suma = "sumaste "
})
input.onButtonPressed(Button.AB, function () {
    multiplicacion = numero_1 * numero_2
    basic.showNumber(multiplicacion)
    texto = "multiplicaste"
})
input.onButtonPressed(Button.B, function () {
    resta = numero_1 - numero_2
    basic.showNumber(resta)
    texto = "restaste"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(numero_1)
    basic.showNumber(numero_2)
    basic.showString(texto)
})
let texto = ""
let multiplicacion = 0
let resta = 0
let suma = 0
let numero_2 = 0
let numero_1 = 0
numero_1 = randint(1, 5)
numero_2 = randint(1, 5)
suma = 0
resta = 0
multiplicacion = 0
texto = "ninguna"
basic.forever(function () {
	
})
