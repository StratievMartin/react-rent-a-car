import { useNavigate } from 'react-router-dom';
import { returnACar } from '../../utils/services/CarsService';
import { deleteRent } from '../../utils/services/RentsService';
import { CarCard } from '../Cars/CarCard';

export const RentCard = ({ userRents }) => {
    const navigate = useNavigate();
    const returnCarHandler = (carId, userId) => {
        returnACar(carId);
        deleteRent(userId);
        navigate('/cars-list');
    };

    return (
        <div>
            <h2 class="font-bold  pt-2 mb-2">Your rents:</h2>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 ">
                {userRents.map((rent) => (
                    <div key={rent.id} class="relative ">
                        <CarCard class="z-0 " key={rent._id} car={rent.car} />
                        <button
                            onClick={() => {
                                returnCarHandler(rent.car._id, rent.customer);
                            }}
                            class="bg-red-400  hover:bg-red-500 px-2 py-1 absolute top-5 right-5 rounded-tr-xl rounded-bl-xl "
                        >
                            Return car
                        </button>
                        <div class="bg-red-400 p-1 text-white text-left absolute z-50 top-5 left-5 rounded-tl-xl rounded-br-xl ">
                            <h2>Start Date: {rent.startDate}</h2>
                            <h2>End Date: {rent.endDate}</h2>
                            <h2>Total Price: ${rent.totalPrice}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
