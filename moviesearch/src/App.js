import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Components/Header/Header';
import MovieList from './Components/movieList/movieList';
import Movie from "./Pages/movieDetail/movie";

import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
     <Router>
     <Header></Header>

      <Routes>
         <Route index element = {<Home />}></Route>
         <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
         <Route path='/*' index element ={<h1>Error Page</h1>}></Route>

      </Routes>
     </Router>
    </div>
  );
}

export default App;
