import './App.css';
// import Why from './pages/why/Why';
import Home from "../src/pages/home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GetStarted from './pages/get-started';
import CreateCoverImage from './pages/cover-image';
// import Practice from './pages/practice/Practice';
// import Demo from './pages/demo/Demo';
// import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <div>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element = {<Home />} />
              <Route path="/get-started" element = {<GetStarted />} />
              <Route path="/create-cover-image" element = {<CreateCoverImage />} />
              {/* <Route path='*' element={<NotFound />} /> */}
            </Routes>
          </BrowserRouter>
        </div>

    </div>
  );
}

export default App;