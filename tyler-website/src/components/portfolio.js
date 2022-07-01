import {VscLink} from "react-icons/vsc";

function portfolio() {
    return ( 
        <div className="flex flex-row w-screen h-96 mt-20">
            <div className="portfolio-item">
                <div className="text-center">
                    <h1 className="font-vulfBoldItalic text-mantle text-5xl ">Examples</h1>
                    
                </div>
            </div>
            <div className="portfolio-item">
                <div className="flex flex-col text-center items-center">
                    <h1 className="font-vulfBoldItalic text-mantle text-3xl ">jordanwburger</h1>
                    <div className="portfolio-link"><VscLink size={25}/></div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="flex flex-col text-center items-center">
                    <h1 className="font-vulfBoldItalic text-mantle text-3xl ">annamalloyaudio</h1>
                    <div className="portfolio-link"><VscLink size={25}/></div>
                </div>
            </div>
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