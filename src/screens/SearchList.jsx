import React, { PureComponent } from 'react'

export default class Film extends PureComponent {

  getFavouritesFromStorage = () => {
    let favs;
    if (localStorage.getItem("favs") === null) {
      favs = [];
    }
    else {
      favs = JSON.parse(localStorage.getItem("favs"));
    }
    return favs;
  }

  addToFavourite = favFilm => {

    let favs = this.getFavouritesFromStorage();
    let newFilm = { Title: favFilm.Title, Year: favFilm.Year, Poster: favFilm.Poster, imdbRating: favFilm.imdbRating, imdbID: favFilm.imdbID }
    let check = favs.filter(fav => fav.imdbID === favFilm.imdbID).length

    if (check) {
      alert("This Film/Series already exists.")
    }
    else {

      favs.push(newFilm);
      localStorage.setItem("favs", JSON.stringify(favs));
      alert("Added to Favourites")
    }
  }

  render() {
    var { films } = this.props;
    console.log(films)
    return (
      <>
        <div className="card-body">
          <hr />
          <h5 className="card-title" >Films</h5>
          <hr />
          {
            films.Search === undefined ?
              <div className="alert alert-dark" role="alert">
                No Film/Series Found.
              </div>

              : films.Search.map((film, i) => (
                <table key={i} className="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Year</th>
                      <th scope="col">Imdb ID</th>
                      <th scope="col">Poster</th>

                    </tr>
                  </thead>
                  <tbody id="films" key={i} >
                    <tr >
                      <td>{film.Title}</td>
                      <td>{film.Year}</td>
                      <td>{film.imdbID}</td>
                      <td><img src={film.Poster} alt='Not Loaded...' className="img-fluid img-thumbnail rounded" /></td>
                      <td><button href="#" className="btn btn-warning" onClick={() => this.addToFavourite(film)}>Favourite</button></td>
                    </tr>

                  </tbody>
                </table>
              ))
          }
          <hr />
        </div>
      </>
    )
  }
}
