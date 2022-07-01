function banner() {
    return ( 
        <div className="flex flex-row w-screen h-96 mt-20">

            {/* profile image */}
            <div className=" bg-mauve w-96 h-96 rounded-full ml-10 flex-none">
                {/*image of me*/}
            </div>

            {/* basic name and  */}
            <div className="flex bg-gradient-to-l from-base to-mauve right-0 w-2/3 h-96 rounded-l-full ml-10 r-0 items-center justify-center">
                <div className="text-center text-text">
                    <h1 className=" text-5xl font-bold font-vulfBoldItalic text-mantle">Tyler Popson</h1>
                    <h3 className="font-vulfItalic text-2xl">Web Developer</h3>
                </div>
            </div>
        </div>
     );
}

export default banner;