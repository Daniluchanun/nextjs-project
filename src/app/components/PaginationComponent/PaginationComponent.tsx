'use client'
import React, {FC} from 'react';
import styles from './pagination.module.css'

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
        <div className={styles.mainContainer}>
            <button className={styles.btn} onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
            <span className={styles.mainSpan}>
                Page <span className={styles.spanText}>{currentPage}</span> of <span className={styles.spanText}>{totalPages}</span>
            </span>
            <button className={styles.btn} onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default PaginationComponent;