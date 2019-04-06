onmessage = function(event) {
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
        total = total + 1;
    }
    postMessage(total)
    return
}
