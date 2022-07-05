//TODO
//conect links
//make logo

//import icons to use on the buttons using Visual Studio Code icons imported with react-icons
import {VscAccount , VscCode , VscVm , VscCallIncoming} from "react-icons/vsc";

//a component that shows my logo and provides navigation links down the page for wuick browsing
function navbar() {
    return ( 
        <div>
            <div className=" fixed left-0 top-0 w-screen h-12 bg-crust m-0 flex flex-row " >

                {/* personal logo */}
                <h1 className="text-left ml-5 text-3xl font-vulfBoldItalic text-text">Tyler Popson</h1>

                {/* navigation buttons */}
                <div className="fixed flex flex-row top-1 right-5">

                    {/* link to bio section */}
                    <NavbarIcon icon={<VscAccount size={25}/>} text="Bio"/>

                    {/* link to tools/skills section */}
                    <NavbarIcon icon={<VscCode size={25}/>} text="Tools"/>

                    {/* link to portfolio examples section */}
                    <NavbarIcon icon={<VscVm size={25}/>} text="Examples"/>

                    {/* link to contact section */}
                    <NavbarIcon icon={<VscCallIncoming size={25}/>} text="Contact"/>

                </div>

                {/* render an image across the botom of the screen bringing the catppuccin color palette together */}
                <div className="fixed w-screen h-2 left-0 bottom-0 bg-banner"></div>
                
            </div>
        </div>
     );
}

// component to render navigation buttons
//renders a base button with supplied icon and a hidden tooltip that will apear when hovered
const NavbarIcon = ({icon, text}) => (
    <div className="nav-icon group">
        {icon}
        <span className="nav-tootip group-hover:scale-100">
            {text}
        </span>
    </div>
)

export default navbar;