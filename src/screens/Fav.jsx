/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Fav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favouriteFilms: []
    }
  }

  componentDidMount() {
    let favouriteList = this.getFavouritesFromStorage();
    this.setState({ favouriteFilms: favouriteList })
  }

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

  clearStorage = () => {
    localStorage.removeItem("favs");
    this.setState({ favouriteFilms: [] })
  }

  goToFilms = () => {
    this.props.history.push(`/`);
  }

  render() {
    const { favouriteFilms } = this.state;
    return (
      <div className="card-body align-selft-center">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <button className="btn btn-secondary" type="button" onClick={this.goToFilms}>Search Films </button>
          <button className="btn btn-secondary active" type="button" >Favourites </button>
        </div>
        <hr />
        <h5 className="card-title" id="films-title">Favourites</h5>

        <hr />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Imdb</th>
              <th scope="col">Poster</th>


            </tr>
          </thead>
          {
            favouriteFilms.length === 0
              ? <tbody id="films" />
              : favouriteFilms.map((film, i) => (
                <tbody id="films" key={i}>
                  <tr >
                    <td>{film.Title}</td>
                    <td>{film.Year}</td>
                    <td>{film.imdbID}</td>
                    <td><img src={film.Poster} alt='Not Loaded...' className=" img-thumbnail rounded" /></td>
                  </tr>

                </tbody>))}
        </table>
        <hr />
        <button id="clear-films" onClick={this.clearStorage} className="btn btn-dark" href="#">Clear All Films</button>
      </div>
    )
  }
}

export default withRouter(Fav)