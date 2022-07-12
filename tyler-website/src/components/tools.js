//TODO

//a component that list what tools and languages that i have experience working with
function tools() {
    return ( 
        <div id="tools" className="flex flex-row w-screen h-96 mt-20 items-center justify-center">

            {/* a block that lists the programming thanguages that i have experience in */}
            <div className=" flex bg-gradient-to-r from-base to-sky right-0 w-1/3 h-96 rounded-r-full ml-10 r-0 items-center justify-center">
                <div className="text-center">
                    <h2 className="font-vulfBoldItalic text-mantle text-4xl">Languages</h2>
                    
                    <ul className="font-vulfItalic text-text text-2xl">
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>HTML, CSS</li>
                        <li>C, C#</li>
                        <li>SQL</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
            
            {/* title block */}
            <div className="flex flex-none bg-sky w-96 h-96 ml-10 rounded-full items-center justify-center shadow-md">
                <div className="text-center">
                    <h1 className="font-vulfBoldItalic text-mantle text-5xl ">Skills</h1>
                </div>
            </div>

            {/* a block for the specific tools and framewors that i have used */}
            <div className=" flex bg-gradient-to-l from-base to-sky right-0 w-1/3 h-96 rounded-l-full ml-10 r-0 items-center justify-center">
                <div className="text-center">
                <h2 className="font-vulfBoldItalic text-mantle text-4xl">Tools</h2>
                    
                    <ul className="font-vulfItalic text-text text-2xl">
                        <li>React</li>
                        <li>Node.js</li>
                        <li>materialui, Antd</li>
                        <li>Tailwindcss</li>
                        <li>Git</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default tools;