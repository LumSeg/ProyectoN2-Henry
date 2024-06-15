// /scripts/renderCard.js

const movieContainer = document.getElementById("movies-container");

const renderCard = (data) => {
    data.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("movie-card");
    
        const title = document.createElement("h2");
        title.innerHTML = movie.title;
    
        const poster = document.createElement("img");
        poster.classList.add("movie-poster");
        poster.src = movie.poster;
    
        const year = document.createElement("p");
        year.classList.add("card-tex");
        year.innerHTML = movie.year;
    
        card.appendChild(poster);
        card.appendChild(title);
        card.appendChild(year);
    
        movieContainer.appendChild(card);
    }); 
}

module.exports = renderCard;

