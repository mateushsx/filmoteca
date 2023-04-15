import React, {useEffect, useState} from 'react';
import {MoviesList} from './components/MoviesList';
import {
    AppContainer,
    AppHeader,
    AppInput,
    AppMain,
    AppSubtitle,
    AppTitle,
} from './styles';

export function App() {
    const [allMovies, setAllMovies] = useState([]);
    const [movies, setMovies] = useState([]);

    const loadMovies = async () => {
        const response = await fetch('https://api.b7web.com.br/cinema/');
        const json = await response.json();

        setAllMovies(json);
    };

    const handleSearch = (event) => {
        const search = event.target.value.toLowerCase();

        const newMovies = allMovies.filter((movie) => {
            if (!search) return true;

            const title = movie.titulo && movie.titulo.toLowerCase();
            return title.includes(search);
        });

        setMovies(newMovies);
    };

    useEffect(() => {
        setMovies(allMovies);
    }, [allMovies]);

    useEffect(() => {
        loadMovies();
    }, []);

    return (
        <AppMain>
            <AppContainer>
                <AppTitle>Filmoteca</AppTitle>

                <AppHeader>
                    <AppSubtitle>{`Total de filmes: ${movies.length}`}</AppSubtitle>
                    <AppInput
                        placeholder='Buscar filme'
                        onChange={handleSearch}
                    />
                </AppHeader>

                <MoviesList moviesItems={movies} />
            </AppContainer>
        </AppMain>
    );
}
