import styles from './Pagination.module.css';
const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(items / pageSize);
    if (totalPages === 1) return null;
    const allPages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div>
            <ul className={styles.pagination}>
                <button className={styles.changeBtn} onClick={() => onPageChange(currentPage - 1)} disabled = {currentPage === 1} >Previous</button>
                {allPages.map((page) => (

                    (currentPage>1 && currentPage < totalPages) ? currentPage - 1 <= page && page <= currentPage + 1: (currentPage===1 ? page <= 3 : page > totalPages-currentPage+1)  ) && 

                    (<button key={page} className={`${styles.pagenumber} ${page === currentPage ? styles.activePageNumber : ''} `} onClick={() => onPageChange(page)}>
                        {page}
                    </button>
                ))}
                <button className={styles.changeBtn} onClick={() => onPageChange(currentPage + 1)} disabled = {currentPage  === totalPages}>Next</button>
            </ul>
        </div>
    );
};
export default Pagination;