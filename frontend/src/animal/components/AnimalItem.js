import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';
import './AnimalItem.css';
import Button from '../../shared/components/FormElements/Button';

const AnimalItem = (props) => {
    const [showAnimal, setShowAnimal] = useState(false);

    const openAnimalHandler = () => setShowAnimal(true);
    const closeAnimalHandler = () => setShowAnimal(false);

    return (
        <React.Fragment>
            <Modal
                show={showAnimal}
                onCancel={closeAnimalHandler}
                header={props.name}
                contentClass="animal-item__modal-content"
                footerclass="animal-item__modal-content"
                footer={<Button onClick={closeAnimalHandler}>Fechar</Button>}
            >
                <Card>
                    <div className="details-container center">
                        <div className="details-item">
                            <div className="details-item__image">
                                <Avatar image={props.image} alt={props.name} />
                            </div>
                            <div className="details-item__info">
                                <h2>{props.name}</h2>
                                <h3>{props.species}</h3>
                                <p>{props.city}</p>
                                <p>Descrição: {props.description}</p>
                                <p>Aparência: {props.appearante}</p>
                            </div>
                            <div className="details-item__actions">
                                <Button to={`/animal/edit/${props.id}`}>
                                    EDITAR
                                </Button>
                                <Button danger>DELETAR</Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </Modal>
            <li className="animal-item">
                <Card className="animal-item__content">
                    <Link
                        to={props.page === 'home' ? '/' : '/meusanimais'}
                        onClick={openAnimalHandler}
                    >
                        <div className="animal-item__image">
                            <Avatar image={props.image} alt={props.name} />
                        </div>
                        <div className="animal-item__info">
                            <h2>{props.name}</h2>
                            <h3>Cidade: {props.city}</h3>
                        </div>
                    </Link>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default AnimalItem;
