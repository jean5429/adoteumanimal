import React, { useContext } from 'react';

import AnimalItem from './AnimalItem';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { AuthContext } from '../../shared/context/auth-context';

import './AnimalList.css';

function pageType(page, userType) {
    if (page === 'myanimals') {
        return (
            <div>
                <p className="center">Nenhum animal cadastrado</p>
                {userType == 'ong' && (
                    <Button to="/animal/novo">Cadastrar novo animal</Button>
                )}
                {userType != 'ong' && (
                    <p className="center">
                        As adoções em andamento ou finalizadas aparecerão aqui.
                    </p>
                )}
            </div>
        );
    } else {
        return <h2>Nenhum animal cadastrado.</h2>;
    }
}

const AnimalList = (props) => {
    const auth = useContext(AuthContext);
    if (Object.keys(props.items).length === 0) {
        return (
            <div className="center empty-list">
                <Card>{pageType(props.page, auth.userType)}</Card>
            </div>
        );
    }

    return (
        <ul className="animals-list">
            {props.items.map((animal) => (
                <AnimalItem
                    key={animal.id}
                    id={animal.id}
                    image={animal.image}
                    name={animal.name}
                    city={animal.city}
                    species={animal.species}
                    owner={animal.owner}
                    page={props.page}
                    description={animal.description}
                    appearance={animal.appearance}
                    onDelete={props.onDeleteAnimal}
                />
            ))}
        </ul>
    );
};

export default AnimalList;
