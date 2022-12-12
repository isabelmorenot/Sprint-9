import React, {useContext} from "react";
import { ProductImg, ProductTitle, ProductCard, ProductInfo, ProductPrice, ProductButtom, ProductName } from "./printStyles";
import { DataContext } from "../context/Dataprovider";


const PrintContentExample = ({data}) => {
    const nullPrice =  (data.price === "0.0")?"7.0 €":data.price + "€";
    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

    return(
        <ProductCard key={data.id}>
            <ProductImg src={data.api_featured_image} alt="Imagen" width={100}></ProductImg>
            <ProductInfo>
                <ProductTitle>
                    <a href={`/fichaMakeUp/${data.id}.json`} >{data.brand}</a>
                </ProductTitle>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>{nullPrice}</ProductPrice>
                <ProductButtom onClick={() => addCarrito(data.id)}>Add to bag</ProductButtom>
            </ProductInfo>
        </ProductCard>
    )
}

 export default PrintContentExample;