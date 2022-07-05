//a way for interested parties to find me online and get ahold of me
function contact() {
    return ( 
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-rosewater to-base h-96 mt-20 rounded-t-full ">
            <h1 className="text-mantle font-vulfBoldItalic text-5xl">Contact Me!</h1>
            <div className="flex flex-row items-center justify-center">
                <ul className="text-text font-vulfItalic text-3xl mr-10">
                    <li>Email:</li>
                    <li>Linkedin:</li>
                    <li>Github:</li>
                </ul>
                <ul className="text-text font-vulfItalic text-3xl">
                    <li>tylerpopson@gmail.com</li>
                    <li>https://www.linkedin.com/in/tylerpopson/</li>
                    <li>https://github.com/TylerPopson</li>
                </ul>
            </div>
        </div>
     );
}

export default contact;