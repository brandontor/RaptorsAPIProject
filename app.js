const eyeballs = document.querySelectorAll('.eyeball');
const card = document.querySelectorAll('.card');
const sharingan = document.querySelectorAll('.sharingan');
const firstRow = document.querySelector('.firstRow')
const secondRow = document.querySelector('.secondRow')
const thirdRow = document.querySelector('.thirdRow')
//DOM target variables ^   

//API CALL
const request = new XMLHttpRequest();
request.withCredentials = true;

request.onload = function () {
    let data = JSON.parse(this.response)
    let team = data.api.players.filter(startAndDepth);
    console.log(team)
    
	if(this.status >= 200 && this.status < 400) {   
        team.forEach(function(player){
            const col = document.createElement('div');
            col.classList.add('col', 'm4', 'eyeball')
            
            const img = document.createElement('img');
            img.setAttribute('src', `./assets/${player.firstName}.png`)
            img.classList.add('responsive-img', 'sharingan')

            const card = document.createElement('div')
            card.classList.add('card')

            const cardImgContainer = document.createElement('div')
            cardImgContainer.classList.add('card-image')

            const cardImg = document.createElement('img')
            cardImg.setAttribute('src', `./assets/${player.firstName}.png`)

            const cardContent = document.createElement('div')
            cardContent.classList.add('card-content')

            const name = document.createElement('P')
            name.innerText = `${player.firstName}` + ` ${player.lastName}`

            const details = document.createElement('P')
            details.innerHTML = `Country: ${player.country} <br> DOB: ${player.dateOfBirth} <br> Height(m): ${player.heightInMeters}<br> Pos: ${player.leagues.standard.pos}`

            const returnButtonDiv = document.createElement('div')
            returnButtonDiv.classList.add('card-action')

            const returnButton = document.createElement('a')
            returnButton.innerText = 'Return';
    
            col.appendChild(img)
            col.appendChild(card)
            card.appendChild(cardImgContainer)
            cardImgContainer.appendChild(cardImg)
            card.appendChild(cardContent)
            cardContent.appendChild(name)
            cardContent.appendChild(details)
            cardContent.appendChild(returnButtonDiv)
            returnButtonDiv.appendChild(returnButton)

            if(player.firstName == 'Kyle' || player.firstName == 'Fred' || player.firstName == "OG") {
                firstRow.appendChild(col)
            } else if(player.firstName == 'Pascal' || player.firstName == 'Khem' || player.firstName == "Malachi"){
                secondRow.appendChild(col)
            } else {
                thirdRow.appendChild(col)
            }

            col.addEventListener('click', hideEye);
        })
    } else {
        console.log('SADGE')
    }
};

request.open("GET", "https://api-nba-v1.p.rapidapi.com/players/teamId/38");
request.setRequestHeader("x-rapidapi-key", "6e109401b7msh4bc8d2137d42004p190d40jsn10d0d7bee39c");
request.setRequestHeader("x-rapidapi-host", "api-nba-v1.p.rapidapi.com");

request.send();


//lowry vanvleet OG pascal Birch flynn trent yuta boucher
function startAndDepth(teamMates) {
    if(teamMates.playerId == "327" || teamMates.playerId == "527" || teamMates.playerId == "732" || teamMates.playerId == "479" || teamMates.playerId == "739" || teamMates.playerId == "2587" || teamMates.playerId == "1058" || teamMates.playerId == "1040" || teamMates.playerId == "745") {
        return teamMates
    }
}

function hideEye(e) {
    if(e.target.classList.contains('sharingan')){
        e.target.style.opacity = 0;
        setTimeout(changeDisplayNone, 500, e.target)
        setTimeout(changeDisplayIB, 500, e.target.nextElementSibling)
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


