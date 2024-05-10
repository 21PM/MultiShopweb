
import Searchbarstyles from "./searchbar.module.css"

function Searchbar(){
    return(
        <div className={Searchbarstyles.searchbar_outer_div}>

            <div id="logo" className={Searchbarstyles.logo}>
                <div className={Searchbarstyles.inner_logo_div}>
                    <div id="mutli" className={Searchbarstyles.multi}>MULTI</div>
                    <div id="shop" className={Searchbarstyles.shop}>SHOP</div>
                </div>
            </div>

            <div id="searcbar" className={Searchbarstyles.searcbar}>

                <input type="text" placeholder="Search for products" className={Searchbarstyles.textbox}></input>
                <div className={Searchbarstyles.searchicon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20}><path fill="#FFD43B" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </div>
            </div>



            <div id="customerservice" className={Searchbarstyles.customerservice}>

                    <div className={Searchbarstyles.innerCsdiv}>

                        <p className={Searchbarstyles.pa}>Customer Service</p>
                        <h5 className={Searchbarstyles.h5}>+012 345 6789</h5>

                    </div>

            </div>  

        </div>
    )
}


export default Searchbar;