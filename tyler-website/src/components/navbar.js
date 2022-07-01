import {VscAccount , VscCode , VscVm , VscCallIncoming} from "react-icons/vsc";

function navbar() {
    return ( 
        <div>
            <div className=" fixed left-0 top-0 w-screen h-12 bg-crust m-0 flex flex-row" >

                {/* personal logo */}
                <h1 className="text-left ml-5 text-3xl font-vulfBoldItalic text-text">Tyler Popson</h1>

                {/* navigation buttons */}
                <div className="fixed flex flex-row top-1 right-5">
                    <NavbarIcon icon={<VscAccount size={25}/>} text="Bio"/>
                    <NavbarIcon icon={<VscCode size={25}/>} text="Tools"/>
                    <NavbarIcon icon={<VscVm size={25}/>} text="Examples"/>
                    <NavbarIcon icon={<VscCallIncoming size={25}/>} text="Contact"/>
                </div>

                <div className="fixed w-screen h-2 left-0 bottom-0 bg-banner"></div>
                
            </div>
        </div>
     );
}

// component to render navigation buttons
const NavbarIcon = ({icon, text}) => (
    <div className="nav-icon group">
        {icon}
        <span className="nav-tootip group-hover:scale-100">
            {text}
        </span>
    </div>
)

export default navbar;