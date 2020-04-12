function keyDown(e) {
    switch(e.code) {
        case 'ArrowLeft': env.control.player1.left = true; break;
        case 'ArrowRight': env.control.player1.right = true; break;
        case 'ArrowUp': env.control.player1.thrust = true; break;
        case 'ControlRight':
        case 'ShiftRight': env.control.player1.shoot = true; break;
        case 'KeyA': env.control.player2.left = true; break;
        case 'KeyD': env.control.player2.right = true; break;
        case 'KeyW': env.control.player2.thrust = true; break;
        case 'Space':
        case 'ShiftLeft': env.control.player2.shoot= true; break;
    }
}
