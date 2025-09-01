import React, { useState, useEffect } from 'react';
import './App.css';

// URL base para as imagens dos filmes
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Acessa a chave da API do arquivo .env
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const fetchMovies = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error("Erro ao buscar filmes:", error));
  };

  useEffect(() => {
    // URL para os filmes populares
    const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;
    fetchMovies(popularMoviesUrl);
  }, [API_KEY]); // Roda apenas uma vez quando o componente monta

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm) {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=pt-BR`;
      fetchMovies(searchUrl);
    } else {
      // Se a busca estiver vazia, volta para os populares
      const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;
      fetchMovies(popularMoviesUrl);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>CineInfo</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="search-bar"
            placeholder="Buscar por um filme..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </header>

      <main className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img 
              src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://placehold.co/500x750?text=Indispon%C3%ADvel'} 
              alt={movie.title} 
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
            </div>
            <div className="movie-rating">
              <span>⭐ {movie.vote_average.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
