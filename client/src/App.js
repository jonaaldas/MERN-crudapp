import { PostContainers } from './context/PostContext'
import { HomePage, NotFoundPage, PostForm } from './pages/index'
import { Routes, Route } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'


import './App.css';
function App() {
  return (
    <div className="min-h-screen  flex items-center">
      <div className="px-10 container m-auto">
        <PostContainers>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/new' element={<PostForm />} />
            <Route path='/posts/:id' element={<PostForm />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <Toaster/>
        </PostContainers>
      </div>
    </div>
  );
}

export default App;
