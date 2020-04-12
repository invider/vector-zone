function keyDown(e) {

    switch(e.code) {
        case 'ArrowUp': lab.list.up(); break;
        case 'ArrowDown': lab.list.down(); break;
        case 'Enter': case 'Space': lab.list.activate(); break;

        case 'Escape':
            if (!_.escLock) trap('hide')
            break
    }
}
