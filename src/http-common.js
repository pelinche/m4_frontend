import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  //baseURL: 'http://localhost:8081/',
  baseURL: 'https://thawing-temple-54644.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
