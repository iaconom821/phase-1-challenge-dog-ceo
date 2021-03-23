console.log('%c HI', 'color: firebrick')

// declare our variables, grabbing items from the DOM

const dogImages = document.querySelector('#dog-image-container')
const breedList = document.querySelector('#dog-breeds')

// declaring a fetch statement and parsing the data into JSON

const grabDogs = () => fetch('https://dog.ceo/api/breeds/image/random/4').then(response => response.json())
.then(function(obj) {

//Manipulating JSON and manipulating the DOM with the JSON data by iterating through the JSON data. And assigning the src attribute of the img tag to display one of the randomly accessed dog pictures.

obj.message.forEach(function (elem) {
    const makeImage = document.createElement('img')
    makeImage.setAttribute("alt", "src")
    makeImage.src= elem
    makeImage.alt= "wtf is this"
    dogImages.append(makeImage)
})

})

//invoking the fetch statement
grabDogs()

// declaring function to access the values on the message key, and then checking the data withing the value to see if there are more varieties of each breed so that we can add them to the list. Assigning classnames to the list elements so they can be selected with an event listener. 
function makeDogList(obj) {
    for(const breed in obj.message) {
        if(obj.message[breed].length > 0) {
            for(let type of obj.message[breed]) {
            const makeBreed = document.createElement('li')
            makeBreed.innerText = breed + ' ' + type
            makeBreed.className = 'breedName'
            breedList.append(makeBreed)
            }
        } else {
            const makeBreed = document.createElement('li')
            makeBreed.id = breed
            makeBreed.innerText = breed
            makeBreed.className = 'breedName'
            breedList.append(makeBreed)
        }
    }
}

//declaring a fetch statement to invoke the makeDogList function on the returned promise

const grabBreeds = () => fetch('https://dog.ceo/api/breeds/list/all').then(response => response.json()).then(function (obj) {
    makeDogList(obj)
})

//invoking grabBreeds
grabBreeds()

//adding an event listener on the children of breedList to change the color of the list item when clicked. 
breedList.addEventListener('click', function (evt) {
    if(evt.target.classList.contains("breedName")){
        evt.target.style.color = 'pink'

    }
})
