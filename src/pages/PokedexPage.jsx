/*
 * Copyright © 2025 Taggerkov
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import PokemonList from '@/components/PokemonList'

/**
 * Page displaying the Pokémon list (Pokédex).
 *
 * @returns {JSX.Element} The Pokédex page view.
 */
function PokedexPage() {
    return (
        <section>
            <PokemonList />
        </section>
    );
}

export default PokedexPage;