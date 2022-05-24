import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { returnACar } from '../../../utils/http-utils/car-requests';
import { deleteRent } from '../../../utils/http-utils/rent-requests';
import { CarCard } from '../../cars/car-card/CarCard';

export const RentCard = ({ userRents }) => {
    const navigate = useNavigate();
    const returnCarHandler = (carId, userId) => {
        returnACar(carId);
        deleteRent(userId);
        navigate('/cars-list');
    };
    const calcRentSum = () => {
        const vip = userRents.length >= 3;
        const pricePerDay = userRents[0].car.pricePerDay;
        const start = new Date(userRents[0].startDate).getTime();
        const end = new Date(userRents[0].endDate).getTime();
        const dif = end - start;
        const rentalDays = dif / (1000 * 60 * 60 * 24);
        let totalPrice = pricePerDay * rentalDays;

        console.log('before discount', totalPrice, '\n', 'days', rentalDays);
        if (vip) {
            totalPrice -= (totalPrice * 15) / 100;
            console.log('/vip/ -15%', totalPrice);
        } else {
            if (rentalDays > 3 && rentalDays < 5) {
                totalPrice -= (totalPrice * 5) / 100;
                console.log('-5%', totalPrice);
            } else if (rentalDays > 5 && rentalDays < 10) {
                totalPrice -= (totalPrice * 7) / 100;
                console.log('-7%', totalPrice);
            } else if (rentalDays > 10) {
                totalPrice -= (totalPrice * 10) / 100;
                console.log('-10%', totalPrice);
            }
        }
    };
    useEffect(() => {
        calcRentSum();
    }, []);

    return (
        <div>
            <h2 class="font-bold mb-2">Your rents:</h2>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 ">
                {userRents.map((rent) => (
                    <div key={rent.id} class="relative">
                        <CarCard class="z-0" key={rent._id} car={rent.car} />
                        <button
                            onClick={() => {
                                returnCarHandler(rent.car._id, rent.customer);
                            }}
                            class="bg-red-400 hover:bg-red-500 rounded-md px-2 py-1 absolute top-5 right-5 rounded-tr-xl rounded-bl-xl "
                        >
                            Return car
                        </button>
                        <div class="bg-red-400 p-1 text-white absolute z-50 top-5 left-5 rounded-tl-xl rounded-br-xl ">
                            <h2>Start Date: {rent.startDate}</h2>
                            <h2>End Date: {rent.endDate}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
