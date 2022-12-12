import React from "react";
import GetProducts from "../getProduct/GetProduct";
import PrintContentExample from "../print_Screen/printexample";
import { ProductsContainer, ProductWrapper } from "../print_Screen/printStyles";

function Lipstick () {

    let newArr;
    newArr= GetProducts("lipstick");

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
export default Lipstick;
