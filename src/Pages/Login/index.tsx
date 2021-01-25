import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import './styles.css';

import api from '../../services/api'



export default function Logon(){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')
    const [backgroundImg, setBackgroundImg] = useState('')
    const history = useHistory()


    if (localStorage.getItem('Authorization')){
        history.push('/')
    }
	
	
    

    useEffect(() => {
        const list = ["chibi.jpg","capa03.jpg","capa02.png","capa04.png","capa05.png","capa01.png"]
        

        const index =  Math.floor(Math.random() * list.length)

        setBackgroundImg(list[index]);
    },[backgroundImg]);
    

        

   async function handleLogin(e:any){
        e.preventDefault();
      
        
        const data = {
            "nome": user,
            password,
        }

        const response = await api.post('signin', data);

        
    

       localStorage.setItem('Authorization', `bearer ${response.data.token}` )

        history.push('/')
    }
    function handleWithoutLogin(e:any){

       const data = {
           "nome" : "anonimo",
           password: "0"
       }

       console.log(data)
    }
    

    return (
        <div className="logon-container">
            <section className="form" >
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input placeholder="Seu Usuario" value={user} onChange={e => {
                        if (e.target.value) {
                            setUser(e.target.value.replace(/^./, e.target.value[0].toUpperCase()))
                        }else{
                            setUser('')
                        }
                        }}/>
                        <input placeholder="Sua senha" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button className="button" type="submit">ENTRAR</button>
                    
                    <a onClick={handleWithoutLogin}> Entrar sem cadastro.</a>
                </form>
            </section>
            <img src={backgroundImg} alt="Background"/>
        </div>
        
    );
}