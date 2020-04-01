import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId= localStorage.getItem('ongId');

    const history = useHistory();

    async function handleRegisterCase(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }
        try {
            const response = await api.post('incidents',data, {
                headers:{
                    Authorization: ongId
                }
            });
            alert('Caso cadastrado com sucesso!');
            history.push('/profile')
        } catch (error) {
            alert('Erro ao cadastrar caso, favor tentar novamente!')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
                        Voltar para Home                 
                    </Link>
                </section>
                <form onSubmit={handleRegisterCase}>
                    <input placeholder="Titulo do Caso" value={title} onChange={e => setTitle(e.target.value)}></input>
                    <textarea placeholder="Descrição" value={description} onChange = {e => setDescription(e.target.value)}></textarea>
                    <input placeholder="Valor em Reais" value={value} onChange={e => setValue(e.target.value)}></input>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}