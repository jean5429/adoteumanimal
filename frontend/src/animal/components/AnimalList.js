import React from 'react';

import AnimalItem from './AnimalItem';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import './AnimalList.css';

function pageType(page) {
    if (page === 'myanimals') {
        return (
            <p>
                <h2>Nenhum animal cadastrado.</h2>
                <Button to="/animal/novo">Cadastrar novo animal</Button>
            </p>
        );
    } else {
        return <h2>Nenhum animal cadastrado.</h2>;
    }
}

const AnimalList = (props) => {
    if (Object.keys(props.items).length === 0) {
        return (
            <div className="center empty-list">
                <Card>{pageType(props.page)}</Card>
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
