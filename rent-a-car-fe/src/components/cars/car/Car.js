import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCar } from '../../../utils/http-utils/car-requests';
import { CarCard } from '../car-card/CarCard';
export const Cars = () => {
    const { id } = useParams();
    const [car, setCar] = useState([]);

    useEffect(() => {
        getCar(id).then((res) => {
            setCar(res.data);
            // console.log(user);
        });
    }, []);

    return (
        <>
            <CarCard car={car} />
        </>
    );
};
