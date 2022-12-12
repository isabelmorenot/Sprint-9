import React, { useContext } from "react";
import { Container } from "./cartStyles";
import { DataContext } from "../context/Dataprovider";

const Cart = () =>{
    const value = useContext(DataContext)
    const [menu,setMenu] = value.menu;
    const[carrito,setCarrito]= value.carrito;
    const [total] = value.total;

    const toogleFalse = () => {
        setMenu(false);
    }
    
    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const resta = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
            }
            setCarrito([...carrito])
        })
    }

    const suma = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad += 1;
            }
            setCarrito([...carrito])
        })
    }


    const removeProduct = id =>{
        if(window.confirm("¿Do you want to remove the item ?")){
            carrito.forEach((item,index) => {
                if(item.id === id ){
                carrito.splice(index,1)
                }

            }
       )}
            setCarrito([...carrito])
    }

    return(
        <Container className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={toogleFalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Your cart</h2>
                <div className="carrito__center">
                {
                    
                    carrito.map((product) => (
                    <div className="carrito__item" key={product.id}>
                        <img src={product.api_featured_image} alt="brandImage"/>
                        <div>
                            <h3>{product.brand}</h3>
                            <p className="price">{product.price} €</p>
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid" onClick={() => suma(product.id)}></box-icon>
                            <p className="cantidad">{product.cantidad}</p>
                            <box-icon name="down-arrow" type="solid" onClick={() => resta(product.id)}></box-icon>
                        </div>
                        <div className="remove__item" onClick={() => removeProduct(product.id)}>
                            <box-icon name="trash"></box-icon>
                        </div>
                    </div>
                    )) 
                }
                </div>
               
                <div className="carrito__footer">
                    <h3>Total: {total.toFixed(2)} €</h3>   
                    <button className="btn">Payment</button>   
                </div>
            </div>
        </Container>
    )

}

export default Cart;