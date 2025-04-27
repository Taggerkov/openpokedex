/*
 * Copyright © 2025 Taggerkov
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import { createHashRouter } from 'react-router-dom'
import App from '@/App'
import PokedexPage from '@/pages/PokedexPage'
import AboutPage from '@/pages/AboutPage'
import PokemonDetail from '@/components/PokemonDetail'

// Router configuration for OpenPokeDex application.
// Uses HashRouter to support GitHub Pages deployments.

/**
 * Application router configuration.
 * Defines all routes for OpenPokeDex using a HashRouter.
 *
 * @see https://reactrouter.com/en/main/routers/create-hash-router
 */
const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <PokedexPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/pokemon/:name',
                element: <PokemonDetail />
            }
        ]
    }
])

export default router