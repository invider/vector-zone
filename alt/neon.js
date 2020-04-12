function neon(x1, y1, x2, y2, lcolor, ncolor) {
    ctx.lineCap = 'round'

    alpha(.05); lineWidth(12); stroke(ncolor);
    line(x1, y1, x2, y2)

    alpha(.08); lineWidth(10); stroke(ncolor);
    line(x1, y1, x2, y2)

    alpha(.12); lineWidth(8); stroke(ncolor);
    line(x1, y1, x2, y2)

    alpha(.15); lineWidth(6); stroke(ncolor);
    line(x1, y1, x2, y2)

    lineWidth(3)
    stroke(lcolor)
    alpha(1)
    stroke(lcolor)
    line(x1, y1, x2, y2)
}
