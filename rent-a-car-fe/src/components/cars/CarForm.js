import {
    addCar,
    getCar,
    updateCar,
} from '../../utils/services/CarsService';

import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const CarForm = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [error, setError] = useState(false);

    const [car, setCar] = useState({
        brand: '',
        model: '',
        constructionYear: '',
        carType: 'economy',
        fuel: 'petrol',
        seats: '',
        picture: '',
        pricePerDay: '',
        carsAvailable: '',
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
    };
    const onInputChange = (e) => {
        setCar((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
        setError(false);
    };
    const addCarHandler = async () => {
        await addCar(car)
            .then((res) => navigate('/cars-list'))
            .catch((err) => setError(err.message));
    };
    const updateCarHandler = async () => {
        await updateCar(car._id, car)
            .then((res) => navigate('/cars-list'))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        if (params.id) {
            getCar(params.id).then((res) => setCar(res.data));
        }
    }, [params.id]);

    return (
        <>
            <div class="bg-gray-400 h-screen">
                <form onSubmit={onFormSubmit}>
                    <div class="flex justify-center pt-5">
                        <div class="text-left space-y-3 bg-gray-300 border-2 border-gray rounded-xl p-10">
                            <Link to="/cars-list" class="flex justify-end text-red-400 hover:text-red-500 transition ease-in-out delay-100 cursor-pointer">Back to cars</Link>
                            <div>
                                <label htmlFor="brand">Brand</label>
                                <input
                                    onChange={onInputChange}
                                    value={car.brand}
                                    class="flex justify-end p-2 "
                                    type="text"
                                    name="brand"
                                    id="brand"
                                    placeholder="Brand..."
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="model">Model</label>
                                <input
                                    onChange={onInputChange}
                                    value={car.model}
                                    class="flex justify-end p-2 "
                                    type="text"
                                    name="model"
                                    id="model"
                                    placeholder="Model..."
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="constructionYear">
                                    Construction Year
                                </label>
                                <input
                                    onChange={onInputChange}
                                    value={car.constructionYear}
                                    class="flex justify-end p-2 "
                                    type="text"
                                    name="constructionYear"
                                    id="constructionYear"
                                    placeholder="Construction Year..."
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="seats">Seats</label>
                                <input
                                    onChange={onInputChange}
                                    value={car.seats}
                                    class="flex justify-end p-2 "
                                    type="text"
                                    name="seats"
                                    id="seats"
                                    placeholder="Seats..."
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="picture">Image link</label>
                                <input
                                    onChange={onInputChange}
                                    value={car.picture}
                                    class="flex justify-end p-2 "
                                    type="text"
                                    name="picture"
                                    id="picture"
                                    placeholder="Image link..."
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="pricePerDay">
                                    Price Per Day
                                </label>
                                <input
                                    onChange={onInputChange}
                                    value={car.pricePerDay}
                                    class="flex justify-end p-2 "
                                    type="text"
                                    name="pricePerDay"
                                    id="pricePerDay"
                                    placeholder="Price Per Day..."
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="carsAvailable">
                                    Cars Available
                                </label>
                                <input
                                    onChange={onInputChange}
                                    value={car.carsAvailable}
                                    class="flex justify-end p-2 "
                                    type="text"
                                    name="carsAvailable"
                                    id="carsAvailable"
                                    placeholder="Cars Available..."
                                    required
                                />
                            </div>
                            <div class="flex justify-between">
                                <div>
                                    <label htmlFor="carType" class="block">
                                        Car Type
                                    </label>
                                    <select
                                        name="carType"
                                        id="carType"
                                        onChange={onInputChange}
                                        value={car.carType}
                                        required
                                    >
                                        <option value="economy">Economy</option>
                                        <option value="estate">Estate</option>
                                        <option value="luxury">Luxury</option>
                                        <option value="SUV">SUV</option>
                                        <option value="cargo">Cargo</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="fuel" class="block">
                                        Fuel
                                    </label>
                                    <select
                                        name="fuel"
                                        id="fuel"
                                        onChange={onInputChange}
                                        value={car.fuel}
                                        required
                                    >
                                        {/* 'petrol', 'diesel', 'hybrid', 'electric' */}
                                        <option value="petrol">Petrol</option>
                                        <option value="diesel">Diesel</option>
                                        <option value="hybrid">Hybrid</option>
                                        <option value="electric">
                                            Electric
                                        </option>
                                    </select>
                                </div>
                            </div>
                            {error ? (
                                <span class="text-red-600">{error}</span>
                            ) : (
                                ''
                            )}

                            <div class="flex justify-center">
                                <button
                                    onClick={() =>
                                        params.id
                                            ? updateCarHandler()
                                            : addCarHandler()
                                    }
                                    class="bg-green-300 px-4 py-2 rounded-lg"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
