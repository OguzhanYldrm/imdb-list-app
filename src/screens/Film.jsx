import React, { Component } from 'react'
import SearchList from './SearchList'
import DataService from '../service/DataService'

class Film extends Component {
  constructor(props) {
    super(props)

    this.state =
    {
      films: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.goToFavs = this.goToFavs.bind(this)
  }

  handleSubmit = async () => {
    var { title, year, type } = this.refs;
    if (title.value === "") { alert("Please Enter a Title!") } else {

      await DataService.searchFilms(title.value, year.value, type.value)
        .then(response => {
          console.log(response.data)
          this.setState({ films: response.data })

        })
        .catch(error => {
          alert("A Problem Occured")
        })

    }
  }

  goToFavs = () => {
    this.props.history.push(`/favs/`);
  }

  render() {
    var { films } = this.state;
    return (
      <div className="container" style={styles.container}>

        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <button className="btn btn-secondary active" type="button" >Search Films </button>
          <button className="btn btn-secondary" type="button" onClick={this.goToFavs}>Favourites </button>
        </div>

        <div className="card row">
          <div className="card-header">IMDB LIST</div>
          <div className="card-body">
            <form name="form">
              <div className="form-row">

                <div className="form-group col-sm-4">
                  <label className="mr-sm-2">Title</label>
                  <label className="mr-sm-2 text-danger">*</label>
                  <input className="form-control" type="text" ref="title" placeholder="Title" />
                </div>
                <div className="form-group col-sm-4">
                  <label className="mr-sm-2">Year</label>
                  <input className="form-control" type="text" ref="year" placeholder="Year" />

                </div>

                <div className="form-group col-sm-4">
                  <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Type</label>
                  <select ref="type" className="custom-select mr-sm-2" id="inlineFormCustomSelect" >
                    <option defaultValue="" selected disabled></option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                  </select>
                </div>
              </div>
              <button type="button" onClick={this.handleSubmit} className="btn btn-danger">Search</button>
            </form>

          </div>


          <SearchList films={films} />
        </div>

      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: "2vw",
    display: "flex-center",


  },

}

export default Film