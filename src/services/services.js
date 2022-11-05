import axios from 'axios'

const URL = `http://localhost:3001/posts`;

const getPost = (id) => {
    return axios.get(`http://localhost:3001/posts/${id}`)
}

export default { getPost }