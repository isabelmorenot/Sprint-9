import MakeUpApi from "../makeupApi/MakeUp";


function GetProducts (product_type) {

    const GetArr = MakeUpApi(product_type);
    let newArr;

    newArr= GetArr.filter((getType)=>{
        return (getType.product_type === product_type);
    })

    return newArr;
}
export default GetProducts;
