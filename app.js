var ironman = {
  title: "Iron Man",
  releasedDate: "15/05/2008",
  budget: 180000,
  score: 7,
  poster:"http://br.web.img2.acsta.net/c_215_290/medias/nmedia/18/91/79/19/20163665.jpg"
};

var thor = {
  title: "Thor",
  releasedDate: "11/04/2011",
  budget: 170000,
  score: 6,
  poster:"http://br.web.img2.acsta.net/c_215_290/medias/nmedia/18/91/79/19/20163665.jpg"
};

var captainAmerica = {
  title: "Captain America",
  releasedDate: "11/07/2011",
  budget: 195000,
  score: 5,
  poster:"http://br.web.img2.acsta.net/c_215_290/medias/nmedia/18/91/79/19/20163665.jpg"
};

var lotr = {
  title: "The Lord of The Rings",
  releasedDate: "25/11/2001",
  budget: 2000000,
  score: 9,
  poster:"https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY999_CR0,0,673,999_AL_.jpg"
};


var tbody = document.getElementById("tbodyMovies");
var btnSave = document.getElementById("btnSave");
var txfTitle = document.getElementById("txfTitle");
var txfBudget = document.getElementById("txfBudget");
var txfPoster = document.getElementById("txfPoster");
var txfScore = document.getElementById("txfScore");
var txfReleasedDate = document.getElementById("txfReleasedDate");
var movies = [];


function init() {
    btnSave.addEventListener("click", getMovieFromForm );
    tbody.innerHTML = "";

    //var movies = window.localStorage.getItem("movies");
    movies = [ironman, thor, captainAmerica, lotr];
    // for (var i=0; i < movies.length; i++){
    //   addMovie(movies[i]);
    // }
//    movies.forEach((m) => addMovie(m));
    var addEach = function(m) { addMovie(m) };
    movies.forEach(addEach);
}

var addMovie = function(movie) {
  var row =
          "<tr>" +
            "<td>"+movie.title+"</td>"+
            "<td>"+movie.releasedDate+"</td>"+
            "<td>"+movie.budget+"</td>"+
			"<td>"+movie.score+"</td>"+
            "<td><img src=\""+movie.poster+"\" width=\"30px\"></td>"
          "</tr>";
  tbody.innerHTML += row;
}

var getMovieFromForm = function (e) {
  e.preventDefault();
    var title = txfTitle.value;
    var poster = txfPoster.value;
    var releasedDate = txfReleasedDate.value;
    var budget = txfBudget.value;
	var score = txfScore.value;
    var movie = {title: title, "poster": poster, releasedDate: releasedDate, "budget": budget, "score" : score};
    addMovie(movie);
    movies.push(movie);
}

window.onload = init();