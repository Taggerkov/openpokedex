/*
 * Copyright © 2025 Taggerkov
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

/**
 * Header component for site navigation and Pokémon search with autocomplete.
 *
 * @returns {JSX.Element} The Header component with navigation links and search input.
 */
function Header() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [allPokemonList, setAllPokemonList] = useState([]); // 👈

    // Fetch Pokémon names when Header loads
    useEffect(() => {
        async function fetchAllPokemon() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');
                const data = await response.json();
                const names = data.results.map(pokemon => pokemon.name);
                setAllPokemonList(names);
            } catch (error) {
                console.error('Failed to fetch all Pokémon:', error);
            }
        }

        fetchAllPokemon().catch((error) => {
            console.error('Unexpected error in fetchPokemons:', error);
        });
    }, []);

    // Navigate to the first suggestion if available; otherwise, use the typed search term.
    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = searchTerm.trim().toLowerCase();
        if (suggestions.length > 0) navigate(`/pokemon/${suggestions[0].toLowerCase()}`);
        else if (trimmed) navigate(`/pokemon/${trimmed}`);
        setSearchTerm('');
        setSuggestions([]);
    };

    return (
        <header className="header">
            <div className="nav-main">
                <Link to="/" className="site-title">OpenPokeDex</Link>
                <nav className="nav-links">
                    <Link to="/">Pokedex</Link>
                    <Link to="/about">About</Link>
                </nav>
                <form className="search-form" onSubmit={handleSubmit}>
                    <div className="search-wrapper">
                        <input
                            type="text"
                            placeholder="Search Pokémon..."
                            value={searchTerm}
                            onChange={(e) => {
                                const value = e.target.value;
                                setSearchTerm(value);
                                if (value.trim() === '') {
                                    setSuggestions([]);
                                } else {
                                    const matches = allPokemonList.filter(name =>
                                        name.toLowerCase().startsWith(value.toLowerCase())
                                    ).slice(0, 5);
                                    setSuggestions(matches);
                                }
                            }}
                            autoComplete="off"
                            className="search-input"
                        />
                        {suggestions.length > 0 && (
                            <ul className="autocomplete-list">
                                {suggestions.map(name => (
                                    <li
                                        key={name}
                                        onClick={() => {
                                            navigate(`/pokemon/${name}`);
                                            setSearchTerm('');
                                            setSuggestions([]);
                                        }}
                                        className="autocomplete-item"
                                    >
                                        {name.charAt(0).toUpperCase() + name.slice(1)}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </form>
            </div>
        </header>
    );
}

export default Header;