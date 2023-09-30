import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import PagiNation from "../components/PagiNation";



export default function Category(){
    const navigate = useNavigate()
    const location = useLocation()
    const category= location.pathname.split('/').at(-1)
    return(
        <div>
            <Header/>
            <div className="mt-28 flex flex-col-reverse lg:flex-row items-center justify-center gap-6 lg:gap-12 w-full">
                <button className="border-2 py-2 px-6 font-semibold border-gray-500 rounded-lg" onClick={()=>{navigate(-1)}}>Back</button>
                <h2 className=" flex text-lg lg:text-2xl font-semibold">Blogs on <span className=" underline-offset-4 underline text-gray-600 ml-1">{category}</span></h2>
            </div>
            <Blogs/>
            <PagiNation/>
        </div>
    )
}