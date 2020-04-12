function keyUp(e) {
    switch(e.code) {
    case 'ArrowLeft': env.control.player1.left = false; break;
    case 'ArrowRight': env.control.player1.right = false; break;
    case 'ArrowUp': env.control.player1.thrust = false; break;
    case 'ControlRight':
    case 'ShiftRight': env.control.player1.shoot = false; break;
    case 'KeyA': env.control.player2.left = false; break;
    case 'KeyD': env.control.player2.right = false; break;
    case 'KeyW': env.control.player2.thrust = false; break;
    case 'Space':
    case 'ShiftLeft': env.control.player2.shoot= false; break;
    }
}
