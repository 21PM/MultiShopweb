import catstyles from "../Categories/category.module.css"
import SmallCard from "../servicecard/servicecard";
import ProdcutsData from "../../data";

function CategoryDIv(){
    return(
        
        <div className={catstyles.cat_outer_div}>
            <div className={catstyles.innerDiv}>
            <div className={catstyles.h1}>
            <h1>CATEGORIES </h1>
            </div>

            <div className={catstyles.cardsDIv}>
                {
                    ProdcutsData.map((ele,i)=>{
                            
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default CategoryDIv;