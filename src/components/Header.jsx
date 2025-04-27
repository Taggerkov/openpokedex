/*
 * Copyright © 2025 Taggerkov
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import { Link } from 'react-router-dom'

/**
 * Header component for site navigation.
 * Provides links to the Pokédex page and About page.
 *
 * @returns {JSX.Element} The Header navigation bar.
 */
function Header() {
    return (
        <header>
            <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0' }}>
                <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                    OpenPokeDex
                </Link>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>Pokedex</Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;