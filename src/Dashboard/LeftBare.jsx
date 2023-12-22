import { SidebarWithSearch } from "../Components/LeftSidebar/NavbarPc";



const LeftBare = () => {
    return (
        <div>
            <div className='hidden lg:flex'>
               <SidebarWithSearch/>
            </div>
        </div>
    );
};

export default LeftBare;