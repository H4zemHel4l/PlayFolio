import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import plus from '../assets/Plus.png'
function Home() {
    const [games, setGames] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        async function getGames() {
            try {
                const res = await axios.get("http://localhost:5000/Games");
                setGames(res.data);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        }

        getGames()
    }, []);

    return (<div>
        <div className="d-flex justify-content-center mx-5 mt-2">
            <input
                className="form-control m-3"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                style={{backgroundColor: "#b0b3b6"}}
            />
            <Link to={'/add'} className="mt-1 me-4">
                <i className="bi bi-plus-square-fill link-success fs-1"></i>
            </Link>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
            {games.filter((game) => search.toLowerCase() === "" ? true : game.name.toLowerCase().includes(search))
                .map((game) => game.tba === false ? (

                    <div key={game.id} className="m-3 item text-wrap justify-content-center" style={{overflow:"hidden"}}>
                        {/* Game Image */}
                        <div>
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
                        </div>
                        <div className="p-3 pt-1"
                             style={{
                                 fontSize: "25px",
                                 color: "white",
                                 borderBottomRightRadius: "10px",
                                 borderBottomLeftRadius: "10px",
                                 backgroundColor: "#1D2538",

                             }}>
                        <div style={{overflow:"hidden",display:"inline-block"}}>
                            {/* Game Details */}
                            <div>
                                {/* Game Name */}
                                {game.name}

                                {/* Release Date */}
                                <div className="mt-2" style={{fontSize: "18px"}}>
                                    {game.released}
                                </div>

                                {/* Rating */}
                                <div className="mt-2 d-flex ms-auto" style={{fontSize: "15px"}}>
                                    <i className="bi bi-star-fill me-1">{game.rating}</i>
                                </div>
                            </div>
                        </div>
                        <div style={{float:"right",display:"inline-block"}}>
                            <Link to={`/info/${game.id}`} className="btn d-flex btn-secondary m-2 mb-3">
                                <i class="bi bi-info-circle-fill link-light"></i>
                            </Link>
                            <Link to={`/update-library/${game.id}`} className="btn d-flex btn-light m-2">
                                <i className="bi bi-heart-fill link-danger"></i>
                            </Link>
                        </div>
                    </div>
                    </div>
                ) : null)}
        </div>

    </div>);
}

export default Home;