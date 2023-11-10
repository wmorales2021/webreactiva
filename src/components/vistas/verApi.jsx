import { Clientes } from "../api/cliente";
import { useState, useEffect } from "react";
import DatosCliente from "./setDatosCliente";
import Table from 'react-bootstrap/Table';

const cliente = new Clientes();

const VerCliente = () => {
    const [cli, setCli] = useState([]);
    useEffect(
        ()=>{
            (async()=>{
                const response = await cliente.consultar();
                // console.log(response);
                setCli(response);

            })();
        },[] 
    ) 
    return(
    <>
        <div className="App">
        <header className="App-header">
            <pre>
                <Table striped bordered hover >
                <thead>
                    <td colSpan={4} >Listado de Clientes</td>
                </thead>
                <thead>
                    <td>Item</td>
                    <td>Nombre</td>
                    <td>Fecha Creado</td>
                    <td>Foto</td>
                </thead>
                <tbody>
                {/* { JSON.stringify(cli,undefined,1)} */}
                { 
                cli.map( ({id, name, avatar, createdAt}) => { 
                    return (<DatosCliente 
                    key = {id}
                    Id = {id}
                    nombre = {name}
                    fecha = {createdAt}
                    url = {avatar} 
                    />
                );})
                }
                </tbody>
                </Table>
            </pre>
        </header>
        </div>
    </>
    );
}
export default VerCliente;