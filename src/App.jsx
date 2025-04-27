/*
 * Copyright © 2025 Taggerkov
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'

// Main application layout.
// Renders Header and switches pages via React Router's Outlet.

/**
 * Application layout component.
 * Renders the header and the page content based on the current route.
 *
 * @returns {JSX.Element} The App layout.
 */
function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}

export default App