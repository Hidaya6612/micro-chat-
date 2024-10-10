input.onButtonPressed(Button.A, function () {
    radio.sendString("Hallo")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(2)
