import React from 'react';

import AnimalList from '../components/AnimalList';

const MyAnimals = () => {
    const ANIMALS = [
        {
            id: '1',
            name: 'Caramelo',
            city: 'Americana',
            species: 'dog',
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwZrJUFAW-Bg-21tnCy9w3fiq8xTSqV5viqA&usqp=CAU',
            owner: '1',
        },
        {
            id: '2',
            name: 'Totó',
            city: 'SBO',
            species: 'dog',
            image:
                'https://portaldoscaesegatos.com.br/wp-content/uploads/2017/07/adotar-1.jpg',
            owner: '1',
        },
        {
            id: '3',
            name: 'Rex',
            city: 'Sumaré',
            species: 'dog',
            image:
                'https://fotos.amomeupet.org/uploads/fotos/1300x0_1568662224_5d7fe2d09bccd.jpeg',
            owner: '1',
        },
        {
            id: '4',
            name: 'Bob',
            city: 'Nova Odessa',
            species: 'dog',
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGg2H4lrGBx6t_GEqmgW8Tb0Ps0_i772DAAg&usqp=CAU',
            owner: '1',
        },
        {
            id: '5',
            name: 'Thor',
            city: 'Americana',
            species: 'dog',
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT_ZUQF9nNH-UIpuTaIt9SSK4SjIlKUmPCSA&usqp=CAU',
            owner: '1',
        },
        {
            id: '6',
            name: 'Pingo',
            city: 'SBO',
            species: 'dog',
            image:
                'https://img.jornalcruzeiro.com.br/img/2013/07/12/media/85269_CSL030212L004F26.jpg',
            owner: '1',
        },
        {
            id: '7',
            name: 'Chico',
            city: 'Sumaré',
            species: 'dog',
            image:
                'https://s2.glbimg.com/TdPTg4jg3ZqtmZtyFnuHehXLgmk=/0x314:720x1073/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/x/gU7r6UTvyFwLn5G5FlUg/whatsapp-image-2019-02-22-at-14.53.02.jpeg',
            owner: '1',
        },
        {
            id: '8',
            name: 'Paçoca',
            city: 'Nova Odessa',
            species: 'dog',
            image:
                'https://www.petz.com.br/cachorro/racas/vira-lata/img/vira-lata-saudavel.webp',
            owner: '2',
        },
        {
            id: '9',
            name: 'Pipoca',
            city: 'Americana',
            species: 'cat',
            image:
                'https://www.realh.com.br/drhomeopet/wp-content/uploads/2016/02/cat.jpg',
            owner: '2',
        },
        {
            id: '10',
            name: 'Solar',
            city: 'SBO',
            species: 'cat',
            image:
                'https://www.significadodossonhos.inf.br/wp-content/uploads/2019/07/Sonhar-com-gato-amarelo3.jpg',
            owner: '1',
        },
        {
            id: '11',
            name: 'Artévius',
            city: 'SBO',
            species: 'cat',
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMBAeVGLnqFW0bV86x8x4_kUbdZHOrZkR1DA&usqp=CAU',
            owner: '2',
        },
        {
            id: '12',
            name: 'Luna',
            city: 'SBO',
            species: 'cat',
            image:
                'https://www.petvale.com.br/imagens/62757-vira-lata-femea-perdido-cajuru-curitiba-pr_23962.jpg',
            owner: '1',
        },
    ];
    return <AnimalList items={ANIMALS} page="myanimals" />;
};

export default MyAnimals;
