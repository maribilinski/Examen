import { useEffect, useState } from "react";
import FormularioPets from "../FormularioPets/FormularioPets";
import { Link, Route, Routes } from "react-router-dom";
import Adoptar from "../Adoptar/Adoptar";
import ListaPets from "../ListaPets/ListaPets";
import Error from "../Error/Error";
import axios from "axios";



const App = () => {
  const [listaPets, setListaPets] = useState([]);

  const actualizarListaPets = (nuevoPet) => {
    nuevoPet.id = listaPets.length +1;
    setListaPets ([...listaPets, nuevoPet]);
  }

  const adoptarPetDeLaLista = (id) => {
    const listaTemporal = listaPets.filter(pet => pet.id !==id);    
    setListaPets(listaTemporal);
  }
  
  useEffect(() => {
    const obtenerListaDePets = async () => {
      const URL = "http://localhost:8080/pets";
      const respuesta = await axios.get(URL);
      setListaPets(respuesta.data);
    }
    obtenerListaDePets ();
  },[]);

  return(
    <>
      <h1>Refugio de Mascotas</h1>
      <Link to = "/pets"> Lista de Mascotas </Link>
      <Link to = "formulario/pets"> Agregar Mascota</Link>
      <Routes>
        <Route path="/formulario/pets" element = {<FormularioPets
                    actualizarListaPets= {actualizarListaPets}/>}/>
        <Route path="/pets" element = {<ListaPets
                    listaPets = {listaPets}/>}/>
        <Route path="/detalle/pet/:id" element = {<Adoptar
                    listaPets = {listaPets}
                    adoptarPetDeLaLista= {adoptarPetDeLaLista}/>}/>
        <Route path="*" element= {<Error/>}/>
      </Routes>
    </>
  );
}

export default App
