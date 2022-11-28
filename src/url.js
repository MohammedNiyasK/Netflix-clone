export  const API_KEY ='7fff7d08018a57b770bb09710a19c4a0';
export const base_url ='https://api.themoviedb.org/3'
export const image_url ='https://image.tmdb.org/t/p/original'
export const image ='https://image.tmdb.org/t/p/w500'

export const genre_url ={
    trending:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    action :`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    originals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    comedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
}

const youTube_url ='https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=7fff7d08018a57b770bb09710a19c4a0&language=en-US'