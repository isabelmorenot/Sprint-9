import MakeUpApi from "../makeupApi/makeUp";


function GetProducts (product_type) {

    const GetArr = MakeUpApi();
    let newArr;

    newArr= GetArr.filter((getType)=>{
        return (getType.product_type === product_type);
    })

    return newArr;
}
export default GetProducts;
