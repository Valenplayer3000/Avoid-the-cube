sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(8, 200)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 f 1 1 1 1 1 f 1 . 
        . 1 1 1 1 1 1 1 f 1 1 1 f 1 1 . 
        . 1 1 1 1 1 1 1 1 f 1 f 1 1 1 . 
        . 1 1 1 1 1 1 1 f 1 1 1 f 1 1 . 
        . 1 1 1 1 1 1 f 1 1 1 1 1 f 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        `,img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 f 1 1 f 1 . 
        . 1 1 1 1 1 1 1 1 1 f 1 1 f 1 . 
        . 1 1 1 1 1 1 1 1 1 f 1 1 f 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        `,img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 f 1 f 1 . 
        . 1 1 1 1 1 1 1 1 1 1 f 1 f 1 . 
        . 1 1 1 1 1 1 1 1 1 1 f 1 f 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
    pause(5)
    mySprite2.setPosition(randint(0, 500), randint(0, 500))
    info.changeScoreBy(-1)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 f 1 1 1 1 1 1 1 1 f 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 f f f f f 1 1 1 1 . 
        . 1 1 1 1 f 1 1 1 1 1 f 1 1 1 . 
        . 1 1 1 f 1 1 1 1 1 1 1 f 1 1 . 
        . 1 1 1 f 1 1 1 1 1 1 1 f 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
    mySprite.destroy()
    pause(1000)
    game.splash(game.askForString("Name for High score. Please text."))
    game.splash("Game Over! Your score is:", "" + info.score())
    if (info.score() < 10) {
        game.splash("Tips #1", "Why did get here?")
    }
    if (info.score() > 80) {
        game.splash("almost here!", "" + info.score())
    }
    if (info.score() > 100) {
        game.splash("" + info.score() + "???")
        game.splash("...")
        game.splash("WHAT!?")
        game.splash("Why you get than ", "100 in score???")
        game.splash("Did you complete the game?")
        game.splash("Okay, you complete the game", "There you reward!")
        game.splash("Part of Pineapple.inc ", "\"Game Development\" 2020")
        game.splash("PS:", "Not complete again! >:(")
    }
    game.reset()
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(randint(0, 500), randint(0, 500))
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 f 1 1 f 1 . 
    . 1 1 1 1 1 1 1 1 1 f 1 1 f 1 . 
    . 1 1 1 1 1 1 1 1 1 f 1 1 f 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 200)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 f 2 2 2 2 2 2 2 2 2 2 f 2 . 
    . 2 f 2 2 2 2 2 2 2 2 2 2 f 2 . 
    . 2 f 2 2 2 2 2 2 2 2 2 2 f 2 . 
    . 2 f 2 2 2 2 2 2 2 2 2 2 f 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(randint(0, 500), randint(0, 500))
scene.cameraFollowSprite(mySprite)
mySprite2.follow(mySprite, 150)
info.setLife(5)
tiles.setTilemap(tiles.createTilemap(hex`1e003200010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102010101010101010101010101010101010101010101010101010101010102010101010101010101010101010101010101010101010101010101010202010101010101010101010101010101010101010101010101010101010202010101010101010101010101010101010101010101010101010101010202010101010101010101010101010101010101010101010101010101020202010101010101010101010101030301010101010101010101010101020202010101010101010101010303030301010101010101010101010102020202010101010101010303030303030301010101010101010101010102020202010101010303030303030303030301010101010101010101010102020202010103030303030303030303030301010101010101010101010202020202030303030303030303030303030301010101010101010101010202020202030303030303030303030303030301010101010101010101020202020202030303030303030303030303030301010101010101010101020202020202030303030303030303030303030301010101010101010101020202020202030303030303030303030303030301010101010101010102020202020202030303030303030303030303030301010101010101010102020202020202030303030303030303030303030301010101010101010202020202020202030303030303030303030303030301010101010101010202020202020202030303030303030303030303030301010101010101010202020202020202030303030303030303030303030301010101010101010101010101010101030303030303030303030301010101010101010101010101010101010101030303030303030303010101010101010303030303030301010101010101030303030303030101010101010103030303030303030303030303030303030303030101010101010101030303030303030303030303030303030303030301010101010101030303030303030303030303030303030303030303010101010101010303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303010101010303030303030303030303030303030303030303030303030303`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen))
forever(function () {
    pause(1000)
    info.changeScoreBy(1)
})
