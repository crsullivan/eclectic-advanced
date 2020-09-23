import React from 'react';
import { Carousel } from "react-responsive-carousel";
import '../Landing.css';

const Landing = () => {

    return (
        <div className="Landing">
            <Carousel className="carousel" infiniteLoop={true} autoPlay={true} interval="4000" showThumbs={false} showIndicators={true} dynamicHeight={true} showStatus={false}>
                <div className="carouselimagecontainer">
                <img alt="" src={require("../images/covidtracker.PNG")} />
                <p className="legend">Legend 1</p>
                </div>
                <div className="carouselimagecontainer">
                <img alt="" src={require("../images/portfolioSnap.PNG")} />
                <p className="legend">Legend 2</p>
                </div>
                <div className="carouselimagecontainer">
                <img alt="" src={require("../images/kPortfolio.PNG")} />
                <p className="legend">Legend 3</p>
                </div>
                <div className="carouselimagecontainer">
                <img alt="" src={require("../images/updateddbArch.PNG")} />
                <p className="legend">Legend 4</p>
                </div>
            </Carousel>
            <div className="hooks">
                <div className="infoDiv">
                    <h2>Consultancy</h2>
                    <i class="far fa-question-circle fa-3x"></i>
                </div>
                <div className="infoDiv">
                    <h2>Design</h2>
                    <i class="fas fa-drafting-compass fa-3x"></i>                
                </div>
                <div className="infoDiv">
                    <h2>Development</h2>
                    <i class="far fa-file-code fa-3x"></i>                
                </div>
            </div>
        </div>
    )

}

export default Landing;