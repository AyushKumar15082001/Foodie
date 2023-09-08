import Style from './Menu.module.css';
import Cards from '../Card';
import Pagination from '../Pagination';
import { useEffect, useState } from 'react';

const Menu = ({ Meals, prefernce, handlePreference }) => {
    const [filteredList, setFilteredList] = useState([]);
    const [selected, setSelected] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;

    const onPageChange = (curr)=> setCurrentPage(curr);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedMenu = filteredList && filteredList.slice(startIndex, endIndex);

    useEffect(() => {
        setFilteredList(Meals.meals)
    }, [Meals])

    const handleFilter = (e) => {
        if (e.target.innerText === 'All') {
            setFilteredList(Meals.meals);
        } else {
            const filtered = Meals.meals.filter(item => item.labels.indexOf(e.target.innerText.toLowerCase()) >= 0);
            setFilteredList(filtered);
        }
        setSelected(e.target.innerText);

    }

    return (
        <div className={Style.container}>
            <div className={Style.buttoncontainer}>
                <button onClick={handleFilter} id={selected === 'All' ? Style.active : ''}>All</button>
                {
                    Meals.labels && Meals.labels.map((item, index) => {
                        return (
                            <button key={index} onClick={handleFilter} id={selected === item.label ? Style.active : ''}>
                                {item.label}
                            </button>
                        )
                    })
                }
            </div>
            <Cards Meals={paginatedMenu} prefernce={prefernce} handlePreference={handlePreference} />
            <Pagination items={Meals.meals && Meals.meals.length} {...{currentPage, pageSize, onPageChange}} />
        </div>
    )
}

export default Menu;
