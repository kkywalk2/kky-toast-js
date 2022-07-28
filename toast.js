var toast = function () {
    let button = document.createElement('div')

    function render(width, height, left, bottom) {
        button.style.border = 'thick solid #0000FF'
        button.style.borderRadius = '1px'
        button.style.position = 'fixed'
        button.style.backgroundColor = 'red'

        button.style.left = left
        button.style.bottom = bottom
        button.style.width = width
        button.style.height = height
        document.body.appendChild(button)
    }
    
    return { 
        init(width, height, left, bottom) {
            render(width, height, left, bottom)
        },
        update(show) {
            button.hidden = show
        }
    }
}

let toastCompoent = toast()
toastCompoent.init('200px', '50px', '20px', '20px')
toastCompoent.update(true)