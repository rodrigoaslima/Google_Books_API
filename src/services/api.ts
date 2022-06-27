import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/'
})

export default Api