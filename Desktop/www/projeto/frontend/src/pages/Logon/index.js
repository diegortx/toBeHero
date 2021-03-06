import React from 'react';
import './style.css';
import heroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'
import {Link} from 'react-router-dom';

import { FiLogIn} from 'react-icons/fi'

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Heroes" />
                <form action="">
                    
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" type="text"/>                    
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho cadastro
                    </Link>

                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}