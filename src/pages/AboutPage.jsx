/*
 * Copyright © 2025 Taggerkov
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import React from 'react';

/**
 * Page displaying information about the OpenPokeDex project.
 *
 * @returns {JSX.Element} The About page view.
 */
function AboutPage() {
    return (
        <section className="page-about">
            <h1>About OpenPokeDex</h1>
            <p>
                OpenPokeDex is a minimal, fast, and open-source Pokédex application built with React and Vite.
                It fetches real-time Pokémon data from the PokéAPI.
            </p>
            <p>
                Designed with performance and simplicity in mind.
            </p>
            <a
                href="https://github.com/Taggerkov/openpokedex"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-repo"
            >
                View on GitHub
            </a>
        </section>
    );
}

export default AboutPage;