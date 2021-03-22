console.log('%c HI', 'color: firebrick')

function iterateThrough (arr) {
    console.log('hello')
    arr.forEach(function (elem) {
        const makeImage = document.createElement('img')
        console.log('hello')
    })
}

const grabDogs = () => fetch('https://dog.ceo/api/breeds/image/random/4').then(response => response.json())
.then(data => iterateThrough(data))


document.addEventListener('DOMContentLoaded', function () {
    grabDogs()
    const dogImages = document.querySelector('#dog-image-container')



})