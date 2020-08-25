import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';
import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from '../../shared/context/auth-context';

import './AnimalItem.css';

const AnimalItem = (props) => {
    const auth = useContext(AuthContext);
    const [showAnimal, setShowAnimal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const openAnimalHandler = () => setShowAnimal(true);
    const closeAnimalHandler = () => setShowAnimal(false);

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };

    const confirmDeleteHandler = () => {
        setShowConfirmModal(false);
        setShowAnimal(false);
        console.log('Deletando...');
    };

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
                                <h3>
                                    {props.species === 'dog'
                                        ? 'cachorro'
                                        : 'gato'}
                                </h3>
                                <p>{props.city}</p>
                                <p>Descrição: {props.description}</p>
                                <p>Aparência: {props.appearance}</p>
                            </div>
                            <div className="details-item__actions">
                                {auth.isLoggedIn && (
                                    <Button to={`/animal/edit/${props.id}`}>
                                        EDITAR
                                    </Button>
                                )}
                                {auth.isLoggedIn && (
                                    <Button
                                        danger
                                        onClick={showDeleteWarningHandler}
                                    >
                                        DELETAR
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </Card>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Você tem certeza?"
                footerClass="animal-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>
                            CANCELAR
                        </Button>
                        <Button danger onClick={confirmDeleteHandler}>
                            DELETAR
                        </Button>
                    </React.Fragment>
                }
            >
                <p>
                    Você quer deletar o animal? Esta ação irá deletar o animal
                    permanentemente e não poderá ser desfeita.
                </p>
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
