import {
  Router
} from 'express'

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPost
} from '../controllers/posts.controllers.js'

const router = Router()

// show all posts
router.get('/posts', getPosts)

// create a new client
router.post('/posts', createPost)

// update client
router.put('/posts/:id', updatePost)

// delete clients
router.delete('/posts/:id', deletePost)

// only get one client
router.get('/posts/:id', getPost)

export default router