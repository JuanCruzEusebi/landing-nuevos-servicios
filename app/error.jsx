'use client';
import { useEffect } from "react";

const Error = ({ error }) => {

 useEffect(() => {
  console.error(error);
 }, [error]);

 return (
  <div className='centerContainer'>
   <h3>Ocurrió un error y no se pudo cargar la página</h3>
  </div>
 );
}

export default Error