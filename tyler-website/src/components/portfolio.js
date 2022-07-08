//TODO
// make blocks epand with more info on hover

//import link icons from react-icons using the vs code icons
import {VscLink} from "react-icons/vsc";

// a component that shows previous work that I have done
function portfolio() {
    return ( 
        <div className="flex flex-row w-screen h-96 mt-20 items-center justify-center">

            {/* title block */}
            <div className="portfolio-item">
                <div className="text-center">
                    <h1 className="font-vulfBoldItalic text-mantle text-5xl ">Examples</h1>
                    
                </div>
            </div>

            {/* jordan burger's protfolio website */}
            <Examples Title={"JordanWBurger"} Link={"https://jordanwburger.com"}/>

            {/* anna malloys's protfoliio website */}
            <div className="portfolio-item">
                <div className="flex flex-col text-center items-center">
                    <h1 className="font-vulfBoldItalic text-mantle text-3xl ">annamalloyaudio</h1>
                    <a href="https://www.annamalloyaudio.com">
                        <div className="portfolio-link"><VscLink size={25}/></div>
                    </a>
                </div>
            </div>

            {/* wrent the local rental posting website (class project) */}
            <div className="portfolio-item">
                <div className="flex flex-col text-center items-center">
                    <h1 className="font-vulfBoldItalic text-mantle text-3xl ">Wrent</h1>
                    <a href="https://wrent.herokuapp.com">
                        <div className="portfolio-link"><VscLink size={25}/></div>
                    </a>
                </div>
            </div>
            
        </div>
    );
}

const Examples = ({Title, Link, Desc, Tools}) => (
    <div className="portfolio-item">
        <div className="flex flex-col text-center items-center">
            <h1 className="font-vulfBoldItalic text-mantle text-3xl ">{Title}</h1>
            <a href={Link}>
                <div className="portfolio-link"><VscLink size={25}/></div>
            </a>
        </div>
    </div>
)

export default portfolio;