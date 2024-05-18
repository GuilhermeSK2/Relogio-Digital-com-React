import React, { useState, useEffect } from 'react'; 
import '../RelogioDigital/RelogioDigital.css'

function RelogioDigital() { 

const [hora, setHora] = useState(new Date().toLocaleTimeString()); 



useEffect(() => { 

    const interval = setInterval(() => { 

    setHora(new Date().toLocaleTimeString()); 

    }, 1000); 



    return () => clearInterval(interval); 

}, []); 



return ( 

    <div> 

    <div id='titulo'><h2>Relógio Digital</h2></div>

    <div id='hora'><p>{hora}</p></div> 

    </div> 

); 

} 



export default RelogioDigital; 