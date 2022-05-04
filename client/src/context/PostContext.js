import { createContext, useContext, useState, useEffect } from "react";
import { getPostRequest } from '../api/post.js'


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
    getPost()
  }, [])

  const [posts, setPost] = useState([])

  const getPost = async () =>  {
    const res = await getPostRequest()
    setPost(res.data)
  }

  // this is how we export the context to all of the childrem
  return <postContext.Provider value={{ posts, setPost, getPost }} >
    {children}
  </postContext.Provider>
}

export default PostContainers;