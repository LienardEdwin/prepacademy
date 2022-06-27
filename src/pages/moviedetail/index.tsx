import {useEffect, useState} from "react";
import { useParams  } from "react-router-dom";
import {getFilmById} from '../../utils/API/TMDBApi'
import styled from 'styled-components'
import Poster from '../../components/Poster'
import {Movie, ShowComapny, ShowType, ShowLanguages, Seasons} from '../../utils/types/Movie'

const MainContainer = styled.div `
  display: flex;
  margin-top: 20px;
  @media only screen and (min-width:321px) and (max-width:1024px)
  {
    flex-direction: column;
    text-align: center;
  }
`

const MovieTitle = styled.h2 `
  margin: 20px;
`

const MovieInfo = styled.p `
  margin: 20px;
`

const MovieListInfo = styled.ul`
  margin: 20px;
`

const MovieDescription = styled(MovieInfo) `
  text-align: justify;
`

export default function MovieDetail(){
    const params =  useParams()
    const [movie, setMovie] = useState<Movie | undefined>()
    const isTvShow = movie?.number_of_seasons && movie?.number_of_episodes

    useEffect(() =>{
        loadMovieById()
    }, [])

    function loadMovieById(){
        if(params.movieId && params.type){
            getFilmById(params.movieId, params.type).then((data:Movie) => setMovie(data));
        }
    }

    return movie ?(
        <MainContainer>
            <div>
                <MovieTitle>{isTvShow ? movie.name : movie.title}</MovieTitle>
                <MovieDescription>{movie.overview}</MovieDescription>
                <MovieInfo>Date de sortie : { isTvShow ? movie.first_air_date : movie.release_date}</MovieInfo>
                <MovieInfo>{movie.vote_average} / 10</MovieInfo>
                <MovieTitle>Genres: </MovieTitle>
                <MovieListInfo>
                    {movie.genres && movie.genres.map((genre:ShowType) => (
                        <li>{genre.name}</li>
                    ))}
                </MovieListInfo>
                <MovieTitle>Autheur(s)</MovieTitle>
                <MovieListInfo>
                    {movie.production_companies && movie.production_companies.map((genre:ShowComapny) => (
                        <li>{genre.name}</li>
                    ))}
                </MovieListInfo>
                <MovieTitle>Langues disponibles</MovieTitle>
                <MovieListInfo>
                    {movie.spoken_languages && movie.spoken_languages.map((language:ShowLanguages) => (
                        <li>{language.name}</li>
                    ))}
                </MovieListInfo>
                {
                    isTvShow && (
                        <>
                            <MovieTitle>Episode et saison</MovieTitle>
                            <MovieInfo>Nb de season {movie?.number_of_seasons}</MovieInfo>
                            <MovieInfo>Nb de d'épisodes {movie?.number_of_episodes}</MovieInfo>
                            <MovieTitle>List des saisons</MovieTitle>
                            <MovieListInfo>
                                {movie.seasons && movie.seasons.map((season:Seasons) => (
                                    <>
                                        <span>{season.name}</span>
                                        <li>{season.overview}</li>
                                    </>

                                ))}
                            </MovieListInfo>
                        </>

                    )

                }
            </div>
            <div>
                <Poster data={movie}/>
            </div>
        </MainContainer>
    ) : null
}