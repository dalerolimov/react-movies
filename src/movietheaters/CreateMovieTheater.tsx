import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlMovieTheaters } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import { movieTheatersCreationDTO } from "./movietheaters.model";
import MovieTheatersForm from "./MovieTheatersForm";

export default function CreateMovieTheater() {

    const history = useHistory();
    const [errors, setErrors] = useState<string[]>([]);
    
    async function create(movieTheater: movieTheatersCreationDTO) {
        try {
            await axios.post(urlMovieTheaters, movieTheater);
            history.push("/movietheaters");
        }
        catch(error) {
            if (error && error.response) {
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Create Movie Theaters</h3>
            <DisplayErrors errors={errors} />
            <MovieTheatersForm 
                model={{name: ''}}
                onSubmit={async values => await create(values)}
            />
        </> 
    )
}