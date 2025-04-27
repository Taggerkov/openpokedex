/*
 * Copyright © 2025 Taggerkov
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import { useState, useEffect } from 'react'
import Pagination from '@/components/Pagination'
import PokemonCard from "@/components/PokemonCard";

/**
 * Displays a paginated list of Pokémon fetched from the PokéAPI.
 *
 * @returns {JSX.Element} The Pokémon list view.
 */
function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        async function fetchPokemons() {
            try {
                const offset = (currentPage - 1) * itemsPerPage;
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`);
                const data = await response.json();
                setPokemons(data.results);
            } catch (error) {
                console.error('Failed to fetch Pokémon:', error);
            }
        }

        fetchPokemons();
    }, [currentPage]);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const handleNext = () => {
        setCurrentPage(prev => prev + 1);
    };

    return (
        <div className="container" style={{ padding: '1rem' }}>
            <h1>Pokédex</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name} name={pokemon.name} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                onPrevious={handlePrevious}
                onNext={handleNext}
            />
        </div>
    );
}

export default PokemonList;