import React,  { useState, useEffect } from 'react';
import Headers from '../Component-Geral/header'
import './styles.css'

import {useParams} from 'react-router-dom';

import {FiCheck, FiHeart} from 'react-icons/fi'

import Capitulos from './component/capitulos'


import api from '../../services/api'
import dir from '../../services/dir'
import mangas from '../Home/component/mangas';



interface manga {
    id: number;
name: string;
folder: string;
capitulos: Array<{
    1: Array<string>;
}>;
banner: string;
generos: any;
artista: string;
outrosTitulos: string;
autor: string;
rate: number;
sinopse: string;
status: string;
totalCapitulos: string;
ultima_alteracao: string;
map: any;
}


interface params {
    id: string
}
function MangaDetail(){


    const control = 0
    const [infoManga, setInfoManga] = useState<manga>()
    const [view, setView] = useState(false)
    const params = useParams<params>()    

    const id = params.id
    const headers = {
        "Authorization": localStorage.getItem('Authorization'),
   }
    useEffect(() => {

 
  


        api.get(`manga/${params.id}`, {
            headers})
        .then(response => {
            if (response.data.capitulosRestantes == '0') {
                setView(true)
            }
            return setInfoManga(response.data);
        } )
      },[control])




      if(!infoManga){
        return <p>  </p>
      }



      const handleView = async  ( e:any) => {



         await api.put(`/mangas/view/${infoManga.id}`,{}, {
            headers})
         .then(() => setView(!view))
         .catch(err => console.log(err))
         
         return
     }
    

    return(
        
    <div id="page-landing">
        <Headers />
        <div className="background-mask"></div>
        <div className="background-manga" style={{backgroundImage: `url('${dir}imagens/mangas/banner//${infoManga.name}.jpg')`}}  >
        
        </div>


        <div id="page-container">

            
            <div className="description-manga">
            

                <div className="left-content">
                    <img src={`${dir}imagens/mangas/capas/${infoManga.name}.jpg`} alt="capa"/>
                    <h2 className="name-smart"> {infoManga.name}  </h2>
                    <div className="checkButtons">
                    <FiCheck color={view ? 'green' : 'black'} size={20} onClick={handleView}/> <FiHeart size={20} />
                    </div>

                    <div className="info">
                        <h4>Status: </h4>  {infoManga.status}
                        <p>
                        <h4>Generos:</h4>
                        </p>
                        <p>
                        {/* {infoManga.generos} */}
                        </p>
                        <br></br>
                        <h4>Author:</h4>
                        <p> {infoManga.autor}</p>
                        <h4>Artista:</h4>
                        <p> {infoManga.artista}</p>
                    </div>
                </div>

                <div className="description">
                    <h2> {infoManga.name}</h2>
                    <p>
                    {infoManga.sinopse}
                    </p>

                    <div className="chapters-list">
                        <Capitulos chapters={infoManga.capitulos} name={infoManga.name} id={infoManga.id} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MangaDetail