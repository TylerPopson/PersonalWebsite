//a way for interested parties to find me online and get ahold of me
function contact() {
    return ( 
        <div id="contact" className="flex flex-col items-center justify-center bg-gradient-to-b from-rosewater to-base h-96 mt-20 rounded-t-full ">
            <h1 className="text-mantle font-vulfBoldItalic text-5xl">Contact Me!</h1>
            <div className="flex flex-row items-center justify-center">
                <ul className="text-text font-vulfItalic text-3xl mr-10">
                    <li className="mb-3">Email:</li>
                    <li className="mb-3">Linkedin:</li>
                    <li className="mb-3">Github:</li>
                </ul>
                <ul className="text-text font-vulfItalic text-3xl">
                    <li className="mb-3"><Conatactlink text={"tylerpospon@gmail.com"} link={"tylerpopson@gmail.com"} email={true}/></li>
                    <li className="mb-3"><Conatactlink text={"www.linkedin.com"} link={"https://www.linkedin.com/in/tylerpopson/"} email={false}/></li>
                    <li className="mb-3"><Conatactlink text={"www.github.com"} link={"https://github.com/TylerPopson"} email={false}/></li>
                </ul>
            </div>
        </div>
    );
}

const Conatactlink = ({text, link, email}) => (
    <a href={email ? "mailto:" + link : link}>
        <div className="contact-icon">
            {text}
        </div>
    </a>
)

export default contact;