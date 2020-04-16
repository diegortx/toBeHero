import React from 'react';
import './style.css';
import LogoImg from '../../assets/logo.svg'
import {Link} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'

export default function Register(){
    return (
    
        <div className="new-incident-container">
            <div className="content">
                <section>               
                    <img src={LogoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>

                    <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para Profile
                    </Link>
                </section>

                <form action="">
                    <input placeholder="Título do caso" type="text"/>
                    <textarea type="text" placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}