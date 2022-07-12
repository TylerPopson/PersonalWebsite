//TODO
// make blocks epand with more info on hover

//import link icons from react-icons using the vs code icons
import {VscLink} from "react-icons/vsc";



// a component that shows previous work that I have done
function Portfolio() {

    return ( 
        <div className="flex flex-row w-screen h-96 mt-20 items-center justify-center">

            {/* title block */}
            <div className="flex flex-none bg-blue w-96 h-96 mx-3 rounded-full items-center justify-center shadow-md">
                <div className="text-center">
                    <h1 className="font-vulfBoldItalic text-mantle text-5xl ">Examples</h1>
                    
                </div>
            </div>

            {/* jordan burger's protfolio website */}
            <Examples 
            Title={"JordanWBurger"} 
            Link={"https://jordanwburger.com"} 
            Desc={"This is a description of the website"}
            Tools={["HTML","CSS"]}/>

            {/* anna malloys's protfoliio website */}
            <Examples 
            Title={"AnnaMalloyAudio"} 
            Link={"https://www.annamalloyaudio.com"}
            Desc={""}
            Tools={["HTML", "CSS"]}/>

            {/* wrent the local rental posting website (class project) */}
            <Examples 
            Title={"Wrent"} 
            Link={"wrent.herokuapp.com"}
            Desc={""}
            Tools={["Reactjs", "Materialui", "Nodejs"]}/>
            
        </div>
    );
}

// abstraction for the porfolio tile
const Examples = ({Title, Link, Desc, Tools}) => (
    <div className="portfolio-item group">
        <div className="portfolio-main group-hover:ml-0">
            <h1 className="font-vulfBoldItalic text-mantle text-3xl ">{Title}</h1>
            <a href={Link}>
                <div className="portfolio-link"><VscLink size={25}/></div>
            </a>
        </div>
        <div className="portfolio-info group-hover:scale-100">
            <h3 className="font-vulfBoldItalic">{Desc}</h3>
            <ul>
                {Tools.map((item , index) => {
                    return(<li>{item}</li>)
                })}
            </ul>
        </div>
    </div>
)

export default Portfolio;