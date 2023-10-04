import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
        const game= ({
            id: 0,
            name: "",
            released: "",
            tba: false,
            background_image: "",
            rating: 0,
        });
        let navigate = useNavigate();

        function handleChange(event) {
            game[event.target.name] = event.target.value;
        }

        function handleSubmit() {
            axios.post('http://localhost:5000/games', game);
            navigate('/');
        }

        return (
            <div>
                <h1 className="alert alert-info text-center m-3">Add New Game</h1>
                <div className=" d-flex justify-content-center mx-5 mt-2">
                    <form className="col-4 text-center text-white" onSubmit={handleSubmit}>
                        <div className="m-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="m-3">
                            <label className="form-label">Released</label>
                            <input type="text" name="released" className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="m-3">
                            <label className="form-label">Background image</label>
                            <input type="url" name="background_image" className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="m-3">
                            <label className="form-label">Rating</label>
                            <input type="text" name="rating" className="form-control" onChange={handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-info m-3">Add</button>
                    </form>
                </div>
            </div>
        )

}
export default Add;