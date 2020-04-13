function keyDown(e) {

    switch(e.code) {
        case 'ArrowUp': lab.list.up(); break;
        case 'ArrowDown': lab.list.down(); break;
        case 'ArrowLeft': lab.list.left(); break;
        case 'ArrowRight': lab.list.right(); break;
        case 'Enter': case 'Space': lab.list.activate(); break;

        case 'Escape':
            trap('hide')
            break
    }
}
