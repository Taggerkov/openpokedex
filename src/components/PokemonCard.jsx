/*
 * Copyright © 2025 Taggerkov
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import { Link } from 'react-router-dom'

/**
 * Displays a single Pokémon card with a link to its detailed page.
 *
 * @param {Object} props
 * @param {string} props.name - The name of the Pokémon.
 * @returns {JSX.Element} The Pokémon card component.
 */
function PokemonCard({ name }) {
    return (
        <Link
            to={`/pokemon/${name}`}
            className="card-pokemon"
        >
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </Link>
    );
}

export default PokemonCard;