import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import dir from '../../services/dir'

import Headers from '../Component-Geral/header'
import './styles.css'


interface param {
    id: string;
    cap: string;
}

function Leitor(){ 

    const control = 0
    const [recentManga, setRecentManga] = useState()
    const [ pages, setPages]= useState([])
    const [name, setName] = useState('')
    const params = useParams<param>()


    useEffect(() => {
  
        const headers = {
          "Authorization": localStorage.getItem('Authorization'),
     }

        const data = {
            "id" : params.id,
            "capitulo": params.cap
            }
  
          api.post("/mangas/pg",data, {
            headers} )
          .then(response  => {
            return (
                setPages(response.data.filesSorted),
                setRecentManga(response.data.capitulosOrdenados),
                setName(response.data.name)
            );
          } )
        },[control])

    return(
        <div id="page-landing">
        <Headers />

            <section className="paginas">
                {pages.map((page:any) => {

                    return(
                    <img key={1} alt="none" src={`${dir}imagens/mangas/${name}/${params.cap}/${page}`} />
                    )

                })}
                
            </section>
        </div>
    )
}

export default Leitor