import { urlMovieTheaters } from "../endpoints";
import EditEntity from "../utils/EditEntity";
import { movieTheaterDTO, movieTheatersCreationDTO } from "./movietheaters.model";
import MovieTheatersForm from "./MovieTheatersForm";

export default function EditMovieTheater() {
    return (
        <EditEntity<movieTheatersCreationDTO, movieTheaterDTO>
            url={urlMovieTheaters} indexURL="/movietheaters" entityName="Movie Theater"    
        >
            {(entity, edit) => 
                <MovieTheatersForm model={entity} 
                    onSubmit={async values => await edit(values)}
                />
            }
        </EditEntity>
    )
}