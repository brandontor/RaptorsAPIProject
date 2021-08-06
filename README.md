# RaptorsAPIProject
Creating a nifty webpage that will display various Sharingans from the Naruto anime and then load some information about the user from the Naruto API and populate them on Materialize CSS cards. 

***UPDATE 6/10/2021***
<br>I realized late into the project that the narutoAPI would not mesh well with the tools I plan to use for this project. I decided to re-route the project to be about the Toronto Raptors, and managed to find an API that had data on the players. The API is called api-nba.

I was able to re-use a lot of the old materialize CSS and converted all of the elements from static HTML to be created using JS. 

## Things I've Learned
I already had working knowledge of HTML and CSS at the time of starting the project. The goal of this was mostly to improve my JS skills by building a project using Vanilla JS and I also wanted to move away from using jQuery. I also wanted to implement an API as I know this is something I will need to get more comfortable doing.  

I also picked up Materialize CSS as I wanted to pick up a framework to cut down on build time. I picked Materialize rather then bootstrap for this because I found the documentation really easy to jump into and I like the aesthetic look of Material design. :ok_hand:


## Note **
I had to learn a few JS concepts the hard way as well, such as when I wanted to change the opacity of my element for the transition effect while also having it display none. This was not possible to do at the same time as the element would just disappear so I had to implement setTimeout() as a workaround.

<img src="https://user-images.githubusercontent.com/53887678/128570655-2427cdb4-7ce8-455e-80f8-7acc0674c8c6.png" width="300"></img>


I also learned to filter API data and return the specific elements I wanted from the API. For example I created a function that would return specific players based on a conditional that checked for their playerID. 

<img src="https://user-images.githubusercontent.com/53887678/128570780-eb15754b-318a-4b9e-817e-5def432c9150.png" width="300"></img>
<img src="https://user-images.githubusercontent.com/53887678/128570873-5401d5eb-d7dd-473f-a23f-0e2438d3d921.png" width="300"></img>


## Things To Improve
* I would like to figure out a way to speed up the webpage, for example if the API data does not load faster then the webpage, you will see blank elements. I worked around this by creating the Logo landing page which gives the API time to load behind the scenes. 
* I should have created two branches, one for production and one for development. I'll be implementing that workflow on future projects.

## Deployment
Deployed with [Netlify](https://www.netlify.com/)
<br><br>

## Get Started
There are no dependencies for this project as it already contains the Materialize CDN. Feel free to download the files and open with your IDE. 
