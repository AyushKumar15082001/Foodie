import Juice from '../../images/Juice.png';
import Beer from '../../images/Beer.png';
import Vine from '../../images/Vine.png';
import Style from './Card.module.css';

const Cards = ({ Meals, prefernce, handlePreference }) => {
    const findIndex = (id) => {
        return prefernce.findIndex(item => item.id === id);
    }
    const handleSelection = (id) => {
        if (findIndex(id) >= 0) {
            const filtered = prefernce.filter(item => item.id !== id);
            handlePreference(filtered);
        } else {
            handlePreference([...prefernce, { id: id, drinkId: 'drink-1' }]);
        }
    }
    const drinkSelctionhandler = (drinkId, menuId) => {
        if (findIndex(menuId) >= 0) {
            const filtered = prefernce.filter(item => item.id !== menuId);
            handlePreference([...filtered, { id: menuId, drinkId: drinkId }]);
        } else {
            handlePreference([...prefernce, { id: menuId, drinkId: drinkId }]);
        }
    }
    return (
        <div className={Style.cardContainer}>
            {Meals && Meals.map((item, index) => {
                let numberOfMeal = 1;
                if (item.starter) numberOfMeal++;
                if (item.desert) numberOfMeal++;

                return (
                    <div key={index} className={Style.card}>
                        <img src={item.img} alt={item.name} className={Style.menuImg}/>
                        <div className={Style.mealDetail}>
                            <div className={Style.mealCombo}>{numberOfMeal} course meal {item.drinks && '+ drink'}</div>
                            <h2>{item.title}</h2>
                            <h5>Starter: <span>{item.starter}</span></h5>
                            <h5>Desert: <span>{item.desert}</span></h5>
                            <h5>Selected drink: <span>{item.desert}</span></h5>
                            <div className={Style.priceCont}>
                                <div className={Style.drink}>
                                    {
                                        item.drinks && item.drinks.map((subItem, index) => {
                                            let imgSrc = subItem.title === 'Juice' ? Juice : subItem.title === 'Beer' ? Beer : Vine;
                                            let selectedMeal = prefernce.find(items => items.id === item.id);
                                            let drinkSelected = selectedMeal && selectedMeal.drinkId === subItem.id;

                                            return (
                                                <img key={index} src={imgSrc} alt={subItem.title} onClick={() => drinkSelctionhandler(subItem.id, item.id)} id={drinkSelected ? Style.juiceSelect : ''} />
                                            )
                                        })
                                    }
                                </div>
                                <div className={Style.price}>
                                    <span>${item.price}</span>
                                    <button onClick={() => handleSelection(item.id)} id={findIndex(item.id) >= 0 ? Style.activeMenu : ''}>Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
export default Cards;