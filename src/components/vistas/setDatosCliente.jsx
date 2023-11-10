import React from "react";

const DatosCliente =({id, fecha,nombre,url, Id })=>{
    return(
        <>
            <tr key={id}>
                <td> {Id}</td>
                <td>{nombre}</td>
                <td>{fecha}</td>
                <td>
                    <img src={url} alt="imagen"
                        style = {{ width: 100 , height:100}}
                    />
                </td>
            </tr>                
        </>
    );
}
export default DatosCliente;