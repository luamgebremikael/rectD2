import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import Car from '../components/Car'
export default function CarSingle() {
    const { id } = useParams()
    const [car, setCar] = useState({})
    const [error, setError] = useState(false)
    useEffect(() => {
        async function getCar() {
        try {
                const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
                const data = await response.json()
                setCar(data)
            } catch(err) {
                setError(true)
            }
        }
        getCar()
    }, [])
    return (
        <div>
            {
                error?
                <>
                    <h2>404 Not Found</h2>
                    <p></p>
                </>:
                <>
                    <h1>Car Single: {id}</h1>
                    <Car car={car} hideLink={true}/>
                </>
            }
        </div>
    )
}