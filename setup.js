function setup() {

    lab.background = '#000000'

    env.score = [
        0,
        0,
    ]

    trap('respawn', {
        team: 1,
        player: 1,
    })

    trap('respawn', {
        team: 2,
        player: 2,
    })

    lab.spawn(dna.hud.Transition, {
        fadein: 0,
        keep: .5,
        fadeout: 2,
    })
}
