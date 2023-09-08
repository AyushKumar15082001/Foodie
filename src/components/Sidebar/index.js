import Styles from './Sidebar.module.css';
import arrow from '../../images/expand.svg';
import flight from '../../images/flight.svg';
import { useState } from 'react';
const Sidebar = ({ currentPassenger, handleCurrentPassenger, totalPassengers, handlePassenger, selected, cost }) => {
    const [showPassengers, setShowPassengers] = useState(true);
    return (
        <div className={Styles.Sidebar}>
            <div className={Styles.title}>
                <img src={flight} alt="flight" />
                <h2>Select meal</h2>
            </div>
            <div className={Styles.FlightContainer} onClick={() => setShowPassengers(t => !t)}>
                <div className={Styles.Flight} >
                    <h3>Riga - St Petersburg</h3>
                    <span>Flight duration: 3h 40m</span>
                </div>
                <span className={Styles.arrow}><img src={arrow} alt="arrow" style={{ rotate: showPassengers ? '180deg' : '0deg' }} /></span>
            </div>
            <div className={Styles.Passengers} style={{ display: showPassengers ? 'block' : 'none' }}>
                {
                    Array.from({ length: totalPassengers }, (_, i) => i + 1).map((item, index) => {
                        return (
                            <div className={Styles.PassengersHeader} key={index} onClick={() => handleCurrentPassenger(index)} id={currentPassenger === index ? Styles.active : ''}>
                                <span>Adult passengers {item}</span>
                                <span>{currentPassenger === index ? 'Select meal' : selected.indexOf(index) >= 0 ? 'Selected' : 'Not selected'}</span>
                            </div>
                        )
                    }
                    )
                }
                <div className={Styles.PassengersHeader} onClick={handlePassenger}>
                    <span>Add Passenger</span>
                </div>
            </div>
            <div className={Styles.totalPrice}>
                <span>Total for all passengers</span>
                <span>$ {cost === 0 ? '0.00' : cost.toFixed(2)}</span>
            </div>
        </div>
    );
}
export default Sidebar;