import { usePosts } from '../context/PostContext'
import { VscEmptyWindow } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { PostCard } from '../components/postCard'

export function HomePage() {

  const { posts } = usePosts()

  if (posts.length === 0) {
    return (
      <div className="flex flex-col justify-cener items-center">
        <VscEmptyWindow className='w-48 h-48 text-black' />
        <h1 className='text-black text-2xl'>There are no posts</h1>
      </div>)
  }

  const userPosts = posts.map(post => {
    return <PostCard post={post} key={post._id} />
  })
  return (
    <>
      <div className="cont">
        <Link to='/new'>
          Create a post
        </Link>
        <div className='grid grid-cols-3 gap-2'>
        {userPosts}
        </div>
      </div>
    </>
  );
}


