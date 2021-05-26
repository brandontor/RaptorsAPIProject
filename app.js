//create a document selectors for each eyeball - DONE!
//create event listeners for the click - DONE!
//make event listeners that change the opacity of the eyeball to reveal the card behind the eyeball - DONE!
//Create a function that will hide the eye on click
//Create a function that will create a card and append it to the already created card div
//create an API call that calls the naruto API and displays information on that specific shinobi

const eyeballs = document.querySelectorAll('.eyeball');
const card = document.querySelectorAll('.card');
const sharingan = document.querySelectorAll('.sharingan');
//DOM target variables ^   


eyeballs.forEach(addHideEye)
function addHideEye(node) {
    node.addEventListener('click', hideEye);
}
//Adding event listeners to each node in the nodelist of eyeballs^

function hideEye(e) {
    if(e.target.classList.contains('sharingan')){
        e.target.style.opacity = 0;
        setTimeout(changeDisplayNone, 500, e.target)
        createCard(e.target.nextElementSibling);
    }

    
}
//The function for hiding the eye^

function changeDisplayNone(e) {
    e.style.display = 'none';
}
//In order to change the opacity of the eye and then set display to none while still maintaining ^
//the animation, a function will need to be ran that changes the display class while using a setTimeout

function changeDisplayIB(e) {
    e.style.display = 'inline-block';
}

function changeOpacityOn(e) {
    e.style.opacity = 1;
}


function createCard(e) {
    const newCard = document.createElement('div')
    newCard.classList.add('card-content')

    const newDescription = document.createElement('P')
    newDescription.innerText = 'I am Uchiha Sasuke'

    const returnButtonDiv = document.createElement('div')
    returnButtonDiv.classList.add('card-action')

    const returnButton = document.createElement('a')
    returnButton.innerText = 'Return';

    newCard.appendChild(newDescription)
    returnButtonDiv.appendChild(returnButton)
    
    e.appendChild(newCard)
    e.appendChild(returnButtonDiv)

    setTimeout(changeDisplayIB, 500, e)
}
//The function for creating the card element which will also allocate the API data^
