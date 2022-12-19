import {useEffect, useState} from "react";
import React, {createContext} from "react";
import MakeUpApi from "../makeupApi/MakeUp";

export const DataContext = createContext ();

export const DataProvider = (props) => {
    const [menu,setMenu] = useState(false)
    const dataApi = MakeUpApi("all");
    const [carrito,setCarrito] = useState([])
    const [mostrar,setMostrar] =useState([])
    const [total,setTotal] = useState(0)
    
    const addCarrito = (id) => {
        const check = carrito.every(item =>{
            return item.id !== id;
        })
        if (check){
            let data = dataApi.filter(product =>{
                return product.id === id
            })
            
            if(data.length > 0){
            data[0]['cantidad'] = 1;}
            setCarrito([...carrito,...data])
        }else{
            alert("The item already exists")
        }
    }

    useEffect(() => {

        const getTotal = () =>{
            const result = carrito.reduce((prev,item) =>{
                return prev + (item.price * item.cantidad)
            },0)
            setTotal(result)
        }
        getTotal()
    },[carrito])

    const value = {
        //products : [products],
        menu :[menu,setMenu],
        addCarrito : addCarrito,
        carrito :[carrito,setCarrito],
        total :[total,setTotal],
        mostrar :[mostrar,setMostrar],
    } 
    return (
       < DataContext.Provider value = {value}>
        {props.children}
       </DataContext.Provider>
    )
    
}
