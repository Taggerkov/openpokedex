/*
 * Copyright © 2025 Taggerkov
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

/**
 * Displays detailed information for a single Pokémon.
 *
 * @returns {JSX.Element} The Pokémon detail view.
 */
function PokemonDetail() {
    const {name} = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (!res.ok) throw new Error('Failed to fetch Pokémon details.');
                const data = await res.json();
                setPokemon(data);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPokemon().catch((error) => {
            console.error('Failed to fetch Pokémon:', error);
        })
    }, [name]);

    if (loading) {
        return <div className="detail-container detail-loading">Loading…</div>;
    }

    if (error) {
        return <div className="detail-container detail-error">Error: {error}</div>;
    }

    return (
        <section className="detail-container">
            <h1 className="detail-title">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h1>
            {pokemon.sprites?.front_default && (
                <img
                    className="detail-image"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            )}
            <div className="detail-info">
                <div>
                    <strong>Height:</strong> {pokemon.height}
                </div>
                <div>
                    <strong>Weight:</strong> {pokemon.weight}
                </div>
                <div>
                    <strong>Types:</strong>{' '}
                    {pokemon.types.map((t) => t.type.name).join(', ')}
                </div>
            </div>
        </section>
    );
}

export default PokemonDetail;