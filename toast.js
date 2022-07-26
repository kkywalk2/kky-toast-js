var toast = (function () {
    let button = document.createElement('div')
    button.style.border = 'thick solid #0000FF'
    button.style.borderRadius = '1px'
    button.style.position = 'fixed'
    button.style.backgroundColor = 'red'
    document.body.appendChild(button)
    
    return function setAttribute(width, height, left, bottom) {
        button.style.left = left
        button.style.bottom = bottom
        button.style.width = width
        button.style.height = height
    }
})()

toast('200px', '50px', '20px', '20px')