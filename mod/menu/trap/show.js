function show() {
    if (!_.hidden) return

    lab.spawn('/dna/hud/AlphaFader', {
        wait: 0,
        fadein: 0,
        keep: .2,
        fadeout: 1,

        onFadein: function() {
            _._$.pauseLab()
            _._$.disable()
        },

        onKeep: function() {
            lab.list.setItems(env.main)
            _.show()
            _.resume()
        },

        onHidden: function() {
            _.enable()
        },
    })
}
