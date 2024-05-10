import  styles from "./styles.module.css"
import "./styler.css"

function Topfaq(){

    let aboutdata = ["About", "Contact","Help","FAQs" ]

    return(
        <div className={styles.topfaqdiv}>  
        <div className={styles.flex}>   
            {
                aboutdata.map((ele)=>{
                    return(
                    <a href = "" style={{textDecoration:"none" ,  color:"#79849b",fontFamily:"roboto, sans-serif"}}>{ele}</a>
                    )
                })
            }
        </div>

        <div className={styles.dropdown}>
            <select>
                <option value={"My Account"}>My Account </option>
                <option value={"USD"}>Sign Up</option>
                <option value={"USD"}>Sign Up</option>
                
            
            </select>

            <select>
                <option value={"My Account"} selected>USD</option>
                <option value={"EUR"}>EUR</option>
                <option value={"GBP"}>GBP</option>
                <option value={"CAD"}>CAD</option>
                
            
            </select>

            <select>
                <option value={"My Account"}>EN</option>
                <option value={"USD"}>FR</option>
                <option value={"USD"}>AR</option>
                <option value={"USD"}>RU</option>
                
            
            </select>

        </div>

        </div>
    )
}

export default Topfaq;