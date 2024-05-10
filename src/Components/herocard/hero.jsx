
import hstyle from "../herocard/hero.module.css"
import Card from "./card";

function Hero(){
    return(
        <div className={hstyle.hero_outer_div}>

            <div className={hstyle.leftDiv}>
                <Card url={"https://demo.htmlcodex.com/1479/online-shop-website-template/img/carousel-1.jpg"} label={"Kids Fashion"} offer={"Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam"} />
            </div>

            <div className={hstyle.rightDiv}>


                <div className={hstyle.topDIv}> 
                <Card url={"https://demo.htmlcodex.com/1479/online-shop-website-template/img/offer-1.jpg"} label={"SAVE 20%"} offer={"Special Offer"}/>
                </div>


                <div className={hstyle.bottomDIv}>
                <Card url={"https://demo.htmlcodex.com/1479/online-shop-website-template/img/offer-2.jpg"} label={"SAVE 20%"} offer={"Special Offer"}/>
                </div>

            </div>
        </div>
    )
}

export default Hero;