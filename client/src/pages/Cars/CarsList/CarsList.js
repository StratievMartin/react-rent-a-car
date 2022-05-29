import { useState, useEffect } from 'react';
import { getAllCars } from '../../../utils/services/CarsService';
import { CarCard } from '../../../components/Cars/CarCard';

export const CarsList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars().then((res) => {
            setCars(res.data);
        });
    }, []);

    return (
        <div class="grid lg:grid-cols-3 md:grid-cols-2 mx-10">
            {cars &&
                cars.map((car) =>
                    car.carsAvailable > 0 ? (
                        <CarCard key={car.id} car={car} />
                    ) : (
                        ''
                    )
                )}
        </div>
    );
};
