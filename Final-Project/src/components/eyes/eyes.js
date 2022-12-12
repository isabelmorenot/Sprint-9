import React from "react";
import PrintContentExample from "../print_Screen/printexample";
import GetProducts from "../getProduct/GetProduct";
import { ProductsContainer, ProductWrapper } from "../print_Screen/printStyles";

function GetEyeLiner(){

    let arr;
    arr= GetProducts("eyeliner");

return(
    <ProductsContainer>
        <ProductWrapper>
            {arr.length === 0 && <p>Cargando...</p>}
            {
                arr.map((singleMakeup,index)=>{
                    return(
                        <PrintContentExample data={singleMakeup} key={singleMakeup.id}/>
                    )
                })
            }
        </ProductWrapper>
    </ProductsContainer>
)



}

export default GetEyeLiner;