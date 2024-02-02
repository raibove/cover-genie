import './App.css';
import { useState } from 'react';
// import Why from './pages/why/Why';
import Home from "../src/pages/home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GetStarted from './pages/get-started';
import CreateCoverImage from './pages/cover-image';
// import NotFound from './pages/notFound/NotFound';

function App() {
  const [post, setPost] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/get-started" element = {<GetStarted setPost={setPost}/>} />
          <Route path="/create-cover-image" element = {<CreateCoverImage post={post}/>} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;