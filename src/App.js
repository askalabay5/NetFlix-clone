import "./App.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";
import requests from "./requests";
import Row from "./Row";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TopRated Movies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaries} />
      <Footer/>
      </div>
  );
}

export default App;
// 2ae0b9ececf0831efc6f3333b724b81c
