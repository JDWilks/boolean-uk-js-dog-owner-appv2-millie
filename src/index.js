console.log(data);

const dogListEl = document.querySelector(".dogs-list")
const mainDogSection = document.querySelector(".main__dog-section")

function renderDogNav(dog) {
const dogListBtnEl = document.createElement('li')
dogListBtnEl.setAttribute('class', 'dogs-list__button')
dogListBtnEl.innerText = dog.name
dogListEl.append(dogListBtnEl)

dogListBtnEl.addEventListener("click" , function() {
   mainDogSection.innerHTML = " "
   renderDogCard(dog)
});
}

function renderDogsNavList(dogs){
for (const dog of dogs){
   renderDogNav(dog)
   }
}

renderDogsNavList(data)

function renderDogCard(dog){

mainDogSection.innerHTML = " "

const dogTitleEl = document.createElement('h2')
dogTitleEl.innerText = dog.name

const dogImageEl = document.createElement('img')
dogImageEl.setAttribute("src", dog.image)
dogImageEl.setAttribute("alt", dog.name)

const dogInfoEl = document.createElement('div')

const dogBioTitleEl = document.createElement('h3')
dogBioTitleEl.innerText = "Bio"

const dogBioTextEl = document.createElement('p')
dogBioTextEl.innerText = dog.bio

dogInfoEl.append(dogBioTitleEl, dogBioTextEl)  

const dogSectionBtn = document.createElement('div')

const dogNaughtyTextEl = document.createElement('p')

const dogNaughtyEmEl = document.createElement('em')

dogNaughtyEmEl.innerText = `Is naughty?` 
const isDogNaughty = !dog.isGoodDog
dogNaughtyTextEl.append(dogNaughtyEmEl, isDogNaughty ? "Yes" : 'No')

const dogNaughtyBtnEl = document.createElement('button')
dogNaughtyBtnEl.innerText = !dog.isGoodDog ? "Yes is a bad dog" : "No is a good dog"

dogNaughtyBtnEl.addEventListener("click" , function() {
 dog.isGoodDog = !dog.isGoodDog
 renderDogCard(dog)
console.log("YESS!")
     // dog.isGoodDog = true ? "yes":"no"
   // console.log(dog.isGoodDog)
})

// console.log("NOOOO!")

dogSectionBtn.append(dogNaughtyTextEl, dogNaughtyBtnEl)

mainDogSection.append(dogTitleEl, dogImageEl,  dogInfoEl, dogSectionBtn)
}

function renderDogCards(dogs){
   for (const dog of dogs){
      renderDogCard(dog)
      mainDogSection.innerHTML = " "
      }
   }



renderDogCards(data)





// - The card should have a button that toggles for the selected dog between good dog/ bad dog
// Use ternery to toggle




// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
         // - addEventListener to li and render dog 









// js cheat sheet

// this finds an element in the html - it is the 'bridge' - its stored in a variable
// const dogListEl = document.querySelector(".dogs-list")

// this creates an element within JS (div / main / li / ul)
//const liEl = document.createElement ('li')

// this sets an attribute - in this case a class
//liEl.setAttribute("class", "dogs-list__button")

// this changes the text within an element
//liEl.innerText = "Mr Bonkers"

// this appends leEl to dogListEl (nests it)
// dogListEl.append(liEl)

// this addEventListener in the below adds a click and then function
// liEl.addEventListener("click", function(){
   // console.log(dog)

// this set attribure is syntax for images
//   imgEl.setAttribute("src", 
//"https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg")

// this removes all content from a specific part of the html
// mainDogSection.innerHTML = " "