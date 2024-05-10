
import sstyles from "../servicecard/service.module.css"
import SmallCard from "./servicecard";

function ServiceCard(){
    return(
        <div className={sstyles.outer_div}>
            <SmallCard url={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTtbDH4T8wpzRINVEAoBg61MM-2X3o1BTFEXZtSaB8npsjlrxS6"} width={50} height={50} service={true} qualityLabel={"Quality Product"}/>
            <SmallCard url={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSdSgGEQjdQsrhHPcZCMdPTr1GnnoeKq4k8eUTeqepGa31hToB"} width={50} height={50} service={true} qualityLabel={"Free Shipping"}/>
            <SmallCard url={"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4j46KzQ73s0SVmBYwVsKChtkWjj3Xl7B_99A3gfB_LFN-YL1A"} width={50} height={50} service={true} qualityLabel={"14-Day Return"}/>
            <SmallCard url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3laUm7kxu6uJStA9YVr7IDtDhuaq_ol1QGPLEfSAD2U5G-H97"} width={50} height={50} service={true} qualityLabel={"24/7 Support"}/>
        </div>
    )
}

export default ServiceCard;