const slide = document.getElementById('slide')
const slidee = document.getElementById('slidee')
const slideee = document.getElementById('slideee')
const trailer_list = document.getElementById("trailer-list")
const movie_list = document.getElementById("movie-list")
const tv_list = document.getElementById("tv-list")
const apiKey = "18527347a9a13a6ec4a8563570d0507c";
const imgUrl = "https://image.tmdb.org/t/p/original"
const mainUrl = "https://api.themoviedb.org/3";
const movieUrl = "https://www.themoviedb.org/"
const movie = document.getElementById("movie");
const pp = document.getElementById("pp");
// import {
//     slide,
//     slidee,
//     slideee,
//     trailer_list,
//     movie_list,
//     tv_list,
//     apiKey,
//     imgUrl,
//     mainUrl
// } from "./urls.js";


async function fetchApi(url){
  await fetch(mainUrl+url+"?api_key="+apiKey)
  .then(result => result.json())
  .then(object =>  display(object.results))

}
function display(array){
  // movie_list.innerHTML = "";
  for (let i = 0;  i < array.length; i++){
    const user = array[i];
    console.log(user);
    const {poster_path, backdrop_path, id, media_type, first_air_date, release_date, title, vote_average, name} = user;
    card(user);
  }
  
}



function card(user){
  movie_list.innerHTML +=
  `
    <div class="movie" id="movie" onclick="details(\`${user.id}\`,\`${user.media_type}\`, \`${user.title}\`, \`${user.name}\`)">
            <img class="movie_photo" id="movie_photo" src="${imgUrl+user.poster_path}" alt="">
            <div class="vote">${Math.floor(user.vote_average*10)}%</div>
            <p class="movie_name">${user.name ?? user.title}</p>
            <p class="movie_name release_date">${user.first_air_date ?? user.release_date}</p>
    </div>
    `;
}
async function fetchApii(url){
  await fetch(mainUrl+url+"?api_key="+apiKey)
  .then(result => result.json())
  .then(object =>  displayy(object.results))

}
function displayy(array){
  // movie_list.innerHTML = "";
  for (let i = 0;  i < array.length; i++){
    const user = array[i];
    console.log(user);
    const {poster_path, backdrop_path, id, media_type, first_air_date, release_date, title, vote_average, name} = user;
    cardd(user);
  }
  
}



function cardd(user){
  tv_list.innerHTML +=
  `
    <div class="movie" id="movie" onclick="details(\`${user.id}\`,\`${user.media_type}\`, \`${user.title}\`, \`${user.name}\`)">
            <img class="movie_photo" id="movie_photo" src="${imgUrl+user.poster_path}" alt="">
            <div class="vote">${Math.floor(user.vote_average*10)}%</div>
            <p class="movie_name">${user.name ?? user.title}</p>
            <p class="movie_name release_date">${user.first_air_date ?? user.release_date}</p>
    </div>
    `;
}  


async function fetchApiii(url){
  await fetch(mainUrl+url+"?api_key="+apiKey)
  .then(result => result.json())
  .then(object =>  displayyy(object.results))

}
function displayyy(array){
  // movie_list.innerHTML = "";
  for (let i = 0;  i < array.length; i++){
    const user = array[i];
    console.log(user);
    const {poster_path, backdrop_path, id, media_type, first_air_date, release_date, title, vote_average, name} = user;
    carddd(user);
  }
  
}



function carddd(user){
  trailer_list.innerHTML +=
  `
      <div class="trailer" onclick="details(\`${user.id}\`,\`${user.media_type}\`, \`${user.title}\`, \`${user.name}\`)">
        <img src="${imgUrl+user.poster_path}" class="trailer-photo" alt="">
        
        <h2 class="trailer-name">${user.name ?? user.title}</h2>
      </div>
  `;
}  


function details(id, media_type , title, name){
  location.replace(`${location.protocol}other.html?id=${id}&media_type=${media_type}`);
  // console.log(id);
}



  
  fetchApi("/trending/all/day");
  fetchApii("/tv/on_the_air")
  fetchApiii("/movie/popular")



  function week(){
    movie_list.innerHTML = "";
    fetchApi("/trending/all/week");
    slide.style.marginLeft = "-100px";
    slide.style.transition = "1s";
  
  }
  function today(){
    movie_list.innerHTML = "";
    fetchApi("/trending/all/day");
    slide.style.marginLeft = "-200px";
    slide.style.transition = "1s";  
  }
  
  function theatres(){
    tv_list.innerHTML = "";
    fetchApii("/tv/popular");
    slidee.style.marginLeft = "-100px";
    slidee.style.transition = "1s";  
  }
  function tv(){
    tv_list.innerHTML = "";
    fetchApii("/tv/on_the_air");
    slidee.style.marginLeft = "-200px";
    slidee.style.transition = "1s";  
  }
  
  function theatres2(){
    trailer_list.innerHTML = "";
    fetchApiii("/tv/popular");
    slideee.style.marginLeft = "-100px";
    slideee.style.transition = "1s";  
  }
  function tv2(){
    trailer_list.innerHTML = "";
    fetchApiii("/movie/popular");
    slideee.style.marginLeft = "-200px";
    slideee.style.transition = "1s";  
  }




