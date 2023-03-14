import { Link } from "react-router-dom"


export default function Car(props) {
    return (
        <div className="car">
            <p>{props.car.name}</p>
            <p>{props.car.year}</p>
            <p>{props.car.selling_price}</p>
            <p>{props.car.owner}</p>
            <p>{props.car.engine}</p>
            <p>{props.car.max_power}</p>
            <p>{props.car.seat}</p>
            {
                (props.hideLink) ?
                <></> :
            
            <Link to={`/car/${props.car.id}`}>Read More</Link>
}
        </div>
    )
}