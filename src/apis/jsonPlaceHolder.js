import axios from 'redaxios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})