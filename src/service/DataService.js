import axios from "axios";

const API_KEY = "c8f06b06";
const MAIN_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;


class DataService {
  //I searched overloading structre in js but they say that it can be done like this.
  searchFilms(title,year,type) {
    if (type === "" && year === "") {
      return axios.get(`${MAIN_URL}&s=${title}`);
    }
    else if (type !== "" && year === "") {
      return axios.get(`${MAIN_URL}&s=${title}&type=${type}`);
    }
    else if (type === "" && year !== "") {
      return axios.get(`${MAIN_URL}&s=${title}&y=${year}`);
    }
    else{
    return axios.get(`${MAIN_URL}&s=${title}&y=${year}&type=${type}`);}
  }

  //the "t" parameter of api only returns one film but on the project
  //it's said that "films" should be displayed. So i used "s" parameter
  //however s parameter doesnt give imdb directly , it insted
  //gives the id. I wrote the below method to get the imdbRating key from "i" parameter
  //but using this method for every film will consume my api request limit a lot
  //so i just displayed the id's. (better solutions can be written)
  getImdb(id){
    return axios.get(`${MAIN_URL}&i=${id}`);
  }

}

export default new DataService();
