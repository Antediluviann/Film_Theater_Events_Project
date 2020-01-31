var myFilms = [
  {
    name: "Dark City",
    imgSrc: "img/dark-city.jpg"
  },
  {
    name: "The Shining",
    imgSrc: "img/the-shining.jpg"
  },
  {
    name: "The Godfather",
    imgSrc: "img/the-godfather.jpg"
  },
  {
    name: "The Matrix",
    imgSrc: "img/the-matrix.jpg"
  },
  {
    name: "Reservoir Dogs",
    imgSrc: "img/reservoir-dogs.jpg"
  },
  {
    name: "Solaris",
    imgSrc: "img/solaris.jpg"
  },
  {
    name: "Braveheart",
    imgSrc: "img/braveheart.jpg"
  },
  {
    name: "The Lord of the Rings",
    imgSrc: "img/lotr.jpg"
  },
  {
    name: "Shutter Island",
    imgSrc: "img/shutter-island.jpg"
  },
  {
    name: "The Prestige",
    imgSrc: "img/the-prestige.jpg"
  },
  {
    name: "Fight Club",
    imgSrc: "img/fight-club.jpg"
  },
  {
    name: "Interstellar",
    imgSrc: "img/Interstellar.jpg"
  },
  {
    name: "Memento",
    imgSrc: "img/memento.jpg"
  },
  {
    name: "Star Wars: Episode V",
    imgSrc: "img/star-wars.jpg"
  },
  {
    name: "American History X",
    imgSrc: "img/american-history-x.jpg"
  },
  {
    name: "Gladiator",
    imgSrc: "img/gladiator.jpg"
  }
];

//defining function for creating elements for each film

function createFilms(data) {

  data.forEach(function(element) {
    //creating elements

    var films = document.getElementById("films");
    var filmName = document.createElement("h3");
    var filmImg = document.createElement("img");
    var film = document.createElement("div");
    var deleteButton = document.createElement("span");

    //appending elements

    films.appendChild(film);
    film.appendChild(filmName);
    film.appendChild(filmImg);
    film.appendChild(deleteButton);

    //Adding names and image paths
    film.classList.add("film");
    filmName.innerHTML = element.name;
    filmImg.setAttribute("src", element.imgSrc);
    deleteButton.innerHTML = '<i class="fas fa-times-circle"></i>';
  });
}

//difining function for filtering films

function filterFilms() {
  //adding event listener to input
  var filterInput = document.getElementById("filter");
  filterInput.addEventListener("keyup", filter);

  //defining filter function
  function filter() {
    //defining input value and elements
    var filterValue = filterInput.value.toLowerCase();

    var filmsDiv = document.getElementById("films");
    var filmDivs = document.querySelectorAll("div.film");

    // removing elements that don't mach the search

    filmDivs.forEach(function(element) {
      var filmName = element.querySelector("h3");

      if (filmName.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
        element.style.display = "";
      } else {
        element.style.display = "none";
      }
    });
  }
  filter();
}

createFilms(myFilms);
filterFilms();

//BONUS

function deleteFilm() {
  
  var filmsDiv = document.getElementById("films");
  var delButton = document.querySelectorAll("div.film i");
  var filmDivs = Array.from(document.querySelectorAll("div.film"));

  filmDivs.forEach(function(element, index) {
    delButton[index].addEventListener("click", function() {
      filmsDiv.removeChild(filmDivs[index]);
    });
  });
}

deleteFilm();