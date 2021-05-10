console.log(data)

// THIS IS OUR SECOND ATTEMPT //

const dogsListNav = document.querySelector(".dogs-list")
const mainDogSection = document.querySelector(".main__dog-section")
const addDogBttn = document.querySelector(".dogs-list__button--add")


function renderDogList (dog){

const dogListEl = document.createElement("li")
dogListEl.setAttribute("class","dogs-list__button")
dogListEl.innerText = dog.name
dogsListNav.append(dogListEl)
console.log(dogsListNav)
dogListEl.addEventListener("click", function (){
   mainDogSection.innerHTML = " "
   renderDogCard(dog)
})
}

function renderDogsList(dogs) {
for (const dog of dogs){
   renderDogList(dog)
}}

renderDogsList(data)

function renderDogCard(dog){

const dogTitleEl = document.createElement("h2")
dogTitleEl.innerText = dog.name

const dogImageEl = document.createElement("img")
dogImageEl.setAttribute("src" , dog.image)

const dogInfoEl = document.createElement("div")
dogInfoEl.setAttribute("class" , ".main__dog-section__desc")

const dogBioTitleEl = document.createElement("h3")
dogBioTitleEl.innerText = "Bio"

const dogBioTextEl = document.createElement("p")
dogBioTextEl.innerText = dog.bio

const dogBtnSectionEl = document.createElement("div")
dogBtnSectionEl.setAttribute("class", ".main__dog-section__btn")

const dogIsNaughtyEl = document.createElement("p")
dogIsNaughtyEl.innerText = dog.isGoodDog ? "Yes" : "No"

const dogIsNaughtyYesNoEl = document.createElement("em")
dogIsNaughtyYesNoEl.innerText = "Is naughty?"

const dogNaughtyBtnEl = document.createElement("button")
dogNaughtyBtnEl.innerText = dog.isGoodDog ? "Good dog!" : "Bad Dog"

dogNaughtyBtnEl.addEventListener("click" , function(){
   dogNaughtyBtnEl.innerText = dog.isGoodDog ? "Good dog!" : "Bad Dog"
   dog.isGoodDog = !dog.isGoodDog

   dogIsNaughtyEl.innerText = dog.isGoodDog ? "Is naughty ? Yes!" : "Is naughty? No!"

})


dogIsNaughtyEl.prepend(dogIsNaughtyYesNoEl)
dogBtnSectionEl.append(dogIsNaughtyEl, dogNaughtyBtnEl)
dogInfoEl.append(dogBioTitleEl , dogBioTextEl)
mainDogSection.append(dogTitleEl , dogImageEl, dogInfoEl, dogBtnSectionEl)

function renderDogCards (dogs){

   for (const dog of dogs){

   renderDogCard(dog)
}
}
}



addDogBttn.addEventListener("click", function (){

mainDogSection.innerHTML = " "

const addNewDog = document.createElement("h2")
addNewDog.innerText = "Add New Dog"

const dogFormEl = document.createElement("form")
dogFormEl.setAttribute("class", ".form")

const dogNameLabelEl = document.createElement("label")
dogNameLabelEl.innerText = "Dog Name"
dogNameLabelEl.setAttribute("for", "name")

const dogNameEl = document.createElement("input")
dogNameEl.setAttribute("type", "text")
dogNameEl.setAttribute("id", "name")
dogNameEl.setAttribute("name", "name")
console.log(dogNameEl)

const dogImageLabelEl = document.createElement("label")
dogImageLabelEl.innerText = "Dog's picture"
dogImageLabelEl.setAttribute("for", "image")
dogImageLabelEl.setAttribute("display", "block")


const dogImageEl = document.createElement("input")
dogImageEl.setAttribute("type", "url")
dogImageEl.setAttribute("id", "image")
dogImageEl.setAttribute("name", "image")

const dogBioTextTitleEl = document.createElement("label")
dogBioTextTitleEl.innerText = "Dog's bio"
dogBioTextTitleEl.setAttribute("for", "bio")

const dogBioTextEl= document.createElement("textarea")
dogBioTextEl.setAttribute("rows", "5")
dogBioTextEl.setAttribute("id", "bio")
dogBioTextEl.setAttribute("name", "bio")

const dogFormBtEl = document.createElement("button")
dogFormBtEl.innerText = "Let's add a dog"
dogFormBtEl.setAttribute("type", "submit")
dogFormBtEl.setAttribute("id", "submit")
dogFormBtEl.setAttribute("name", "submit")
dogFormBtEl.setAttribute("class", ".form_button")

dogFormBtEl.addEventListener("submit", function(){
   // alert("hello")

   dogsListNav.append("HELLO")


})

dogFormEl.append(dogNameLabelEl, dogNameEl, dogImageLabelEl, dogImageEl, dogBioTextTitleEl, dogBioTextEl, dogFormBtEl)

mainDogSection.append(addNewDog, dogFormEl)

})

