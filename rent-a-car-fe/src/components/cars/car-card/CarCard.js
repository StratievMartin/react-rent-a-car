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
        <div class="bg-gray-600 m-5 shadow-2xl rounded-xl text-left ">
            <div>
                <div class="relative">
                    <img
                        src={`${car.picture}`}
                        class=" object-cover w-full rounded-t-xl max-h-52"
                        alt="carImg"
                    />
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
                </div>
                <div class="flex justify-between p-10">
                    <div >
                        <h2 class="text-lg font-bold">{car.brand}</h2>
                        <h3>{car.carType}</h3>
                        <h3>{car.carsAvailable}</h3>
                        <h3>{car.constructionYear}</h3>
                        <h3>{car.fuel}</h3>
                        <h3>{car.model}</h3>
                        <h3>{car.pricePerDay}</h3>
                        <h3>{car.seats}</h3>
                    </div>
                    <div class="self-end">
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
