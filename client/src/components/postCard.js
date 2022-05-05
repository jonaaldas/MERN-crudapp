import toast from 'react-hot-toast'
import { usePosts } from '../context/PostContext'
import { useNavigate } from 'react-router-dom'
export function PostCard({ post }) {
  const { deletePost } = usePosts()
  const navigate = useNavigate()
  const handleDelete = (id) => {
    toast((t) => {
      return <div>
        <p className='text-white'>Do you want to delete?</p>
        <div>
          <button className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
            onClick={() => {
              deletePost(id)
              toast.dismiss(t.id)
            }} >Yes</button>

          <button className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2' onClick={() => toast.dismiss(t.id)}>No</button>
        </div>
      </div>
    }, {
      style: {
        background: '#202020'
      }
    })
  }
  
  return (
    <div className="bg-zinc-800 text-white rounded-md shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer" onClick={() => navigate(`/posts/${post._id}`)}>
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3 className="text-md font-semibold">{post.title}</h3>
          <p className="text-gray-400">{post.description}</p>
          {post.image && <img src={post.image.url}/>}
          <button className="bg-red-600 text-sm px-2 py-1 rounded-sm" onClick={(e) => {
            e.stopPropagation()
            handleDelete(post._id)
          }}>Delete</button>
        </div>
      </div>
    </div >
  );
}