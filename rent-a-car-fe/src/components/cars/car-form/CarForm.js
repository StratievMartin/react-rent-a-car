import {
    addCar,
    getCar,
    updateCar,
} from '../../../utils/http-utils/car-requests';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export const CarForm = () => {
    // {
    //     brand: 's-class',
    //     model: 'mercedes',
    //     constructionYear: 2005,
    //     carType: 'economy',
    //     fuel: 'petrol',
    //     seats: 2,
    //     picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.auto-data.net%2Fen%2Fmercedes-benz-e-class-model-1393&psig=AOvVaw3k9YBsiTlyYljzAAw_mKE9&ust=1652210962627000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDcp8-T0_cCFQAAAAAdAAAAABAD',
    //     pricePerDay: 100,
    //     carsAvailable: 3,
    // }

    const navigate = useNavigate();
    const params = useParams();
    const [car, setCar] = useState({
        brand: '',
        model: '',
        constructionYear: 0,
        carType: '',
        fuel: '',
        seats: 4,
        picture: '',
        pricePerDay: 0,
        carsAvailable: 0,
    });
    const [error, setError] = useState(false);
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
            <form onSubmit={onFormSubmit}>
                <div class="flex justify-center">
                    <div class="text-left space-y-3">
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
                            <label htmlFor="carType">Car Type</label>
                            <select name="carType" id="carType">
                                <option value="economy">Economy</option>
                                <option value="estate">Estate</option>
                                <option value="luxury">Luxury</option>
                                <option value="SUV">SUV</option>
                                <option value="cargo">Cargo</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="fuel">Fuel</label>
                            <select name="fuel" id="fuel">
                                {/* 'petrol', 'diesel', 'hybrid', 'electric' */}
                                <option value="petrol">Petrol</option>
                                <option value="diesel">Diesel</option>
                                <option value="hybrid">Hybrid</option>
                                <option value="electric">Electric</option>
                            </select>
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
                            <label htmlFor="picture">Picture</label>
                            <input
                                onChange={onInputChange}
                                value={car.picture}
                                class="flex justify-end p-2 "
                                type="text"
                                name="picture"
                                id="picture"
                                placeholder="Picture..."
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="pricePerDay">Price Per Day</label>
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

                        {error ? <span class="text-red-600">{error}</span> : ''}

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
        </>
    );
};
