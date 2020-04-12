function evo(dt) {
    lab.collide((s, t) => {
        if (s.solid && t.solid && isFun(s.hit)
                && s.dist(t) < 0) {
            s.hit(t)
        }
    })
}
