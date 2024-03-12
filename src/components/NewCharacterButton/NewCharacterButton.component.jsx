import React from 'react';
import { Link } from 'react-router-dom';

export default function NewCharacterButton() {
    return (
        <Link className='link' to={`/new_character`}>
            <div className='housing-card'  
                style={{
                background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)) no-repeat center center / cover`,
                }}>
                <h2>Créer un Nouveau Personnage</h2>
            </div>
        </Link> 
    )
}