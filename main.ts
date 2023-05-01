function quest3 () {
    music.play(music.createSong(assets.song`suspense`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(img`
        ..............................................................................1
        11.ccc.......................................................................1.
        ..1111ccc...................................................................1c.
        ...cc5111ccccc............................................................11cc.
        .....c5551111ccc.........................................................1bcc..
        ......ccc5555111cccccc..................................................1ccbc..
        .........1ccc555111111cccc............................................11cbcc...
        ..........1ccccc5555551111ccc........................................1bcbcc....
        ...........1cccccccccc5555111ccc....................................1ccbccc....
        ............1ccccccccccccc555111cc.................................1c55cccc....
        ............1cccccccccccccccc55511c...............................1c55cccc.....
        ...........1cccccccccccccccccccc551c.............................1555cccbc.....
        ...........1cccccccccccccbcbcbbc5551c...........................1555cccbcc.....
        ...........1cccccccccbcbcbbbb55555511c.........................1555c5ccccc.....
        ..........1cccccccbcbcbcbbb55cc55ccc11c.......................1555ccc55ccc.....
        .........1.ccbcbcbcbcbbbbb5ccc551...c11c.....................1c155ccccc55c.....
        ........1.ccbcbcbcbbbbbbb5ccc5c51....cc......................1c1ccccbcccccc....
        .....111.bbbbbbbbbbbbb555ccc5cc51............................1c1cccbcc.........
        ......ccbbbbbbbbbbb555ccccc5ccc51............................1c1ccbcc..........
        .......c55555555555ccccccc5ccccc51.......111111..............1c1cccb...........
        .........cccccccccccccccc5ccccccc51...c1155555511............1cccccc...........
        ..........ccccccccccccccb5ccccccc551.cbbbbbbbcc551...........1cc5ccc...........
        ...........ccccccccccccb5cccccccc5c515bbbbbbbbbc551..........1ccc5cc...........
        ............ccccccccccbc5cccccbcc5cc515bbbbbbbbbc551........1ccccc5cc..........
        ............cccccccbcbcb5ccccbccc5ccc515bbbbbbbbbc551.......1cccccc............
        ...........1..ccccbcbcb5ccccccbcc5cccc515bbbbbbbbbc551b.....1cccbc.............
        .........115c..ccccbcbb5cccbcbccc5ccccc515bbbbbbbbbc551b....1ccbc..............
        ........1b5bc..cccbbbb5cccccbcbcc5cbcccc515bbbb1bbbbc51bb..1ccccc..............
        .......1b5bc...ccbcbbb5ccccccbcc5cccbcccc515bbbb1bbbbc51bb..cccbc..............
        ......1b5bbc...cccbbb5ccccbcbccc5ccbcccccc515bbbb1bbbc51bbbcccbcc..............
        .....1b15bc....cccbb5ccccbcbcccc5cccccccccc515bb1b1bbbc51bbccccbc..............
        ...c1b15bbc....ccbb5ccccccccbcc5ccccbbbbcccc51bbb1bbbbc51bbbccccc..............
        ..c1b1b5bc.....cbb5cccccccccccccccbbbbbbbcccc15bbb1bbbbc51bbccccc..............
        ..c1bbb5bc.....cb5.......cccccccbbbbbbbbbbbcb15bbbbbbbbc51bbbccc...............
        ..c1bbbb5c......5........1cccccbbbbbbbbbbbbbb15bbbbbbbbbc51bbbcc...............
        ..c1cbbb51c....c........1cbbcbbbbbbbbbbbbbbbbb15bbbbb1bbc51bbb5c...............
        ..1bcbbbb51c...........1ccbbbbbbbbbbbbbbbbbbbb15bbbb1bbbb51bbbb1...............
        ..11ccbbbb511.........1cc1bbbbbbbbbbbbb1b1bbbb155bbbb1bbb51bcbb1...............
        ...1cccbb1b51cc...1111cc1bbbbbbbbbbbbb1b1b1bbbb15bbb1bbbb51bbbb1...............
        ...1ccccbb1b511111555b11bbbbbbbbbbbbbbb1b1bbbbb15bb1b1bbb51bcbb1...............
        .....ccccbbbb55555bbb11bbbbbbbbbbbbbbbbbbb1bbbb15bbbbbbbb51bbbb5...............
        ......ccccbbbbbbbbbbb1bbbbbbbb1bbbbbbbbbbbbbbbb15cbbbbbbc51bbcb5...............
        .......ccccbcbbbbbbb1b1bbbbbb1b1bbbbbbbbbbbbbbb15cbcbcbb15cbcbb5...............
        ........ccccbcbcbcbc11bbbbbb1b1b1bbbbbcbbbbcbbb15cbbcbbb15cbbcb5...............
        ..........cccccbcbcc1b1bbbbbb111b1bbbcbbcbcbbbb15cbcbcbb15cbcbb5...............
        ...........ccccccccc11bbbbbb1b1111cbbbbbbcbbbbb15cbbcbb15cbbbb15...............
        ..............ccccccc1bbbbbbb11111cbbbbbcbbbbbb15cbcbbb15cbbbb15...............
        ...............cccccc1bbbbbbbb11111cbbbbbbbbbcb15cbbbb15cbcbb15................
        ..................cccc1ccbbcb1b1111cbbbbbbbbcbc15cbcbb15cbcbb15................
        .......................1bbbbbb11111cbbbbbbbcbcc15cbbb15cbbbb15.................
        ........................cbbcbcb1111cbbbb1bbbcbc1cbbb15c1bbbb15.................
        .........................cbbcbcb1111cbbb11bbbb11cbbc1515cbb15b.................
        ..........................cbbcbbb111.cbb151bbb15cbc1515ccb115..................
        .........................cccbbbbcb1b.cbc1c51b15b1b1515cbcb15b..................
        .........................ccccbbcbcbbc.bc1bc51cc51cc15cbbc15bc..................
        ........................ccccccbbcbcbc.cb1bbc51cccc15cbbbc5bcc..................
        ........................cbcccccbbbbc..bb1bbbc5bbbb5cbbbbcbcccb.................
        ........................ccbcccccccc...cb1bbcbcbbbcbccbbbccccbcb................
        ........................cbcccc.........1cbbcbbcccbbccbbbcccccbcb...............
        ........................1cbccc.........1bcbbccbcbcccbbcbbc.cbcbb...............
        ........................1bcbcc.........1b4cbcbcccbccbc4bbc..bbbbbb.............
        .........................1bcbcc........1b45cbcbcbccbc54bbc...bbbbbb.1.b........
        ..........................cbbbc........1bbf4cbccccbc4fbbbc....bbbbbb.b.b.......
        ..........................c1bbbc.......1bbbbbbbbbbbbbbbbbc.....bbbbbb.11b......
        ...........................c1bbbc......1ccbbcccbcccbbccb1c....bb111bb1111b.....
        ............................c1bbbc.....cc1ccbbbcbbbcc11cb........11............
        ............................cb1bb11....c211cbcbcbcbc11c2c.........1............
        ............................c1b1cb11...cb1c1cbbcbbc1c1cc..........1............
        ...........................c1bc.1ccc1...cbcc1ccccc1cc2c........................
        ...........................c1c...1.cc....cbcc11b11cc2bc........................
        ............................c.............cb21ccc1c2bc.........................
        ...........................................cb21c122bc..........................
        ...........................................ccbb2bbbc...........................
        ...........................................cccb2bcccb..........................
        ...........................................bccbbbc.............................
        ...........................................cbccccc.............................
        ...........................................bcbcbcc.............................
        ............................................bcbcbc.............................
        ..........................................cbcbbbbb.............................
        ..........................................bcbbbbbb.............................
        ..........................................cbbbbbbb.............................
        ..........................................cccbbbb..11..........................
        ..........................................bccccbb111.1.........................
        ..........................................1b1b111...1..........................
        ...........................................11.11.11............................
        ...........................................11..1..1............................
        ...........................................11..1...1...........................
        ...........................................1...1...............................
        `)
    adventure.addToTextlog("A dragon hovers above. The flap of his wings is threatening.")
    adventure.addToTextlog("Press (A) stand and watch.")
    adventure.addToTextlog("Press (B) to hide.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("That was a really bad idea.")
        adventure.addToTextlog("The dragon meets your gaze and sweeps down to grab you.")
        info.changeLifeBy(-2)
    } else {
        adventure.addToTextlog("You hide behind a large tree with a cavern in the trunk.")
        adventure.addToTextlog("Inside, you see something glimmer.  It's a treasure chest!")
        adventure.changeScoreOverride(adventure.Currency.Coins, 100)
    }
}
function quest1 () {
    music.play(music.createSong(assets.song`jolly`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(img`
        ...eddd5.4......................................................
        ..edd5de4..4....................................................
        .edd5e.de14.....................................................
        .ed5e.e.de5.....................................................
        .e5e.e.e.d4.....................................................
        .ed1e.e.e.4.....................................................
        .eed1e.e.ed5....................................................
        .4eed1e.eded5...................................................
        4..eee1ededed5..................................................
        ..4.eeedededed1.................................................
        .4....eededede51................................................
        .......eedede4ed1...............................................
        ........eede4ede51..............................................
        .........eedede4ed1.............................................
        ..........eede4ede51............................................
        ...........eedede4ed1...........................................
        ............eede4ede51..........................................
        .............eedede4ed1.........................................
        ..............eede4eded1........................................
        ...............eedededed1.......................................
        ................eedededed5......................................
        .................eedededed5.....................................
        ..................eedededed5....................................
        ...................eedededed544444444455555.....................
        ....................eededededdddddddddddddd51...................
        .....................eededededdddddddddddddd441.................
        ......................eededededddddddddddddddd44................
        .......................eededededdddddd5ddddddddd4...............
        .......................eeddedededdddddddd5ddddddd4..............
        .......................eedddedededeeeeddddddddddd4..............
        .......................eeddddedede4444eddddddddddd4.............
        .......................eedddddede4eccc4edd5ddddddd4.............
        .......................eedddddde4ececcc4edddddddddd4............
        .......................eeddddde4ecececc4edddddddddd5............
        .......................eeddddde4cececec4edddddddddd5............
        .......................eeddddde4ccecece4eddddddd4dd5eeee........
        .......................eeddd5dee4ccececeddddddd5ddd4ddde5e......
        .......................eeddddddde4ccecededddddddddddddddd55.....
        .......................eedddddddde444edededdd4dddddddddddd55....
        .......................eeddddddddeeeedededed5dddddddddddddd55...
        .......................eeddd5ddddddddddedededddddddddddddddde5..
        .......................eeedddddd5dddddddedededddddddddddddddde5.
        ........................eedddddddddddddddedededddddddddddddddd55
        ........................eeeddddddddddddd4dedededdddddddddddddde5
        .........................eeddddddddddddddddedededdddddddddddddd4
        .........................eeedddddddddd5dddddedededddddddddddddd4
        ..........................eeeddddddddddddddddedededdddddddddddd4
        ...........................eeeeddddd4dddddddddededefddddddddddd4
        ............................eeeeeddddddddddddddedefeddddddddddd4
        ..............................eeeeddddddddddddddefedddddddddddde
        ................................eeddddddddddddddfeddddddddddddee
        .................................eeddddddddddddddddddddddddddee.
        .................................eedddddddddddddddddddddddddeee.
        .................................eeddddddddddddddddddddddddeee..
        .................................eeeddddddddddddddddddddddeee...
        ..................................eedddddddddddddddddddddeee....
        ..................................eeedddddddddddddddddddeee.....
        ...................................eeddddddddddddddddddeee......
        ...................................eeeddddddddddddddddeee.......
        ....................................eeeddddddddddddddeee........
        .....................................eeeddddddddddddeee.........
        ......................................eeeddddddddddeee..........
        .......................................eeeeeeeeeeeeee...........
        ........................................eeeeeeeeeeee............
        `)
    adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
    adventure.addToTextlog("Press (A) to join the fun.")
    adventure.addToTextlog("Press (B) to turn and run.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure.")
        quest2()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun.")
        game.over(false)
    }
}
function quest2 () {
    music.play(music.createSong(assets.song`jolly`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(img`
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ................................................ff.................................................
        ................................................ff.................................................
        ...............................11111111111111111ff.................................................
        ..............................222222222222222221ff.................................................
        ................................................ff.................................................
        ................................................ff.................................................
        ................................................ff.................................................
        ................................................ff.................................................
        ................................................ff.................................................
        ..........................................aaaa1111111...1111111111cc...............................
        ..........................................a2222111111...1111221111ff...............................
        ..........................................2222222222c...2222222222ff...............................
        ...........................................dbdbbbccffccc..........ff...............................
        ..........................................dddbdbbccffccc..........ff...............................
        ............................................ddbbcccff.............ff...............................
        ..........................................ccfffffffff...........ffff...............................
        ..........................................ccfffffffff...........ffff...............................
        ......................................fffffff...ff................fffff............................
        ......................................fffffff...ff................fffff............................
        ........................................fffff...ff................fffff............................
        ........................................ffffffffffff.......dbfffccfffff............................
        ........................................ccccccccccfff......ddfffccfffff............................
        ..........................f.............dddddddddbffffc.....ddbbbcff...............................
        ..........................ffffe4........dddddddddbcfffff....dddbccff...............................
        ..........................ffffe4d.......ddddddbdbbccffff....dbddcbff...............................
        ..........................fffce4d.......ddddddddbcccffff....dddbccff...............................
        ...............fffff......ffeee4........ddddddbbccccffff....ddbbffff....bddc.......................
        ...............fffcf......f.............ddddbbbdbcccffff...ddbbcffff....dbbbc......................
        .................ffffffffff.............dddddbbbccccffff...bbfffffff.....dbbdf.....................
        ..................fffffffff.............ddddbdbccccccfff...bbfffffff......dbbbf....................
        ..................fffffffff.............dbdbbbcccccfcfff...bbfffffff.......dbbfb...................
        ....................dddddddffff.........dddbbccbcccfcfff..dddddbbbccfff....ddbbbbf.................
        ....................ddbddbbfffff........dddbccccccccffff...dddbbdccccff.....dbbbbff................
        ....................ddddbbcfcfff........ddbbccccccccffff....dddbbbcccff.....dbdcbccd...............
        ....................dddbdbccffff........dbbbcbccccfcffff.....ddbbccccffff...dbbbcbccf..............
        ....................dbdbbccfcfff........ddbccccccccfffff......dbbcbcccfff...dbbbbbccff.............
        ....................ddbbcccccfff........ddbbccbccccfffff......dbbccccffff..ddbbbbbccffffffff.......
        ....................ddbbcbcfcfff........dbdbcccccccff........ddbdccccff....dbdbbbccccccff..........
        ....................ddbccccfcfff........dbbccffffffff.......dddbbbccfff....dbbbbbccccccf...........
        ....................ddbcbccccfff........dbbccffffffff.......ddbbbcccfff...dbbbfffffffffff..........
        ...............fff..ddbfccfcccff......fffffff...ff.........ddfffffff.....ddbbafffffffffffff........
        ...............ffc..ddbfcccccfff......fffffff...ff........dddfffffff.....dbdbfaeeeeee..............
        ...............fefffffffffffffffffff......d.....ff........cffddddddf...fffffffffffff...............
        ...............fffffffffffffffffffff............ff........cff......ff..ffffffffffff................
        ...............ffffffffffffffffffd..............ff........dff.....fff..ffffffff....................
        ...............ffeebccccceeeeeeffffffff......ffffffff.............fffffffbbecff....................
        ...............ffeebeeecceeeeeeffffffff......ffffffff.............fffffffbbeeff....................
        .................ffeebbccccccceeeeeeeeffffffffffeefffffffffffffffffcecbbbecff......................
        .................ffeebbceeeeccccccccccffffffffffeeffffffffffffffffceeeeebeeff......................
        ...................ffeebbbbbceeeeeccccccccccccccccccccecccceecccccebbbbeeff........................
        ...................ffeebbbbbbbcccceeeeeeeeeeeeeeeeeeeeeeeceeeeccebebbbbecff........................
        ....................fffeeeeeebbbcccccceeeeeeeeccccccccccccccccccbbbeeeeffff........................
        ....................fffeccceebbcccceeecccccccceeeeeeecccceeeeeeebbeeceeffff........................
        ....1...............fffffffffeeebbbbbbbccbbbbbccbbbbbccbbbbbcbbbebeffffff..........................
        ..1.................fffffffffeeebbbbbbbbcbbbbccbbbbbccbbbbbccbbbeeeffffff........888...............
        .1..................fffeeeeffffeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeffffffff888888888..................
        .18888888...........fffeccefffffeeecccceeecccccccccccceeeccccceeffffeee8866666616666888............
        ..166666686888666666ffffffeeefffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffffccc888888888118.66666.8.1.1....
        ..1111666.6688818888ffffffffff6886fffffffffffffffffffeffffffeffffffffff66616616166611...1.....11...
        ...........666666666feeeeeeeef8886fffeeeecceeeeeeeeeeffeeecceeefeeeecce88888888888888888888..111.1.
        .1661666668811888888ffffffffff8886fffffffffffffffffffffffffffffffffffff666666.8888888.....66681161.
        18188..66661166.8666666666666666688886666666666666668888888888888888668888188811..66661666661116..1
        166888888661666888886666666666666666666666666668888866666666666666666666666666666666668816661.....1
        .111..118881666888666688888666668888888888888888886666666666666666666666666666688888888118661666611
        ...661166668111166666668888888888888888888888888866668888888888888668886666688886666661.6611....11.
        .....1...........8888888.66666666666666............888....6666666666666666666.......111111..1111...
        .....111166666666666666668888.11111166666666666666666666611116666666...............................
        ......111111111..111111......88888888888888866666.....888888.......................................
        ..................................................6................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        ...................................................................................................
        `)
    adventure.addToTextlog("Out of the darkness, an Owlbear leaps toward your party.")
    adventure.addToTextlog("Press (A) to back away slowly.")
    adventure.addToTextlog("Press (B) to attack.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("The group begins to laugh.")
        adventure.addToTextlog("That's just Doric. She won't hurt you.")
        quest3()
    } else {
        adventure.addToTextlog("The group surrounds you with weapons drawn.")
        adventure.addToTextlog("You're going to regret attacking Doric!")
        game.over(false)
    }
}
info.onLifeZero(function () {
    game.gameOver(false)
})
info.onScore(20, function () {
    game.gameOver(true)
})
scene.setBackgroundColor(1)
adventure.changeLogColors(3, 9)
quest1()
