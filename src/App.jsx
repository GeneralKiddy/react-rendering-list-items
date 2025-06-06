import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="App">
      <h1 className="app-heading">Movie List Section</h1>
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        {movies.map((item, index) => (
          <div key={index} className="movie-list">
            <div className="movie-list-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="movie-list-info">
              <div className="movie-list-title">Title: {item.title}</div>
              <div className="movie-list-year">Year: {item.year}</div>
              <div className="movie-list-runtime">Runtime: {item.runtime}</div>
              <div className="movie-list-genres">
                Genres: {item.genres.map((genre) => (
                  <div className="genre">{genre}</div>
                ))}
              </div>
              <div className="movie-list-imdbRating">IMDB Ratings: {item.imdbRating}</div>
              <div className="movie-list-imdbVotes">IMDB Votes: {item.imdbVotes}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
