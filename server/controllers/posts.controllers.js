import Post from '../modules/Post.js'
import {
  uploadIamge,
  deleteImg
} from '../libs/cloudninary.js'
import fs from 'fs-extra'
export const getPosts = async (req, res) => {
  try {
    // searching all the post and it has to be async
    const posts = await Post.find()
    return res.json(posts);
  } catch (err) {
    console.error(error.message)
    return res.status(500).json({
      message: err.message
    })
  }
}

export const createPost = async (req, res) => {
  try {
    // estoy reciviendo los datos?
    // req body is how we receive data
    const {
      title,
      description
    } = req.body
    let img;

    if (req.files?.image) {
      const result = await uploadIamge(req.files.image.tempFilePath)
      image = {
        url: result.secure_url,
        public_id: result.public_id
      }
      await fs.remove(req.files.image.tempFilePath)

    }

    const newPost = new Post({
      title,
      description,
      img
    })
    console.log(newPost)
    await newPost.save()
    return res.json(newPost)
  } catch (err) {
    console.error(error.message)
    return res.status(500).json({
      message: err.message
    })
  }

}

export const updatePost = async (req, res) => {
  try {
    // this returns the old post that is not updated 
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.send(updatePost)
  } catch (err) {
    console.error(error.message)
    return res.status(500).json({
      message: err.message
    })
  }

}

export const deletePost = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const post = await Post.findByIdAndDelete(id);

    if (!post) return res.sendStatus(404);

    if (post.imagepublic_id) {
      await deleteImg(post.image.public_id)
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}

export const getPost = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const findPost = await Post.findById(id, req.body)
    if (!findPost) return res.sendStatus(404);
    return res.json(findPost)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}