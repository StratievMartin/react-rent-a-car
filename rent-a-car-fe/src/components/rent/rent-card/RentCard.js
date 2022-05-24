import { returnACar } from '../../../utils/http-utils/car-requests';
import { deleteRent } from '../../../utils/http-utils/rent-requests';
import { CarCard } from '../../cars/car-card/CarCard';
export const RentCard = ({ userRents }) => {
    const returnCarHandler = async (carId, userId) => {
        await returnACar(carId).then(() => deleteRent(userId));
    };
    return (
        <div>
            <h2 class="font-bold mb-2">Your rents:</h2>
            <div class="grid lg:grid-cols-3 md:grid-cols-2">
                {userRents.map((rent) => (
                    <div class="relative">
                        <CarCard class=" z-0" key={rent._id} car={rent.car} />
                        <button
                            onClick={() => {
                                returnCarHandler(rent.car._id, rent.customer);
                            }}
                        >
                            Return car
                        </button>
                        <div class="bg-red-400 p-1 text-white absolute z-50 top-5 left-5 rounded-tl-xl rounded-br-xl">
                            <h2>Start Date: {rent.startDate}</h2>
                            <h2>End Date: {rent.endDate}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
