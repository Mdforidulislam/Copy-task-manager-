import { LeftSidePc } from "../Components/LeftSidebar/NavbarPc";



const LeftBare = ({setBoardName,data,refetch}) => {
    return (
        <div>
            <div className='hidden lg:flex'>
               <LeftSidePc setBoardName={setBoardName} data={data} refetch={refetch}/>
            </div>
        </div>
    );
};

export default LeftBare;