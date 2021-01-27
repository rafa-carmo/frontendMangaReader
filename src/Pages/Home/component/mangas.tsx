import React,  { useState, useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api'

import dir from '../../../services/dir'

interface data {
    tipo: string;
    ordem: string
}

interface headers {
    Authorization: string
}

interface manga {
        id: number;
    name: string;
    folder: string;
    capitulos: Array<{
        1: Array<string>;
    }>;
    banner: string;
    generos: object;
    capitulosRestantes: string;
    artista: string;
    outrosTitulos: string;
    rate: number;
    sinopse: string;
    status: string;
    totalCapitulos: string;
    ultima_alteracao: string;
    map: any;
}

export default () => {

    const history = useHistory()
    const control = 0
    const [mangas, setMangas] = useState()

    useEffect(() => {

        const data = {
            "tipo": "ultima_alteracao",
	        "ordem": "desc"
        }
        const headers = {
             "Authorization": localStorage.getItem('Authorization'),
        }

        api.post("mangas/", data, {
            headers})
        .then(response => {
            return setMangas(response.data);
        } )
      },[control]);


    
  function handleClick(e: any){
    
    window.scrollTo(0,0)
    console.log(e.target)
        };

        if(!mangas){
            return <div></div>
          }

        return (

                <ul>
                    {
                    
                    mangas.map( (manga: manga) => { 

                        let cap =  manga.capitulosRestantes == undefined ?  manga.totalCapitulos  : manga.capitulosRestantes
                        let check =  <FiCheck color={'white'} size={20}/>
 
                        const displayCap = manga.capitulosRestantes == '0' ?  check: cap

                        console.log(displayCap, manga.id)
                        return(
                        <Link key = {manga.id} onClick={handleClick} to={`/${manga.id}`}>
                        <li>
                            

                            <div className="manga-new" >

                                <h2 className="capitulos" > {displayCap} </h2>


                                <img alt={manga.name} src={`${dir}imagens/mangas/capas/${manga.name}.jpg`} />

            
                                <h2> {manga.name}</h2>
                        
                            </div>
                        </li>
                    </Link>
                        )

                    })
                    }
                    

                </ul>

        )
}