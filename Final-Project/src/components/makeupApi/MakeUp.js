import {useState,useEffect} from "react";
import axios from 'axios';

function MakeUpApi (product_type) {

    const [makeup,getMakeup]=useState([]);
    
    useEffect(() =>{
        let url = `https://makeup-api.herokuapp.com/api/v1/products.json`
        const obtainMakeUp = async () =>{
            if (product_type !== "all"){
                url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`;
            }
            const result =  await axios.get(url);
            //console.log(result.data);
            getMakeup(result.data);    
        }
        obtainMakeUp();
    },[]);
    return makeup;
}
export default MakeUpApi;
