import React from 'react'
import { usePagination, DOTS } from './usePagination';
import classnames from 'classnames';
import './pagination.css'

const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // if (currentPage === 0 || paginationRange?.length < 2) {
    //     return null;
    // }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange?.length - 1];

    return (
        <div>
            <div className='float-left pagi-show px-3'>
                {/* <strong>Showing {currentPage} to 10 of {totalCount} entires</strong> */}
            </div>
            <div className='float-right px-3'>
                <ul
                    className={classnames('pagination-container', { [className]: className })}
                >
                    <li
                        className={classnames('pagination-item', {
                            disabled: currentPage === 1
                        })}
                        onClick={onPrevious}
                    >
                        <div className="arrow left" />
                    </li>
                    {paginationRange.map(pageNumber => {
                        if (pageNumber === DOTS) {
                            return <li className="pagination-item dots">&#8230;</li>;
                        }

                        return (
                            <li key={pageNumber}
                                className={classnames('pagination-item', {
                                    selected: pageNumber === currentPage
                                })}
                                onClick={() => onPageChange(pageNumber)}
                            >
                                {pageNumber}
                            </li>
                        );
                    })}
                    <li
                        className={classnames('pagination-item', {
                            disabled: currentPage === lastPage
                        })}
                        onClick={onNext}
                    >
                        <div className="arrow right" />
                    </li>
                </ul>
            </div>

            {/* <div className='float-left pagi-show px-3'>
                <strong>Showing 1 to 10 of 10 entires</strong>
            </div>
            <div className='float-right px-3'>
                <i className="fa fa-less-than pagi-icon" aria-hidden="true" onClick={onPrevious}></i>
                <strong>01 </strong>
                <i className="fa fa-greater-than pagi-icon" aria-hidden="true"></i>
            </div> */}
        </div>
    )
}

export default Pagination