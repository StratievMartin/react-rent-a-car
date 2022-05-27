import { useEffect, useState } from 'react';
import { getLoggedUser } from '../../utils/http-utils/user-requests';
import { addRent } from '../../utils/http-utils/rent-requests';
import { rentACar } from '../../utils/http-utils/car-requests';
import { useNavigate } from 'react-router-dom';
import { getUserRents } from '../../utils/http-utils/rent-requests';
import { getCar } from '../../utils/http-utils/car-requests';

export const RentalEvent = ({ car }) => {
    const loggedUser = getLoggedUser();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const [customerRents, setCustomerRents] = useState(0);
    const [pricePerDay, setPricePerDay] = useState(0);
    const [rent, setRent] = useState({
        startDate: '',
        endDate: '',
        car,
        customer: loggedUser._id,
    });

    useEffect(() => {
        getUserRents(loggedUser._id).then((res) => {
            setCustomerRents(res.data.length);
        });
        getCar(car).then((res) => {
            setPricePerDay(res.data.pricePerDay);
        });
    }, []);

    const calcRentSum = () => {
        const vip = customerRents >= 3;
        const start = new Date(rent.startDate).getTime();
        const end = new Date(rent.endDate).getTime();
        const dif = end - start;
        const rentalDays = dif / (1000 * 60 * 60 * 24);
        let totalPrice = pricePerDay * rentalDays;
        let discount = '';

        if (vip) {
            discount = '-15% VIP discount';
            totalPrice -= (totalPrice * 15) / 100;
        } else {
            if (rentalDays > 3 && rentalDays < 5) {
                discount = '-5% discount';
                totalPrice -= (totalPrice * 5) / 100;
            } else if (rentalDays > 5 && rentalDays < 10) {
                discount = '-7% discount';
                totalPrice -= (totalPrice * 7) / 100;
            } else if (rentalDays > 10) {
                discount = '-10% discount';
                totalPrice -= (totalPrice * 10) / 100;
            }
        }
        return [totalPrice, discount];
    };

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
                    rentACar(car);
                    navigate('/profile');
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div class="border border-1 rounded-lg p-5">
            <h2 class="italic font-bold text-center mb-2">Rental Period</h2>
            <div>
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
                {rent.startDate && rent.endDate ? (
                    <div class="text-lg text-right">
                        <p class="text-left">Total:</p>
                        <p class="text-red-400">{calcRentSum()[1]}</p>
                        <p class="font-bold">${calcRentSum()[0]}</p>
                    </div>
                ) : (
                    ''
                )}
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
