import { useEffect, useState } from 'react';
import { getLoggedUser } from '../../utils/http-utils/user-requests';
import { addRent } from '../../utils/http-utils/rent-requests';
import { getCar, updateCar } from '../../utils/http-utils/car-requests';
import { useNavigate } from 'react-router-dom';

export const RentalEvent = ({ car }) => {
    const loggedUser = getLoggedUser();
    const navigate = useNavigate();
    const [car1, setCar1] = useState();
    const [error, setError] = useState(false);
    const [carsAvailable, setCarsAvailable] = useState(5);
    const [rent, setRent] = useState({
        startDate: '',
        endDate: '',
        car,
        customer: loggedUser._id,
    });

    useEffect(() => {
        setCar1(getCar(car));
    }, []);

    const handleDateChange = (e) => {
        setRent((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
        setError(false);
    };

    const rentHandler = async () => {
        if (!rent.startDate || !rent.endDate) {
            return setError(true);
        } else {
            await addRent(rent)
                .then((res) => {
                    setCar1((prev) => prev.carsAvailable--);
                    // updateCar(car, car1).then((res) =>
                    //     console.log(res.data)
                    // );
                    navigate('/profile');
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div class="border border-1 rounded-lg p-5">
            <h2 class="italic font-bold text-center mb-2">Rental Period</h2>
            <div class="">
                <label htmlFor="startDate">Start</label>
                <input
                    onChange={handleDateChange}
                    required
                    value={rent.startDate}
                    class="block p-2 my-1"
                    type="date"
                    name="startDate"
                    id="startDate"
                />
                <label htmlFor="endDate">End</label>
                <input
                    onChange={handleDateChange}
                    required
                    value={rent.endDate}
                    class="block p-2 my-1"
                    type="date"
                    name="endDate"
                    id="endDate"
                />
                {error ? <p class="text-red-600">Add proper dates!</p> : ''}
            </div>
            <button
                class="bg-red-400 hover:bg-red-500 rounded-md px-4 py-2 mt-3"
                onClick={rentHandler}
            >
                Rent now!
            </button>
        </div>
    );
};
