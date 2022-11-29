import PrintContent from "../Print_Screen/printScreen";
import GetProducts from "../GetProduct/getProduct";

function GetEyeLiner(){

    let arr;
    arr= GetProducts("eyeliner");

return(
    <div>
        {arr.length === 0 && <p>Cargando...</p>}
        {
            arr.map((singleMakeup,index)=>{
                return(
                    <PrintContent data={singleMakeup} key={singleMakeup.id}/>
                )
            })
        }
    </div>
)



}

export default GetEyeLiner;