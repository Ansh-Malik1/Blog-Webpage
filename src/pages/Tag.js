import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import PagiNation from "../components/PagiNation";
export default function Tag(){
    const navigate = useNavigate()
    const location = useLocation()
    const tag = location.pathname.split('/').at(-1)
    return(
        <div>
            <Header/>
            <div className="mt-28 flex flex-col-reverse gap-6 lg:flex-row items-center justify-center lg:gap-12 w-full ">
                <button className="border-2 py-2 px-6 font-semibold border-gray-500 rounded-lg" onClick={()=>{navigate(-1)}}>Back</button>
                <h2 className=" lg:text-2xl font-semibold">Blogs Tagged <span className=" text-blue-600 underline-offset-4 underline">#{tag}</span></h2>
            </div>
            <Blogs/>
            <PagiNation/>
        </div>
    )
}