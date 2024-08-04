import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormularioPets = (props) => {

    const [nombre, setNombre] = useState ("");
    const [tipo, setTipo] = useState ("");
    const [descripcion, setDescripcion] = useState ("");
    const [caract, setCaract] = useState ("");
    const [error, setError] = useState ("");

    const navegacion = useNavigate();

    const enviarFormularioPets = async (e) => {
        e.preventDefault();
        try {
            const nuevoPets = { nombre, tipo, descripcion, caract };
            const URL = "http://localhost:8080/pet/nuevo";
            const respuesta = await axios.post(URL, nuevoPets);
            props.actualizarListaPets(respuesta.data);
            setNombre("");
            setTipo("");
            setDescripcion("");
            setCaract("");
            setError("");
            navegacion("/pets");
        } catch (error) {
            console.log("Algo falló", error);
            setError(error.response?.statusText || "Error desconocido");
        }
    }

    return (
        <>
            <h1>
                Refugio de Mascotas
            </h1>
            <h2>Conoces alguna mascota que necesite un hogar?</h2>
            <form onSubmit={enviarFormularioPets}>
                <div>
                    <label htmlFor="nombre">Nombre de la Mascota</label>
                    <input type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            onChange={(e) =>setNombre(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="tipo">Raza/Especie</label>
                    <input type="text"
                            id="tipo"
                            name="tipo"
                            value={tipo}
                            onChange={(e) =>setTipo(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="descripcion">Descripcion</label>
                    <input type="text"
                            id="decripcion"
                            name="descripcion"
                            value={descripcion}
                            onChange={(e) =>setDescripcion(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="caract">Skins</label>
                    <input type="text"
                            id="caract"
                            name="caract"
                            value={caract}
                            onChange={(e) =>setCaract(e.target.value)}/>
                </div>
                <button> Agregar </button>
                <div>{error}</div>
            </form>
        </>
    );
}

export default FormularioPets;