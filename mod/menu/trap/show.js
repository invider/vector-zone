function show() {
    if (!_.hidden) return

    _.show()
    _.resume()
    _.enable()

    _.escLock = true
}
