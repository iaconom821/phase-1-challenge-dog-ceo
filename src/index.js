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
 
document.addEventListener('DOMContentLoaded', function () {
    function makeDogList(obj) {
        console.log('hello')
        const breedlist = document.querySelector('#dog-breeds')
        for(const breed in obj.message) {
            if(obj.message[breed] != []) {
                for(let type of obj.message[breed]) {
                const makeSpecificBreed = document.createElement('ul')
                const makeBreed = document.createElement('li')
                makeBreed.innerText = breed + ' ' + type
                makeSpecificBreed.append(makeBreed)
                breedlist.append(makeSpecificBreed)
                }
            } else if (obj.message[breed] == []){
                const makeBreed = document.createElement('li')
                makeBreed.innerText = breed
                breedlist.append(makeBreed)
            }
        }
    }
    
    const grabBreeds = () => fetch('https://dog.ceo/api/breeds/list/all').then(response => response.json()).then(function (obj) {
        makeDogList(obj)
    })
    
    grabBreeds()
    
})
