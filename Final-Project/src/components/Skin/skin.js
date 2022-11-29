import GetProducts from "../GetProduct/getProduct";
import PrintContent from "../Print_Screen/printScreen";

function Skin () {

    let newArr;

    newArr= GetProducts("foundation");
        return(
            <div>
                {newArr.length === 0 && <p>Cargando...</p>}
                {
                    newArr.map((singleMakeup,i)=>{
                        return(
                            <PrintContent data={singleMakeup} key={singleMakeup.id}/>              
                        )
                    })
                }
            </div>
        )
        
}
export default Skin;
