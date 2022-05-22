import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCar } from '../../../utils/http-utils/car-requests';
import { CarCard } from '../car-card/CarCard';
export const Car = () => {
    const { id } = useParams();
    const [car, setCar] = useState([]);

    useEffect(() => {
        getCar(id).then((res) => {
            setCar(res.data);
        });
    }, []);

    return (
        <>
            <CarCard car={car} />
        </>
    );
};
