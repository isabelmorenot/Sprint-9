import PrintContent from "../Print_Screen/printScreen";
import GetProducts from "../GetProduct/getProduct";

function Bronzer () {

    let newArr;
    newArr= GetProducts("bronzer");

        //console.log(arr);
        return(
            <div>
                {newArr.length === 0 && <p>Cargando...</p>}
                {
                    newArr.map((singleMakeup,index)=>{
                        return(
                            <PrintContent data={singleMakeup} key={singleMakeup.id}/>
                        )
                    })
                }
            </div>
        )  
}
export default Bronzer;
