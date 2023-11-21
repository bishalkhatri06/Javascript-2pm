const img_array = ['img.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg']
const array_length = img_array.length
let i = 0

const next = () => {
    i++
    i = i % array_length
    document.querySelector('img').src = `img/${img_array[i]}`
}

const prev = () => {
    i--
    if (i < 0) {
        i = array_length - 1
    }
    document.querySelector('img').src = `img/${img_array[i]}`
}


const sliderFunction = () => {
    i++
    i = i % array_length
    document.querySelector('img').src = `img/${img_array[i]}`
}

let set = setInterval(sliderFunction, 3000)

const stop = () => {
    clearInterval(set)
}

const start=()=>{
    set=setInterval(sliderFunction,3000)
}