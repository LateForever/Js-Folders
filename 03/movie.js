class Movie {
  #ref = "x";
  #date;
  #characters;

  static #count = 0;
  static getTotalMovies() {
    return Movie.#count;
  }

  constructor(film) {
    if (
      !film.title ||
      !film.url ||
      !film.director ||
      !film.release_date ||
      !film.episode_id ||
      !film.characters
    ) {
      throw new Error("Missing required movie info");
    }
    this.title = film.title;
    this.url = film.url;
    this.director = film.director;
    this.release_date = film.release_date;
    this.episode_id = film.episode_id;
    this.#characters = film.characters;
    this.#date = new Date(film.release_date);
    Movie.#count++;
    this.#ref = Math.floor(Math.random() * 16777215).toString(16);
  }

  get id() {
    return this.#ref.toUpperCase();
  }

  set id(val) {
    console.error("This cannot be changed");

    return false;
  }

  getYear() {
    return this.#date.getFullYear();
  }

  getRandomCharacter() {
    return this.#characters[
      Math.floor(Math.random() * this.#characters.length)
    ];
  }
}

export default Movie;
