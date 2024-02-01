import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function Delete() {
    const [game, setGame] = useState({
        id: 0,
        name: "",
        released: "",
        tba: false,
        background_image: "",
        rating: 0,
    });
    let {id}  = useParams();
    let navigate = useNavigate();



    useEffect(() => {
        async function getGame(){
            let g = await axios.get(`http://localhost:5000/games/${id}`);
            setGame(g.data);
        }
        getGame();
    }, [id]);

    function deleteGame() {
        axios.delete(`http://localhost:5000/games/${game.id}`);
        navigate('/');
    }
    return (
        <div>
            <h1 className="alert alert-danger text-center m-3">Are you sure you want to delete {game.name} ?</h1>
            <div className="d-flex justify-content-center h-100">
                <button className="btn btn-danger" onClick={deleteGame}>Confirm Delete</button>
            </div>
        </div>
    );
}

export default Delete;