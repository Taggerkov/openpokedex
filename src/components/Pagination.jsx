/*
 * Copyright © 2025 Taggerkov
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

/**
 * Pagination component for navigating through pages of Pokémon.
 *
 * @param {number} currentPage - The current active page number.
 * @param {Function} onPrevious - Callback to go to the previous page.
 * @param {Function} onNext - Callback to go to the next page.
 * @returns {JSX.Element} The Pagination controls.
 */
function Pagination({ currentPage, onPrevious, onNext }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0', gap: '1rem' }}>
            <button onClick={onPrevious} disabled={currentPage === 1}>
                Previous
            </button>
            <span>Page {currentPage}</span>
            <button onClick={onNext}>
                Next
            </button>
        </div>
    );
}

export default Pagination;