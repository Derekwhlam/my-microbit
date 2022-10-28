let Lightlevel = 0
let Dice = 0
let Direction2 = 0
let Paper = 0
let Multiplchoices = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Lightlevel = input.lightLevel()
    led.plotBarGraph(
    Lightlevel,
    255
    )
})
input.onGesture(Gesture.Shake, function () {
    Dice = randint(1, 6)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    if (Dice == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (Dice < 2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            `)
    } else if (Dice == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    } else if (Dice == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (Dice == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
    Direction2 = input.compassHeading()
    if (Direction2 > 22.5 && Direction2 < 67.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (Direction2 > 67.5 && Direction2 < 112.5) {
        basic.showArrow(ArrowNames.East)
    } else if (Direction2 > 112.5 && Direction2 < 157.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (Direction2 > 157.5 && Direction2 < 202.5) {
        basic.showArrow(ArrowNames.South)
    } else if (Direction2 > 202.5 && Direction2 < 247.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (Direction2 > 247.5 && Direction2 < 292.5) {
        basic.showArrow(ArrowNames.West)
    } else if (Direction2 > 292.5 && Direction2 < 337.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
input.onButtonPressed(Button.A, function () {
    Paper = randint(1, 3)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
    if (Paper == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (Paper == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    Direction2 = input.compassHeading()
    if (Direction2 > 23 && Direction2 < 68) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (Direction2 > 69 && Direction2 < 113) {
        basic.showArrow(ArrowNames.North)
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    Multiplchoices = randint(1, 5)
    if (Multiplchoices == 1) {
        basic.showString("A")
    } else if (Multiplchoices == 2) {
        basic.showString("B")
    } else if (Multiplchoices == 3) {
        basic.showString("C")
    } else if (Multiplchoices == 4) {
        basic.showString("D")
    } else {
        basic.showString("E")
    }
})
