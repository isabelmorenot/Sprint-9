
import React, {useState,useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function MakeUpApi () {

    const [makeup,getMakeup]=useState([]);

    useEffect(() =>{

        const obtainMakeUp = async () =>{
            const url = `https://makeup-api.herokuapp.com/api/v1/products.json`;
            const result =  await axios.get(url);
            //console.log(result.data);
            getMakeup(result.data);    
                    
        }
        obtainMakeUp();
        //console.log(makeup);
    },[]);
    return makeup;
}
export default MakeUpApi;
