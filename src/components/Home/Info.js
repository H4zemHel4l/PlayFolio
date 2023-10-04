import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import './Info.css'
function Info(){
    const [game, setGame] = useState({
        id: 0,
        name: "",
        released: "",
        tba: false,
        background_image: "",
        rating: 0,
    });
    const { id } = useParams();

    useEffect(() => {
        async function getGame() {
            let g = await axios.get(`http://localhost:5000/games/${id}`);
            setGame(g.data);
        }
        getGame();
    }, [id]);

    return(
        <div>
            <div className="d-flex flex-wrap justify-content-center" style={{marginTop:"50px"}}>
                <div>
                    <img
                        src={game.background_image}
                        alt={game.name}
                        className="p-3"
                        style={{
                            width: "1020px",
                            height: "620px",
                            backgroundColor: "#1D2538",
                            pointerEvents: "none",
                        }}
                    />
                </div>
                <div className="blurred-table" >
                    <table style={{marginLeft:"50px"}}>
                        <tbody>
                        <tr >
                            <th>Name:</th>
                            <td>{game.name}</td>
                        </tr>
                        <tr>
                            <th>Released:</th>
                            <td>{game.released}</td>
                        </tr>
                        <tr>
                            <th>Rating:</th>
                            <td>{game.rating} <i className="bi bi-star-fill me-1"></i></td>
                        </tr>
                        </tbody>
                    </table>
                    <div style={{marginLeft:"50px", marginRight:"50px",marginTop:"160px"}}>
                        <Link to={`/delete/${game.id}`} className="btn  btn-danger m-4" style={{fontSize:"40px", borderRadius:"30px"}}>
                            Delete
                        </Link>
                        <Link to={`/edit/${game.id}`} className="btn btn-primary m-4" style={{fontSize:"40px", borderRadius:"30px"}}>
                            &nbsp;&nbsp;Edit&nbsp;&nbsp;
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Info;