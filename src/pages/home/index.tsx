import Poster from "../../components/Poster";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {getFilmsByPopularity, getFilmsFromApiWithSearchedText} from "../../utils/API/TMDBApi";

type Movies = {
    id: number,
    poster_path: string
    title: string
}

type Response = {
    results: []
}

const TextInput = styled.input `
  flex-grow:2;
  border:none;
  &:focus{
    outline: none;
  }
`
const Button = styled.button `
  border: none;
  background-color: lightgray;
  color:white;
  cursor: pointer;
`

const Form = styled.div `
  display:flex;
  flex-direction:row;
  border:1px solid grey;
  padding:2px;
  margin-top: 15px;
`

const FlexContainer = styled.div `
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`

function Home(){
    const [movies, setMovies] = useState<Movies[]>([])
    const [textInput, setTextInput] = useState('')
    const [isMovie, setIsMovie] = useState('movie')

    useEffect(() => {
        loadFilms(isMovie)
    }, [])

    useEffect(() =>{
        if(textInput.length === 0){
            loadFilms(isMovie)
        }else{
            loadFilmByText()
        }
    },[textInput, isMovie])

    function loadFilms(genre: string) {
        getFilmsByPopularity(genre).then((data:Response) => setMovies(data.results));
    }

    function handleTextInput(e: React.ChangeEvent<HTMLInputElement>){
        setTextInput(e.target.value)
    }

    function loadFilmByText(){
        if (textInput.length > 0) {
            getFilmsFromApiWithSearchedText(textInput).then((data:Response) => setMovies(data.results))
        }
    }

    function clearTextInput(){
        setTextInput('')
    }

    function handleChangeType(e: React.ChangeEvent<HTMLInputElement>){
        setIsMovie(e.target.value)
    }

    return(
        <>
            <Form>
                <TextInput onChange={handleTextInput} value={textInput} placeholder={'Search'}/>
                <Button onClick={clearTextInput}>
                    <span className="material-icons">close</span>
                </Button>
            </Form>
            <div onChange={handleChangeType}>
                <input type={'radio'} value={'movie'} name={'gender'} defaultChecked/> Movie
                <input type={'radio'} value={'tv'} name={'gender'}/> Tv/show
            </div>
            <FlexContainer>
                {
                    movies.map((res:Movies, index) =>(
                        <Poster genre={isMovie} data={res} key={index}/>
                     ))
                }
            </FlexContainer>
        </>
    )
}

export default Home