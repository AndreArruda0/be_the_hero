import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Logon(){
    const [id,setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});

            console.log(response.data.name);

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert('Falha no login!')
        }

    }

    return (
        <div className="logon-container">
        <section class="form" onSubmit={handleLogin}>
            <img src={logoImg} alt="Be the Hero"></img>

            <form>
                <h1>Faça seu logon</h1>
                <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}></input>
                <button className="button" type="submit">Entrar</button>
                <Link className="back-link" to="/register">Não tenho cadastro</Link>
                
            </form>
        </section>
        
        <img src={heroesImg} alt="Heroes"></img>
        </div>


    )
}