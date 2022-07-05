//TODO
// center all blocks
// make blocks epand with more info on hover

//import link icons from react-icons using the vs code icons
import {VscLink} from "react-icons/vsc";

// a component that shows previous work that I have done
function portfolio() {
    return ( 
        <div className="flex flex-row w-screen h-96 mt-20">

            {/* title block */}
            <div className="portfolio-item">
                <div className="text-center">
                    <h1 className="font-vulfBoldItalic text-mantle text-5xl ">Examples</h1>
                    
                </div>
            </div>

            {/* jordan burger's protfolio website */}
            <div className="portfolio-item">
                <div className="flex flex-col text-center items-center">
                    <h1 className="font-vulfBoldItalic text-mantle text-3xl ">jordanwburger</h1>
                    <div className="portfolio-link"><VscLink size={25}/></div>
                </div>
            </div>

            {/* anna malloys's protfoliio website */}
            <div className="portfolio-item">
                <div className="flex flex-col text-center items-center">
                    <h1 className="font-vulfBoldItalic text-mantle text-3xl ">annamalloyaudio</h1>
                    <div className="portfolio-link"><VscLink size={25}/></div>
                </div>
            </div>

            {/* wrent the local rental posting website (class project) */}
            <div className="portfolio-item">
                <div className="flex flex-col text-center items-center">
                    <h1 className="font-vulfBoldItalic text-mantle text-3xl ">Wrent</h1>
                    <div className="portfolio-link"><VscLink size={25}/></div>
                </div>
            </div>
            
        </div>
    );
}

export default portfolio;