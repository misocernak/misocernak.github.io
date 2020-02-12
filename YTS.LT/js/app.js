document.addEventListener('DOMContentLoaded', indexPageContent);

const quickSearchInput = document.querySelector("#quick-search-input");
const browseMoviesButton = document.querySelector("#main-search-btn");

quickSearchInput.addEventListener("keyup", filterTasks);

//Konstantan visedimenzionalni niz koji u ovom slucaju sluzi kao "baza" koja sadrzi filmove i podatke o njima
const allMovies = [{ name: "Ad Astra", rating: 6.9, genre: "Adventure", genre2: "Drama", year: 2019, popular: true, banner: "images/movies banners/ad-astra-banner.jpg" },
{ name: "It Chapter Two", rating: 6.7, genre: "Drama", genre2: "Fantasy", year: 2019, popular: true, banner: "images/movies banners/it-chapter-two-banner.jpg" },
{ name: "The Irishman", rating: 8.6, genre: "Biography", genre2: "Crime", year: 2019, popular: true, banner: "images/movies banners/the-irishman-banner.jpg" },
{ name: "Abominable", rating: 7, genre: "Adventure", genre2: "Animation", year: 2019, popular: true, banner: "images/movies banners/abominable-cover.jpg" },
{ name: "Amundsen", rating: 6.3, genre: "Biography", genre2: "Drama", year: 2019, popular: false, banner: "images/movies banners/amundsen-cover.jpg" },
{ name: "Inventing The Abbotts", rating: 6.4, genre: "Drama", genre2: "Romance", year: 1997, popular: false, banner: "images/movies banners/inventing-the-abbotts-cover.jpg" },
{ name: "Spare Room", rating: 8.1, genre: "Drama", genre2: "Mistery", year: 2018, popular: false, banner: "images/movies banners/spare-room-cover.jpg" },
{ name: "I.Q.", rating: 6.2, genre: "Comedy", genre2: "Romance", year: 1994, popular: false, banner: "images/movies banners/iq-cover.jpg" },
{ name: "Little Children", rating: 7.5, genre: "Drama", genre2: "Romance", year: 2006, popular: false, banner: "images/movies banners/little-children-cover.jpg" },
{ name: "The Boy The Dog And The Clown", rating: 0, genre: "Family", genre2: "Comedy", year: 2019, popular: false, banner: "images/movies banners/the-boy-the-dog-and-the-clown-cover.jpg" },
{ name: "My Days Of Mercy", rating: 6.3, genre: "Action", genre2: "Drama", year: 2017, popular: false, banner: "images/movies banners/my-days-of-mercy-cover.jpg" },
{ name: "The Madness Within", rating: 0, genre: "Thriller", genre2: "Action", year: 2019, popular: false, banner: "images/movies banners/the-madness-within-cover.jpg" }];


let movieHolder = document.getElementsByClassName("browse-movie-wrap");
let movieHolder2 = document.getElementsByClassName("filter-browse-movie-wrap");


//Funkcija koja dinamicki ispisuje content index.html stranice
function indexPageContent() {
    for (let i = 0; i < allMovies.length; i++) {
        movieHolder[i].innerHTML = '<a href="#" class="browse-movie-link"><figure><img class="img-responsive popular-movie" alt="Ad ad-astra-banner" src="' + allMovies[i].banner + '"><figcaption class="hidden-xs hidden-sm"><h4 class="rating">' + allMovies[i].rating.toString() + '/10</h4><h4 class="genre">' + allMovies[i].genre + '</h4><h4 class="genre2"> ' + allMovies[i].genre2 + '</h4><span class="button-green-download2-big">View details</span></figcaption></figure></a><div class="browse-movie-bottom"><a href="#" class="browse-movie-tittle">' + allMovies[i].name + '</a></div><div class="browse-movie-year">' + allMovies[i].year + '</div>'
    }
}

//Funkcija koja filtrira filmove unosom karaktera u Quick search polje forme koje se nalazi u headeru
function filterTasks(filterInput) {
    let niz = [];
    document.getElementById("search-results").innerHTML = "";
    const text = filterInput.target.value.toLowerCase();
    allMovies.forEach
        (function (allMovies) {
            const item = allMovies.name;
            if (item.toLowerCase().indexOf(text) != -1) {
                document.getElementById("search-results").innerHTML = document.getElementById("search-results").innerHTML + "<li><a href='#'><img src='" + allMovies.banner + "'><span>" + allMovies.name + "</span><p>" + allMovies.year + "</p></a></li>";
            }
        });
}

function filter() {
    let filterGenre = document.getElementById("moviesGenre");
    let genreValue = filterGenre.options[filterGenre.selectedIndex].value;
    let filterRating = document.getElementById("moviesRating");
    let ratingValue = filterRating.options[filterRating.selectedIndex].value;
    let filteredMovies = [];
    let n = parseFloat(ratingValue);

    for (let i = 0; i < allMovies.length; i++) {
        if ((allMovies[i].genre == genreValue || allMovies[i].genre2 == genreValue || genreValue == "all") && allMovies[i].rating >= n) {
            filteredMovies.push(allMovies[i]);
        }
    }

    if (filteredMovies.length == 0) {
        document.getElementById("holderP").innerHTML = "No movies found";
    } else {
        for (let i = 0; i < filteredMovies.length; i++) {
            movieHolder2[i].innerHTML = '<a href="#" class="browse-movie-link"><figure><img class="img-responsive popular-movie" alt="Ad ad-astra-banner" src="' + filteredMovies[i].banner + '"><figcaption class="hidden-xs hidden-sm"><h4 class="rating">' + filteredMovies[i].rating.toString() + '/10</h4><h4 class="genre">' + filteredMovies[i].genre + '</h4><h4 class="genre2"> ' + filteredMovies[i].genre2 + '</h4><span class="button-green-download2-big">View details</span></figcaption></figure></a><div class="browse-movie-bottom"><a href="#" class="browse-movie-tittle">' + filteredMovies[i].name + '</a></div><div class="browse-movie-year">' + filteredMovies[i].year + '</div>'
        }
    }
}