import React from 'react';


import './styles.css'

import Headers from '../Component-Geral/header'



import { FiSearch } from 'react-icons/fi'

import Recent from './component/recent'
import Mangas from './component/mangas'

import { useHistory } from 'react-router-dom'
import api from '../../services/api'


function Home() {
  document.title="Mangas"

  const history = useHistory()


if (!localStorage.getItem('Authorization')){
    history.push('/signin')
}
  
  const id = localStorage.getItem('Authorization');
    
  




return(
<div id="page-landing">
 
    <Headers />
    <div style={{width:"100%", height:"100px"}}> </div>
    
    <div id="page-container">
      
      <div>
        
        <div className="info-container">
          <h1>Ultimos Capítulos</h1>
          <div className="area-new">
               <Recent />
          

  </div>
        </div>
      </div>




      <div>

        <div className="filter-bar"> 
        
        <form>
          Busca <input type="textarea"></input>
          Generos <input type="textarea"></input>
          Ordem <input type="textarea"></input>
          Servidor <input type="textarea"></input>

         
        </form> 
        <a href="/">
        <FiSearch size={20} color="#D4C2FF" />
        </a>
        </div>

        

      <div className="mangas-container">

          <Mangas />
      
      </div>
      </div>


    </div>
    

</div>
)
}


export default Home