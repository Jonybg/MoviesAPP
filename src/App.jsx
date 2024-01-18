
import { useState } from 'react'
import './App.css'
import { MovieCard } from "./MovieCard/MovieCard"


const urlBase = "https://api.themoviedb.org/3/search/movie"
const APY_KEY = "a41abdc1251dd3497ea579210cd2d934"



export const App = () => {




  const [movie, setmovie] = useState("")
  const [data, setdata] = useState([])


  const fetchDAta = async () => {
    try {
      const response = await fetch(`${urlBase}?query=${movie}&api_key=${APY_KEY}`)
      const data = await response.json()
      setdata(data.results)
      console.log(data)
    } catch (error) {
      console.error("error", error)
    }


  }


  const handlerChange = (e) => {
    setmovie(e.target.value)

  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    fetchDAta()
  }
  return (
    <>
      <div className='container'>
        <h1>Movie APP</h1>
        <form onSubmit={handlerSubmit}>
          <input
            type="text"
            placeholder='movie'
            value={movie}
            onChange={handlerChange}
          />
          <button type="submit">Search</button>
        </form>
        <div className='movie-list'>
          {data.length > 0 ? (
            data.map((item) => (
              <MovieCard
                key={item.id}
                img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                title={item.title}
                desc={item.overview}
              />
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </div>
    </>
  );

}