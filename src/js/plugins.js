// Avoid `console` errors in browsers that lack a console.
(function () {
    let method
    const noop = function () {
    }
    const methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn',
    ]
    let length = methods.length
    window.console = window.console || {}
    const console = window.console

    while (length > 0) {
        method = methods[length]

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop
        }
        length -= 1
    }
}())

// Place any jQuery/helper plugins in here.
