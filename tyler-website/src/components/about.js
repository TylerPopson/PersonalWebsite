//TODO
//center blocks

//A component that provides an overview of my experience and expertise
function about() {
    return ( 
        <div className="flex flex-row w-screen h-96 mt-20">
            {/* personal bio */}
            <div className=" flex bg-gradient-to-r from-base to-peach right-0 w-2/3 h-96 rounded-r-full ml-10 r-0 items-center justify-center">
                <div className="text-center">
                    <h4 className="font-vulfItalic text-text text-2xl">this is info about me</h4>
                </div>
            </div>
            
            {/* title block */}
            <div className="flex flex-none bg-peach w-96 h-96 ml-10 rounded-full  items-center justify-center shadow-md">
                <div className="text-center">
                    <h1 className="font-vulfBoldItalic text-5xl text-mantle">About Me</h1>
                </div>
                
            </div>
        </div>
     );
}

export default about;