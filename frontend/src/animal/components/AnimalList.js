import React from 'react';

import AnimalItem from './AnimalItem';
import Card from '../../shared/components/UIElements/Card';
import './AnimalList.css';

function pageType(page) {
    if (page === 'myanimals') {
        return (
            <p>
                <h2>Nenhum animal cadastrado.</h2>
                <button className="button-success">Cadastar novo Animal</button>
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
                />
            ))}
        </ul>
    );
};

export default AnimalList;
