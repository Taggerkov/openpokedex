/*
 * Copyright © 2025 Taggerkov
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import {useState, useEffect} from 'react';
import Pagination from '@/components/Pagination';
import PokemonCard from '@/components/PokemonCard';

/**
 * Displays a paginated list of Pokémon fetched from the PokéAPI.
 *
 * Handles local API errors gracefully with an alert box.
 * Allows users to navigate pages directly.
 *
 * @returns {JSX.Element} The Pokémon list view.
 */
function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [error, setError] = useState(null);
    const itemsPerPage = 20;

    // Fetch Pokémon data whenever the current page changes.
    useEffect(() => {
        async function fetchPokemons() {
            try {
                const offset = (currentPage - 1) * itemsPerPage;
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`);
                const data = await response.json();
                setPokemons(data.results);
                setTotalCount(data.count);
                setError(null);
            } catch (error) {
                console.error('Failed to fetch Pokémon:', error);
                setError('Failed to fetch Pokémon. Please try again later.');
            }
        }

        fetchPokemons().catch((error) => {
            console.error('Unexpected error in fetchPokemons:', error);
        });
    }, [currentPage]);

    // Handle going to the previous page.
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    // Handle going to the next page.
    const handleNext = () => {
        setCurrentPage(prev => prev + 1);
    };

    // Jump directly to a specific page.
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(totalCount / itemsPerPage);

    return (
        <div className="list-pokemon">
            <div className="content-pokemon">
                <h1>Pokédex</h1>
                {error && (
                    <div className="alert-error flex-center">
                        {error}
                    </div>
                )}
                <div className="grid-pokemon">
                    {pokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.name} name={pokemon.name} />
                    ))}
                </div>
            </div>
            <div className="pagination-wrapper">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    onPageSelect={goToPage}
                />
            </div>
        </div>
    );
}

export default PokemonList;