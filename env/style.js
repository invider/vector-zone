const style = {

    font: {
        main: {
            family: 'moon',
            size:   14,
        },
        stat: {
            family: 'moon',
            size:   32,
        },
    }
};

(function classifyFonts() {
    // classify fonts
    for (let id in style.font) {
        const font = style.font[id]
        font.id = id
        font.head = font.size + 'px ' + font.family
    }
})()
