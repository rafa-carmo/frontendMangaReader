import React,  { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api'



export default (props: {name: string; chapters: any; id: number}) => {

    const history = useHistory()
    const control = 0
    const [capitulos, setCapitulos] = useState(props.chapters)

    
  function handleClick(e: any){
    
    window.scrollTo(0,0)

}


    return (
    <ul>
            {
            props.chapters.map((capitulo: any) => {



                if (capitulo)
                {
                    return (

                    <li>
                        <Link onClick={handleClick} to={`/${props.id}/${(capitulo as any)}`}><div>Capitulo {capitulo}</div></Link> 
                        <div>{(capitulo as any).data} { (capitulo as any).scan}</div>
                    </li>
            
                )
            }})
        
            }
    </ul>
    
    )
}