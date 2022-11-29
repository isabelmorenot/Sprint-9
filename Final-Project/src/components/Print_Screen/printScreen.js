import React from "react";
import { Link } from "react-router-dom";

const PrintContent = ({data}) => {
    return(
        <ul key={data.id}>
            <li>
                <Link>
                    <h3>{data.brand}</h3>
                    <img src={data.api_featured_image} alt="Imagen" width={100}></img>
                </Link>
                <p>{data.name}</p>
                <p>Description: {data.description}</p>
            </li>
        </ul>
    )

}

 export default PrintContent;