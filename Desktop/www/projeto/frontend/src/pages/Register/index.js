import React from 'react';
import './style.css';
import LogoImg from '../../assets/logo.svg'
import {Link} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'

export default function Register(){
    return (
    
        <div className="register-container">
            <div className="content">
                <section>               
                    <img src={LogoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar ao Logon
                    </Link>
                </section>

                <form action="">
                    <input placeholder="Nome da ONG" type="text"/>
                    <input type="email" placeholder="Email"/>
                    <input placeholder="WhatsApp"/>

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ widht: 80 }} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}