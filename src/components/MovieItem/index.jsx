import React from 'react';
import {MovieItemContainer, MovieItemImage, MovieItemTitle} from './styles';

export function MovieItem({movie}) {
    return (
        <MovieItemContainer>
            <MovieItemTitle>{movie.titulo}</MovieItemTitle>
            <MovieItemImage src={movie.avatar} alt={movie.titulo} />
        </MovieItemContainer>
    );
}
