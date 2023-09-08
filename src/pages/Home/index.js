import Styles from './Home.module.css'
import Menu from '../../components/Menu';
import Sidebar from '../../components/Sidebar';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [Meals, setMeals] = useState({});
    const [totalPassengers, setTotalPassengers] = useState(1);
    const [currentPassenger, setCurrentPassenger] = useState(0);
    const [AllPrefernces, setAllPrefernces] = useState([[]]);
    const [prefernce, setPrefernce] = useState([]);
    const [selected, setSelected] = useState([]);
    const [cost, setCost] = useState(0.00);
    const navigate = useNavigate();

    const handleLogout = useCallback(() => {
        localStorage.removeItem('token');
        navigate('/');
    }, [navigate])

    useEffect(() => {
        axios.get('/api/data', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setMeals(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 401) {
                    handleLogout()
                }
            })
    }, [handleLogout]);

    const handleSelection = () => {
        setSelected(AllPrefernces.map((item, ind) => {
            if (item.length > 0) return ind;
            return null;
        }));
    }

    const handlePassenger = () => {
        setTotalPassengers(t => t + 1);
        setCurrentPassenger(t => t + 1);
        setAllPrefernces(t => [...t, []]);
        setPrefernce([]);
        handleSelection();
    }

    const handleCurrentPassenger = (index) => {
        setCurrentPassenger(index);
        setPrefernce(AllPrefernces[index]);
        handleSelection();
    }

    const handlePreference = ([...rest]) => {
        setPrefernce(rest);
        let newPreference = AllPrefernces.map((item, index) => {
            if (index === currentPassenger) {
                return rest;
            }
            return item;
        })
        setAllPrefernces(newPreference);
    }

    const handleTotalCost = useCallback(() => {
        let total = 0;
        AllPrefernces.forEach(item => {
            item.forEach(subItem => {
                let SelectedMeal = Meals.meals.find(i => i.id === subItem.id);
                total += SelectedMeal.price;
                total += SelectedMeal.drinks.find(drink => drink.id === subItem.drinkId).price;
            })
        })
        setCost(total);
    }, [AllPrefernces, Meals])

    useEffect(() => {
        handleTotalCost()
    }, [handleTotalCost])


    return (
        <div className={Styles.Home}>
            <Menu {...{ prefernce, handlePreference, Meals }} />
            <Sidebar {...{ currentPassenger, handleCurrentPassenger, totalPassengers, handlePassenger, selected, cost }} />
        </div>
    );
}
export default Home;