function hide() {
    lab.spawn('/dna/hud/AlphaFader', {
        wait: 0,
        fadein: 1,
        keep: 0,
        fadeout: 0,

        onKeep: function() {
            _.hide()
            _.pause()
            _.disable()

            _._$.resumeLab()
            _._$.enable()
        },
    })
}
