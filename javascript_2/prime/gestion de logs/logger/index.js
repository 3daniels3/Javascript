//gestion de logs
const  winston  =  require ( 'winston' ) ;

const  logger  =  winston . createLogger ( { 
  level : 'debug' , 
  format : winston . format . json ( ) , 
  defaultMeta : {  service : 'user-service'  } , 
  transports : [ 
    // 
    // - Escribe todos los registros con un nivel de importancia de `error` o menor en `error.log` 
    // - Escribe todos los registros con un nivel de importancia de `info` o menor en `combined.log` 
    // 
    new winston . transports . Console(),
    new  winston . transports . File ( {  filename : 'error.log' ,  level : 'error'  } ) , 
    new  winston . transports . File ( {  filename : 'combined.log'  } ) , 
  ] , 
} ) ;



module.exports = logger;