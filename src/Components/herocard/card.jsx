import hstyles from "./hero.module.css"

function Card(props){


    return(
        
        <div style={{width:"100%",height:"100%",backgroundImage:`url(${props.url})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
            <div className={hstyles.content}>
               <div>
               <h1>{props.label}</h1><br></br>
                <p>{props.offer}</p><br></br>
                <button className={hstyles.shopBtn}>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card;