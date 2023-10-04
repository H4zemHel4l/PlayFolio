import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function Edit(){
    const [game, setGame] = useState({
        id: 0,
        name: "",
        released: "",
        tba: false,
        background_image: "",
        rating: 0,
    });
    let {id} = useParams();
    async function getCustomer() {
        let g= await axios.get(`http://localhost:5000/customers/${id}`);
        setGame(g.data);
    }

    useEffect(() => {
        async function getGame() {
            let g= await axios.get(`http://localhost:5000/games/${id}`);
            setGame(g.data);
        }
        getGame()
    }, [id]);
    let navigate = useNavigate();

    function handleChange (event) {
        setGame({ ...game, [event.target.name]: event.target.value });
    }

    function handleSubmit(){
        axios.put(`http://localhost:5000/games/${id}`, game);
        navigate(`/info/${game.id}`);
    }
    return (
        <div>
            <h1 className="alert alert-info text-center m-3">Edit {game.name}</h1>
            <div className=" d-flex justify-content-center mx-5 mt-2">
                <form className="col-4 text-center text-white" onSubmit={handleSubmit}>
                    <div className="m-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" value={game.name} className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="m-3">
                        <label className="form-label">Released</label>
                        <input type="text" name="released" value={game.released} className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="m-3">
                        <label className="form-label">Background image</label>
                        <input type="url" name="background_image" value={game.background_image} className="form-control" onChange={handleChange}/>
                    </div>
                    <div className="m-3">
                        <label className="form-label">Rating</label>
                        <input type="text" name="rating" value={game.rating} className="form-control" onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-info m-3">Confirm Edit</button>
                </form>
            </div>
        </div>
    );
}

export default Edit;