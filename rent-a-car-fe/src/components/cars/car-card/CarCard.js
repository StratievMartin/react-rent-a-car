import { useNavigate, useParams } from 'react-router-dom';

export const CarCard = ({ car, deleteCar }) => {
    const navigate = useNavigate();
    const params = useParams().id;

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
        <div class="bg-gray-600 m-5 rounded-lg shadow-2xl p-10 text-left ">
            <div class="flex justify-between w-full">
                <div>
                    <img src={`${car.picture}`} alt="img" />
                    <h2 class="text-lg font-bold">{car.brand}</h2>
                    <h3>{car.carType}</h3>
                    <h3>{car.carsAvailable}</h3>
                    <h3>{car.constructionYear}</h3>
                    <h3>{car.fuel}</h3>
                    <h3>{car.model}</h3>
                    <h3>{car.pricePerDay}</h3>
                    <h3>{car.seats}</h3>
                </div>
                <div class="flex-row space-y-10 ">
                    <div
                        class="flex justify-end"
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
                    <div class="">
                        {params ? (
                            <button
                                onClick={redirectToEdit}
                                class="bg-blue-200 hover:bg-blue-300 rounded-md px-4 py-2 "
                            >
                                Edit
                            </button>
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
