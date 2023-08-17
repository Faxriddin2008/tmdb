const media_type = location.href.slice(location.href.search("media_type") + 11, location.length);
const id = location.href.slice(location.href.search("id") + 3, location.length)
console.log(id);
console.log(media_type);

const movieUrl = "https://www.themoviedb.org/"
const mainUrl = "https://api.themoviedb.org/3";
const apiKey = "18527347a9a13a6ec4a8563570d0507c";
const imgUrl = "https://image.tmdb.org/t/p/original"
const movieDetails = document.getElementById("movieDetails");
const actors = document.getElementById("actors");
async function fetchMovie(){
    await fetch(`${mainUrl}/${media_type}/${id}?api_key=${apiKey}`)
    .then(result => result.json())
    .then(object => display(object))
    // .then(object => console.log(object))
}
async function fetchActors(){
    await fetch(`${mainUrl}/${media_type}/${id}/credits?api_key=${apiKey}`)
    .then(result => result.json())
    .then(object => displayy(object.cast))
}
function display(object){
    console.log(object);
    // console.log(object.genres[0].name);
    movieDetails.style.background = `url(${imgUrl}${object.backdrop_path ?? object.poster_path})`;
    movieDetails.style.backgroundSize = `cover`;
    movieDetails.style.backgroundPosition = `center`;
    movieDetails.innerHTML = 
    `
    <div>
            <img src="${imgUrl}${object.poster_path}" class="movie-photo" alt="">
    </div>
    <div class="details">
        <h1 class="movie-name">${object.title ?? object.name}</h1>
        <h5 class="release_date">${object.release_date ?? object.first_air_date} </h5>
        <div class="detailss">
            <div class="vote">
                ${Math.round(object.vote_average * 10)} <sup class="sup">%</sup>
            </div>
            <h3 class="score">User <br> Score</h3>
            <div class="list">
                <div class="item"><i class='bx bx-menu'></i></div>               
                <div class="item"><i class='bx bxs-heart'></i></div>               
                <div class="item"><i class='bx bxs-bookmark'></i></div>               
                <div class="item"><i class='bx bxs-star'></i></div>               
            </div>
        </div>
        <p class="tagline">${object.tagline}</p>
        <h1 class="headline">Overview</h1>
        <p class="overview">${object.overview}</p>
    </div>
    `
}
function displayy(array){
    console.log(array);
    for (let i = 0; i < array.length; i++) {
    if(array[i].profile_path){
        actors.innerHTML += 
        `
        <div id="actor">
                <img id="actor_photo" src="${imgUrl}${array[i].profile_path}" alt="">
                <p id="actor_name">${array[i].name}</p>
                <p id="character_name">${array[i].character}</p>
    
        </div>
        `
    }
    
    else if (array[i].gender == 0){
        actors.innerHTML += 
        `
        <div id="actor">
                <img id="actor_photo" src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg" alt="">
                <p id="actor_name">${array[i].name}</p>
                <p id="character_name">${array[i].character}</p>
    
        </div>
        `
    }
    else if (array[i].gender == 2){
        actors.innerHTML += 
        `
        <div id="actor">
                <img id="actor_photo" src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg" alt="">
                <p id="actor_name">${array[i].name}</p>
                <p id="character_name">${array[i].character}</p>
    
        </div>
        `
    }
    }
}









fetchMovie()
fetchActors()







