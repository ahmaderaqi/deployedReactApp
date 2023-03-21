import { useState, useEffect } from "react";
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Home.css'
import MovieList from "./MovieList";
import FavMovieList from "./FavMovieList";

function Favlist() {
    const [favArr, setFavArr] = useState([]);

    const addFavoriteHandel = async (e) => {
        // console.log("props1",props);
        const serverURL = `https://movies-library-production-27d6.up.railway.app/getMovies`
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data)
        setFavArr(data);
    }

    useEffect(() => {
        addFavoriteHandel();
    }, [])

    return (
        <>
            <h1>favlist</h1>
            <div className="homeCss">

                <FavMovieList favArr={favArr} addFavoriteHandel={addFavoriteHandel} />
            </div>
        </>


    )

}

export default Favlist;