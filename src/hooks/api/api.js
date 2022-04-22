import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-agenda-contatos.herokuapp.com/'
})

export default api