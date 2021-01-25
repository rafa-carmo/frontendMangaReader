import React,  { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api'
import dir from '../../../services/dir'

import '../styles.css'


interface manga {
  name: string
  chapter: string;
  created: string;
  mangaId: number;
  map: any;
}

export default () => {

  const control = 0
  const [recentManga, setRecentManga] = useState<manga>()

    useEffect(() => {

      const headers = {
        "Authorization": localStorage.getItem('Authorization'),
   }

        api.get("/mangas/last",{
          headers} )
        .then(response  => {
          
          return setRecentManga(response.data);
        } )
      },[control])


    if(!recentManga) {
      return <p></p>
    }
    return (

        <ul>
        
              {
                
                recentManga.map((manga : manga) => { 
                  
    
                    return(
                      <Link to={`/${manga.mangaId}/${manga.chapter}`}>
                 
                    <li className="linha-manga">
                        <div key={(manga as any).id} className="manga-new" >
                          

                        <div className="name-manga">
                          <h2 about={manga.name} > {(manga as any).name}</h2>
                          </div>
      
      
                            <img className="image-recent" alt="capa" src={`${dir}imagens/mangas/capas/${(manga as any).name}.jpg`} />
      
          
                            <h2> {(manga as any).chapter}</h2>
  
                    </div>
                </li> 
                      </Link>
                  )})         
                }
          </ul>

    )
}