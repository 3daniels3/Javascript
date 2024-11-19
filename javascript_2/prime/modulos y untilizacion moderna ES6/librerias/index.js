//instalar axios para hacer llamadas a servicios externos
//npm i axios

import axios from "axios";

axios . get ( 'https://pokeapi.co/api/v2/pokemon/ditto' ) 
  . then ( function  ( response )  { 
    // manejar el éxito 
    console . log ("!succes")
    console . log ( response.data ) ; 
  } ) 
  . catch ( function  ( error )  { 
    // manejar el error 
    console.log("!!Error")
    console . log ( error ) ; 
  } ) 
