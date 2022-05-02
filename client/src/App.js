import './App.css';
import { HomePage, NotFoundPage, PostForm } from './pages/index'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/newest' element={<PostForm />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div> 
  );
}

export default App;
