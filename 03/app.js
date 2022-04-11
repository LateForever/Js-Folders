import Movie from "./movie.js";

let theMovies = [];

document.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("https://swapi.dev/api/films/")
    .then((resp) => {
      if (!resp.ok) throw new Error(resp.statusText);
      return resp.json();
    })
    .then((data) => {
      console.log(data);

      theMovies = data.results.map((film) => new Movie(film));
      console.log(theMovies);
      buildList();
    })
    .catch((err) => {
      console.error(err);
    });
}

function buildList() {
  let title = document.querySelector("nav>h2");
  title.innerHTML = `${Movie.getTotalMovies()} Star Wars Movies`;
  let main = document.querySelector("main");
  main.innerHTML = theMovies
    .map((m) => {
      return `<div class="movie" data-ref="${m.id}" data-episode="${
        m.episode_id
      }">
        <h2>Star Wars: ${m.title} ( ${m.getYear()} )</h2>
        <p>Directored by: ${m.director}</p>
        <p>Random character:
            <span class="char"> ${m.getRandomCharacter()} </span>
        </p>
        <p><a href="${m.url}" target="_blank">More info</a></p>
        </div>`;
    })
    .join("");
}
