const defaults = {
    solid: true,
    r: 5,
    dir: 0,
    lifespan: 5,
    speed: 400,
}

let id = 0
function Missile(st) {
    augment(this, defaults)
    augment(this, st)
}

Missile.prototype.pos = function() {
    return {
        x: this.x,
        y: this.y,
        r: this.r,
    }
}

Missile.prototype.evo = function(dt) {
    this.x += Math.cos(this.dir) * this.speed * dt
    this.y += Math.sin(this.dir) * this.speed * dt

    this.lifespan -= dt
    if (this.lifespan < 0) {
        kill(this)
    }
}

Missile.prototype.draw = function() {
    save()
    translate(this.x, this.y)
    rotate(HALF_PI + this.dir)

    let c = hsl(0, 0, .9)
    switch (this.team) {
    case 1: c = hsl(.7, .7, .6); break
    case 2: c = hsl(.1, .7, .6); break;
    }
    /*
    stroke(c)
    lineWidth(3)
    line(0, -this.r, 0, this.r)
    */
    neon(0, -this.r, 0, this.r, c, c)

    restore()
}
