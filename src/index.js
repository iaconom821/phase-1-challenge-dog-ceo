console.log('%c HI', 'color: firebrick')





document.addEventListener('DOMContentLoaded', function () {
    
    const dogImages = document.querySelector('#dog-image-container')
    //console.log(dogImages)
    const grabDogs = () => fetch('https://dog.ceo/api/breeds/image/random/4').then(response => response.json())
.then(function(obj) {
    console.log('hello')
    obj.message.forEach(function (elem) {
        const makeImage = document.createElement('img')
        makeImage.setAttribute("alt", "src")
        makeImage.src= elem
        makeImage.alt= "wtf is this"
        dogImages.append(makeImage)
        
    
            
 })
 
})
grabDogs()
})
 

