import { useNavigate, useParams } from "react-router-dom";


const Adoptar = (props) => {
    const parametros = useParams ();
    const navegacion = useNavigate ();

    const petActual = props.listaPets.find((pet) => pet.id == parametros.id);

    const adoptarPet = () => {
        props.adoptarPetDeLaLista (petActual.id);
        navegacion ("/pets");
    }

    return (
        <>
            <h3>Nombre: {petActual.nombre}</h3>
            <h3>Raza: {petActual.tipo}</h3>
            <h3>Descripcion: {petActual.descripcion}</h3>
            <h3>Caracteristicas: {petActual.caract}</h3>
            <button onClick={adoptarPet}> Adoptar {petActual.nombre}</button>
        </>
    );
}

export default Adoptar;