//create a document selectors for each eyeball
//create event listeners for the click
//make event listeners that change the opacity of the eyeball to reveal the card behind the eyeball
//create an API call that calls the naruto API and displays information on that specific shinobi

const eyeballs = document.querySelectorAll('.eyeball');
const card = document.querySelectorAll('.card');
//DOM target variables ^   


eyeballs.forEach(addHideEye)
function addHideEye(node) {
    node.addEventListener('click', hideEye);
}
//Adding event listeners to each node in the nodelist of eyeballs^

function hideEye(e) {
    if(e.target.classList.contains('responsive-img')){
        e.target.style.opacity = 0;
        createCard();
    }
}
//The function for hiding the eye^


function createCard() {
    document.createElement
}
//The function for creating the card element which will also allocate the API data^
