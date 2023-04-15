import React from 'react';
import {MovieItem} from '../MovieItem';
import {MovieList} from './styles';

export function MoviesList({moviesItems}) {
    return (
        <MovieList>
            {moviesItems.map((movie) => {
                return <MovieItem movie={movie} key={movie.titulo} />;
            })}
        </MovieList>
    );
}
