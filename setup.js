function setup() {

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
}
