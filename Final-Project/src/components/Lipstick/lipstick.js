import GetProducts from "../GetProduct/getProduct";
import PrintContent from "../Print_Screen/printScreen";

function Lipstick () {

    let newArr;
    newArr= GetProducts("lipstick");

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
export default Lipstick;
