import React, { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
    Container,
    DetailsContainer,
    FeaturesContainer, 
    Left, 
} from "./printSingle";

const Fichas = () => {
    const {id} = useParams();
    const [getMakeUpId, setGetMakeUpId] = useState([]);


    useEffect(() => {
        const obtainMakeUp = async () =>{
            const url = `https://makeup-api.herokuapp.com/api/v1/products/${id}`;
            const result = await axios.get(url);
            setGetMakeUpId(result.data);
            console.log(getMakeUpId);
        }
        obtainMakeUp();
    },[id, getMakeUpId]);
    //const [imageId, setImageId] = useState(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)
    //console.log(imageId);
    const nullPrice =  (getMakeUpId.price === "0.0")?"7.0 €":getMakeUpId.price + "€";
    return (
            <Container>
                <div className="sub-main">
                    <div className="box">
                        <DetailsContainer>
                            <FeaturesContainer>
                                <Left>
                                    <img src={getMakeUpId.api_featured_image} alt="Imagen" width={100}></img>
                                    <h2>{getMakeUpId.brand}</h2>
                                    <p>{getMakeUpId.name}</p>
                                    <p>Description: {getMakeUpId.description}</p>
                                    <h3>Price: {nullPrice}</h3>
                                </Left>
                            </FeaturesContainer>
                        </DetailsContainer>
                    </div>
                </div>
            </Container>
    )
};

export default Fichas;