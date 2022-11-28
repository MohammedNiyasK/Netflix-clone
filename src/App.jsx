import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {genre_url} from './url'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <RowPost
      title='Netflix Originals'
      url = {genre_url.originals}
       />
      <RowPost
      title='Action Movies'
      url = {genre_url.action}
      isSmall
       />
      <RowPost
      title='Comedy Movies'
      url = {genre_url.comedyMovies}
      isSmall
       />
      <RowPost
      title='Horror Movies'
      url = {genre_url.horrorMovies}
      isSmall
       />
       
    </>
  );
}

export default App;
