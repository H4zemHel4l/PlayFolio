import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function RemoveFromLibrary() {
    const [game, setGame] = useState({
        id: 0,
        name: "",
        released: "",
        tba: false,
        background_image: "",
        rating: 0,
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:5000/Games/${id}`);
                setGame(response.data);
            } catch (error) {
                console.error('Error fetching game data:', error);
            }
        }

        fetchData();
    }, [id]);

    const handleChange = async () => {
        try {
            game.tba = !game.tba;
            await axios.put(`http://localhost:5000/Games/${id}`, game);

            if (game.tba) {
                navigate('/');
            } else {
                navigate('/library');
            }
        } catch (error) {
            console.error('Error updating game data:', error);
        }
    };

    return (
        <div className="container h-100 mt-4">
            {(game.tba===false)?<h1 className="alert alert-info text-center m-3">Add {game.name} to My Games</h1>
            :<h1 className="alert alert-info text-center m-3">Remove {game.name} from My Games</h1>}
            <div className="d-flex flex-wrap justify-content-center m-4">
                <img
                    src={game.background_image}
                    alt={game.name}
                    className="p-3"
                    style={{
                        width: "820px",
                        height: "480px",
                        backgroundColor: "#1D2538",
                        pointerEvents: "none",
                    }}
                />
            </div>
            <div className="d-flex justify-content-center h-100">
                <button className='btn btn-primary' onClick={handleChange}>Confirm</button>
            </div>
        </div>
    );
}

export default RemoveFromLibrary;
