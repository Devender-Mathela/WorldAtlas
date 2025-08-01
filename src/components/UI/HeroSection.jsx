import { FaArrowRightLong } from "react-icons/fa6";

export const HeroSection=()=>{
    return(
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the world, One Country at a Time.
                    </h1>
                    <p className="paragraph">
                        Discover the history, culture, and beauty of every nation. Sort,
                        search, and filter through countries to find the details you need.
                    </p>
                    <button className=" btn btn-darken btn-inline">
                        Start Exploring <FaArrowRightLong />
                    </button>
                </div>
                <div className="hero-image">
                    <img src="images/Travel-Earth-Globe-PNG-Transparent.png" alt="world beauty" className="banner-image"/>
                </div>
            </div>
        </main>
    )
}