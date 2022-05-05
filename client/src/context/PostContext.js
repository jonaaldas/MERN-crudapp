import { createContext, useContext, useState, useEffect } from "react";
import { getPostsRequest, createPostRequest, deletePostRequest, getPostRequest, updatePostRequest } from '../api/post.js'


// this is the intial context
export const postContext = createContext()

// our own hook
export function usePosts() {
  const context = useContext(postContext)
  return context
}

export function PostContainers({ children }) {
  // this useEffect is for every page so we do not have to write it each time 
  useEffect(() => {
    getPosts()
  }, [])

  const [posts, setPost] = useState([])

  const getPosts = async () =>  {
    const res = await getPostsRequest()
    setPost(res.data)
  }

  const createPost = async(post) => {
    try {
      const res = await createPostRequest(post);
      setPost([...posts, res.data]);
    } catch (error) {
      console.error(error);
    }
  }
  
  const deletePost = async(id) => {
    const res = await deletePostRequest(id)
    if(res.status === 204){
      setPost(posts.filter(post => post._id !== id))
    }
  }

// get pos to edit 
  const getPost = async (id) => {
    const res = await getPostRequest(id)
    return res.data
  }

  // update post 
  const updatePost = async (id, post) => {
    const res = await updatePostRequest(id, post)
    setPost(posts.map((post) => (post._id === id ? res.data : post)));
  }

  // this is how we export the context to all of the childrem
  return <postContext.Provider value={{posts, setPost, getPosts, createPost, deletePost, getPost, updatePost }} >
    {children}
  </postContext.Provider>
}

export default PostContainers;