const Toast = function () {
    let button = document.createElement('div')
    let queue = []
    let timeoutId = undefined

    function _fadeOut() {
        if(timeoutId) clearTimeout(timeoutId)
        button.style.visibility = "hidden"
        setTimeout(_popQueue, 100)
    }

    function _popQueue() {
        if(queue.length) {
            let data = queue.shift()
            _show(data.content)
            timeoutId = setTimeout(_fadeOut, data.timeout)
        }
    }

    function _init(width, height, left, bottom) {
        button.style.border = 'thick solid #0000FF'
        button.style.borderRadius = '1px'
        button.style.position = 'fixed'
        button.style.backgroundColor = 'red'

        button.style.left = left
        button.style.bottom = bottom
        button.style.width = width
        button.style.height = height
        button.style.textAlign = "center"
        button.style.lineHeight = height
        button.style.visibility = "hidden"
        button.addEventListener("click", _fadeOut);
        document.body.appendChild(button)
    }

    function _show(content) {
        button.textContent = content
        button.style.visibility = "visible"
    }
    
    return { 
        init(width, height, left, bottom) {
            _init(width, height, left, bottom)
        },
        add(content, timeout) {
            queue.push({
                content : content,
                timeout : timeout
            })
        },
        show() {
            let data = queue.shift()
            if(data) {
                _show(data.content)
                timeoutId = setTimeout(_fadeOut, data.timeout)
            }
        }
    }
}