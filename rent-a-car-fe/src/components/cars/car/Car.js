import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteCar, getCar } from '../../../utils/http-utils/car-requests';
import { CarCard } from '../car-card/CarCard';
export const Car = () => {
    const { id } = useParams();
    const [car, setCar] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        getCar(id).then((res) => {
            setCar(res.data);
        });
    }, []);

    const deleteCarHandler = async (id) => {
        await deleteCar(id);
        navigate('/cars-list');
    };

    return (
        <>
            <CarCard car={car} deleteCar={deleteCarHandler} />
        </>
    );
};
