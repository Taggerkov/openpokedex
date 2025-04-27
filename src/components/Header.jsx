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
        <header className="header">
            <nav className="nav">
                <Link to="/" className="site-title">
                    OpenPokeDex
                </Link>
                <div className="nav-links">
                    <Link to="/">Pokedex</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;