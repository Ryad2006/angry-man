sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Block.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
    music.bigCrash.playUntilDone()
})
let Block: Sprite = null
scene.setBackgroundColor(15)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . f f 2 f . . . . . . . 
    . . . . . 2 f 2 f . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . 2 2 2 2 . . . . . . . . 
    . . . . 2 2 2 2 . . . . . . . . 
    . 2 2 . 2 2 2 2 . . . . . . . . 
    . 2 2 . 2 2 2 2 . 2 2 . . . . . 
    . . . . 2 2 2 2 . 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 . . . . . . . . . . . 
    . . . 2 2 . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . f f 2 f . . . . . . . 
    . . . . . 2 f 2 f . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . 2 2 2 2 . . . . . . . . 
    . . . . 2 2 2 2 . . . . . . . . 
    . . . . 2 2 2 2 . 2 2 . . . . . 
    . 2 2 . 2 2 2 2 . 2 2 . . . . . 
    . 2 2 . 2 2 2 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . 2 2 . . 2 2 . . . . . . . 
    . . . 2 2 . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
controller.moveSprite(mySprite)
Block = sprites.create(img`
    f 2 2 f 2 2 f 2 2 f 2 2 f 2 2 f 
    f f f f f f f f f f f f f f f f 
    2 2 f 2 2 f 2 2 f 2 2 f 2 2 f 2 
    f f f f f f f f f f f f f f f f 
    f 2 2 f 2 2 f 2 2 f 2 2 f 2 2 f 
    f f f f f f f f f f f f f f f f 
    2 2 f 2 2 f 2 2 f 2 2 f 2 2 f 2 
    f f f f f f f f f f f f f f f f 
    f 2 2 f 2 2 f 2 2 f 2 2 f 2 2 f 
    f f f f f f f f f f f f f f f f 
    2 2 f 2 2 f 2 2 f 2 2 f 2 2 f 2 
    f f f f f f f f f f f f f f f f 
    f 2 2 f 2 2 f 2 2 f 2 2 f 2 2 f 
    f f f f f f f f f f f f f f f f 
    2 2 f 2 2 f 2 2 f 2 2 f 2 2 f 2 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Food)
