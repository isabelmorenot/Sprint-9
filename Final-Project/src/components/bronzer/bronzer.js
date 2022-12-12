import React from "react";
import PrintContentExample from "../print_Screen/printexample";
import GetProducts from "../getProduct/GetProduct";
import { ProductsContainer, ProductWrapper } from "../print_Screen/printStyles";

function Bronzer () {

    let newArr;
    newArr= GetProducts("bronzer");

        //console.log(arr);
        return(
            <ProductsContainer>
                <ProductWrapper>
                    {newArr.length === 0 && <p>Cargando...</p>}
                    {
                        newArr.map((singleMakeup,index)=>{
                            return(
                                <PrintContentExample data={singleMakeup} key={singleMakeup.id}/>
                            )
                        })
                    }
                </ProductWrapper>
            </ProductsContainer>
        )  
}
export default Bronzer;
