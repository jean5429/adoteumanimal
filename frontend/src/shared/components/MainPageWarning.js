import React from 'react';

import './MainPageWarning.css';

const MainPageWarning = (props) => {
    return (
        <div className="center main-warning">
            <p className="main-warning__text">
                <b>Bem vindo ao Projeto Adotar Animais!</b>
                <br />
                Este projeto foi feito para conectar pessoas interessadas em
                adotar o amor e ONGs com animais (cães e gatos) disponíveis para
                adoção. Veja abaixo os animais disponíveis para adoção no
                momento:
            </p>
        </div>
    );
};

export default MainPageWarning;
