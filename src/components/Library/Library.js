import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Library() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        async function getGames() {
            try {
                const res = await axios.get('http://localhost:5000/Games');
                setGames(res.data);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        }
        getGames();
    }, []);

    return (
        <div>
            <h1 className="alert alert-info text-center m-3">My Games</h1>
            <div className="d-flex flex-wrap justify-content-center">
                {games.map((game) => (
                    game.tba === true ? (
                        <div key={game.id} className="m-3 item text-wrap justify-content-center">
                            {/* Game Image */}
                            <img
                                src={game.background_image}
                                alt={game.name}
                                className="p-3"
                                style={{
                                    width: "500px",
                                    height: "300px",
                                    borderTopLeftRadius: "10px",
                                    borderTopRightRadius: "10px",
                                    backgroundColor: "#1D2538",
                                    pointerEvents: "none",
                                }}
                            />

                            {/* Game Details */}
                            <div
                                className="p-3 pt-1"
                                style={{
                                    fontSize: "25px",
                                    color: "white",
                                    borderBottomRightRadius: "10px",
                                    borderBottomLeftRadius: "10px",
                                    backgroundColor: "#1D2538",
                                }}
                            >
                                {/* Game Name */}
                                {game.name}

                                {/* Release Date */}
                                <div className="mt-2" style={{fontSize: "18px"}}>
                                    {game.released}
                                </div>

                                {/* Rating and Bookmark Link */}
                                <span className="mt-2 d-flex" style={{fontSize: "15px"}}>
                                <i className="bi bi-star-fill me-1">{game.rating}</i>
                                <Link to={`/update-library/${game.id}`} className="btn d-flex ms-auto order-5">
                                    <span className="btn btn-danger">
                                        <i className="bi bi-escape"></i>
                                    </span>
                                </Link>
                            </span>
                            </div>
                        </div>
                    ) : null)
                )}
            </div>
        </div>
    );
}

export default Library;
