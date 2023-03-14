import { useEffect, useState } from "react";
import Car from '../components/Car'

export default function Home() {
    const [cars, setCar] = useState([])
    useEffect(() => {
     async function getCar() {
         const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
         const data = await response.json()
         setCar(data)
     }
     getCar()
    }, [])


return(
        <div>
        <h1>Home</h1>
        {cars.map((car) => <Car car={car} key={car.id}/>)}
        </div>
    )
}