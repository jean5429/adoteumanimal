import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Avatar from '../../shared/components/UIElements/Avatar';
import './AnimalDetails.css';

const AnimalDetails = (props) => {
    const animal = props.items[0];
    if (props.items.length === 0) {
        return <h2>Nenhum animal cadastrado.</h2>;
    }
    return (
        <Card>
            <div className="details-container center">
                <div className="details-item">
                    <div className="details-item__image">
                        <Avatar image={animal.image} alt={animal.name} />
                    </div>
                    <div className="details-item__info">
                        <h2>{animal.name}</h2>
                        <h3 className="capitalize">{animal.species}</h3>
                        <p>{animal.city}</p>
                        <p>Descrição: {animal.description}</p>
                        <p>Aparência: {animal.appearante}</p>
                    </div>
                    <div className="details-item__actions">
                        <Button to={`/animal/${animal.id}`}>EDITAR</Button>
                        <Button danger>DELETAR</Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default AnimalDetails;
