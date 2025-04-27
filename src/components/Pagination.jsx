/*
 * Copyright © 2025 Taggerkov
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import { useState, useEffect } from 'react';

/**
 * Pagination component for navigating through pages of Pokémon.
 *
 * @param {number} currentPage - The current active page number.
 * @param {number} totalPages - The total number of pages.
 * @param {Function} onPrevious - Callback to go to the previous page.
 * @param {Function} onNext - Callback to go to the next page.
 * @param {Function} onPageSelect - Callback to jump to a specific page.
 * @returns {JSX.Element} The Pagination controls.
 */
function Pagination({ currentPage, totalPages, onPrevious, onNext, onPageSelect }) {
    const [inputPage, setInputPage] = useState(currentPage);

    // Update input field when external current page changes.
    useEffect(() => {
        setInputPage(currentPage);
    }, [currentPage]);

    // Handle changes inside the input field.
    const handleInputChange = (e) => {
        setInputPage(e.target.value);
    };

    // Validate and submit the page number.
    const handlePageSubmit = () => {
        const page = Math.max(1, Math.min(totalPages, Number(inputPage)));
        if (page !== currentPage) {
            onPageSelect(page);
        }
    };

    // Handle submitting when Enter is pressed.
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handlePageSubmit();
        }
    };

    // Handle submitting when input loses focus.
    const handleBlur = () => {
        handlePageSubmit();
    };

    return (
        <div className="pagination flex-center">
            <button className="pagination-button" onClick={onPrevious} disabled={currentPage === 1}>
                Previous
            </button>
            <div className="pagination-page flex-center">
                <input
                    type="number"
                    className="pagination-input"
                    value={inputPage}
                    min="1"
                    max={totalPages}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                />
                <span>/ {totalPages}</span>
            </div>
            <button className="pagination-button" onClick={onNext} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}

export default Pagination;