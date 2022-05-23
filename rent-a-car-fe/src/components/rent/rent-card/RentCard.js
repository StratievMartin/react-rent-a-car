import { CarCard } from "../../cars/car-card/CarCard";
export const RentCard = ({ userRents }) => {
    console.log(userRents);
    return (
        <div>
            <h2 class="font-bold mb-2">Your rents:</h2>
            <div class="grid lg:grid-cols-3 md:grid-cols-2">
                {userRents.map((rent) => (
                    <CarCard key={rent._id} car={rent.car}/>
                ))}
            </div>
        </div>
    );
};
