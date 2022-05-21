import { useState, useEffect } from 'react';
import {
    getAllCars,
    deleteCar,
} from '../../../utils/http-utils/car-requests';
import { CarCard } from '../car-card/CarCard';

export const CarsList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars().then((res) => {
            setCars(res.data);
        });
    }, []);

    const deleteCarHandler = async (id) => {
        await deleteCar(id);
        setCars((prev) => {
            return prev.filter((car) => car._id !== id);
        });
    };
    return (
        <div class="grid lg:grid-cols-3 md:grid-cols-2">
            {cars &&
                cars.map((car) => (
                    <CarCard
                        key={car.id}
                        car={car}
                        deletecar={deleteCarHandler}
                    />
                ))}
        </div>
    );
};
