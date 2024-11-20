'use client'
import React, {FC} from 'react';

type IProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
const PaginationComponent: FC<IProps> = ({currentPage, totalPages, onPageChange}) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };
    return (
        <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>prev</button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>next</button>
        </div>
    );
};

export default PaginationComponent;