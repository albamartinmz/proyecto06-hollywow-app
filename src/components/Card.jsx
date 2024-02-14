import React from 'react';
import styled from 'styled-components';
import { deletePoster } from '../services/posterServices';

const PosterCard = styled.div`
    background-color: black;
    border-radius: 10px;
    padding: 50px;
    margin: 50px;
    margin-right: 500px;
    margin-left: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PosterImage = styled.img`
    max-width: 50%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const PosterInfo = styled.div`
    color: white;
    text-align: center;
`;

const ButtonDelete = styled.button`
    background-color: #9C325C;
    border-color: #CEA436;
    border-radius: 6px;
    color:#CEA436;
    width: 91px;
    height: 28px;
    margin-bottom: 10%;
`;

const ButtonEdit = styled.button`
    background-color: #CEA436; 
    border-color: #9C325C;
    border-radius: 6px;
    color:#9C325C;
    width: 91px;
    height: 28px;
`;

const Card = ({ posters }) => {
    const clickDelete = async (id) => {
            const result = await deletePoster(id);
    };
    
    return ( 
    <div>
        {posters.map(poster => ( 
        <>
            <PosterCard key={poster.id} className="poster-card">
                <PosterImage src={poster.imageUrl} alt={poster.name} className="poster-card__image" />
                <PosterInfo className="poster-card__info">
                    <h2 className="poster-card__name">{poster.name}</h2>
                    <p className="poster-card__director">Director: {poster.director}</p>
                    <p className="poster-card__year">Year: {poster.year}</p>
                </PosterInfo>
                <ButtonDelete onClick={() => clickDelete(poster.id)} className="button-delete">DELETE</ButtonDelete>
                <ButtonEdit className="button-edit">EDIT</ButtonEdit>
            </PosterCard>
        </>
        ))}
    </div>
    );
};

export default Card;