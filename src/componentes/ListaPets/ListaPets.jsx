import { Link } from "react-router-dom";

const ListaPets = (props) => {
    return(
        <>
            <h2> Lista de mascotas </h2>
            {props.listaPets.map((pet, indice) => {
                return(
                    <div key={indice}>
                        <Link to={`/detalle/pet/${pet.id}`}> {pet.nombre} </Link>
                    </div>);
            })}
        </>
    );
}

export default ListaPets;
