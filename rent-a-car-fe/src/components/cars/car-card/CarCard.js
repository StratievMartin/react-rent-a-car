import { useNavigate, useParams } from 'react-router-dom';
import { getLoggedUser } from '../../../utils/http-utils/user-requests';
import { RentalEvent } from '../../rent/RentalEvent';

export const CarCard = ({ car, deleteCar }) => {
    const navigate = useNavigate();
    const params = useParams().id;
    const isAdmin = getLoggedUser().role === 'admin';

    const redirectToDetails = () => {
        navigate(`/cars/${car._id}`);
    };
    const redirectToEdit = () => {
        navigate(`/edit-car/${car._id}`);
    };
    
    if (!car) {
        return <p>No cars</p>;
    }
    return (
        //
        <div
            class={
                params
                    ? 'bg-gray-600 max-w-max my-0 m-auto mt-5 shadow-2xl rounded-xl text-left'
                    : 'bg-gray-600 m-5 shadow-2xl rounded-xl text-left'
            }
        >
            <div>
                <div class="relative">
                    <img
                        src={`${car.picture}`}
                        class={
                            params
                                ? 'w-full rounded-t-xl max-h-96'
                                : 'object-cover w-full rounded-t-xl max-h-52'
                        }
                        alt="carImg"
                    />
                    <div class="bg-red-400 p-1 text-white absolute z-50 top-0 left-0 rounded-tl-xl font-bold rounded-br-xl">
                        {car.carsAvailable} Available
                    </div>
                    {isAdmin && params ? (
                        <div
                            class="absolute top-5 right-5 "
                            onClick={() => deleteCar(car._id)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 text-red-500 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div class="flex justify-between items-start p-10 ">
                    <div>
                        <h2 class="text-lg font-bold">
                            {car.brand} {car.model} ({car.constructionYear})
                        </h2>
                        {params ? (
                            <>
                                <h3>Fuel: {car.fuel}</h3>
                                <h3>Type: {car.carType}</h3>
                                <h3>Seats: {car.seats}</h3>
                                <h3>Price Per Day: ${car.pricePerDay}</h3>
                                <h3>Cars Available: {car.carsAvailable}</h3>
                            </>
                        ) : (
                            ''
                        )}
                    </div>
                    <div class="place-self-end">
                        {params ? (
                            <>
                                <RentalEvent car={params} />
                                {isAdmin ? (
                                    <button
                                        onClick={redirectToEdit}
                                        class="bg-blue-200 mt-3 hover:bg-blue-300 rounded-md px-4 py-2 "
                                    >
                                        Edit
                                    </button>
                                ) : (
                                    ''
                                )}
                            </>
                        ) : (
                            <button
                                onClick={redirectToDetails}
                                class="bg-blue-200 hover:bg-blue-300 rounded-md px-4 py-2 "
                            >
                                Read more
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
