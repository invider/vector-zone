let instance = 1

function ship(st) {
    const R = 20
    const TURN = PI
    const MAX_SPEED = 200
    const ACCELERATION = 100
    const DECELERATION = 50
    const RECHARGE = 0.2

    let x = st.x
    let y = st.y

    let team = st.team
    let player = st.player
    let control

    let dir = 2
    let speed = 100
    let charge = 0
    let health = 100


    function init ()  {
        log('initializing ship ' + this.name)
        this.solid = true
        control = env.control['player' + player]
    }

    function pos() {
        return {
            x: x,
            y: y,
            r: R,
        }
    }

    function dist(t) {
        if (isFun(t.pos)) {
            const tp = t.pos()
            return lib.math.distance(x, y, tp.x, tp.y) - R - tp.r
        }
    }

    function vibrate() {
        if (this.pad && this.pad.vibrationActuator) {
            this.pad.vibrationActuator.playEffect('dual-rumble', {
                startDelay: 0,
                duration: 1000,
                weakMagnitude: 0.5,
                strongMagnitude: 1,
            })
        }
    }

    function hit(s) {
        if (s instanceof dna.Missile && s.team !== team) {
            log('hit by ' + s.name)
            kill(s)

            health -= 10
            if (health <= 0) {
                env.score[s.team-1] ++
                kill(this)
                this.vibrate()
                trap('respawn', {
                    team: this.team,
                    player: this.player,
                    pad: this.pad,
                })
            }
        }
    }

    function shoot() {
        if (charge < 0) {
            const m = lab.spawn(dna.Missile, {
                team: team,
                x: x + Math.cos(dir) * R,
                y: y + Math.sin(dir) * R,
                dir: dir,
            })
            charge = RECHARGE
        }
    }

    function thrust(dt) {
        speed = min(speed + ACCELERATION * dt, MAX_SPEED)
    }

    function turn(d, dt) {
        dir += TURN * dt * d
    }

    function handle(dt) {
        // keyboard
        if (control.left) turn(-1, dt)
        if (control.right) turn(1, dt)

        if (control.thrust) thrust(dt)
        if (control.shoot) shoot()

        // gamepads
        if (ship.pad) {
            // refresh
            ship.pad = navigator.getGamepads()[ship.pad.index]
            if (!ship.pad || !ship.pad.connected) {
                delete ship.pad
            }
        }

        if (ship.pad) {
            let x, y
            if (ship.pad.axes[0]) x = ship.pad.axes[0] 
            if (ship.pad.axes[1]) y = ship.pad.axes[1] 

            if (x < -0.3) turn(-1, dt)
            if (x > 0.3) turn(1, dt)

            if (ship.pad.buttons[14].pressed) turn(-1, dt)
            if (ship.pad.buttons[15].pressed) turn(1, dt)
            if (ship.pad.buttons[0].pressed) thrust(dt)
            if (ship.pad.buttons[1].pressed) shoot()
        }

    }

    function evo(dt) {
        // move
        x = x + Math.cos(dir) * speed * dt
        y = y + Math.sin(dir) * speed * dt

        // warp edges
        if (x > ctx.width) x = 0
        if (x < 0) x = ctx.width
        if (y > ctx.height) y = 0 
        if (y < 0) y = ctx.height

        // recharge
        charge -= dt

        // drag
        if(speed > 0) {
            speed = max(speed - DECELERATION * dt, 0)
        }
        handle(dt)
    }

    function draw() {
        save()
        translate(x, y)
        rotate(HALF_PI + dir)

        let c = hsl(0, 0, .9)
        switch (this.team) {
        case 1: c = hsl(.7, .7, .6); break
        case 2: c = hsl(.1, .7, .6); break;
        }

        /*
        stroke(c)
        lineWidth(3)
        polygon(0, -R, R*0.7, R, 0, R*0.7, -R*0.7, R)
        */
        neon( 0,    -R,     .7*R,   R,      c, c)
        neon( .7*R, R,      0,      .7*R,   c, c)
        neon( 0,    .7*R,   -.7*R,  R,      c, c)
        neon( -.7*R,R,      0,      -R,     c, c)

        if (this.status) {
            fill(rgb(1, 1, 1))
            font(env.style.main.head)
            text(this.status, 0, 0)
        }

        restore()
    }

    function onKill() {
        log('Core breached in ' + this.name)
    }

    const ship = {
        type: 'ship',
        name: 'ship-' + instance++,
        init: init,
        pos: pos,
        dist: dist,
        hit: hit,
        evo: evo,
        draw: draw,
        onKill: onKill,
        vibrate: vibrate,
    }

    return augment(ship, st)
}