// THIS IS OUR FIRST ATTEMPT //

// console.log(data);

// const dogListEl = document.querySelector(".dogs-list")
// const mainDogSection = document.querySelector(".main__dog-section")

// function renderDogNav(dog) {
// const dogListBtnEl = document.createElement('li')
// dogListBtnEl.setAttribute('class', 'dogs-list__button')
// dogListBtnEl.innerText = dog.name
// dogListEl.append(dogListBtnEl)

// dogListBtnEl.addEventListener("click" , function() {
//    mainDogSection.innerHTML = " "
//    renderDogCard(dog)
// });
// }

// function renderDogsNavList(dogs){
// for (const dog of dogs){
//    renderDogNav(dog)
//    }
// }

// renderDogsNavList(data)

// function renderDogCard(dog){

// mainDogSection.innerHTML = " "

// const dogTitleEl = document.createElement('h2')
// dogTitleEl.innerText = dog.name

// const dogImageEl = document.createElement('img')
// dogImageEl.setAttribute("src", dog.image)
// dogImageEl.setAttribute("alt", dog.name)

// const dogInfoEl = document.createElement('div')

// const dogBioTitleEl = document.createElement('h3')
// dogBioTitleEl.innerText = "Bio"

// const dogBioTextEl = document.createElement('p')
// dogBioTextEl.innerText = dog.bio

// dogInfoEl.append(dogBioTitleEl, dogBioTextEl)  

// const dogSectionBtn = document.createElement('div')

// const dogNaughtyTextEl = document.createElement('p')

// const dogNaughtyEmEl = document.createElement('em')

// dogNaughtyEmEl.innerText = `Is naughty? ` 
// const isDogNaughty = !dog.isGoodDog
// dogNaughtyTextEl.append(dogNaughtyEmEl, isDogNaughty ? "Yes" : 'No')

// const dogNaughtyBtnEl = document.createElement('button')
// dogNaughtyBtnEl.innerText = !dog.isGoodDog ? "Yes is a bad dog" : "No is a good dog"

// dogNaughtyBtnEl.addEventListener("click" , function() {
// dog.isGoodDog = !dog.isGoodDog
// renderDogCard(dog)
// console.log("YESS!")
    
// })


// dogSectionBtn.append(dogNaughtyTextEl, dogNaughtyBtnEl)

// mainDogSection.append(dogTitleEl, dogImageEl,  dogInfoEl, dogSectionBtn)
// }

// function renderDogCards(dogs){
//    for (const dog of dogs){
//       renderDogCard(dog)
//       mainDogSection.innerHTML = " "
//       }
//    }



// renderDogCards(data)







// *************************************************************************** // 



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

// The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
// a condition followed by a question mark (?), 
// then an expression to execute if the condition is truthy followed by a colon (:), 
// and finally the expression to execute if the condition is falsy. 
// This operator is frequently used as a shortcut for the if statement.
// below is an axample from above code
// dogNaughtyBtnEl.innerText = !dog.isGoodDog ? "Yes is a bad dog" : "No is a good dog"

// below is a link to all the events (we have used eventListener above) as seen below :
// dogNaughtyBtnEl.addEventListener("click" , function() {
// dog.isGoodDog = !dog.isGoodDog
// renderDogCard(dog)
// console.log("YESS!")
// })

// links:
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events



// *************************************************************************** // 