function moveForward () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 40)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 40)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 40)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 40)
}
function turnLeft () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 40)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 40)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 40)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 40)
}
input.onButtonPressed(Button.A, function () {
	
})
function turnRight () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 40)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 40)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 40)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 40)
}
input.onButtonPressed(Button.B, function () {
    mecanumRobotV2.state()
    turnLeft()
    basic.pause(2000)
    turnLeft()
    basic.pause(2000)
})
function moveBackward () {
    mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 40)
    mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 40)
    mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 40)
    mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 40)
}
mecanumRobotV2.state()
led.enable(false)
mecanumRobotV2.setServo(90)
basic.forever(function () {
	
})
