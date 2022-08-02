const Toast = function () {
    let button = document.createElement('div')
    let queue = []

    function _fadeOut() {
        button.style.visibility = "hidden"
    }

    function _init(width, height, left, bottom, content) {
        button.style.border = 'thick solid #0000FF'
        button.style.borderRadius = '1px'
        button.style.position = 'fixed'
        button.style.backgroundColor = 'red'

        button.style.left = left
        button.style.bottom = bottom
        button.style.width = width
        button.style.height = height
        button.textContent = content
        button.style.textAlign = "center"
        button.style.lineHeight = height
        button.style.visibility = "hidden"
        document.body.appendChild(button)
    }

    function _show() {
        button.style.visibility = "visible"
    }
    
    return { 
        init(width, height, left, bottom, content) {
            _init(width, height, left, bottom, content)
        },
        show() {
            _show()
            setTimeout(_fadeOut, 1000)
        }
    }
}