
import Scstyles from "../servicecard/service.module.css"


function SmallCard({url,width,height,service,qualityLabel,CategoryName,product}){
    return(
        <div className={Scstyles.inner_div}>
            
            <div className={Scstyles.imageDiv}>
            <img src={url} width={width} height={height}></img>

            </div>

            <div className={Scstyles.contentDIv}>

                {service?<h3 className={Scstyles.conh2}>{qualityLabel}</h3>:
                   <div className={Scstyles.Categoryname}>
                     <h4>{CategoryName}</h4>
                    <p>{product}</p>
                    </div>
                }

                

            </div>

        </div>
    )
}

export default SmallCard;


// https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTtbDH4T8wpzRINVEAoBg61MM-2X3o1BTFEXZtSaB8npsjlrxS6
// https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSdSgGEQjdQsrhHPcZCMdPTr1GnnoeKq4k8eUTeqepGa31hToB
// https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4j46KzQ73s0SVmBYwVsKChtkWjj3Xl7B_99A3gfB_LFN-YL1A
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3laUm7kxu6uJStA9YVr7IDtDhuaq_ol1QGPLEfSAD2U5G-H97