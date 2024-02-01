import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Favorit() {
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

    return (<div>
        <h1 className="alert alert-info text-center m-3">My Games</h1>
        <div className="d-flex flex-wrap justify-content-center">
            {games.map((game) => (game.tba === true ? (
                <div key={game.id} className="m-2 item text-wrap justify-content-center"
                     style={{width: "350px", height: "350px", overflow: "hidden"}}>
                    {/* Game Image */}
                    <div>
                        <img
                            src={game.background_image}
                            alt={game.name}
                            className="p-3"
                            style={{
                                width: "100%",
                                height: "220px",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                                backgroundColor: "#000000", // Black background color for the image container
                                pointerEvents: "none",
                            }}
                        />
                    </div>
                    <div className="p-3 pt-1"
                         style={{
                             fontSize: "20px",
                             color: "#000000", // Black text color for game details
                             borderBottomRightRadius: "10px",
                             borderBottomLeftRadius: "10px",
                             backgroundColor: "#000000", // Black background color for the details container
                         }}>
                        <div style={{overflow: "hidden", display: "inline-block"}} className={"text-white"}>
                            {/* Game Details */}
                            <div>
                                {/* Game Name */}
                                {game.name}

                                {/* Release Date */}
                                <div className="mt-2" style={{fontSize: "15px"}}>
                                    {game.released}
                                </div>

                                {/* Rating */}
                                <div className="mt-2 d-flex ms-auto" style={{fontSize: "12px"}}>
                                    <i className="bi bi-star-fill me-1">{game.rating}</i>
                                </div>
                            </div>
                        </div>
                        {/* Rating and Bookmark Link */}
                        <div style={{float: "right", display: "inline-block"}} className={"mb-3"}>
                            <Link to={`/update-library/${game.id}`} className="btn d-flex ms-auto order-5">
                                <span className="btn btn-danger">
                                    <i className="bi bi-escape"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>) : null))}
        </div>
    </div>);
}

export default Favorit;
