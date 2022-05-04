import axios from 'axios'

export const getPostRequest = async () => {
   return await axios.get('/posts')
   
}